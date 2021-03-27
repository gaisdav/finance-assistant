import { Story } from "@storybook/react/types-6-0";
import style from "./storyes.module.scss";
import Card from "../components/Card";
import { useEffect } from "react";
import { showColor } from "./utils";

export default {
  title: "Palette",
};

const {
  wrapper,
  story,
  colors,
  text,
  border,
  card,
  body,
  mainColor,
  secondaryColor,
  errorColor,
  successColor,
  warningColor,
  textColor,
  borderColor,
  borderColor5px,
  cardBg,
  bodyBg,
} = style;

const Palette: Story = () => {
  useEffect(() => {
    showColor();
  }, []);

  return (
    <div className={story}>
      <div className={colors}>
        <h4>Colors</h4>
        <span>main-color</span>
        <div className={mainColor} />

        <span>secondary-color</span>
        <div className={secondaryColor} />

        <span>error-color</span>
        <div className={errorColor} />

        <span>success-color</span>
        <div className={successColor} />

        <span>warning-color</span>
        <div className={warningColor} />
      </div>

      <div className={text}>
        <h4>Text color</h4>
        <div className={textColor}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus porro,
          ullam? Dolore fugit quia ullam? Ad consectetur distinctio ex excepturi
          facilis labore molestiae nulla quae, recusandae reiciendis sed sint,
          tempore.
        </div>
      </div>

      <div className={border}>
        <h4>Border color</h4>
        <div className={borderColor}>1px</div>
        <div className={borderColor5px}>5px</div>
      </div>

      <div className={card}>
        <h4>Card component (with shadow)</h4>
        <Card className={cardBg} />
      </div>

      <div className={body}>
        <h4>HTML body bg</h4>
        <Card className={bodyBg} />
      </div>
    </div>
  );
};

const DarkPalette: Story = () => {
  return (
    <body data-theme="dark" className={wrapper}>
      <Palette />
    </body>
  );
};

export const LightThemeColors = Palette.bind({});
export const DarkThemeColors = DarkPalette.bind({});
