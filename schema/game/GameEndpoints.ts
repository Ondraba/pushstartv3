import {GameService} from '../../services/game/GameService';
import {CreateGameGameMutationArgs} from '../../shared/graphql';

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

    Types: {},
};
