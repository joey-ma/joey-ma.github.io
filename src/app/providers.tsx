"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_S_FN_API_HOST,
    ui_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: "always", // to create profiles for anonymous users as well
    persistence: "localStorage",
  });
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <PostHogProvider client={posthog}>{children}</PostHogProvider>
    </ThemeProvider>
  );
}
