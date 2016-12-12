import express from 'express';
import path from 'path';
import graphQLHTTP from 'express-graphql';
import template from './template';
import Schema from './schema';

const clientAssets = require(KYT.ASSETS_MANIFEST); // eslint-disable-line import/no-dynamic-require
const app = express();

// set up dummy GraphQL server
app.use('/graphql', graphQLHTTP(() => ({
  graphiql: true,
  pretty: true,
  schema: Schema,
})));

// Client routing only
app.get('*', (req, res) => {
  res.status(200).send(template({
    jsBundle: clientAssets.main.js
  }));
});

app.listen(parseInt(KYT.SERVER_PORT, 10));
