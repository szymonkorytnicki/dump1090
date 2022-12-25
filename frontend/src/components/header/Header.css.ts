import { style } from "@vanilla-extract/css";
import { vars } from "../../theme.css";

export const header = style({
  backgroundColor: `rgba(0,0,0,.3)`,
  backdropFilter: `blur(1px)`,
  position: `fixed`,
  top: 0,
  left: 0,
  right: 0,
  zIndex: 9999,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `space-between`,
  padding: "1rem",
  color: "white",
});
