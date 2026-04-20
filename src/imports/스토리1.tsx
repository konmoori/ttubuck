import svgPaths from "./svg-dcqtk64bsr";
import imgRectangle from "figma:asset/da6e611ba3fb114a65f794dd2a705ca649028cdf.png";
import imgRectangle1 from "figma:asset/c330b94c5b45ae68ba047eb0c588ed0ff996ff31.png";
import imgRectangle2 from "figma:asset/fde2aa1fdfbe3ffd9ca536e1906e4e57957cb799.png";
import imgRectangle3 from "figma:asset/aae84368c1c8ccb818f94a5f27d712a70e517731.png";
import imgRectangle4 from "figma:asset/424b9ea49920ca50cf0d55b850d7acdaf679e52a.png";

function TimeStyle() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Time Style">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[15px] text-black text-center tracking-[-0.24px] whitespace-nowrap">9:41</p>
    </div>
  );
}

function Right() {
  return (
    <div className="h-[11.333px] relative shrink-0 w-[66.661px]" data-name="right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66.6611 11.3333">
        <g id="right">
          <path d={svgPaths.p242b4c00} fill="var(--fill-0, black)" id="Cellular Connection" />
          <path d={svgPaths.p399b0600} fill="var(--fill-0, black)" id="Wifi" />
          <g clipPath="url(#clip0_1_349)" id="Battery">
            <rect height="10.3333" id="Border" opacity="0.35" rx="2.16667" stroke="var(--stroke-0, black)" width="21" x="42.833" y="0.5" />
            <path d={svgPaths.p2ad1ca80} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
            <rect fill="var(--fill-0, black)" height="7.33333" id="Capacity" rx="1.33333" width="18" x="44.333" y="2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_349">
            <rect fill="white" height="11.3333" transform="translate(42.333)" width="24.328" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function HedaerBar() {
  return (
    <div className="relative shrink-0 w-full" data-name="hedaer_bar">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <TimeStyle />
          <Right />
        </div>
      </div>
    </div>
  );
}

function MobileBrowserTop() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[360px]" data-name="Mobile_Browser_top">
      <HedaerBar />
    </div>
  );
}

function Skip() {
  return (
    <div className="relative shrink-0 w-full" data-name="skip">
      <div className="flex flex-row justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-end px-[20px] py-[10px] relative size-full">
          <p className="font-['Pretendard_Variable:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#030213] text-[14px] text-center tracking-[-0.28px] whitespace-nowrap">건너뛰기</p>
        </div>
      </div>
    </div>
  );
}

function Txtbox() {
  return (
    <div className="bg-[#f3f3f3] h-[141px] overflow-clip relative rounded-[14px] shrink-0 w-[197px]" data-name="txtbox">
      <p className="-translate-x-1/2 absolute font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[1.3] left-1/2 text-[#030213] text-[16px] text-center top-[calc(50%-10.5px)] whitespace-nowrap">“ 내 이름은 뚜벅 ”</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <div className="absolute inset-[0_25.56%_0_0]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
        </div>
      </div>
      <div className="absolute inset-[0_0_0_28.87%]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle1} />
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[32.15%_44.01%_56.94%_46.69%]" data-name="Group">
      <div className="absolute inset-[36.2%_45.82%_60.43%_48.11%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.473 4.58307">
          <path d={svgPaths.p34a90d80} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[32.15%_44.01%_56.94%_46.69%]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle4} />
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[19.38%_39.13%_56.94%_40.57%]" data-name="Group">
      <div className="absolute inset-[19.38%_51.87%_68.82%_40.57%]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle2} />
        </div>
      </div>
      <div className="absolute inset-[19.38%_39.13%_68.82%_53.32%]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle3} />
        </div>
      </div>
      <Group2 />
    </div>
  );
}

function LogoC2() {
  return (
    <div className="absolute h-[135.881px] left-0 overflow-clip top-0 w-[172.447px]" data-name="logo_c">
      <Group />
      <Group1 />
    </div>
  );
}

function LogoC1() {
  return (
    <div className="-translate-x-1/2 absolute h-[143.4px] left-[calc(50%+0.72px)] top-0 w-[172.447px]" data-name="logo_c">
      <div className="absolute inset-[89.89%_3.94%_0_7.16%]">
        <div className="absolute inset-[-42.86%_-4.05%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 165.727 26.9307">
            <g filter="url(#filter0_f_1_347)" id="Ellipse 18">
              <ellipse cx="82.8636" cy="13.4653" fill="url(#paint0_linear_1_347)" fillOpacity="0.56" rx="76.6488" ry="7.25056" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="26.9307" id="filter0_f_1_347" width="165.727" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_347" stdDeviation="3.10738" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_347" x1="6.21477" x2="159.512" y1="13.4653" y2="13.4653">
                <stop stopColor="#D9D9D9" />
                <stop offset="1" stopColor="#111111" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <LogoC2 />
    </div>
  );
}

function LogoC() {
  return (
    <div className="h-[143.4px] relative shrink-0 w-[217px]" data-name="logo_c">
      <p className="-translate-x-1/2 absolute font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[normal] left-1/2 text-[#030213] text-[15px] text-center top-[39px] tracking-[-0.24px] whitespace-nowrap">ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎㄱㄴㄷ</p>
      <LogoC1 />
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0" data-name="top">
      <Txtbox />
      <LogoC />
    </div>
  );
}

function Circle() {
  return <div className="bg-[#e8e8e8] rounded-[14.428px] shrink-0 size-[7.935px]" data-name="circle" />;
}

function Circle1() {
  return <div className="bg-[#e8e8e8] rounded-[14.428px] shrink-0 size-[7.935px]" data-name="circle" />;
}

function Circle2() {
  return <div className="bg-[#ff6665] rounded-[14.428px] shrink-0 size-[7.935px]" data-name="circle" />;
}

function PageNation() {
  return (
    <div className="content-stretch flex gap-[7px] items-start justify-center pb-[33px] relative shrink-0 w-full" data-name="page_nation">
      <Circle />
      <Circle1 />
      <Circle2 />
    </div>
  );
}

function Contents() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="contents">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-between pt-[107px] relative size-full">
          <Top />
          <PageNation />
        </div>
      </div>
    </div>
  );
}

function Bottom() {
  return (
    <div className="bg-white h-[34px] relative shrink-0 w-full" data-name="bottom">
      <div className="-translate-x-1/2 absolute bg-black bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function MobileBrowserBottom() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[375px]" data-name="Mobile-Browser-bottom">
      <Bottom />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative rounded-[24px] size-full" data-name="스토리1">
      <MobileBrowserTop />
      <Skip />
      <Contents />
      <MobileBrowserBottom />
    </div>
  );
}