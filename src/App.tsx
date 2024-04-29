import explorerData from "./data.json";
import { FileExplorer } from "./components/FileExplorer";
import { ContextMenu, MenuItem } from "./components/ContextMenu";

function App() {
  const handleContextMenu = (meta: unknown) => {
    console.log(meta);
  };

  return (
    <div>
      <h2>Explorer with context menu on files.</h2>
      <p>Both Explorer and Context menu are reusable components.</p>
      <FileExplorer explorerData={explorerData} contextMenuId="dummy-cm" />

      {/* Change Context Menu item for file explorere. Linked with contextMenuId */}
      <ContextMenu id="dummy-cm">
        <MenuItem onClick={handleContextMenu} meta={{ label: "Copy" }}>
          Copy
        </MenuItem>
        <MenuItem onClick={handleContextMenu} meta={{ label: "Delete" }}>
          Delete
        </MenuItem>
        <MenuItem onClick={handleContextMenu} meta={{ label: "Rename" }}>
          Rename
        </MenuItem>
      </ContextMenu>
    </div>
  );
}

export default App;
