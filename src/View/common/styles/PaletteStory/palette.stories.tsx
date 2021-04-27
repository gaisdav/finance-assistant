import { Story } from "@storybook/react/types-6-0";
import style from "./palette.module.scss";
import Card from "../../components/Card";
import { useEffect } from "react";
import { showColor } from "./utils";
import { boolean } from "@storybook/addon-knobs";

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
  secondaryTextColor,
  borderColor,
  borderColor5px,
  cardBg,
  bodyBg,
} = style;

const Palette: Story = (props) => {
  useEffect(() => {
    showColor();
  }, []);

  return (
    <body data-theme={props.dark ? "dark" : "light"} className={wrapper}>
      <h1>You can change theme on "Controls" tab</h1>
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
          <span>main color</span>
          <div className={textColor}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
            porro, ullam? Dolore fugit quia ullam? Ad consectetur distinctio ex
            excepturi facilis labore molestiae nulla quae, recusandae reiciendis
            sed sint, tempore.
          </div>

          <span className={secondaryTextColor}>secondary color</span>
          <div className={secondaryTextColor}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
            porro, ullam? Dolore fugit quia ullam? Ad consectetur distinctio ex
            excepturi facilis labore molestiae nulla quae, recusandae reiciendis
            sed sint, tempore.
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
    </body>
  );
};

export const ThemeColors = Palette.bind({});

ThemeColors.args = {
  dark: boolean("dark", false),
};
