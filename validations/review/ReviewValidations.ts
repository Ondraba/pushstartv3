import {log} from '../../server/utils/logger';
import * as R from 'ramda';
import {validatePocetZnaku} from '../common';
import {ReviewInput, ValidationMessage, ValidationMessageType} from '../../shared/graphql';

interface InputValidationInterface<TInput> {
 input: TInput,
 validationMessages: ValidationMessage[],
}

export const ReviewValidations = (config:any) => (input: ReviewInput) => {
    const prepare = async() => {
        return {
            input, config:{
                ...config,
                minChars:3,
                maxChars:150,
                required: ['user','text', 'ranking'],
            }
        }
    }
    return {
        init: async() => await ReviewValidations(config)(input).validate(await prepare()),
        validate: async (prepare: {input: ReviewInput, config: any}) => {
            log(`validation started`);
            return R.composeP(
                extractValidationErrors<ReviewInput>(),
                validateReviewText(prepare.config),
                wrapValidationInput<ReviewInput>()
            )(prepare.input);
        }
    }
};

export const extractValidationErrors = <TInput>() => async(payload: InputValidationInterface<TInput>): Promise<ValidationMessage[]> => [...payload.validationMessages];

export const wrapValidationInput = <TInput>() => async(input:TInput):Promise<InputValidationInterface<TInput>> => {
    return {input, validationMessages: []}
}

export const validateReviewText = (config: any) => async(payload: InputValidationInterface<ReviewInput>) => {
    const pocetZnaku = await validatePocetZnaku(config.minChars, config.maxChars)(payload.input.text);
    const validationMessage: ValidationMessage = {code:'E1', field:'text', type: ValidationMessageType.ERROR, message:'Chybný počet znaků.'};
    if(!pocetZnaku){
        return {...payload, validationMessages: [...payload.validationMessages, validationMessage]}
    }
    return payload;
}

