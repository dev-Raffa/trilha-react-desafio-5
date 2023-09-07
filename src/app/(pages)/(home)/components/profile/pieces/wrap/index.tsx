import { Container } from "@/app/components/container/styles";
import { ReactNode } from "react";

export const WrapProfile = ({ children }: { children: ReactNode }) => {
  return <Container as="article">{children}</Container>;
};
