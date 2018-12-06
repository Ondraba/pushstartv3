import {GameModel} from '../../server/database/schema';
import {CreateGameGameMutationArgs} from '../../shared/graphql';

export const GameService = {
    findAll: async () => await GameModel.find({}),
    findById: async (id: string) => await GameModel.findById(id),
    create: async ({input}: CreateGameGameMutationArgs) => {
        return new GameModel(input).save();
    },
};
