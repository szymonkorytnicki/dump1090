import { AircraftData } from "../../utils/useAircrafts";
import { Pane, PaneContent, PaneTitle, PaneFooter } from "../pane/Pane";
import { PlaneIcon } from "../plane-icon/PlaneIcon";
import { aircraftListPane } from "./AircraftListPane.css";

interface AircraftListPaneProps {
  aircrafts: AircraftData[] | undefined;
}

export function AircraftListPane({ aircrafts }: AircraftListPaneProps) {
  return (
    <Pane className={aircraftListPane}>
      <PaneTitle>Aircrafts</PaneTitle>
      <PaneContent>
        <ul>
          {aircrafts?.map((aircraft) => (
            <li key={aircraft.hex}>
              {aircraft.flight} - {aircraft.altitude}ft
            </li>
          ))}
        </ul>
        <PlaneIcon {...(aircrafts ? aircrafts[0] : null)} isSelected={true} />
      </PaneContent>
      <PaneFooter>{aircrafts?.length || 0} aircrafts</PaneFooter>
    </Pane>
  );
}
