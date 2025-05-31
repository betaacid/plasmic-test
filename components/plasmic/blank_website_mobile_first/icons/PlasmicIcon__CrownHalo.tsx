/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CrownHaloIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CrownHaloIcon(props: CrownHaloIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 50 37"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect
        width={"49.609"}
        height={"35.938"}
        x={".195"}
        y={".195"}
        stroke={"#C3955A"}
        strokeWidth={".391"}
        rx={"17.969"}
      ></rect>

      <path
        fill={"#44403C"}
        d={
          "M19.876 23.997v-.705h10.248v.705zm-.051-2.427L18.6 15.12a.4.4 0 0 1-.126.024l-.126.003a.82.82 0 0 1-.604-.246.82.82 0 0 1-.245-.603.88.88 0 0 1 .245-.623.8.8 0 0 1 .605-.262.85.85 0 0 1 .622.262.85.85 0 0 1 .262.623q0 .1-.016.186a.4.4 0 0 1-.067.162l2.817 1.135 2.58-3.52a.8.8 0 0 1-.433-.715q0-.36.262-.62a.85.85 0 0 1 .622-.26q.36 0 .623.259a.84.84 0 0 1 .263.618.8.8 0 0 1-.423.719l2.57 3.519 2.817-1.135q-.031-.07-.058-.161a.7.7 0 0 1-.025-.187q0-.36.242-.623a.8.8 0 0 1 .608-.262.85.85 0 0 1 .622.262.85.85 0 0 1 .262.623.8.8 0 0 1-.263.602.88.88 0 0 1-.625.247.5.5 0 0 1-.107-.012 1 1 0 0 0-.111-.018l-1.219 6.454zm.603-.705h9.154l1.053-5.347-2.85 1.147L25 12.835l-2.786 3.83-2.849-1.147z"
        }
      ></path>
    </svg>
  );
}

export default CrownHaloIcon;
/* prettier-ignore-end */
