'use strict';

/**
 * investor-relation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::investor-relation.investor-relation');
