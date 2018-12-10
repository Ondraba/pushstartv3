import {FlagService} from '../../server/services/flag';
import {FlagIdentifier} from '../../shared/graphql';


export const FlagEndpoints = {
    Queries: {
        flag: () => ({
            gameFlags: () => FlagService.findAll(FlagIdentifier.GAME),
            reviewFlags: () => FlagService.findAll(FlagIdentifier.REVIEW),
        }),
    },
};
