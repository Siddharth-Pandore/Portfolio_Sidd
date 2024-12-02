import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://392f898168ad6d6d046ce06ba770c5ff@o4508346114572289.ingest.de.sentry.io/4508380910518352",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
      isNameRequired: true,
      isEmailRequired: true,
    }),
  ],
});
