/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ContactEmailIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ContactEmailIcon(props: ContactEmailIconProps) {
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
          "M7.693 31.666q-1.152 0-1.922-.77Q5 30.124 5 28.973V11.025q0-1.15.77-1.921.772-.771 1.923-.771h24.615q1.15 0 1.921.77.771.772.771 1.922v17.949q0 1.151-.77 1.921-.772.771-1.922.771zM20 20.192 6.667 11.474v17.5a1 1 0 0 0 .288.737 1 1 0 0 0 .737.289h24.615a1 1 0 0 0 .738-.289 1 1 0 0 0 .288-.737v-17.5zm0-1.859L32.82 10H7.18zm-13.333-6.86V10v18.974a1 1 0 0 0 .288.737 1 1 0 0 0 .737.289H6.668z"
        }
      ></path>
    </svg>
  );
}

export default ContactEmailIcon;
/* prettier-ignore-end */
