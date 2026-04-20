import svgPaths from '../../../imports/svg-cfkf0686f0';

export function Logo() {
  return (
    <div className="h-[64.356px] relative shrink-0 w-[80px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 64.3559">
        <g clipPath="url(#clip0_logo)" id="logo">
          <path d={svgPaths.p368dee00} fill="url(#paint0_linear_logo)" id="Vector" />
          <path d={svgPaths.p7ef4000} fill="var(--fill-0, #E1302D)" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_logo" x1="5.55492" x2="64.2686" y1="59.1229" y2="-3.79745">
            <stop stopColor="#E1302D" />
            <stop offset="0.19" stopColor="#DB2D2A" />
            <stop offset="0.43" stopColor="#CD2522" />
            <stop offset="0.68" stopColor="#B41915" />
            <stop offset="0.95" stopColor="#930703" />
            <stop offset="1" stopColor="#8C0400" />
          </linearGradient>
          <clipPath id="clip0_logo">
            <rect fill="white" height="64.3559" width="80" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
