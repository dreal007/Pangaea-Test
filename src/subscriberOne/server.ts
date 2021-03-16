/**
 * @description Module dependencies
 */

 import express, { Application, Request, Response, NextFunction } from 'express'
 import * as bodyparser from 'body-parser';
 import cors from 'cors'
 import httpLogger from 'morgan'
 import createError from 'http-errors'
 import handleErrors from '../publisher/middlewares/error-handler'
 import dotenv from 'dotenv';
 global.Promise = require('bluebird');
 dotenv.config();
 import indexRouter from './routes'
 
 const app : Application = express()
 
 /**
  * @description Mount middlewares on app
  */
 
 app.use(httpLogger('dev'))
 app.use(bodyparser.json());
 app.use(bodyparser.urlencoded({ extended: false, limit: '10mb' }));
 app.use(cors());
 
 app.use('/', indexRouter)
 app.get('/favicon.ico', (req, res) => {
  res.sendStatus(200);
});
 
 /**
  * @description catch 404 and forward to error handler
  */
 
 app.use((req :Request, res : Response, next : NextFunction) => {
   next(createError(404));
 });
 
 /**
  * @description Error handler
  */
 
  app.use(handleErrors)
  
 export default app