/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EmailIconSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EmailIconSvgIcon(props: EmailIconSvgIconProps) {
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

      <rect width={"40"} height={"40"} fill={"#44403C"} rx={"20"}></rect>

      <path
        fill={"#fff"}
        d={
          "M12.616 27q-.69 0-1.153-.462A1.57 1.57 0 0 1 11 25.384V14.616q0-.69.463-1.153A1.57 1.57 0 0 1 12.616 13h14.769q.69 0 1.152.463.463.462.463 1.153v10.769q0 .69-.462 1.152a1.57 1.57 0 0 1-1.154.463zM20 20.116l-8-5.232v10.5a.6.6 0 0 0 .173.443.6.6 0 0 0 .443.173h14.769a.6.6 0 0 0 .442-.173.6.6 0 0 0 .173-.443v-10.5zM20 19l7.692-5H12.308zm-8-4.116V14v11.385a.6.6 0 0 0 .173.442.6.6 0 0 0 .443.173H12z"
        }
      ></path>
    </svg>
  );
}

export default EmailIconSvgIcon;
/* prettier-ignore-end */
