import { CanvasContext } from "@/providers/CanvasProvider";
import { useContext } from "react";
import { WidgetsListItem } from "./WidgetsListItem";

export const WidgetsList = () => {
  const { widgets } = useContext(CanvasContext);

  return (
    <ul className="flex flex-col flex-1 w-full gap-8">
      {Array.from(widgets.keys()).map((widgetId) => (
        <WidgetsListItem key={widgetId} id={widgetId} />
      ))}
    </ul>
  );
};
