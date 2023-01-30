import { CanvasContext } from "@/providers/CanvasProvider";
import { useContext } from "react";
import { Widget } from "./Widget";

export const Canvas = () => {
  const { widgets } = useContext(CanvasContext);

  return (
    <div className="relative w-full h-full bg-fuchsia-200">
      {Array.from(widgets.keys()).map((widgetId) => (
        <Widget key={widgetId} id={widgetId} />
      ))}
    </div>
  );
};
