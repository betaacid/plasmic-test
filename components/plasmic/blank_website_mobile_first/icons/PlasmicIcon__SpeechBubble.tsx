/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SpeechBubbleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SpeechBubbleIcon(props: SpeechBubbleIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 128 93"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect
        width={"127"}
        height={"92"}
        x={".5"}
        y={".5"}
        stroke={"#C3955A"}
        rx={"46"}
      ></rect>

      <path
        fill={"#44403C"}
        d={
          "M57.38 50.961 64 46.946l6.62 4.015-1.759-7.533 5.857-5.025-7.697-.682L64 30.654l-3.02 7.067-7.698.682 5.857 5.025zM40 68.04V26.397q0-1.638 1.13-2.768 1.128-1.13 2.767-1.129h40.206q1.638 0 2.768 1.13T88 26.396v29.539q0 1.638-1.13 2.768-1.128 1.13-2.767 1.13H48.205zm7.217-10.462h36.886q.615 0 1.128-.513t.512-1.128v-29.54q0-.615-.512-1.128-.513-.512-1.128-.512H43.897q-.615 0-1.128.512-.512.513-.512 1.128v36.266z"
        }
      ></path>
    </svg>
  );
}

export default SpeechBubbleIcon;
/* prettier-ignore-end */
