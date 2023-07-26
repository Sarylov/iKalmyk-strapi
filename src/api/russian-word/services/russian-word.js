'use strict';

/**
 * russian-word service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::russian-word.russian-word');
