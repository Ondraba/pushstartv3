import {ApolloServer, Config, gql} from 'apollo-server-express';
import * as jwt from 'jsonwebtoken';
import {importSchema} from 'graphql-import';
import {schema} from '../../schema';

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export const createApolloServer = (secret: string, config?: Omit<Config, 'resolvers' | 'typeDefs'>): ApolloServer => {
    return new ApolloServer({
        ...config,
        playground: {
            settings: {
                // FIXME https://github.com/prisma/graphql-playground/issues/790
                'editor.cursorShape': 'line',
            } as any,
        },
        typeDefs: gql`
            ${importSchema('schema/root.graphql')}
        `,
        schema,
        context: async (context) => {
            // FIXME - doplnit kontrolu pres prihlaseni do databaze
            if (!!context.req.headers.authorization) {
                const decoded = jwt.verify(context.req.headers.authorization.replace('Bearer ', ''), secret);
                if (!!decoded) {
                    context.authAdmin = decoded;
                }
            }
            return context;
        },
    });
};
