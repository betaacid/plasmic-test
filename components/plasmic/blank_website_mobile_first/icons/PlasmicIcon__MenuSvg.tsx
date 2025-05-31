/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MenuSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MenuSvgIcon(props: MenuSvgIconProps) {
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
          "M10 26.587v-1.25h20v1.25zm0-5.962v-1.25h20v1.25zm0-5.962v-1.25h20v1.25z"
        }
      ></path>
    </svg>
  );
}

export default MenuSvgIcon;
/* prettier-ignore-end */
