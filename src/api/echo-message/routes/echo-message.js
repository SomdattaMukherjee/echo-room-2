module.exports = {
  routes: [
    {
     method: 'POST',
     path: '/echo-message',
     handler: 'echo-message.echo',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
