import { AircraftData } from "../../utils/useAircrafts";
import { Pane, PaneContent, PaneTitle, PaneFooter } from "../pane/Pane";
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
      </PaneContent>
      <PaneFooter>Footer</PaneFooter>
    </Pane>
  );
}
