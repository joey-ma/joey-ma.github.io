"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_SITE_URL + "/ingest",
    person_profiles: "always", // to create profiles for anonymous users as well
  });
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <PostHogProvider client={posthog}>{children}</PostHogProvider>
    </ThemeProvider>
  );
}
