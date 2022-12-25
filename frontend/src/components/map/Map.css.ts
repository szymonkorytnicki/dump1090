import { style, globalStyle } from "@vanilla-extract/css";

const mapDimensions = {
  width: "100vw",
  height: "100vh",
};

globalStyle(".leaflet-container", {
  ...mapDimensions,
});

export const map = style({
  ...mapDimensions,
});
