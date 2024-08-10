import { Root } from "betfinio_app/root";
import { createRootRoute } from "@tanstack/react-router";
import instance from "@/src/i18n.ts";
import { StoneProvider } from "../context/stoneContext";

export const Route = createRootRoute({
  component: () => (
    <StoneProvider>
      <Root id={"template"} instance={instance} />
    </StoneProvider>
  ),
});
