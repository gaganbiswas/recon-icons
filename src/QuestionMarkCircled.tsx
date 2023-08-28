import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgQuestionMarkCircled = ({
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
    <g fill="currentColor" clipPath="url(#question-mark-circled_svg__a)">
      <path d="M8 5.5c-.498 0-1 .458-1 1.168a1 1 0 0 1-2 0C5 5.065 6.198 3.5 8 3.5c1.75 0 3 1.497 3 3 0 .678-.174 1.242-.512 1.694-.326.434-.739.675-1.04.825-.103.052-.218.104-.307.145a13.172 13.172 0 0 0-.171.08A1 1 0 0 1 7 9c0-.305.08-.594.242-.85.154-.241.352-.404.516-.513a3.4 3.4 0 0 1 .452-.246l.139-.064c.073-.034.133-.061.204-.096.198-.1.285-.171.334-.237C8.925 6.945 9 6.822 9 6.5c0-.497-.45-1-1-1Zm0 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
      <path
        fillRule="evenodd"
        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="question-mark-circled_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgQuestionMarkCircled;
