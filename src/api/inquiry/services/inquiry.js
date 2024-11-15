"use strict";

/**
 * inquiry service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::inquiry.inquiry", ({ strapi }) => ({
  async sendEmail() {
    try {
      await strapi.plugins["email"].services.email.send({
        from: "salma.crona78@ethereal.email",
        to: "lw.kelwin@gmail.com",
        subject: "Hello ✔",
        html: `<p><b>Hello</b> world</p>`,
      });
      strapi.log.info("Email sent successfully!");
    } catch (error) {
      strapi.log.error("Error sending email:", error);
    }
  },
}));
