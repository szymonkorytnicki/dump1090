import { AircraftData } from "../../utils/useAircrafts";
import { View, ViewTitle, ViewContent, ViewFooter } from "../view/View";
interface CurrentAirCraftViewProps {
  aircraftData: AircraftData | undefined;
  onClose: () => void;
}

export function CurrentAircraftView({ aircraftData, onClose }: CurrentAirCraftViewProps) {
  return (
    <View>
      <ViewTitle>
        <a target="_blank" rel="noreferrer" href={`https://planefinder.net/flight/${aircraftData?.flight}`}>
          {aircraftData?.flight}
        </a>{" "}
        <button onClick={onClose}>close</button>
      </ViewTitle>
      <ViewContent>
        <ul>
          <li>Altitude: {aircraftData?.altitude}ft</li>
          <li>Speed: {aircraftData?.speed}kt</li>
          <li>Latitude: {aircraftData?.lat}</li>
          <li>Longitude: {aircraftData?.lon}</li>
        </ul>
      </ViewContent>
      <ViewFooter>ICAO24: {aircraftData?.hex}</ViewFooter>
    </View>
  );
}
