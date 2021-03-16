/**
 * @description Module dependencies
 */

 import express, { Request, Response, IRoute, IRouter, NextFunction } from 'express'
 import { subscribe, publish } from '../controllers/subscription'
 import { postSubscriptionSchema, postTopicSchema } from '../middlewares/validators'
 const { checkSchema } = require('express-validator')
 const router : IRouter = express.Router()
 
 router.get('/', (req: Request, res: Response)=>{
   res.status(200).json({ title : process.env.APP_NAME })
 })

 router.post('/subscribe/:topic', checkSchema(postSubscriptionSchema), subscribe)
 router.post('/publish/:topic', checkSchema(postTopicSchema), publish)
 
 export default router;