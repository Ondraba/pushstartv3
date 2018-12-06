import * as React from 'react';
import Head from 'next/head';
import {AppComponentContext} from 'next/app';
import {ApolloClient} from 'apollo-boost';

declare const process: any;

type AppType = React.ComponentClass<any> & {getInitialProps?: (ctx: AppComponentContext) => any};

export const withApollo = (App: AppType): React.ComponentClass<any> => {
    return class PageWithApollo extends React.PureComponent<any> {
        private readonly apolloClient: any;

        static async getInitialProps(ctx: AppComponentContext & {ctx: {apolloClient: ApolloClient<any>}}) {
            const {
                ctx: {res},
            } = ctx;

            // const apollo = initApollo({}, {getToken: () => AuthService.getToken(req)}, req);
            //
            // ctx.ctx.apolloClient = apollo;

            if (res && res.finished) {
                // When redirecting, the response is finished.
                // No point in continuing to render
                return {};
            }

            const appProps = App.getInitialProps ? await App.getInitialProps(ctx) : {};

            // Run all graphql queries in the component tree
            // and extract the resulting data
            try {
                // Run all GraphQL queries
                // await getDataFromTree(<App {...appProps} Component={Component} router={router} apolloClient={apollo} />);
            } catch (error) {
                // Prevent Apollo Client GraphQL errors from crashing SSR.
                // Handle them in components via the data.error prop:
                // http://dev.apollodata.com/react/api-queries.html#graphql-query-data-error
                // tslint:disable-next-line
                console.error('Error while running `getDataFromTree`', error);
            }

            if (!process.browser) {
                // getDataFromTree does not call componentWillUnmount
                // head side effect therefore need to be cleared manually
                Head.rewind();
            }

            return {
                ...appProps,
                // Extract query data from the Apollo's store
                // apolloState: apollo.cache.extract(),
            };
        }

        constructor(props: any) {
            super(props);
            // `getDataFromTree` renders the component first, the client is passed off as a property.
            // After that rendering is done using Next's normal rendering pipeline
            // this.apolloClient = initApollo(props.apolloState, {
            //     getToken: () => AuthService.getToken(),
            // });
        }

        render() {
            return <App {...this.props} apolloClient={this.apolloClient} />;
        }
    };
};
