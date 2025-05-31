/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CloseIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CloseIcon(props: CloseIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 40"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "m10.525 30.949-1.474-1.475L18.525 20l-9.474-9.474 1.474-1.475L20 18.526l9.474-9.475 1.474 1.475L21.474 20l9.474 9.474-1.474 1.475L20 21.474z"
        }
      ></path>
    </svg>
  );
}

export default CloseIcon;
/* prettier-ignore-end */
