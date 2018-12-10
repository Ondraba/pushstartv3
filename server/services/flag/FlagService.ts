import {FlagDocument, FlagModel} from '../../database/schema';
import {FlagIdentifier, GameFlagCode, ReviewFlagCode} from '../../../shared/graphql';

export const FlagService = {
    findAll: async (identifier:FlagIdentifier): Promise<FlagDocument[]> => await FlagModel.find({identifier}),
    findByCodes: async (codes:ReviewFlagCode[] | GameFlagCode[]) : Promise<FlagDocument[]> => {
        console.log(codes);
        return await FlagModel.find({code:{$in: codes}});
    }
};

