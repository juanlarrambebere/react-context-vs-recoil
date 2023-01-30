import { Widget } from "@/types";
import { selectorFamily } from "recoil";
import { widgetAtomFamily } from "../atoms/widgetAtomFamily";

export const widgetHeightSelectorFamily = selectorFamily<
  Widget["size"]["height"] | undefined,
  Widget["id"]
>({
  key: "widgetHeightSelectorFamily",
  get:
    (widgetId: Widget["id"]) =>
    ({ get }) => {
      const widget = get(widgetAtomFamily(widgetId));
      if (!widget) {
        return undefined;
      }

      return widget.size.height;
    },
});
