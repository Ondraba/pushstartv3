import {FlagModel} from '../../database/schema';
import {FlagImport} from './FlagImport';
import {Model} from 'mongoose';

export const ImportData: [{model:Model<any>,data:any}] = [{
        model: FlagModel,
        data: FlagImport,
    },
]