import { widgetIdsAtom } from "@/recoil/atoms/widgetIdsAtom";
import { useRecoilValue } from "recoil";
import { Widget } from "./Widget";

export const Canvas = () => {
  const widgetIds = useRecoilValue(widgetIdsAtom);

  return (
    <div className="relative w-full h-full bg-fuchsia-200">
      {widgetIds.map((widgetId) => (
        <Widget key={widgetId} id={widgetId} />
      ))}
    </div>
  );
};
