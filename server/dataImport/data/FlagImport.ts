import {GameFlag, GameFlagCode, ReviewFlag, ReviewFlagCode} from '../../../shared/graphql';

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type ReviewFlagInput = Omit<ReviewFlag, '_id'>;
type GameFlagInput =  Omit<GameFlag, '_id'>;
type FlagInputType = ReviewFlagInput | GameFlagInput;

export const ReviewFlags: ReviewFlagInput[] = [
    {
        title: 'Srdeční záležitost',
        perex: 'Vyjímečná hra, srdeční záležitost.',
        image: 'url/',
        code: ReviewFlagCode.CloseToMyHearth
    },
    {
        title: 'Budoucí klasika',
        perex: 'Budoucí klasika.',
        image: 'url/',
        code: ReviewFlagCode.FutureClassic
    },
    {
        title: 'Životní zážitek',
        perex: 'Hra, která mi ovlivnila život.',
        image: 'url/',
        code: ReviewFlagCode.GameOfLife
    }
]

export const GameFlags: GameFlagInput[] = [
    {
        title: 'Novinka',
        perex: 'Novina. Právě vyšlo.',
        image: 'url/',
        code: GameFlagCode.Hot
    },
    {
        title: 'Klasika',
        perex: 'Klasika.',
        image: 'url/',
        code: GameFlagCode.Classic
    },
    {
        title: 'Indie',
        perex: 'Nezávislá hra.',
        image: 'url/',
        code: GameFlagCode.Indie
    }
]

export const FlagImport: FlagInputType[] = [
    ...ReviewFlags, ...GameFlags
]