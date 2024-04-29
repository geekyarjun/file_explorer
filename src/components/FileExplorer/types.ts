export interface IExplorerData {
  name: string;
  type: string;
  meta?: string;
  data?: IExplorerData[] | null;
}

export type TFileExplorerProps = {
  contextMenuId?: string;
  explorerData: IExplorerData;
};

export interface TTreeItemProps {
  icon: string;
  label: string;
  onClick?: () => void;
}
