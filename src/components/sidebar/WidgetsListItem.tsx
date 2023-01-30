import { CanvasContext } from "@/providers/CanvasProvider";
import { Widget } from "@/types";
import classNames from "classnames";
import { useContext } from "react";

type Props = {
  id: Widget["id"];
};

export const WidgetsListItem = ({ id }: Props) => {
  const { widgets, selectedWidgetId } = useContext(CanvasContext);

  const widget = widgets.get(id);

  if (!widget) return null;

  const isSelected = selectedWidgetId === id;

  return (
    <li className="flex flex-col gap-2 pt-4 text-xs">
      <div className="flex justify-center gap-4">
        <div className="flex gap-1">
          <span>x:</span>
          <span>{widget.position.x}</span>
        </div>

        <div className="flex gap-1">
          <span>y:</span>
          <span>{widget.position.y}</span>
        </div>
      </div>
      <div
        className={classNames("relative w-full h-32 border border-dashed", {
          "ring ring-purple-600": isSelected,
        })}
        style={{
          backgroundColor: widget.backgroundColor,
        }}
      >
        <div className="absolute translate-x-[-50%] left-1/2 bottom-2">
          <span>{widget.size.width}</span>
        </div>
        <div className="absolute top-1/2 translate-y-[-50%] left-2">
          <span>{widget.size.height}</span>
        </div>
      </div>
    </li>
  );
};
