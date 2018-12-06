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
    flags: Flag[];
    cover?: string | null;
    releaseDate?: string | null;
    reviews?: Review[] | null;
}

export interface Review {
    _id: string;
    user: User;
    text: string;
    ranking: number;
    flags?: Flag[] | null;
    game: Game;
}

export interface ReviewQuery {
    reviews: Review[];
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
    flags?: Flag[] | null;
}

export interface ReviewInput {
    user: User;
    text: string;
    ranking: number;
    flags?: Flag[] | null;
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

export enum Flag {
    CloseToMyHearth = 'CloseToMyHearth',
    GameOfLife = 'GameOfLife',
    FutureClassic = 'FutureClassic',
}

export enum User {
    Admin = 'Admin',
}

export interface QueryResolvers<Context = any> {
    game?: QueryGameResolver<GameQuery, any, Context>;
    review?: QueryReviewResolver<ReviewQuery, any, Context>;
}

export type QueryGameResolver<R = GameQuery, Parent = any, Context = any> = Resolver<R, Parent, Context>;
export type QueryReviewResolver<R = ReviewQuery, Parent = any, Context = any> = Resolver<R, Parent, Context>;

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
    flags?: GameFlagsResolver<Flag[], any, Context>;
    cover?: GameCoverResolver<string | null, any, Context>;
    releaseDate?: GameReleaseDateResolver<string | null, any, Context>;
    reviews?: GameReviewsResolver<Review[] | null, any, Context>;
}

export type GameIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
export type GameTitleResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
export type GamePerexResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
export type GameOverallRankingResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
export type GamePlatformsResolver<R = Platform[], Parent = any, Context = any> = Resolver<R, Parent, Context>;
export type GameFlagsResolver<R = Flag[], Parent = any, Context = any> = Resolver<R, Parent, Context>;
export type GameCoverResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
export type GameReleaseDateResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
export type GameReviewsResolver<R = Review[] | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;

export interface ReviewResolvers<Context = any> {
    _id?: ReviewIdResolver<string, any, Context>;
    user?: ReviewUserResolver<User, any, Context>;
    text?: ReviewTextResolver<string, any, Context>;
    ranking?: ReviewRankingResolver<number, any, Context>;
    flags?: ReviewFlagsResolver<Flag[] | null, any, Context>;
    game?: ReviewGameResolver<Game, any, Context>;
}

export type ReviewIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
export type ReviewUserResolver<R = User, Parent = any, Context = any> = Resolver<R, Parent, Context>;
export type ReviewTextResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
export type ReviewRankingResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
export type ReviewFlagsResolver<R = Flag[] | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
export type ReviewGameResolver<R = Game, Parent = any, Context = any> = Resolver<R, Parent, Context>;

export interface ReviewQueryResolvers<Context = any> {
    reviews?: ReviewQueryReviewsResolver<Review[], any, Context>;
}

export type ReviewQueryReviewsResolver<R = Review[], Parent = any, Context = any> = Resolver<R, Parent, Context>;

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
