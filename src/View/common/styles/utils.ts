import style from "./storyes.module.scss";

const { colors, text, border, card, body } = style;

const rgbToHex = (rgb: string) => {
  let a = rgb.split("(")[1].split(")")[0].split(",");

  let b = a.map((x: string) => {
    x = parseInt(x).toString(16);
    return x.length === 1 ? "0" + x : x;
  });

  return "#" + b.join("");
};

export const showColor = () => {
  const colorsContainer = document.querySelector(`.${colors}`);
  const textContainer = document.querySelector(`.${text}`);
  const borderContainer = document.querySelector(`.${border}`);
  const cardContainer = document.querySelector(`.${card}`);
  const bodyContainer = document.querySelector(`.${body}`);

  const colorEls = colorsContainer?.querySelectorAll("div");
  const textEls = textContainer?.querySelectorAll("div");
  const borderEl = borderContainer?.querySelector("div");
  const cardEl = cardContainer?.querySelector("div");
  const bodyEl = bodyContainer?.querySelector("div");

  colorEls &&
    colorEls.forEach((el: HTMLElement) => {
      const background = window.getComputedStyle(el).backgroundColor;

      const tagP = document.createElement("p");
      tagP.innerText = rgbToHex(background);

      el.before(tagP);
    });

  textEls &&
    textEls.forEach((el: HTMLElement) => {
      const color = window.getComputedStyle(el).color;

      const tagP = document.createElement("p");
      tagP.innerText = rgbToHex(color);

      el.before(tagP);
    });

  if (borderEl) {
    const borderColor = window.getComputedStyle(borderEl).borderColor;

    const tagP = document.createElement("p");
    tagP.innerText = rgbToHex(borderColor);

    borderEl.before(tagP);

    if (cardEl) {
      const cardBg = window.getComputedStyle(cardEl).backgroundColor;
      const cardShadow = window.getComputedStyle(cardEl).boxShadow;

      const tagP1 = document.createElement("p");
      const tagP2 = document.createElement("p");
      tagP1.innerText = "bg: " + rgbToHex(cardBg);
      tagP2.innerText = "shadow: " + cardShadow;

      cardEl.before(tagP1);
      cardEl.before(tagP2);
    }
  }

  if (bodyEl) {
    const bodyBg = window.getComputedStyle(bodyEl).backgroundColor;

    const tagP = document.createElement("p");
    tagP.innerText = rgbToHex(bodyBg);

    bodyEl.before(tagP);
  }
};
