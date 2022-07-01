import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl519v1ly1hod01uid4u58fq2/master',
  cache: new InMemoryCache()
})