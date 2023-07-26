'use strict';

/**
 * A set of functions called "actions" for `custom-todo`
 */

module.exports = {
  custom: async (ctx, next) => {
    try {
      ctx.body = 'ok';
    } catch (err) {
      ctx.body = err;
    }
  }
};
