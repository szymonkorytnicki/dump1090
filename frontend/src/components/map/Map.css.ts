import { style, globalStyle } from "@vanilla-extract/css";

const mapDimensions = {
  width: "100vw",
  height: "100vh", // TODO mobile not 100vh
};

globalStyle(".leaflet-container", {
  ...mapDimensions,
});

globalStyle(".leaflet-div-icon", {
  background: "transparent",
  border: "none",
});

export const map = style({
  ...mapDimensions,
});
