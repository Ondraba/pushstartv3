import {FlagIdentifier, GameFlag, GameFlagCode, ReviewFlag, ReviewFlagCode} from '../../../shared/graphql';

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type ReviewFlagInput = Omit<ReviewFlag, '_id'>;
type GameFlagInput =  Omit<GameFlag, '_id'>;
type FlagInputType = ReviewFlagInput | GameFlagInput;

export const ReviewFlags: ReviewFlagInput[] = [
    {
        title: 'Srdeční záležitost',
        perex: 'Vyjímečná hra, srdeční záležitost.',
        image: 'url/',
        code: ReviewFlagCode.CloseToMyHearth,
        identifier: FlagIdentifier.REVIEW,
    },
    {
        title: 'Budoucí klasika',
        perex: 'Budoucí klasika.',
        image: 'url/',
        code: ReviewFlagCode.FutureClassic,
        identifier: FlagIdentifier.REVIEW,
    },
    {
        title: 'Životní zážitek',
        perex: 'Hra, která mi ovlivnila život.',
        image: 'url/',
        code: ReviewFlagCode.GameOfLife,
        identifier: FlagIdentifier.REVIEW,
    }
]

export const GameFlags: GameFlagInput[] = [
    {
        title: 'Novinka',
        perex: 'Novina. Právě vyšlo.',
        image: 'url/',
        code: GameFlagCode.Hot,
        identifier: FlagIdentifier.GAME,
    },
    {
        title: 'Klasika',
        perex: 'Klasika.',
        image: 'url/',
        code: GameFlagCode.Classic,
        identifier: FlagIdentifier.GAME,
    },
    {
        title: 'Indie',
        perex: 'Nezávislá hra.',
        image: 'url/',
        code: GameFlagCode.Indie,
        identifier: FlagIdentifier.GAME,
    }
]

export const FlagImport: FlagInputType[] = [
    ...ReviewFlags, ...GameFlags
]