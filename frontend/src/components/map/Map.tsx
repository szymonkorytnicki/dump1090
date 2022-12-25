import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { styled } from "../styled/Styled";
import { map } from "./Map.css";
import "leaflet/dist/leaflet.css";

const position = [54.5, 18.5];

const MapWrapper = styled("div")(map);

export function Map() {
  return (
    <MapWrapper>
      <MapContainer center={position} zoom={10} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </MapWrapper>
  );
}
