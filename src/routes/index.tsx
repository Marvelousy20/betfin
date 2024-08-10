import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import GameHeader from "../components/GameHeader";
import GameSection from "../components/GameSection";
import Sidebar from "../components/Sidebar";

export const Route = createFileRoute("/")({
  component: () => <Index />,
});

function Index() {
  const { t } = useTranslation("", { keyPrefix: "template" });
  return (
    <div className="grid grid-cols-12 mt-10">
      {/* Game component */}
      <div className="col-span-9 mr-10 ml-10">
        <GameHeader />
        <GameSection />
      </div>

      {/* Sidebar component */}
      <div className="col-span-3 mr-10">
        <Sidebar />
      </div>
    </div>
  );
}
