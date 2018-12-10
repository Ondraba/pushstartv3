import {Document, model, Model, Schema} from 'mongoose';
import {ReviewFlagCode, GameFlagCode, FlagIdentifier} from '../../../shared/graphql';

export interface FlagDocument extends Document {
    title: string;
    perex: string;
    image: string;
    code: ReviewFlagCode | GameFlagCode;
    identifier: FlagIdentifier;
}

export const FlagSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    perex: {
        type: String,
        required: true,
    },
    image: {
        type: Number,
        required: true,
    },
    code:{
        type: String,
        required: true,
    },
    identifier:{
        type: String,
        required: true,
    },
});

export const FlagModel: Model<FlagDocument> = model<FlagDocument>('Flag', FlagSchema);


