import {Document, model, Model, Schema} from 'mongoose';
import {User, ReviewFlag} from '../../../shared/graphql';
import {GameDocument, GameModel} from './Game';

export interface ReviewDocument extends Document {
    user: User;
    text: string;
    ranking: number;
    flags?: ReviewFlag[];
    game: GameDocument;
}

export const ReviewSchema = new Schema({
    user: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    ranking: {
        type: Number,
        required: true,
    },
    flags: [
        {
            type: String,
        },
    ],
    game: {
        type: Schema.Types.ObjectId,
        ref: GameModel.modelName,
        required: true,
    },
});

export const ReviewModel: Model<ReviewDocument> = model<ReviewDocument>('Review', ReviewSchema);
