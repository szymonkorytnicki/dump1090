import { style } from "@vanilla-extract/css";

export const desktopOnly = style({
  display: "none",
  "@media": {
    [`screen and (min-width: 65rem)`]: {
      display: "block",
    },
  },
});

export const mobileOnly = style({
  display: "none",
  "@media": {
    [`screen and (max-width: 65rem)`]: {
      display: "block",
    },
  },
});
