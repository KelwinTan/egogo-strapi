'use strict';

/**
 * job-applicant service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::job-applicant.job-applicant');
