import { Widget } from "@/types";
import { createContext, ReactNode, useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";

type CanvasContextType = {
  widgets: Map<Widget["id"], Widget>;
  selectedWidgetId?: Widget["id"];
  createWidget: (settings: Omit<Widget, "id">) => void;
  updateWidget: (
    id: Widget["id"],
    settings: Partial<Omit<Widget, "id">>
  ) => void;
  removeWidget: (id: Widget["id"]) => void;
  setSelectedWidgetId: (id?: Widget["id"]) => void;
};

export const CanvasContext = createContext<CanvasContextType>(
  {} as CanvasContextType
);

type Props = {
  children: ReactNode;
};

export const CanvasContextProvider = ({ children }: Props) => {
  const [widgets, setWidgets] = useState<CanvasContextType["widgets"]>(
    new Map()
  );
  const [selectedWidgetId, setSelectedWidgetId] = useState<Widget["id"]>();

  const handleCreateWidget = useCallback((settings: Omit<Widget, "id">) => {
    setWidgets((widgets) => {
      const updatedWidgets = structuredClone(widgets);

      let isIdUnique = false;
      let id: string;

      while (!isIdUnique) {
        id = uuidv4();
        isIdUnique = !updatedWidgets.has(id);
      }

      updatedWidgets.set(id!, { id: id!, ...settings });
      return updatedWidgets;
    });
  }, []);

  const handleUpdateWidget = useCallback(
    (id: Widget["id"], settings: Partial<Omit<Widget, "id">>) => {
      setWidgets((widgets) => {
        if (!widgets.has(id)) throw new Error("The widget doesn't exist");

        const updatedWidgets = structuredClone(widgets);

        updatedWidgets.set(id, { ...updatedWidgets.get(id)!, ...settings });
        return updatedWidgets;
      });
    },
    []
  );

  const handleRemoveWidget = useCallback((id: Widget["id"]) => {
    setWidgets((widgets) => {
      if (!widgets.has(id)) return widgets;

      const updatedWidgets = structuredClone(widgets);

      updatedWidgets.delete(id);
      return updatedWidgets;
    });
  }, []);

  return (
    <CanvasContext.Provider
      value={{
        widgets,
        selectedWidgetId,
        createWidget: handleCreateWidget,
        updateWidget: handleUpdateWidget,
        removeWidget: handleRemoveWidget,
        setSelectedWidgetId,
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
};
