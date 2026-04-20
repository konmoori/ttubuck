import svgPaths from "./svg-rpjst1itsj";

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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[360px]" data-name="Mobile_Browser_top">
      <HedaerBar />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Icon">
          <path d={svgPaths.p18232480} id="Vector" stroke="var(--stroke-0, #E1302D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6.66667" />
          <path d={svgPaths.p9836f60} id="Vector_2" stroke="var(--stroke-0, #E1302D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6.66667" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[24px] relative rounded-[22369600px] shrink-0 size-[128px]" data-name="icon">
      <Icon1 />
    </div>
  );
}

function H() {
  return (
    <div className="h-[39px] relative shrink-0 w-[103.875px]" data-name="h3">
      <p className="-translate-x-1/2 absolute font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-none left-[51px] text-[26px] text-center text-white top-0 tracking-[-0.52px] whitespace-nowrap">사용 완료!</p>
    </div>
  );
}

function Span() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[163.104px]" data-name="span">
      <p className="-translate-x-1/2 absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none left-[80px] text-[15px] text-[rgba(255,255,255,0.9)] text-center top-[-1px] tracking-[-0.3px] whitespace-nowrap">쿠폰이 사용 처리되었습니다</p>
    </div>
  );
}

function Txt() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-name="txt">
      <H />
      <Span />
    </div>
  );
}

function Use() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-center relative shrink-0" data-name="use">
      <Icon />
      <Txt />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[86px] py-[16px] relative size-full">
          <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#e1302d] text-[16px] text-center tracking-[-0.32px] whitespace-nowrap">미션 홈으로</p>
        </div>
      </div>
    </div>
  );
}

function Contents() {
  return (
    <div className="bg-gradient-to-b flex-[1_0_0] from-[#f63c3c] min-h-px relative to-[#e47f53] w-[360px]" data-name="contents">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[23px] items-center justify-center pb-[25px] px-[25px] relative size-full">
          <Use />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Bottom1() {
  return (
    <div className="bg-white h-[34px] relative shrink-0 w-full" data-name="bottom">
      <div className="-translate-x-1/2 absolute bg-black bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function MobileBrowserBottom() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[375px]" data-name="Mobile-Browser-bottom">
      <Bottom1 />
    </div>
  );
}

function Bottom() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="bottom">
      <MobileBrowserBottom />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative rounded-[24px] size-full" data-name="쿠폰사용">
      <MobileBrowserTop />
      <Contents />
      <Bottom />
    </div>
  );
}