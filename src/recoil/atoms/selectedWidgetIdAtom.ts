import { Widget } from "@/types";
import { atom } from "recoil";

export const selectedWidgetIdAtom = atom<Widget["id"] | undefined>({
  key: "selectedWidgetIdAtom",
  default: undefined,
});
