import { Widget } from "@/types";
import { atomFamily } from "recoil";

export const widgetAtomFamily = atomFamily<Widget | undefined, Widget["id"]>({
  key: "widgetsAtomFamily",
  default: undefined,
});
