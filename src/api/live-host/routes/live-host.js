'use strict';

/**
 * live-host router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::live-host.live-host');
