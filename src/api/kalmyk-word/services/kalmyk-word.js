'use strict';

/**
 * kalmyk-word service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::kalmyk-word.kalmyk-word');
