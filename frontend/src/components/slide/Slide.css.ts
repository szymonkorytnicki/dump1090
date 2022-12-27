import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { mobileOnly } from "../responsive-wrapper/ResponsiveWrapper.css";

export const SlideWrapper = recipe({
  base: [
    mobileOnly,
    {
      borderRadius: "8px",
      backgroundColor: "white",
      height: "30vh",
      position: "fixed",
      zIndex: 9999,
      bottom: 0,
      left: 0,
      width: "100%",
    },
  ],
  variants: {
    isOpen: {
      true: {
        height: "100vh",
      },
    },
  },
});

export const SlideTitle = style({
  fontSize: "1.5rem",
  fontWeight: "bold",
  padding: "1rem",
  borderBottom: "1px solid #eee",
});

export const SlideContent = style({
  padding: "1rem",
});

export const SlideFooter = style({
  padding: "1rem",
  borderTop: "1px solid #eee",
});
