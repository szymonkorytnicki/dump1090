import { style } from "@vanilla-extract/css";
import { desktopOnly } from "../responsive-wrapper/ResponsiveWrapper.css";

export const PaneWrapper = style([
  desktopOnly,
  {
    borderRadius: "8px",
    backgroundColor: "white",
    height: "30vh",
  },
]);

export const PaneTitle = style({
  fontSize: "1.5rem",
  fontWeight: "bold",
  padding: "1rem",
  borderBottom: "1px solid #eee",
});

export const PaneContent = style({
  padding: "1rem",
});

export const PaneFooter = style({
  padding: "1rem",
  borderTop: "1px solid #eee",
});
