import { CanvasContext } from "@/providers/CanvasProvider";
import { Widget as WidgetType } from "@/types";
import classNames from "classnames";
import { useCallback, useContext } from "react";
import { Rnd } from "react-rnd";

type Props = {
  id: WidgetType["id"];
};

export const Widget = ({ id }: Props) => {
  const { widgets, updateWidget, setSelectedWidgetId, selectedWidgetId } =
    useContext(CanvasContext);

  const widget = widgets.get(id);

  const handleMouseDown = useCallback(
    (e: MouseEvent) => setSelectedWidgetId(widget?.id),
    [setSelectedWidgetId, widget?.id]
  );

  if (!widget) return null;

  const { x, y } = widget.position;
  const { width, height } = widget.size;

  const isSelected = selectedWidgetId === id;

  // Uncomment this line to introduce a delay to each render
  // console.log("Widget", id, fibonacci(35));

  return (
    <Rnd
      size={{ width, height }}
      position={{ x, y }}
      bounds="parent"
      onMouseDown={handleMouseDown}
      onDragStop={(_e, d) => {
        updateWidget(id, {
          position: {
            x: d.x,
            y: d.y,
          },
        });
      }}
      onResizeStop={(_e, _direction, ref, _delta, position) => {
        updateWidget(id, {
          position,
          size: {
            width: parseFloat(ref.style.width),
            height: parseFloat(ref.style.height),
          },
        });
      }}
      className={classNames("border rounded-xl border-slate-800", {
        "ring ring-purple-600": isSelected,
      })}
      style={{
        backgroundColor: widget.backgroundColor,
      }}
    />
  );
};
