import { useCallback, useRef } from "react";
import useClick from "./hooks/useClick";
import "./style.css";

const ContextMenu = ({
  id,
  children,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  const ref = useRef<null | HTMLUListElement>(null);
  const closeCM = useCallback(() => {
    if (ref?.current?.style) {
      ref.current.style.opacity = "0";
      ref.current.style.left = "-500px";
      ref.current.style.top = "-500px";
    }
  }, []);

  useClick(id, closeCM);

  return (
    <ul ref={ref} id={id} className="contextMenuItemsContainer">
      {children}
    </ul>
  );
};

export default ContextMenu;
