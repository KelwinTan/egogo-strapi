module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "strapi-provider-email-smtp",
      providerOptions: {
        host: env("SMTP_HOST", "smtp.ethereal.email"),
        port: env.int("SMTP_PORT", 587),
        auth: {
          user: env("SMTP_USERNAME"),
          pass: env("SMTP_PASSWORD"),
        },
      },
      settings: {
        defaultFrom: "salma.crona78@ethereal.email",
        defaultReplyTo: "lw.kelwin@gmail.com",
      },
    },
  },
});
