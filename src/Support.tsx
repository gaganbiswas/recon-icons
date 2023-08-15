import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSupport = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    width={16}
    height={16}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath="url(#support_svg__a)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2 8c0-1.296.41-2.496 1.11-3.477l1.444 1.445A3.981 3.981 0 0 0 4 8c0 .742.202 1.436.554 2.032l-1.445 1.444A5.973 5.973 0 0 1 2 8Zm2.523 4.89C5.504 13.59 6.704 14 8 14c1.296 0 2.496-.41 3.476-1.11l-1.444-1.444A3.981 3.981 0 0 1 8 12a3.981 3.981 0 0 1-2.032-.554l-1.445 1.445Zm8.368-1.413A5.973 5.973 0 0 0 14 8c0-1.296-.41-2.496-1.11-3.477l-1.444 1.445C11.798 6.564 12 7.258 12 8s-.202 1.436-.554 2.032l1.445 1.445ZM8 2c1.296 0 2.496.41 3.476 1.11l-1.444 1.444A3.982 3.982 0 0 0 8 4c-.742 0-1.436.202-2.032.554L4.523 3.109A5.973 5.973 0 0 1 8 2ZM6 8a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="support_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSupport;