import { style } from "@vanilla-extract/css";
import { desktopOnly } from "../responsive-wrapper/ResponsiveWrapper.css";

export const ViewWrapper = style([
  desktopOnly,
  {
    backgroundColor: "white",
    height: "100vh",
    width: "300px",
    position: "fixed",
    top: 0,
    left: 0, // TODO header height?
    zIndex: 9999,
  },
]);

export const ViewTitle = style({
  fontSize: "1.5rem",
  fontWeight: "bold",
  padding: "1rem",
  borderBottom: "1px solid #eee",
});

export const ViewContent = style({
  padding: "1rem",
});

export const ViewFooter = style({
  padding: "1rem",
  borderTop: "1px solid #eee",
});
