import {catService} from "./loggerConfig";

export const log = (info:string) => catService.info(`log: ['${info}']`);