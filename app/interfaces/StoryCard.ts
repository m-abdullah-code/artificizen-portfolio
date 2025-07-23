import { ReactNode } from "react";

export interface StoryCardProps {
  heading: string;
  stars: number | number[];
  content: string | ReactNode;
}

export interface StorySectionData {
  cards: StoryCardProps[];
  path: string;
  title: string;
  subtitle: string;
  starColor: string;
}
