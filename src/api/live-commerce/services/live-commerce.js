'use strict';

/**
 * live-commerce service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::live-commerce.live-commerce');
