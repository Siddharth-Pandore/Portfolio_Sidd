import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "export",
};

export default withSentryConfig(nextConfig, {
  org: "na-way",
  project: "javascript-nextjs",

  silent: !process.env.CI,

  widenClientFileUpload: true,

  reactComponentAnnotation: {
    enabled: true,
  },

  hideSourceMaps: true,

  disableLogger: true,

  automaticVercelMonitors: true,
});
