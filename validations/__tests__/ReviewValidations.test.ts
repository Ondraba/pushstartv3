import {ReviewFlagCode, ReviewInput, User} from '../../shared/graphql';
import {ReviewValidations} from '../review/ReviewValidations';

const mockReviewInput: ReviewInput = {
    user: User.Admin,
    ranking: 89,
    text: "re",
    flags: [ReviewFlagCode.FutureClassic],
}


describe('Review validations', () => {
    it('Should return some validation error', async() => {
        const errors = await ReviewValidations({})(mockReviewInput).init();
        console.log(errors);
        expect(errors.length).toBe(0);
    });
});