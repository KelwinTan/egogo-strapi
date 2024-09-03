'use strict';

/**
 * live-host controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::live-host.live-host');
