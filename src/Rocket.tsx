import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRocket = ({
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
    <g fill="currentColor" clipPath="url(#rocket_svg__a)">
      <path
        fillRule="evenodd"
        d="M9.293.293A1 1 0 0 1 10 0h5a1 1 0 0 1 1 1v5a1 1 0 0 1-.293.707l-1.154 1.154.44 3.515a1 1 0 0 1-.286.831l-2 2a1 1 0 0 1-1.488-.082l-1.302-1.628-.71.71a1 1 0 0 1-1.414 0l-1.5-1.5a1 1 0 1 1 1.414-1.414l.793.793 5.5-5.5V2h-3.586l-5.5 5.5.793.793a1 1 0 0 1-1.414 1.414l-1.5-1.5a1 1 0 0 1 0-1.414l.71-.71L1.875 4.78a1 1 0 0 1-.082-1.488l2-2a1 1 0 0 1 .831-.285l3.515.44L9.293.292Zm2.047 10.781 1.421-1.421.186 1.486-.864.864-.743-.929ZM6.347 3.24l-1.486-.186-.864.864.929.743L6.347 3.24Z"
        clipRule="evenodd"
      />
      <path d="M13 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM2.707 10.707a1 1 0 0 0-1.414-1.414l-1 1a1 1 0 1 0 1.414 1.414l1-1Zm4 2.586a1 1 0 0 1 0 1.414l-1 1a1 1 0 0 1-1.414-1.414l1-1a1 1 0 0 1 1.414 0Zm-2-.586a1 1 0 1 0-1.414-1.414l-2.5 2.5a1 1 0 1 0 1.414 1.414l2.5-2.5Z" />
    </g>
    <defs>
      <clipPath id="rocket_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRocket;
