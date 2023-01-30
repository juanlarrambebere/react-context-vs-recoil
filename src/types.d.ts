export type WidgetPosition = {
  x: number;
  y: number;
};

export type WidgetSize = {
  width: number;
  height: number;
};

export type Widget = {
  id: string;
  position: WidgetPosition;
  size: WidgetSize;
  backgroundColor: string;
};
