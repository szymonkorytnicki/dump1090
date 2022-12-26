import { useEffect, useState } from "react";
import { DUMMY_DATA } from "./dummyData";

export type AircraftData = {
  hex: string;
  squawk: string;
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
  const [aircrafts, setAircrafts] = useState<AircraftData[]>([]);
  const [currentAircraft, setCurrentAircraft] = useState<string | undefined>(undefined);
  const clearCurrentAircraft = () => setCurrentAircraft(undefined);

  useEffect(() => {
    setTimeout(() => {
      setAircrafts(DUMMY_DATA);
    }, 1000);
  });
  return { data: aircrafts, current: currentAircraft, setCurrent: setCurrentAircraft, clearCurrentAircraft };
}
