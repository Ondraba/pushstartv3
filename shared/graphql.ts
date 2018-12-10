/* tslint:disable */
import {GraphQLResolveInfo} from 'graphql';

export type Resolver<Result, Parent = any, Context = any, Args = any> = (
    parent: Parent,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo,
) => Promise<Result> | Result;

export type SubscriptionResolver<Result, Parent = any, Context = any, Args = any> = {
    subscribe<R = Result, P = Parent>(parent: P, args: Args, context: Context, info: GraphQLResolveInfo): AsyncIterator<R | Result>;
    resolve?<R = Result, P = Parent>(parent: P, args: Args, context: Context, info: GraphQLResolveInfo): R | Result | Promise<R | Result>;
};

export interface Query {
    game: GameQuery;
    review: ReviewQuery;
    flag: FlagQuery;
}

export interface GameQuery {
    games: Game[];
}

export interface Game {
    _id: string;
    title: string;
    perex: string;
    overallRanking?: number | null;
    platforms: Platform[];
    flags: GameFlag[];
    cover?: string | null;
    releaseDate?: string | null;
    reviews?: Review[] | null;
}

export interface GameFlag {
    _id: string;
    title: string;
    perex: string;
    image: string;
    code: GameFlagCode;
}

export interface Review {
    _id: string;
    user: User;
    text: string;
    ranking: number;
    flags?: ReviewFlag[] | null;
    game: Game;
}

export interface ReviewFlag {
    _id: string;
    title: string;
    perex: string;
    image: string;
    code: ReviewFlagCode;
}

export interface ReviewQuery {
    reviews: Review[];
}

export interface FlagQuery {
    gameFlags: GameFlag[];
    reviewFlags: ReviewFlag[];
}

export interface Mutation {
    game: GameMutation;
    review: ReviewMutation;
}

export interface GameMutation {
    createGame: Game;
}

export interface ReviewMutation {
    createReview: Review;
}

export interface GameInput {
    title: string;
    perex: string;
    platforms: Platform[];
    cover?: string | null;
    releaseDate?: string | null;
    flags?: GameFlagCode[] | null;
}

export interface ReviewInput {
    user: User;
    text: string;
    ranking: number;
    flags?: ReviewFlagCode[] | null;
}
export interface CreateGameGameMutationArgs {
    input: GameInput;
}
export interface CreateReviewReviewMutationArgs {
    input: ReviewInput;
    gameId: string;
}

export enum Platform {
    PS4 = 'PS4',
    XONE = 'XONE',
    PC = 'PC',
}

export enum GameFlagCode {
    Hot = 'Hot',
    Classic = 'Classic',
    Indie = 'Indie',
}

export enum User {
    Admin = 'Admin',
}

export enum ReviewFlagCode {
    CloseToMyHearth = 'CloseToMyHearth',
    GameOfLife = 'GameOfLife',
    FutureClassic = 'FutureClassic',
}

export interface QueryResolvers<Context = any> {
    game?: QueryGameResolver<GameQuery, any, Context>;
    review?: QueryReviewResolver<ReviewQuery, any, Context>;
    flag?: QueryFlagResolver<FlagQuery, any, Context>;
}

export type QueryGameResolver<R = GameQuery, Parent = any, Context = any> = Resolver<R, Parent, Context>;
export type QueryReviewResolver<R = ReviewQuery, Parent = any, Context = any> = Resolver<R, Parent, Context>;
export type QueryFlagResolver<R = FlagQuery, Parent = any, Context = any> = Resolver<R, Parent, Context>;

export interface GameQueryResolvers<Context = any> {
    games?: GameQueryGamesResolver<Game[], any, Context>;
}

export type GameQueryGamesResolver<R = Game[], Parent = any, Context = any> = Resolver<R, Parent, Context>;

export interface GameResolvers<Context = any> {
    _id?: GameIdResolver<string, any, Context>;
    title?: GameTitleResolver<string, any, Context>;
    perex?: GamePerexResolver<string, any, Context>;
    overallRanking?: GameOverallRankingResolver<number | null, any, Context>;
    platforms?: GamePlatformsResolver<Platform[], any, Context>;
    flags?: GameFlagsResolver<GameFlag[], any, Context>;
    cover?: GameCoverResolver<string | null, any, Context>;
    releaseDate?: GameReleaseDateResolver<string | null, any, Context>;
    reviews?: GameReviewsResolver<Review[] | null, any, Context>;
}

