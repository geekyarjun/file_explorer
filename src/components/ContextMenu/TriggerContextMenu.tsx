import React from "react";

const TriggerContextMenu = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  const handleContextMenu = (e: React.MouseEvent<HTMLElement>) => {
    try {
      e?.preventDefault();

      const cmItemsContainer = document.getElementById(id);
      if (!cmItemsContainer) return;

      e.preventDefault();
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // height and width of menu
      const menuHeight = cmItemsContainer.getBoundingClientRect().height;
      const menuWidth = cmItemsContainer.getBoundingClientRect().width;

      // width and height of screen
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Clicks near right corner
      if (width - mouseX <= 200) {
        cmItemsContainer.style.borderRadius = "5px 0 5px 5px";
        cmItemsContainer.style.left = width - menuWidth + "px";
        cmItemsContainer.style.top = mouseY + "px";

        // right bottom
        if (height - mouseY <= 200) {
          cmItemsContainer.style.top = mouseY - menuHeight + "px";
          cmItemsContainer.style.borderRadius = "5px 5px 0 5px";
        }
      } else {
        //left
        cmItemsContainer.style.borderRadius = "0 5px 5px 5px";
        cmItemsContainer.style.left = mouseX + "px";
        cmItemsContainer.style.top = mouseY + "px";
        //left bottom
        if (height - mouseY <= 200) {
          cmItemsContainer.style.top = mouseY - menuHeight + "px";
          cmItemsContainer.style.borderRadius = "5px 5px 5px 0";
        }
      }

      cmItemsContainer.style.opacity = "1";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="cm-trigger" onContextMenu={handleContextMenu}>
      {children}
    </div>
  );
};

export default TriggerContextMenu;
