import * as React from 'react';

import JssProvider from 'react-jss/lib/JssProvider';
import * as NProgress from 'nprogress';
import Head from 'next/head';
import App, {Container} from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import {MuiThemeProvider} from '@material-ui/core';

import {StylesContext} from '../client/styles/StylesContext';

NProgress.configure({parent: '#loadingContent'});

class NextApp extends App {
    private pageContext: any = StylesContext.getPageContext({
        typography: {
            fontFamily: '"EONBrixSans", arial, sans-serif',
        },
        overrides: {
            MuiButton: {
                root: {
                    borderRadius: 5,
                },
            },
        },
        palette: {
            type: 'light',
            primary: {
                main: '#f21b09',
                light: '#ff5f3a',
                dark: '#b60000',
                contrastText: '#fff',
            },
            secondary: {
                main: '#40AEBB',
                light: '#78e0ed',
                dark: '#007e8b',
                contrastText: '#fff',
            },
        },
    });

    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    render() {
        const {Component, pageProps} = this.props;
        return (
            <Container>
                <Head>
                    <title>Pushstart</title>
                </Head>
                {/* Wrap every page in Jss and Theme providers */}
                <JssProvider registry={this.pageContext.sheetsRegistry} generateClassName={this.pageContext.generateClassName}>
                    {/* MuiThemeProvider makes the theme available down the React
                  tree thanks to React context. */}
                    <MuiThemeProvider theme={this.pageContext.theme} sheetsManager={this.pageContext.sheetsManager}>
                        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                        <CssBaseline />
                        {/* Pass pageContext to the _document though the renderPage enhancer
                    to render collected styles on server side. */}
                        <Component pageContext={this.pageContext} {...pageProps} />
                    </MuiThemeProvider>
                </JssProvider>
            </Container>
        );
    }
}

export default NextApp;
