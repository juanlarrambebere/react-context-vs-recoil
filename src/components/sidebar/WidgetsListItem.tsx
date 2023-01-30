import { isWidgetSelectedSeletorFamily } from "@/recoil/selectors/isWidgetSelectedSelectorFamily";
import { widgetBackgroundColorSelectorFamily } from "@/recoil/selectors/widgetBackgroundColorSelectorFamily";
import { widgetHeightSelectorFamily } from "@/recoil/selectors/widgetHeightSelectorFamily";
import { widgetWidthSelectorFamily } from "@/recoil/selectors/widgetWidthSelectorFamily copy";
import { widgetXSelectorFamily } from "@/recoil/selectors/widgetXSelectorFamily";
import { widgetYSelectorFamily } from "@/recoil/selectors/widgetYSelectorFamily";
import { Widget } from "@/types";
import classNames from "classnames";
import { useRecoilValue } from "recoil";

const WidgetX = ({ id }: { id: Widget["id"] }) => {
  const x = useRecoilValue(widgetXSelectorFamily(id));

  return (
    <div className="flex gap-1">
      <span>x:</span>
      <span>{x}</span>
    </div>
  );
};

const WidgetY = ({ id }: { id: Widget["id"] }) => {
  const y = useRecoilValue(widgetYSelectorFamily(id));

  return (
    <div className="flex gap-1">
      <span>y:</span>
      <span>{y}</span>
    </div>
  );
};

const WidgetWidth = ({ id }: { id: Widget["id"] }) => {
  const width = useRecoilValue(widgetWidthSelectorFamily(id));

  return (
    <div className="absolute translate-x-[-50%] left-1/2 bottom-2">
      <span>{width}</span>
    </div>
  );
};

const WidgetHeight = ({ id }: { id: Widget["id"] }) => {
  const height = useRecoilValue(widgetHeightSelectorFamily(id));

  return (
    <div className="absolute top-1/2 translate-y-[-50%] left-2">
      <span>{height}</span>
    </div>
  );
};

const WidgetBox = ({ id }: { id: Widget["id"] }) => {
  const backgroundColor = useRecoilValue(
    widgetBackgroundColorSelectorFamily(id)
  );

  const isSelected = useRecoilValue(isWidgetSelectedSeletorFamily(id));

  return (
    <div
      className={classNames("relative w-full h-32 border border-dashed", {
        "ring ring-purple-600": isSelected,
      })}
      style={{
        backgroundColor,
      }}
    >
      <WidgetWidth id={id} />
      <WidgetHeight id={id} />
    </div>
  );
};

export const WidgetsListItem = ({ id }: { id: Widget["id"] }) => {
  return (
    <li className="flex flex-col gap-2 pt-4 text-xs">
      <div className="flex justify-center gap-4">
        <WidgetX id={id} />
        <WidgetY id={id} />
      </div>
      <WidgetBox id={id} />
    </li>
  );
};
