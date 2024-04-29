import { useState } from "react";

// Custom Modules
import "./style.css";
import TreeItem from "./TreeItem";
import { IExplorerData } from "./types";
import fileIcon from "../../assets/fileIcon.svg";
import { TriggerContextMenu } from "../ContextMenu";
import openFolderIcon from "../../assets/openFolder.svg";
import closeFolderIcon from "../../assets/closeFolder.svg";

const TreeView = ({
  source,
  contextMenuId,
}: {
  source: IExplorerData;
  contextMenuId?: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (source?.type === "folder") {
    return (
      <ul className="wrapper">
        <TreeItem
          label={source?.name}
          onClick={() => setIsExpanded(!isExpanded)}
          icon={isExpanded ? openFolderIcon : closeFolderIcon}
        />

        <div
          style={{ display: isExpanded ? "block" : "none" }}
          className="treeContainer"
        >
          {source?.data?.map((dt, idx) => (
            <TreeView
              key={`${idx}-${dt?.name}`}
              source={dt}
              contextMenuId={contextMenuId}
            />
          ))}
        </div>
      </ul>
    );
  }

  // TriggerContextMenu component is linked with id that is from <ContextMenu />.
  return (
    <TriggerContextMenu id={contextMenuId || ""}>
      <TreeItem label={source?.name} icon={fileIcon} />
    </TriggerContextMenu>
  );
};

export default TreeView;
