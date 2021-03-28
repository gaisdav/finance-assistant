export interface IProps {
  className?: string;
  type?: TButtonType;
  variant?: TButtonVariant;
  size?: TButtonSize;
}

type TButtonType = "base" | "error" | "success" | "main" | "secondary";
type TButtonVariant = "outlined" | "filled";
type TButtonSize = "small" | "default" | "large";
