import { selectedWidgetIdAtom } from "@/recoil/atoms/selectedWidgetIdAtom";
import { widgetAtomFamily } from "@/recoil/atoms/widgetAtomFamily";
import { widgetBackgroundColorSelectorFamily } from "@/recoil/selectors/widgetBackgroundColorSelectorFamily";
import { ColorResult, HuePicker } from "react-color";
import { constSelector, useRecoilCallback, useRecoilValue } from "recoil";

export const WidgetToolbar = () => {
  const selectedWidgetId = useRecoilValue(selectedWidgetIdAtom);

  const selectedWidgetBgColor = useRecoilValue(
    selectedWidgetId !== undefined
      ? widgetBackgroundColorSelectorFamily(selectedWidgetId)
      : constSelector(undefined)
  );

  const handleBackgroundColorSelection = useRecoilCallback(
    ({ set }) =>
      (color: ColorResult) => {
        if (!selectedWidgetId) return null;
        set(widgetAtomFamily(selectedWidgetId), (currentValue) => ({
          ...currentValue!,
          backgroundColor: color.hex,
        }));
      },
    [selectedWidgetId]
  );

  return (
    <div className="w-96">
      {selectedWidgetId && (
        <div className="flex flex-col items-center gap-8 p-4">
          <h1 className="text-center">Widget settings</h1>
          <HuePicker
            width="100%"
            color={selectedWidgetBgColor}
            onChange={handleBackgroundColorSelection}
          />
        </div>
      )}
    </div>
  );
};
