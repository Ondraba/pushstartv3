import {ReviewService} from '../../server/services/review/ReviewService';
import {ReviewDocument} from '../../server/database/schema';
import {GameService} from '../../server/services/game';
import {FlagService} from '../../server/services/flag';

export const ReviewEndpoints = {
    Queries: {
        review: () => ({
            reviews: (_: any) => ReviewService.findAll(),
        }),
    },
    Mutations: {
        review: () => ({
            createReview: ({input, gameId}: any) => ReviewService.create(input, gameId),
        }),
    },
    Types: {
        Review: {
            game: (source: ReviewDocument) => GameService.findById(String(source.game)),
            flags: (source: ReviewDocument) =>
                source.flags ? FlagService.findByCodes(source.flags) : null,
        },
    },
};
