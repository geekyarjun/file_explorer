import { type TTreeItemProps } from "./types";

const TreeItem = ({ icon, label, onClick }: TTreeItemProps) => {
  return (
    <li onClick={onClick} className="treeViewItem">
      <div>
        <img
          src={icon}
          className="treeViewItem__icon"
          alt={`${label} file icon`}
        />
        <span>{label}</span>
      </div>
    </li>
  );
};

export default TreeItem;
