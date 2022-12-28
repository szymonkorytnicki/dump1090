import { useEffect } from "react";
import { styled } from "../styled/Styled";
import * as style from "./View.css";

const StyledView = styled("section")(style.ViewWrapper);
export function View({ onClose, children }: { onClose: () => void; children: React.ReactNode }) {
  useEffect(() => {
    const onEscClick = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        console.log("Escape");
        onClose();
      }
    };
    document.addEventListener("keydown", onEscClick);
    return () => {
      document.removeEventListener("keydown", onEscClick);
    };
  }, []);
  return <StyledView>{children}</StyledView>;
}
export const ViewContent = styled("div")(style.ViewContent);
export const ViewFooter = styled("footer")(style.ViewFooter);
export const ViewTitle = styled("h2")(style.ViewTitle);
