'use strict';

/**
 * live-host service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::live-host.live-host');
