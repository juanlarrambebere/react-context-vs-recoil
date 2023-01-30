import { Bars3Icon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { useState } from "react";
import { CreateWidgetButton } from "./CreateWidgetButton";
import { WidgetsList } from "./WidgetsList";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => setIsOpen((state) => !state);

  return (
    <div
      className={classNames(
        "relative flex flex-col h-full transition-[width] ease-in-out gap-8 p-4",
        {
          "w-96": isOpen,
          "w-16": !isOpen,
        }
      )}
    >
      <button className="self-end rounded-lg" onClick={handleToggle}>
        <Bars3Icon className="w-6 h-6" />
      </button>
      {isOpen && (
        <>
          <CreateWidgetButton />
          <WidgetsList />
        </>
      )}
    </div>
  );
};
