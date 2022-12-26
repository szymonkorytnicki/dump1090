import { AircraftData } from "../../utils/useAircrafts";
import { Slide, SlideContent, SlideFooter, SlideTitle } from "../slide/Pane";

interface AircraftListSlideProps {
  aircrafts: AircraftData[];
}

export function AircraftListSlide({ aircrafts }: AircraftListSlideProps) {
  return (
    <Slide>
      <SlideTitle>Aircrafts</SlideTitle>
      <SlideContent>
        <ul>
          {aircrafts.map((aircraft) => (
            <li key={aircraft.hex}>{aircraft.hex}</li>
          ))}
        </ul>
      </SlideContent>
      <SlideFooter>{aircrafts.length} aircrafts</SlideFooter>
    </Slide>
  );
}
