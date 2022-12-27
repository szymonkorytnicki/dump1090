import { createContext, useContext, useEffect, useState } from "react";
import { DUMMY_DATA } from "./dummyData";

const AircraftsContext = createContext({
  data: [] as AircraftData[],
  current: undefined as string | undefined,
  setCurrent: (hex: string) => undefined,
  clearCurrentAircraft: () => undefined,
});

export type AircraftData = {
  hex: string;
  squawk: number;
  flight: string;
  lat: number;
  lon: number;
  altitude: number;
  nucp: number;
  seen_pos: number;
  vert_rate: number;
  track: number;
  speed: number;
  category: string; // TODO
  mlat: any[];
  tisb: any[];
  rssi: number;
  messages: number;
  seen: number;
};

export function useAircrafts() {
  return useContext(AircraftsContext);
}

export function AircraftsContextProvider({ children }: { children: React.ReactNode }) {
  const [aircrafts, setAircrafts] = useState<AircraftData[]>([]);
  const [currentAircraft, setCurrentAircraft] = useState<string | undefined>(undefined);

  useEffect(() => {
    setTimeout(() => {
      setAircrafts(DUMMY_DATA);
    }, 1000);
  }, []);

  return (
    <AircraftsContext.Provider
      value={{
        data: aircrafts,
        current: currentAircraft,
        setCurrent: (hex) => void setCurrentAircraft(hex),
        clearCurrentAircraft: () => void setCurrentAircraft(undefined),
      }}
    >
      {children}
    </AircraftsContext.Provider>
  );
}
