import { widgetIdsAtom } from "@/recoil/atoms/widgetIdsAtom";
import { useRecoilValue } from "recoil";
import { WidgetsListItem } from "./WidgetsListItem";

export const WidgetsList = () => {
  const widgetIds = useRecoilValue(widgetIdsAtom);

  return (
    <ul className="flex flex-col flex-1 w-full gap-8">
      {widgetIds.map((widgetId) => {
        return <WidgetsListItem key={widgetId} id={widgetId} />;
      })}
    </ul>
  );
};
