/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InstagramLogoIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InstagramLogoIcon(props: InstagramLogoIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M20.665 10.456c-.528 0-1.056.44-1.056 1.056s.44 1.056 1.056 1.056 1.056-.44 1.056-1.056c-.088-.616-.528-1.056-1.056-1.056m-4.662 1.319a4.32 4.32 0 0 0-4.312 4.312 4.32 4.32 0 0 0 4.312 4.312 4.32 4.32 0 0 0 4.312-4.312c.088-2.376-1.848-4.312-4.312-4.312m0 7.128c-1.496 0-2.816-1.232-2.816-2.816 0-1.496 1.232-2.816 2.816-2.816 1.496 0 2.816 1.232 2.816 2.816a2.78 2.78 0 0 1-2.816 2.816"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M21.122 5.6h-10.24c-2.904 0-5.28 2.376-5.28 5.28v10.24c0 2.904 2.376 5.28 5.28 5.28h10.24c2.904 0 5.28-2.376 5.28-5.28V10.88c0-2.904-2.376-5.28-5.28-5.28m3.608 15.52c0 2.024-1.672 3.608-3.608 3.608h-10.24c-2.024 0-3.608-1.672-3.608-3.608V10.88c0-2.024 1.672-3.608 3.608-3.608h10.24c2.024 0 3.608 1.672 3.608 3.608z"
        }
      ></path>
    </svg>
  );
}

export default InstagramLogoIcon;
/* prettier-ignore-end */
