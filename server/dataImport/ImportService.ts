import {log} from '../utils/logger';
import * as R from 'ramda';
import {Document, Model} from 'mongoose';
import {ImportData} from './data';

export const ImportService = {
    init: async() => await Promise.all([ImportService.runImport()]),
    runImport: async () => {
        log(`data import started`);
        return R.composeP(
            createModel,
        )(ImportData);
    },
};

const checkCollectionIsEmpty = async<TDocument extends Document>(model:Model<TDocument>): Promise<boolean> => {
    const checkCollection = await model.find({});
    return R.propEq('length', 0)(checkCollection);
}

const createModel = async(imports:[{model:Model<any>,data:any}]): Promise<void> => {
    await Promise.all(imports.map(async imp => {
        const collectionIsEmpty = await checkCollectionIsEmpty(imp.model);
        if(collectionIsEmpty){
            log(`model ${imp.model.modelName} import started`);
            imp.model.collection.insertMany(imp.data);
            log(`filling model ${imp.model.modelName} collection with data: ${JSON.stringify(imp.data)}`);
            return imp.data;
        }
    }));
}

