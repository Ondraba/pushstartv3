import {Document, Model} from 'mongoose';
import {log} from '../../utils/logger';

export const ModelService = {
    create: <TInput, TModel extends Document>(model: Model<TModel>) => (input: TInput) => {
        log(`create model: ${model.modelName}`);
        return new model(input).save();
    },
};
