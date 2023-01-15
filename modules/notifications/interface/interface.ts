type VoidFunction = () => void;

export interface INotifCardProps {
  title?: string;
  thumb?: string;
  time?: string;
}

export interface INotifProps {
  isOpen: boolean;
  onClose: VoidFunction;
}
