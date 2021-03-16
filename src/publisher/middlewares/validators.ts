/**
 * @description  validator schema
 */

 const postSubscriptionSchema = {
  url : {
      in : ['body'],
      isString: true,
      errorMessage: 'Not a valid url'
  },

  topic: {
      in: ['params'],
      isString: true,
      errorMessage: 'Please provide a topic'
  },

 }

 const postTopicSchema = {
  topic: {
      in: ['params'],
      isString: true,
      errorMessage: 'Please provide a topic'
  },
}

export { 
  postSubscriptionSchema,
  postTopicSchema
}