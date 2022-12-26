import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { styled } from "../styled/Styled";
import { map } from "./Map.css";
import { AircraftData } from "../../utils/useAircrafts";

const position = [54.5, 18.5];

interface MapProps {
  aircrafts: AircraftData[];
  onAircraftClick: (id: string) => void;
}

const MapWrapper = styled("div")(map);
export function Map({ aircrafts, onAircraftClick }: MapProps) {
  return (
    <MapWrapper>
      <MapContainer center={position} zoom={10} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {aircrafts?.map((aircraft) => (
          <Marker
            key={aircraft.hex}
            position={[aircraft.lat, aircraft.lon]}
            eventHandlers={{
              click: () => {
                onAircraftClick(aircraft.hex);
              },
            }}
          />
        ))}
      </MapContainer>
    </MapWrapper>
  );
}
