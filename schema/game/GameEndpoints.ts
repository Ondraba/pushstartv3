import {GameService} from '../../server/services/game/GameService';
import {CreateGameGameMutationArgs} from '../../shared/graphql';
import {ReviewDocument} from '../../server/database/schema';
import {FlagService} from '../../server/services/flag';

export const GameEndpoints = {
    Queries: {
        game: () => ({
            games: (_: any) => GameService.findAll(),
        }),
    },

    Mutations: {
        game: () => ({
            createGame: (input: CreateGameGameMutationArgs) =>
                GameService.create(input),
        }),
    },

    Types: {
        Game: {
            flags: (source: ReviewDocument) =>
                source.flags ? FlagService.findByCodes(source.flags) : null,
        },
    },
};
