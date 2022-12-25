import clsx from "clsx";
import { PropsWithChildren } from "react";

/**
 * A helper function to create a styled component.
 *
 * @example const MyComponent = styled('div')('my-class'); // <MyComponent />
 * @param Component The component to style.
 * @returns A function that takes a className and returns a function that takes props and returns a styled component.
 */
export function styled<P extends PropsWithChildren<object>>(Component: React.ComponentType<P> | string) {
  return function StyledCSS(className: string | undefined) {
    return function StyledProps(props: P & { className?: string }) {
      return <Component {...props} className={clsx(className, props.className)} />;
    };
  };
}
