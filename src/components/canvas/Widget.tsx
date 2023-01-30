import { selectedWidgetIdAtom } from "@/recoil/atoms/selectedWidgetIdAtom";
import { widgetAtomFamily } from "@/recoil/atoms/widgetAtomFamily";
import { isWidgetSelectedSeletorFamily } from "@/recoil/selectors/isWidgetSelectedSelectorFamily";
import { widgetBackgroundColorSelectorFamily } from "@/recoil/selectors/widgetBackgroundColorSelectorFamily";
import { widgetHeightSelectorFamily } from "@/recoil/selectors/widgetHeightSelectorFamily";
import { widgetWidthSelectorFamily } from "@/recoil/selectors/widgetWidthSelectorFamily copy";
import { widgetXSelectorFamily } from "@/recoil/selectors/widgetXSelectorFamily";
import { widgetYSelectorFamily } from "@/recoil/selectors/widgetYSelectorFamily";
import { Widget as WidgetType } from "@/types";
import classNames from "classnames";
import { useCallback } from "react";
import { Rnd } from "react-rnd";
import { useRecoilValue, useSetRecoilState } from "recoil";

type Props = {
  id: WidgetType["id"];
};

export const Widget = ({ id }: Props) => {
  const x = useRecoilValue(widgetXSelectorFamily(id));
  const y = useRecoilValue(widgetYSelectorFamily(id));
  const width = useRecoilValue(widgetWidthSelectorFamily(id));
  const height = useRecoilValue(widgetHeightSelectorFamily(id));
  const backgroundColor = useRecoilValue(
    widgetBackgroundColorSelectorFamily(id)
  );

  const isSelected = useRecoilValue(isWidgetSelectedSeletorFamily(id));

  const setSelectedWidgetId = useSetRecoilState(selectedWidgetIdAtom);
  const setWidgetAtomFamily = useSetRecoilState(widgetAtomFamily(id));

  const handleMouseDown = useCallback(
    (e: MouseEvent) => setSelectedWidgetId(id),
    [setSelectedWidgetId, id]
  );

  const updateWidget = useCallback(
    (settings: Partial<WidgetType>) => {
      setWidgetAtomFamily((currentValue) => ({
        ...currentValue!,
        ...settings,
      }));
    },
    [setWidgetAtomFamily]
  );

  if (
    x === undefined ||
    y === undefined ||
    width === undefined ||
    height === undefined
  ) {
    return null;
  }

  // Uncomment this line to introduce a delay to each render
  // console.log("Widget", id, fibonacci(35));

  return (
    <Rnd
      size={{ width, height }}
      position={{ x, y }}
      bounds="parent"
      onMouseDown={handleMouseDown}
      onDragStop={(_e, d) => {
        updateWidget({
          position: {
            x: d.x,
            y: d.y,
          },
        });
      }}
      onResizeStop={(_e, _direction, ref, _delta, position) => {
        updateWidget({
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
        backgroundColor,
      }}
    />
  );
};
