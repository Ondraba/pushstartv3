import {FlagModel} from '../../database/schema';

export const FlagService = {
    findByCodes: async () => await FlagModel.find({}),
};

