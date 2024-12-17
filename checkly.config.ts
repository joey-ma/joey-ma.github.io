import { defineConfig } from "checkly";
import { Frequency } from "checkly/constructs";

export default defineConfig({
  projectName: "Website Monitoring",
  logicalId: "website-monitoring-0",
  repoUrl: "https://github.com/joey-ma/joey-ma.github.io",
  checks: {
    activated: true,
    muted: false,
    runtimeId: "2024.12",
    frequency: Frequency.EVERY_5M,
    locations: ["us-east-1", "eu-west-1"],
    tags: ["website", "api"],
    checkMatch: "**/__checks__/**/*.check.ts",
    ignoreDirectoriesMatch: [],
    browserChecks: {
      frequency: Frequency.EVERY_10M,
      testMatch: "**/__checks__/**/*.spec.ts",
    },
  },
  cli: {
    runLocation: "eu-west-1",
  },
});
