export interface IProps {
  variant?: TButtonVariant;
  type?: TButtonType;
  size?: TButtonSize;
}

type TButtonVariant = "base" | "error" | "success" | "main" | "secondary";
type TButtonType = "base" | "outlined" | "filled";
type TButtonSize = "small" | "default" | "large";
