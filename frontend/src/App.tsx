import { AircraftListPane } from "./components/aircraft-list-pane/AircraftListPane";
import { Header } from "./components/header/Header";
import { Map } from "./components/map/Map";
import { UTCTime } from "./components/utc-time/UTCTime";
import { AircraftsContextProvider, useAircrafts } from "./utils/useAircrafts";
import { CurrentAircraftView } from "./components/current-aircraft-view/CurrentAircraftView";
import { AircraftListSlide } from "./components/aircraft-list-slide/AircraftListSlide";
import { CurrentAircraftSlide } from "./components/current-aircraft-slide/CurrentAircraftSlide";

function App() {
  const { data, current, setCurrent, clearCurrentAircraft } = useAircrafts();
  return (
    <>
      <Header>
        <span>Dump1090</span>
        <UTCTime />
      </Header>
      <Map aircrafts={data} onAircraftClick={setCurrent} />
      <AircraftListPane aircrafts={data} />
      {current && (
        <CurrentAircraftView
          aircraftData={data.find((aircraft) => aircraft.hex === current)}
          onClose={clearCurrentAircraft}
        />
      )}
      {current ? (
        <CurrentAircraftSlide
          aircraftData={data.find((aircraft) => aircraft.hex === current)}
          onClose={clearCurrentAircraft}
        />
      ) : (
        <AircraftListSlide aircrafts={data} />
      )}
    </>
  );
}

export default App;

/**
 * TODO:
 * - Display map ✅
 * - Display aircrafts on the map ✅
 * - Display list of aircrafts ✅
 * - Display aircraft details ✅
 * - Expandable Slide on mobile, onclickoutside etc ✅
 * - Aircraft icon with orientation ✅
 * - Display aircrafts trail (deal with disappearing aircrafts, store aircrafts in state)
 * - Escape button to close View
 * - Build process integration
 * - Integrate with legacy frontend (add link on legacy frontend)
 * - Map/display settings
 * - Create PWA
 * - Ability to center on my current location read from browser
 * - Preserve zoom and center in local storage
 * - Move zoom control to bottom right or disable it
 * - Lazy load components for desktop and mobile
 * - Add favicon
 * - zIndex management, CSS variables
 * - Use nautical miles as default unit in maps bottom left
 * - Add altitude chart
 * - Trail with altitude
 * - Is speed / altitude increasing or decreasing
 * - Ability to customize map server
 * - Map shows sunlight like FR24
 */
