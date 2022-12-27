import { forwardRef } from "react";
import { styled } from "../styled/Styled";
import * as style from "./Slide.css";

export const Slide = forwardRef(({ isOpen, ...props }, ref) => {
  return <section ref={ref} className={style.SlideWrapper({ isOpen })} {...props} />;
});
export const SlideContent = styled("div")(style.SlideContent);
export const SlideFooter = styled("footer")(style.SlideFooter);
export const SlideTitle = styled("h2")(style.SlideTitle);
