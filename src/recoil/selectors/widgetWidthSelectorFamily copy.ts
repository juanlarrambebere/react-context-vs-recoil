import { Widget } from "@/types";
import { selectorFamily } from "recoil";
import { widgetAtomFamily } from "../atoms/widgetAtomFamily";

export const widgetWidthSelectorFamily = selectorFamily<
  Widget["size"]["width"] | undefined,
  Widget["id"]
>({
  key: "widgetWidthSelectorFamily",
  get:
    (widgetId: Widget["id"]) =>
    ({ get }) => {
      const widget = get(widgetAtomFamily(widgetId));
      if (!widget) {
        return undefined;
      }

      return widget.size.width;
    },
});
