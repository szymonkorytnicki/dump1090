import { Header } from "./components/header/Header";
import { Map } from "./components/map/Map";
import { Navigator } from "./components/navigator/Navigator";
import { UTCTime } from "./components/utc-time/UTCTime";

function App() {
  return (
    <div className="App">
      <Header>
        <span>Dump1090</span>
        <UTCTime />
      </Header>
      <Map />
      <Navigator />
    </div>
  );
}

export default App;

/**
 * TODO:
 * - Display map
 * - Display aircrafts on the map
 * - Display list of aircrafts
 * - Display aircraft details
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
