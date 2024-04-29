// Custom Components

import TreeView from "./TreeView";
import { type TFileExplorerProps } from "./types";

const FileExplorer = ({ explorerData, contextMenuId }: TFileExplorerProps) => {
  return <TreeView source={explorerData} contextMenuId={contextMenuId} />;
};

export default FileExplorer;
