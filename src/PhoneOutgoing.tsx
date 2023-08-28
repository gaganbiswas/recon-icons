import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPhoneOutgoing = ({
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
    <g clipPath="url(#phone-outgoing_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 1h4m0 0v4m0-4-4 4m4 6.482v2.107a1.403 1.403 0 0 1-.957 1.337 1.41 1.41 0 0 1-.578.068 13.95 13.95 0 0 1-6.075-2.156 13.714 13.714 0 0 1-4.223-4.216 13.885 13.885 0 0 1-2.161-6.09A1.403 1.403 0 0 1 2.406 1h2.112a1.41 1.41 0 0 1 1.408 1.208 9.06 9.06 0 0 0 .493 1.974 1.402 1.402 0 0 1-.317 1.483l-.894.892a11.251 11.251 0 0 0 4.224 4.215l.894-.892a1.408 1.408 0 0 1 1.485-.316 9.056 9.056 0 0 0 1.978.492 1.408 1.408 0 0 1 1.21 1.426Z"
      />
    </g>
    <defs>
      <clipPath id="phone-outgoing_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPhoneOutgoing;
