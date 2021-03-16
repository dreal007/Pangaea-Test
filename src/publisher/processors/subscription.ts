/**
 * @description Subscription Processor to handle all DB calls
 */

const { Subscriptions } = require('../database/models')
 
const createSubscription  = (payload : any) => {
  const query = {
    where : { topic : payload.topic }
  }
  return Subscriptions.findOne(query).then((existingSubscription: any) => {
    if (existingSubscription) {
      let arr = []
      arr = JSON.parse(existingSubscription.dataValues.subscribers_url)
      if (!arr.includes(payload.subscribers_url)) {
        arr.push(payload.subscribers_url)
        payload.subscribers_url = JSON.stringify(arr)
        return Subscriptions.update(payload, query).then((updatedSubscription: any) => {
          return Promise.resolve(updatedSubscription)
        })
      }
      return Promise.resolve(existingSubscription)
    }
    else {
      payload.subscribers_url = JSON.stringify([payload.subscribers_url])
      return Subscriptions.create(payload)
    }  
  }).then((newSubscription: any) => {
     if(!newSubscription) throw new Error('Could not create topic')
     return newSubscription.dataValues
  })
}

const fetchTopicSubscribers = (topic : any) => {
  const query = {
    where : { topic : topic }
  }

  return Subscriptions.findOne(query).then((existingSubscription: any) => {
    if (existingSubscription) {
       return Promise.resolve(JSON.parse(existingSubscription.dataValues.subscribers_url))
    }
    return Promise.reject(new Error('Topic does not exist'))
  })
}

export { createSubscription, fetchTopicSubscribers }