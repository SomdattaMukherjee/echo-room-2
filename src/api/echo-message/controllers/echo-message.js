'use strict';

/**
 * A set of functions called "actions" for `echo-message`
 */

module.exports = {
  echo: async (ctx, next) => {
    try {
      const message = ctx.request.body.text
      console.log(ctx.request.body)
      const currentDate = new Date();
      const currentDateTimeString = currentDate.toString();
      const entry = await strapi.entityService.create('api::message.message', {
        data: {
          text: message,
          timestamp:currentDateTimeString
        },
      });
      ctx.body = message;
    } catch (err) {
      ctx.body = err;
    }
  }
};
