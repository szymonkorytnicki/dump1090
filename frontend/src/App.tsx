import { Header } from "./components/header/Header";
import { Map } from "./components/map/Map";
import { Navigator } from "./components/navigator/Navigator";
import { useAircrafts } from "./utils/useAircrafts";

function App() {
  // const { data } = useAircrafts();
  return (
    <div className="App">
      <Header>Dump1090</Header>
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
 */
