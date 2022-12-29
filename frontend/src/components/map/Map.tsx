import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, ScaleControl, ZoomControl, Polyline } from "react-leaflet";
import { styled } from "../styled/Styled";
import { map } from "./Map.css";
import { AircraftData, useAircrafts } from "../../utils/useAircrafts";
import { divIcon } from "leaflet";
import { renderToString } from "react-dom/server";
import { PlaneIcon } from "../plane-icon/PlaneIcon";

const position = [54.5, 18.5];

interface MapProps {
  aircrafts: AircraftData[];
  onAircraftClick: (id: string) => void;
}

const MapWrapper = styled("div")(map);
export function Map({ aircrafts, onAircraftClick }: MapProps) {
  const { current, currentAircraftLine } = useAircrafts();
  const polyline = currentAircraftLine.map((aircraft) => [aircraft.lat, aircraft.lon]);

  return (
    <>
      <MapWrapper>
        <MapContainer center={position} zoomControl={false} zoom={10} minZoom={5} maxZoom={17}>
          <ScaleControl position="bottomleft" imperial={true} />
          <ZoomControl position="bottomleft" />
          <Polyline pathOptions={{ color: "red" }} positions={polyline} />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {aircrafts?.map((aircraft) => {
            return (
              <Marker
                key={aircraft.hex}
                position={[aircraft.lat, aircraft.lon]}
                icon={divIcon({
                  html: renderToString(
                    <PlaneIcon
                      squawk={aircraft.squawk}
                      seen={aircraft.seen}
                      isSelected={current === aircraft.hex}
                      track={aircraft.track}
                    />
                  ),
                })}
                eventHandlers={{
                  click: () => {
                    onAircraftClick(aircraft.hex);
                  },
                }}
              />
            );
          })}
        </MapContainer>
      </MapWrapper>
    </>
  );
}
