export interface IProps {
  className?: string;
  type?: TButtonType;
  variant?: TButtonVariant;
  size?: TButtonSize;
  loading?: boolean;
  onClick?: (event: any) => void;
}

type TButtonType = "base" | "error" | "success" | "main" | "secondary";
type TButtonVariant = "outlined" | "filled";
type TButtonSize = "small" | "default" | "large";
