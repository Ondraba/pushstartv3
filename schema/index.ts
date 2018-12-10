import {GraphQLSchema} from 'graphql';
import {addResolveFunctionsToSchema, makeExecutableSchema} from 'graphql-schema-tools';
import {importSchema} from 'graphql-import';
import {GameEndpoints} from './game';
import {ReviewEndpoints} from './review';
import {FlagEndpoints} from './flag';

const graphQlSchemaFile: string = 'graphql.schema.graphql';

const resolvers: any = {
    Query: {
        ...GameEndpoints.Queries,
        ...ReviewEndpoints.Queries,
        ...FlagEndpoints.Queries,
    },
    Mutation: {
        ...GameEndpoints.Mutations,
        ...ReviewEndpoints.Mutations,
    },
    ...GameEndpoints.Types,
    ...ReviewEndpoints.Types,
};

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs: [importSchema(graphQlSchemaFile)],
    resolvers: {},
});

addResolveFunctionsToSchema(schema, resolvers);

export {schema};
