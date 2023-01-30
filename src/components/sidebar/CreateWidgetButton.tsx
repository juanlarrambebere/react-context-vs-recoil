import { CanvasContext } from "@/providers/CanvasProvider";
import { useContext } from "react";

export const CreateWidgetButton = () => {
  const { createWidget } = useContext(CanvasContext);

  const handleAddWidget = () => {
    createWidget({
      position: { x: 0, y: 0 },
      size: { width: 200, height: 200 },
      backgroundColor: "#fff",
    });
  };

  return (
    <div className="flex w-full">
      <button
        className="w-full py-4 text-white bg-indigo-800 border rounded-2xl"
        onClick={handleAddWidget}
      >
        New widget
      </button>
    </div>
  );
};
