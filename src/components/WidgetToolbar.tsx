import { CanvasContext } from "@/providers/CanvasProvider";
import { useContext } from "react";
import { ColorResult, HuePicker } from "react-color";

export const WidgetToolbar = () => {
  const { selectedWidgetId, widgets, updateWidget } = useContext(CanvasContext);

  const handleBackgroundColorSelection = (color: ColorResult) => {
    updateWidget(selectedWidgetId!, { backgroundColor: color.hex });
  };

  const selectedWidget = selectedWidgetId
    ? widgets.get(selectedWidgetId)
    : undefined;

  return (
    <div className="w-96">
      {selectedWidget && (
        <div className="flex flex-col items-center gap-8 p-4">
          <h1 className="text-center">Widget settings</h1>
          <HuePicker
            width="100%"
            color={selectedWidget.backgroundColor}
            onChange={handleBackgroundColorSelection}
          />
        </div>
      )}
    </div>
  );
};
