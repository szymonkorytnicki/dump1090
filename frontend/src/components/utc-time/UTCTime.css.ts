import { style } from "@vanilla-extract/css";
import { vars } from "../../theme.css";

export const utcTime = style({
  color: vars.colors.white,
  //   fontSize: vars.fontSizes.small,
  //   fontWeight: vars.fontWeights.bold,
  textTransform: `uppercase`,
});
