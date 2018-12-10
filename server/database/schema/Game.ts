import {Document, model, Model, Schema} from 'mongoose';
import {Platform, GameFlag} from '../../../shared/graphql';

export interface GameDocument extends Document {
    title: string;
    perex: string;
    overalRanking?: number;
    platforms: Platform[];
    flags: GameFlag[];
    cover?: string;
    releaseDate?: string;
}

export const GameSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    perex: {
        type: String,
        required: true,
    },
    overalRanking: {
        type: Number,
    },
    platforms: [
        {
            type: String!,
            required: true,
        },
    ],
    flags: [
        {
            type: String!,
            required: true,
        },
    ],
    cover: {
        type: String,
    },
    releaseDate: {
        type: String,
    },
});

export const GameModel: Model<GameDocument> = model<GameDocument>('Game', GameSchema);




