import { AircraftListPane } from "./components/aircraft-list-pane/AircraftListPane";
import { Header } from "./components/header/Header";
import { Map } from "./components/map/Map";
import { UTCTime } from "./components/utc-time/UTCTime";
import { useAircrafts } from "./utils/useAircrafts";
import { CurrentAircraftView } from "./components/current-aircraft-view/CurrentAircraftView";
import { AircraftListSlide } from "./components/aircraft-list-slide/AircraftListSlide";

function App() {
  const { data, current, setCurrent, clearCurrentAircraft } = useAircrafts();
  return (
    <div className="App">
      <Header>
        <span>Dump1090</span>
        <UTCTime />
      </Header>
      <Map aircrafts={data} onAircraftClick={setCurrent} />
      <AircraftListPane aircrafts={data} />
      {current && (
        <>
          {/* Desktop */}
          <CurrentAircraftView
            aircraftData={data.find((aircraft) => aircraft.hex === current)}
            onClose={clearCurrentAircraft}
          />
        </>
      )}
      {current ? (
        <CurrentAircraftSlide
          aircraftData={data.find((aircraft) => aircraft.hex === current)}
          onClose={clearCurrentAircraft}
          // TODO onclickoutside
        />
      ) : (
        <AircraftListSlide aircrafts={data} />
      )}
    </div>
  );
}

export default App;

/**
 * TODO:
 * - Display map ✅
 * - Display aircrafts on the map ✅
 * - Display list of aircrafts ✅
 * - Display aircraft details ✅
 * - Build process integration
 * - Display settings
 * - Display aircrafts trail
 * - Centering map on current location
 * - Preserve zoom and center in local storage
 * - Create PWA
 * - Ability to center on my current location read from browser
 * - Ability to customize map server
 * - Move zoom control to bottom right or disable it
 * - Lazy load components for desktop and mobile
 * - Add favicon
 * - zIndex management
 * - use nautical miles as default unit in bottom left
 * - collapsible Pane
 * - Add altitude chart
 */
