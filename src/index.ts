import publisher from './publisher/server'
import subscriber from './subscriberOne/server'
import subscriberTwo from './subscriberTwo/server'
import dotenv from 'dotenv';
dotenv.config();

publisher.listen(process.env.PUBLISHER_PORT, ()=>{
  console.log(`Publishing server listening on port: ${process.env.PUBLISHER_PORT}`)
})

subscriber.listen(process.env.SUBSCRIBER_PORT, ()=>{
  console.log(`Subscriber server listening on port: ${process.env.SUBSCRIBER_PORT}`)
})

subscriberTwo.listen(process.env.SUBSCRIBER_TWO_PORT, ()=>{
  console.log(`Subscriber 2 server listening on port: ${process.env.SUBSCRIBER_TWO_PORT}`)
})