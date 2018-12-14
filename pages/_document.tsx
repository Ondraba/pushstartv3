import * as React from 'react';

import Document, {Head, Main, NextDocumentContext, NextScript} from 'next/document';

import {StylesContext} from '../client/styles/StylesContext';

// tslint:disable-next-line
const JssProvider = require('react-jss/lib/JssProvider').default;

const generateCss = async (css: string): Promise<string> => {
    if (process.env.NODE_ENV === 'production') {
        // return (await prefixer.process(css, {from: undefined})).css;
    }
    return css;
};

type ContextWithLocale = NextDocumentContext & {req: {locale: string; localeDataScript: string}};

export default class extends Document {
    static async getInitialProps({renderPage, req: {locale, localeDataScript}}: ContextWithLocale) {
        const pageContext = StylesContext.getPageContext({palette: {type: 'light'}});
        const page = renderPage((Component: any) => (props) => (
            <JssProvider registry={pageContext.sheetsRegistry} generateClassName={pageContext.generateClassName}>
                <Component pageContext={pageContext} {...props} />
            </JssProvider>
        ));

        const css = await generateCss(pageContext.sheetsRegistry.toString());

        return {
            ...page,
            pageContext,
            locale,
            localeDataScript,
            styles: <style id="jss-server-side" dangerouslySetInnerHTML={{__html: css}} />,
        };
    }

    render() {
        // const {locale, localeDataScript} = this.props;

        // Polyfill Intl API for older browsers
        // const polyfill = `https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.${locale}`;

        return (
            <html lang="en" dir="ltr">
                <Head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="robots" content="noindex" />
                    {/* Use minimum-scale=1 to enable GPU rasterization */}
                    <meta name="viewport" content="user-scalable=0, initial-scale=1, minimum-scale=1, width=device-width, height=device-height" />
                    <meta name="keywords" content="" />
                    <meta name="description" content="" />
                    <meta name="author" content="EON s.r.o." />
                    <link rel="shortcut icon" type="image/x-icon" href="/static/images/favicon.ico" />
                    <link rel="icon" type="image/x-icon" href="/static/images/favicon.ico" />
                    {/* See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/ */}
                    <link rel="manifest" href="/static/manifest.json" />
                    {/* PWA primary color */}
                    {/*<meta name="theme-color" content={pageContext.theme.palette.primary.main}/>*/}
                    {/*<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>*/}
                    <link rel="stylesheet" href="/static/fonts/BrixSans/stylesheet.css" />
                    <link rel="stylesheet" href="/static/nprogress/nprogress.css" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                </Head>
                <body>
                    <Main />
                    {/* <script src={polyfill} /> */}
                    {/* <script dangerouslySetInnerHTML={{__html: localeDataScript}} /> */}
                    <NextScript />
                </body>
            </html>
        );
    }
}
