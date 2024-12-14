import { ReactNode } from "react";

export type Hero = {
  id?: number;
  title: string | ReactNode;
  description: string;
  primaryCTA: { buttonText: string; link: string };
  secondaryCTA: { buttonText: string; link: string };
};
