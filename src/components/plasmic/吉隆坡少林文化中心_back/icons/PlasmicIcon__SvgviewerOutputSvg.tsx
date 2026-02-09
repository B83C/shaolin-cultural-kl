/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SvgviewerOutputSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SvgviewerOutputSvgIcon(props: SvgviewerOutputSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 124 124"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect width={"124"} height={"124"} fill={"#F97316"} rx={"24"}></rect>

      <path
        fill={"#fff"}
        d={
          "M19.375 36.782v63.843a4 4 0 0 0 4 4h63.843c3.564 0 5.348-4.309 2.829-6.828L26.203 33.953c-2.52-2.52-6.828-.735-6.828 2.829"
        }
      ></path>

      <circle cx={"63.211"} cy={"37.539"} r={"18.164"} fill={"#000"}></circle>

      <rect
        width={"17.569"}
        height={"17.388"}
        x={"81.133"}
        y={"80.72"}
        fill={"#FDBA74"}
        opacity={".4"}
        rx={"4"}
        transform={"rotate(-45 81.133 80.72)"}
      ></rect>
    </svg>
  );
}

export default SvgviewerOutputSvgIcon;
/* prettier-ignore-end */
