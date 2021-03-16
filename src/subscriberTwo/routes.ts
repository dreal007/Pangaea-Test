/**
 * @description Module dependencies
 */

 import express, { Request, Response, IRoute, IRouter, NextFunction } from 'express'
 const router : IRouter = express.Router()
 
 /**
  * Subscriber service route declaration
  */
 router.get('/', (req: Request, res: Response)=>{
   res.status(200).json({ title : 'Subscriber Two' })
 })

 router.post('/test1', (req: Request, res: Response) => {
  console.log(req.body, 'Subscriber 2, Test 1')
  res.json(req.body)
})

router.post('/test2', (req: Request, res: Response) => {
  console.log(req.body, 'Subscriber 2, Test 2')
  res.json(req.body)
})
 
 export default router;