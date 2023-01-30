import { Widget } from "@/types";
import { selectorFamily } from "recoil";
import { widgetAtomFamily } from "../atoms/widgetAtomFamily";

export const widgetYSelectorFamily = selectorFamily<
  Widget["position"]["y"] | undefined,
  Widget["id"]
>({
  key: "widgetYSelectorFamily",
  get:
    (widgetId: Widget["id"]) =>
    ({ get }) => {
      const widget = get(widgetAtomFamily(widgetId));
      if (!widget) {
        return undefined;
      }

      return widget.position.y;
    },
});
