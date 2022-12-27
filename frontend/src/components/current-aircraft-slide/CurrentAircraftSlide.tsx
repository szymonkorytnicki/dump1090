import { useRef, useState } from "react";
import { AircraftData, useAircrafts } from "../../utils/useAircrafts";
import { useOnClickOutside } from "../../utils/useOnclickoutside";
import { Slide, SlideContent, SlideTitle } from "../slide/Slide";

interface CurrentAircraftSlideProps {
  aircraftData: AircraftData | undefined;
  onClose: () => void;
}

export function CurrentAircraftSlide({ aircraftData, clear }: CurrentAircraftSlideProps) {
  const { clearCurrentAircraft } = useAircrafts();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const slideRef = useRef();
  useOnClickOutside(slideRef, () => {
    clearCurrentAircraft();
  });

  return (
    <Slide ref={slideRef} isOpen={isOpen}>
      <SlideTitle>
        Current Aircraft <button onClick={() => setIsOpen(!isOpen)}>toggle</button>
      </SlideTitle>
      <SlideContent>
        <ul>
          <li>Hex: {aircraftData?.hex}</li>
          <li>Flight: {aircraftData?.flight}</li>
          <li>Lat: {aircraftData?.lat}</li>
          <li>Lon: {aircraftData?.lon}</li>
          <li>Altitude: {aircraftData?.altitude}</li>
          <li>Speed: {aircraftData?.speed}</li>
          <li>Vertical rate: {aircraftData?.vert_rate}</li>
          <li>Squawk: {aircraftData?.squawk}</li>
        </ul>
      </SlideContent>
    </Slide>
  );
}
