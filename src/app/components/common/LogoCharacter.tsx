import svgPaths from '../../../imports/svg-dcqtk64bsr';
import imgRectangle from "figma:asset/da6e611ba3fb114a65f794dd2a705ca649028cdf.png";
import imgRectangle1 from "figma:asset/c330b94c5b45ae68ba047eb0c588ed0ff996ff31.png";
import imgRectangle2 from "figma:asset/fde2aa1fdfbe3ffd9ca536e1906e4e57957cb799.png";
import imgRectangle3 from "figma:asset/aae84368c1c8ccb818f94a5f27d712a70e517731.png";
import imgRectangle4 from "figma:asset/424b9ea49920ca50cf0d55b850d7acdaf679e52a.png";

export function LogoCharacter() {
  return (
    <div className="h-[143.4px] relative shrink-0 w-[217px]">
      <p className="-translate-x-1/2 absolute font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[normal] left-1/2 text-[#030213] text-[15px] text-center top-[39px] tracking-[-0.24px] whitespace-nowrap">ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎㄱㄴㄷ</p>
      <div className="-translate-x-1/2 absolute h-[143.4px] left-[calc(50%+0.72px)] top-0 w-[172.447px]">
        <div className="absolute inset-[89.89%_3.94%_0_7.16%]">
          <div className="absolute inset-[-42.86%_-4.05%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 165.727 26.9307">
              <g filter="url(#filter0_f_logo_c)" id="Ellipse 18">
                <ellipse cx="82.8636" cy="13.4653" fill="url(#paint0_linear_logo_c)" fillOpacity="0.56" rx="76.6488" ry="7.25056" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="26.9307" id="filter0_f_logo_c" width="165.727" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_logo_c" stdDeviation="3.10738" />
                </filter>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_logo_c" x1="6.21477" x2="159.512" y1="13.4653" y2="13.4653">
                  <stop stopColor="#D9D9D9" />
                  <stop offset="1" stopColor="#111111" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute h-[135.881px] left-0 overflow-clip top-0 w-[172.447px]">
          <div className="absolute contents inset-0">
            <div className="absolute inset-[0_25.56%_0_0]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
              </div>
            </div>
            <div className="absolute inset-[0_0_0_28.87%]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle1} />
              </div>
            </div>
          </div>
          <div className="absolute contents inset-[19.38%_39.13%_56.94%_40.57%]">
            <div className="absolute inset-[19.38%_51.87%_68.82%_40.57%]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle2} />
              </div>
            </div>
            <div className="absolute inset-[19.38%_39.13%_68.82%_53.32%]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle3} />
              </div>
            </div>
            <div className="absolute contents inset-[32.15%_44.01%_56.94%_46.69%]">
              <div className="absolute inset-[36.2%_45.82%_60.43%_48.11%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.473 4.58307">
                  <path d={svgPaths.p34a90d80} fill="var(--fill-0, white)" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[32.15%_44.01%_56.94%_46.69%]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle4} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
