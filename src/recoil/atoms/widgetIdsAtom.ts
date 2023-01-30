import { Widget } from "@/types";
import { atom } from "recoil";

export const widgetIdsAtom = atom<Widget["id"][]>({
  key: "widgetIdsAtom",
  default: [],
});
