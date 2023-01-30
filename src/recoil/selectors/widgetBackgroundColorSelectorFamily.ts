import { Widget } from "@/types";
import { selectorFamily } from "recoil";
import { widgetAtomFamily } from "../atoms/widgetAtomFamily";

export const widgetBackgroundColorSelectorFamily = selectorFamily<
  Widget["backgroundColor"] | undefined,
  Widget["id"]
>({
  key: "widgetBackgroundColorSelectorFamily",
  get:
    (widgetId: Widget["id"]) =>
    ({ get }) => {
      const widget = get(widgetAtomFamily(widgetId));
      if (!widget) {
        return undefined;
      }

      return widget.backgroundColor;
    },
});
