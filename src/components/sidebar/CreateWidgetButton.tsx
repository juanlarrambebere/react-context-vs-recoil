import { widgetAtomFamily } from "@/recoil/atoms/widgetAtomFamily";
import { widgetIdsAtom } from "@/recoil/atoms/widgetIdsAtom";
import { useRecoilCallback } from "recoil";
import { v4 as uuidv4 } from "uuid";

export const CreateWidgetButton = () => {
  const handleAddWidget = useRecoilCallback(
    ({ set }) =>
      () => {
        const widgetId = uuidv4();

        set(widgetIdsAtom, (widgetIds) => [...widgetIds, widgetId]);
        set(widgetAtomFamily(widgetId), {
          id: widgetId,
          position: {
            x: 0,
            y: 0,
          },
          size: {
            width: 200,
            height: 200,
          },
          backgroundColor: "#fff",
        });
      },
    []
  );

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
