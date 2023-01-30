import { Widget } from "@/types";
import { selectorFamily } from "recoil";
import { selectedWidgetIdAtom } from "../atoms/selectedWidgetIdAtom";

export const isWidgetSelectedSeletorFamily = selectorFamily<
  boolean,
  Widget["id"]
>({
  key: "isWidgetSelectedSeletorFamily",
  get:
    (id: Widget["id"]) =>
    ({ get }) => {
      const selectedWidgetId = get(selectedWidgetIdAtom);

      return selectedWidgetId === id;
    },
});
