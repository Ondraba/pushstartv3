import rtl from 'jss-rtl';
import {createMuiTheme, jssPreset} from '@material-ui/core';
import {createGenerateClassName} from '@material-ui/core/styles';
import {ThemeOptions} from '@material-ui/core/es/styles/createMuiTheme';

// tslint:disable-next-line
const {create, SheetsRegistry} = require('jss');

declare const process: any;
declare const global: any;

// Configure JSS
const jss = create({plugins: [...jssPreset().plugins, rtl()]});
// jss.options.insertionPoint = 'insertion-point-jss';

const createPageContext = (options: ThemeOptions) => {
    return {
        jss,
        theme: StylesContext.createTheme(options),
        // theme: getTheme(palette),
        // This is needed in order to deduplicate the injection of CSS in the page.
        sheetsManager: new Map(),
        // This is needed in order to inject the critical CSS.
        sheetsRegistry: new SheetsRegistry(),
        generateClassName: createGenerateClassName({productionPrefix: 'j'}),
    };
};

export const StylesContext = {
    getPageContext(options: ThemeOptions) {
        // Make sure to create a new store for every server-side request so that data
        // isn't shared between connections (which would be bad)
        if (!process.browser) {
            return createPageContext(options);
        }

        // Reuse context on the client-side
        if (!global.__INIT_MATERIAL_UI__) {
            global.__INIT_MATERIAL_UI__ = createPageContext(options);
        }
        return global.__INIT_MATERIAL_UI__;
    },

    createTheme(options: ThemeOptions) {
        return createMuiTheme(options as any);
    },
};
