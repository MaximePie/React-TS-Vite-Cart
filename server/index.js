import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import chocolatesRoute from './routes/chocolates.js';
import url from './database.js';

dotenv.config();
const { connect } = mongoose;

connect(url).then(() => {
  const app = express();
  app.use('/chocolates', chocolatesRoute);

  app.listen(process.env.PORT || 4001, onServerStart);
});

/**
 * Triggered when the server has successfully started
 */
function onServerStart() {
  console.log('Connection au serveur réussie.');
}