export type GameIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
export type GameTitleResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
export type GamePerexResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
export type GameOverallRankingResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
export type GamePlatformsResolver<R = Platform[], Parent = any, Context = any> = Resolver<R, Parent, Context>;
export type GameFlagsResolver<R = GameFlag[], Parent = any, Context = any> = Resolver<R, Parent, Context>;
export type GameCoverResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
export type GameReleaseDateResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
export type GameReviewsResolver<R = Review[] | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;

export interface GameFlagResolvers<Context = any> {
    _id?: GameFlagIdResolver<string, any, Context>;
    title?: GameFlagTitleResolver<string, any, Context>;
    perex?: GameFlagPerexResolver<string, any, Context>;
    image?: GameFlagImageResolver<string, any, Context>;
    code?: GameFlagCodeResolver<GameFlagCode, any, Context>;
}

export type GameFlagIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
export type GameFlagTitleResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
export type GameFlagPerexResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
export type GameFlagImageResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
export type GameFlagCodeResolver<R = GameFlagCode, Parent = any, Context = any> = Resolver<R, Parent, Context>;

export interface ReviewResolvers<Context = any> {
    _id?: ReviewIdResolver<string, any, Context>;
    user?: ReviewUserResolver<User, any, Context>;
    text?: ReviewTextResolver<string, any, Context>;
    ranking?: ReviewRankingResolver<number, any, Context>;
    flags?: ReviewFlagsResolver<ReviewFlag[] | null, any, Context>;
    game?: ReviewGameResolver<Game, any, Context>;
}

export type ReviewIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
export type ReviewUserResolver<R = User, Parent = any, Context = any> = Resolver<R, Parent, Context>;
export type ReviewTextResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
export type ReviewRankingResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
export type ReviewFlagsResolver<R = ReviewFlag[] | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
export type ReviewGameResolver<R = Game, Parent = any, Context = any> = Resolver<R, Parent, Context>;

export interface ReviewFlagResolvers<Context = any> {
    _id?: ReviewFlagIdResolver<string, any, Context>;
    title?: ReviewFlagTitleResolver<string, any, Context>;
    perex?: ReviewFlagPerexResolver<string, any, Context>;
    image?: ReviewFlagImageResolver<string, any, Context>;
    code?: ReviewFlagCodeResolver<ReviewFlagCode, any, Context>;
}

export type ReviewFlagIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
export type ReviewFlagTitleResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
export type ReviewFlagPerexResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
export type ReviewFlagImageResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
export type ReviewFlagCodeResolver<R = ReviewFlagCode, Parent = any, Context = any> = Resolver<R, Parent, Context>;

export interface ReviewQueryResolvers<Context = any> {
    reviews?: ReviewQueryReviewsResolver<Review[], any, Context>;
}

export type ReviewQueryReviewsResolver<R = Review[], Parent = any, Context = any> = Resolver<R, Parent, Context>;

export interface FlagQueryResolvers<Context = any> {
    gameFlags?: FlagQueryGameFlagsResolver<GameFlag[], any, Context>;
    reviewFlags?: FlagQueryReviewFlagsResolver<ReviewFlag[], any, Context>;
}

export type FlagQueryGameFlagsResolver<R = GameFlag[], Parent = any, Context = any> = Resolver<R, Parent, Context>;
export type FlagQueryReviewFlagsResolver<R = ReviewFlag[], Parent = any, Context = any> = Resolver<R, Parent, Context>;

export interface MutationResolvers<Context = any> {
    game?: MutationGameResolver<GameMutation, any, Context>;
    review?: MutationReviewResolver<ReviewMutation, any, Context>;
}

export type MutationGameResolver<R = GameMutation, Parent = any, Context = any> = Resolver<R, Parent, Context>;
export type MutationReviewResolver<R = ReviewMutation, Parent = any, Context = any> = Resolver<R, Parent, Context>;

export interface GameMutationResolvers<Context = any> {
    createGame?: GameMutationCreateGameResolver<Game, any, Context>;
}

export type GameMutationCreateGameResolver<R = Game, Parent = any, Context = any> = Resolver<R, Parent, Context>;
export interface GameMutationCreateGameArgs {
    input: GameInput;
}

export interface ReviewMutationResolvers<Context = any> {
    createReview?: ReviewMutationCreateReviewResolver<Review, any, Context>;
}

export type ReviewMutationCreateReviewResolver<R = Review, Parent = any, Context = any> = Resolver<R, Parent, Context>;
export interface ReviewMutationCreateReviewArgs {
    input: ReviewInput;
    gameId: string;
}
