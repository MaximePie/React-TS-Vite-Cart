import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import chocolatesRoute from './routes/chocolates.js';
import pastriesRoute from './routes/pastries.js';
import treatsRoute from './routes/treats.js';
import url from './database.js';

dotenv.config();
const { connect } = mongoose;

connect(url).then(() => {
  const app = express();

  app.use(cors());

  app.use('/chocolates', chocolatesRoute);
  app.use('/treats', treatsRoute);
  app.use('/pastries', pastriesRoute);

  app.listen(process.env.PORT || 4001, onServerStart);
});

/**
 * Triggered when the server has successfully started
 */
function onServerStart() {
  console.log('Connection au serveur réussie.');
}
