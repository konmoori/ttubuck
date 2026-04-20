import svgPaths from "./svg-n21pbs55af";

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
          <g clipPath="url(#clip0_1_330)" id="Battery">
            <rect height="10.3333" id="Border" opacity="0.35" rx="2.16667" stroke="var(--stroke-0, black)" width="21" x="42.833" y="0.5" />
            <path d={svgPaths.p2ad1ca80} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
            <rect fill="var(--fill-0, black)" height="7.33333" id="Capacity" rx="1.33333" width="18" x="44.333" y="2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_330">
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

function Logo() {
  return (
    <div className="h-[64.356px] relative shrink-0 w-[80px]" data-name="logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 64.3559">
        <g clipPath="url(#clip0_1_326)" id="logo">
          <path d={svgPaths.p368dee00} fill="url(#paint0_linear_1_326)" id="Vector" />
          <path d={svgPaths.p7ef4000} fill="var(--fill-0, #E1302D)" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_326" x1="5.55492" x2="64.2686" y1="59.1229" y2="-3.79745">
            <stop stopColor="#E1302D" />
            <stop offset="0.19" stopColor="#DB2D2A" />
            <stop offset="0.43" stopColor="#CD2522" />
            <stop offset="0.68" stopColor="#B41915" />
            <stop offset="0.95" stopColor="#930703" />
            <stop offset="1" stopColor="#8C0400" />
          </linearGradient>
          <clipPath id="clip0_1_326">
            <rect fill="white" height="64.3559" width="80" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-center relative shrink-0" data-name="top">
      <div className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[#030213] text-[26px] text-center tracking-[-0.52px] whitespace-nowrap">
        <p className="leading-[1.34] mb-0">안녕하세요</p>
        <p className="leading-[1.34]">뚜벅 입니다</p>
      </div>
      <Logo />
    </div>
  );
}

function RiKakaoTalkFill() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ri:kakao-talk-fill">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ri:kakao-talk-fill">
          <path d={svgPaths.p2d640300} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#fee500] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center px-[86px] py-[16px] relative size-full">
          <RiKakaoTalkFill />
          <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#030213] text-[16px] text-center tracking-[-0.16px] whitespace-nowrap">카카오로 시작하기</p>
        </div>
      </div>
    </div>
  );
}

function DeviconGoogle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="devicon:google">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_319)" id="devicon:google">
          <path d={svgPaths.p19853700} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p24dbf480} fill="var(--fill-0, #E33629)" id="Vector_2" />
          <path d={svgPaths.p2d1024f0} fill="var(--fill-0, #F8BD00)" id="Vector_3" />
          <path d={svgPaths.p1ecd2a80} fill="var(--fill-0, #587DBD)" id="Vector_4" />
          <path d={svgPaths.p3f06c700} fill="var(--fill-0, #319F43)" id="Vector_5" />
        </g>
        <defs>
          <clipPath id="clip0_1_319">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#d2d2d2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center px-[86px] py-[16px] relative size-full">
          <DeviconGoogle />
          <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#030213] text-[16px] text-center tracking-[-0.16px] whitespace-nowrap">구글로 시작하기</p>
        </div>
      </div>
    </div>
  );
}

function Fast() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="fast">
      <Button />
      <Button1 />
    </div>
  );
}

function Contents() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="contents">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[100px] items-center justify-center px-[20px] relative size-full">
          <Top />
          <Fast />
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
    <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative rounded-[24px] size-full" data-name="로그인">
      <MobileBrowserTop />
      <Contents />
      <MobileBrowserBottom />
    </div>
  );
}