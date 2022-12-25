import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { styled } from "../styled/Styled";
import { map } from "./Map.css";
import "leaflet/dist/leaflet.css";
import { useAircrafts } from "../../utils/useAircrafts";
import { AircraftListPane } from "../aircraft-list-pane/AircraftListPane";

const position = [54.5, 18.5];

const MapWrapper = styled("div")(map);

export function Map() {
  const { data } = useAircrafts();
  return (
    <MapWrapper>
      <MapContainer center={position} zoom={10} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data?.map((aircraft) => (
          <Marker key={aircraft.hex} position={[aircraft.lat, aircraft.lon]}>
            <Popup>
              Altitude: {aircraft.altitude} <br />
              Speed: {aircraft.speed}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <AircraftListPane aircrafts={data} />
    </MapWrapper>
  );
}
