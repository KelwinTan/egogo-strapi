"use strict";

/**
 * inquiry router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = {
  ...createCoreRouter("api::inquiry.inquiry"),

  routes: [
    {
      method: "POST", // HTTP method for this route
      path: "/send-email", // Define the path for the custom route
      handler: "inquiry.sendEmail", // Reference to the sendEmail method in your controller
      config: {
        auth: false, // Optional: Set to true if you need authentication for this route
      },
    },
    // You can add more custom routes here
  ],
};
