/**
 * Module Dependencies
 */
 import { transformResponse as response, validateRequest} from '../utils/transform-response'
 import { Request, Response, NextFunction } from 'express'
 import { v4 as uuidv4 } from 'uuid'
 import { createSubscription, fetchTopicSubscribers } from '../processors/subscription'
 import { HttpStatusCode } from '../utils/exceptions/http-status-codes'
 import request from 'request-promise'
 
 /**
  * @description Creates a subscription
  */
 
  const subscribe = async (req : Request, res : Response) => {
     if(!validateRequest(req, res)){
         let payload = {
           topic_id: await uuidv4(),
           topic: req.params.topic,
           subscribers_url: req.body.url
         }
         createSubscription(payload).then((newSubscription :any ) => {
             res.status(HttpStatusCode.OK).json({url : req.body.url, topic : req.params.topic});
         }).catch((error : any )=>{
             res.status(HttpStatusCode.BAD_REQUEST).json(error);
         });
      }    
  }

/**
* @description Publishes message to a topic
*/
  const publish = async (req : Request, res : Response) => {
    if (!validateRequest(req, res)) {
      let topic = req.params.topic
      fetchTopicSubscribers(topic).then((newSubscription: any) => {
        if (newSubscription.length > 0) {
          sendNotification(newSubscription, req).then((fulfilled: any) => {
            return res.status(HttpStatusCode.OK).json({message: 'Notification sent successfully'});
          })
          .catch((error : any )=>{
            return res.status(HttpStatusCode.BAD_REQUEST).json({message: 'Error sending notification'});
          });
        }
        else return res.status(HttpStatusCode.OK).json({message : 'No subscription'});
      }).catch((error : any )=>{
          res.status(HttpStatusCode.BAD_REQUEST).json({message: 'Topic not found'});
      });
    }
  }

  const sendNotification = async (subscribers : any, req : Request)=>{
    let fns = subscribers.map((subscriber: any) => {
        let params = {
          uri: subscriber,
          method: req.method,
          body: { data: { ...req.body }, topic: req.params.topic },
          json: true
        }
        return request(params)
    })
    
    return Promise.all(fns).then(result => {
      return Promise.resolve(true)
    }).catch(error => {
      console.log(error.message);
      return Promise.reject(false)
    })
  }

 
  export {
    subscribe,
    publish
  }
 
  