import { createContext, useContext, useEffect, useState } from "react";
import { DUMMY_DATA, createData } from "./dummyData";

const AircraftsContext = createContext({
  data: [] as AircraftData[],
  current: undefined as string | undefined,
  setCurrent: (hex: string) => undefined,
  clearCurrentAircraft: () => undefined,
  currentAircraftLine: [] as AircraftData[],
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

export type AircraftResults = AircraftData[];

export function useAircrafts() {
  return useContext(AircraftsContext);
}

export function AircraftsContextProvider({ children }: { children: React.ReactNode }) {
  const [aircrafts, setAircrafts] = useState<AircraftResults[]>([]);
  const [currentAircraft, setCurrentAircraft] = useState<string | undefined>(undefined);

  useEffect(() => {
    setInterval(() => {
      setAircrafts((d) => {
        return createData(d);
      });
    }, 1500);
  }, []);

  return (
    <AircraftsContext.Provider
      value={{
        data: aircrafts.at(-1) || [],
        current: currentAircraft,
        setCurrent: (hex) => void setCurrentAircraft(hex),
        clearCurrentAircraft: () => void setCurrentAircraft(undefined),
        currentAircraftLine: aircrafts.flat().filter((aircraft) => aircraft.hex === currentAircraft),
      }}
    >
      {children}
    </AircraftsContext.Provider>
  );
}
