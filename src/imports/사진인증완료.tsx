import svgPaths from "./svg-v0uel8j3hj";

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
          <g clipPath="url(#clip0_1_368)" id="Battery">
            <rect height="10.3333" id="Border" opacity="0.35" rx="2.16667" stroke="var(--stroke-0, black)" width="21" x="42.833" y="0.5" />
            <path d={svgPaths.p2ad1ca80} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
            <rect fill="var(--fill-0, black)" height="7.33333" id="Capacity" rx="1.33333" width="18" x="44.333" y="2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_368">
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

function Icon() {
  return (
    <div className="h-[23.993px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.99754 13.9957">
            <path d={svgPaths.p3dd8ec0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99938" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0 size-[39.976px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.992px] px-[7.992px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] text-white tracking-[-0.4px] whitespace-nowrap">사진 인증</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#030213] h-[64.041px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[15.984px] items-center pl-[7.992px] relative size-full">
          <Button />
          <Heading />
        </div>
      </div>
    </div>
  );
}

function Span() {
  return (
    <div className="content-stretch flex h-[23.993px] items-center justify-center relative shrink-0" data-name="span">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[19px] text-center text-white tracking-[-0.456px] whitespace-nowrap">인증 완료 버튼을 눌러주세요 !</p>
    </div>
  );
}

function Target() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[19.997px] py-[10px] relative rounded-[40px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="target">
      <Span />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[47.985px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47.9852 47.9852">
        <g filter="url(#filter0_d_4_946)" id="Icon">
          <path d={svgPaths.p11366040} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.99877" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="55.9852" id="filter0_d_4_946" width="55.9852" x="-4" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_4_946" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_4_946" mode="normal" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="bg-[#323546] h-[79.987px] relative rounded-[36829000px] shrink-0 w-full" data-name="icon">
      <div aria-hidden="true" className="absolute border-2 border-[#5a5d6e] border-solid inset-0 pointer-events-none rounded-[36829000px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[18.001px] py-[2px] relative size-full">
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[23.993px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[24px] min-w-px relative text-[18px] text-center text-white tracking-[-0.36px]">인증 성공!</p>
    </div>
  );
}

function Success() {
  return (
    <div className="content-stretch flex flex-col gap-[15.984px] h-[119.963px] items-start relative shrink-0 w-[79.987px]" data-name="Success">
      <Icon1 />
      <Paragraph />
    </div>
  );
}

function CFrame() {
  return (
    <div className="flex-[1_0_0] min-h-px relative rounded-[32px] w-full" data-name="c_frame">
      <div aria-hidden="true" className="absolute border-[#cacaca] border-[3.293px] border-dashed inset-0 pointer-events-none rounded-[32px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[3.293px] relative size-full">
          <Success />
        </div>
      </div>
    </div>
  );
}

function Wrap() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] h-[345px] items-center justify-center relative shrink-0 w-full" data-name="wrap">
      <Target />
      <CFrame />
    </div>
  );
}

function Contents() {
  return (
    <div className="bg-[#1a1a2f] h-[496px] relative shrink-0 w-full" data-name="contents">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[30px] relative size-full">
          <Wrap />
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#ca3634] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[86px] py-[16px] relative size-full">
          <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-center text-white tracking-[-0.32px] whitespace-nowrap">인증 완료</p>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#030213] h-[135.964px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[24px] relative size-full">
          <Button1 />
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
    <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative rounded-[24px] size-full" data-name="사진인증완료">
      <MobileBrowserTop />
      <Container />
      <Contents />
      <Container1 />
      <MobileBrowserBottom />
    </div>
  );
}