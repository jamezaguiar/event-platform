import { ApolloClient, InMemoryCache } from '@apollo/client';
import { env } from '../env';

export const client = new ApolloClient({
  uri: env.GRAPHCMS_URL,
  cache: new InMemoryCache(),
});
