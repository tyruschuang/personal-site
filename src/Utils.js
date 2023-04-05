import Color from "color";

export function lighten(color, amount) {
  console.log(color + " => " + Color(color).lighten(amount).hex());
  return Color(color).lighten(amount).hex();
}
