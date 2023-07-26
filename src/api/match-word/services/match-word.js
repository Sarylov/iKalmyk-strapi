'use strict';

/**
 * match-word service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::match-word.match-word');
