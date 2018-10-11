import App, {Container} from 'next/app';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import withApolloClient from '../lib/with-apollo-client';
import Head from 'next/head';
import '../lib/integrations';

class MyApp extends App {
  render () {
    const {Component, pageProps, apolloClient} = this.props;

    return (
      <Container>
        <Head>
          <title>Heavy Stitch</title>
        </Head>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
