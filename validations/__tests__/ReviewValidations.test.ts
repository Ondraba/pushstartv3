import {ReviewFlagCode, ReviewInput, User} from '../../shared/graphql';
import {ReviewValidations} from '../review/ReviewValidations';

const mockReviewInput: ReviewInput = {
    user: User.Admin,
    ranking: 89,
    text: 'recenze text',
    flags: [ReviewFlagCode.FutureClassic],
};

const mockWrongTextReviewInput: ReviewInput = {
    user: User.Admin,
    ranking: 89,
    text: 're',
    flags: [ReviewFlagCode.FutureClassic],
};

describe('Review validations', () => {
    it('should return no validation message', async () => {
        const errors = await ReviewValidations({}, false)(mockReviewInput).init();
        expect(errors.length).toBe(0);
    });
    it('should return text length validation error', async () => {
        const errors = await ReviewValidations({}, false)(mockWrongTextReviewInput).init();
        expect(errors.length).toEqual(1);
    });
});
