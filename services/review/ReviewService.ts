import {GameModel, ReviewDocument, ReviewModel} from '../../server/database/schema';
import * as R from 'ramda';
import {ReviewInput} from '../../shared/graphql';
import {ModelService} from '../common';
import {promiseWrap} from '../../utils/fp';
import {log} from '../../utils/logger';


export const ReviewService = {
    findAll: async () => await ReviewModel.find({}),
    create: async (input: ReviewInput, gameId: string) => {
        log(`create review, input: ${input}`);
        return R.composeP(
            ModelService.create<ReviewInput, ReviewDocument>(ReviewModel),
            populateGame(gameId),
            promiseWrap<ReviewInput>(input),
        )({});
    },
};

const populateGame = (gameId: string) => async (payload: any) => {
    return R.composeP(async () => {
        log(`populate game, gameId: ${gameId}`);
        const game = await GameModel.findById(gameId);
        return {...payload, game};
    })({});
};

