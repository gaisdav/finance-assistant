export type TAppTheme = "light" | "dark";

export interface IUserDM {
  id: string;
  name: string;
  lastName: string;
  theme: TAppTheme;
}
