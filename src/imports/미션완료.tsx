import svgPaths from "./svg-r6z2cyjgre";
import imgImg from "figma:asset/f26a24f11945616fc5f617110dd0c23a3ec93469.png";

function Icon1() {
  return (
    <div className="relative shrink-0 size-[39.995px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.9947 39.9947">
        <g id="Icon">
          <path d={svgPaths.p304f4300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33289" />
          <path d="M19.9976 13.3305V34.9943" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33289" />
          <path d={svgPaths.p2409b200} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33289" />
          <path d={svgPaths.pf7ace80} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33289" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[115.17px] px-[20.003px] rounded-[43.754px] size-[80px] top-[6px]" style={{ backgroundImage: "linear-gradient(146.31deg, rgb(246, 60, 60) 15.859%, rgb(228, 127, 83) 92.037%)" }} data-name="icon">
      <Icon1 />
    </div>
  );
}

function Tit() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-0 text-center top-[102px] w-[310.343px]" data-name="tit">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#030213] text-[30px] tracking-[-0.9px] w-full">미션 완료!</p>
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#717182] text-[16px] tracking-[-0.288px] w-full">별을 따라 걷다 보면 Mission Complete</p>
    </div>
  );
}

function Wrap() {
  return (
    <div className="-translate-x-1/2 absolute h-[184px] left-[calc(50%+0.17px)] top-[28px] w-[310.343px]" data-name="wrap">
      <Icon />
      <Tit />
      <div className="absolute flex h-[60.084px] items-center justify-center left-[214px] top-[24px] w-[63.17px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-[-78.07deg]">
          <div className="h-[54px] relative w-[50px]" data-name="img">
            <div className="absolute inset-0 opacity-31 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImg} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[54px] left-[221px] top-[6px] w-[50px]" data-name="img">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImg} />
        </div>
      </div>
      <div className="absolute flex h-[60.084px] items-center justify-center left-[51px] top-[51px] w-[63.17px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-[-78.07deg]">
          <div className="h-[54px] relative w-[50px]" data-name="img">
            <div className="absolute inset-0 opacity-31 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImg} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[73.513px] items-center justify-center left-[18px] top-[31px] w-[73.56px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[-134.52deg]">
          <div className="h-[54px] relative w-[50px]" data-name="img">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Top() {
  return (
    <div className="h-[215px] relative shrink-0 w-[360px]" data-name="top">
      <Wrap />
    </div>
  );
}

function Span() {
  return (
    <div className="h-full relative shrink-0" data-name="span">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pt-[2px] relative size-full">
          <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#5b5b70] text-[14px] text-center whitespace-nowrap">획득한 포인트</p>
        </div>
      </div>
    </div>
  );
}

function Point1() {
  return (
    <div className="relative shrink-0 w-full" data-name="point">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] relative size-full">
          <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#ca3633] text-[0px] text-center tracking-[-0.36px] whitespace-nowrap">
            <span className="font-['Pretendard_Variable:Light',sans-serif] font-light leading-none text-[36px]">+</span>
            <span className="leading-none text-[36px]">40</span>
            <span className="leading-none text-[36px] tracking-[1.8px]">0</span>
            <span className="leading-none text-[28px] tracking-[1.4px]">P</span>
            <span className="leading-none text-[28px]">{` `}</span>
          </p>
          <div className="flex flex-row items-center self-stretch">
            <Span />
          </div>
        </div>
      </div>
    </div>
  );
}

function Txt() {
  return (
    <div className="bg-[#e1302d] content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="txt">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">포인트 사용TIP!</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Pretendard_Variable:Light',sans-serif] font-light leading-[1.36] min-w-px relative text-[#5b5b70] text-[14px] tracking-[-0.07px]">지금 바로 주변 제휴매장에서 포인트를 사용해보세요!</p>
    </div>
  );
}

function Tip() {
  return (
    <div className="bg-[#fff5f5] relative rounded-[16px] shrink-0 w-full" data-name="tip">
      <div className="content-stretch flex flex-col gap-[9px] items-start px-[19px] py-[18px] relative size-full">
        <Txt />
        <Paragraph />
        <p className="font-['Pretendard_Variable:Light',sans-serif] font-light leading-none relative shrink-0 text-[#c53835] text-[14px] tracking-[-0.14px] w-[196px]">포인트를 쿠폰으로 교환해드려요.</p>
      </div>
    </div>
  );
}

function Reward() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[13px] items-center justify-center px-[24px] py-[23px] relative rounded-[16px] shrink-0 w-[300px]" data-name="reward">
      <div aria-hidden="true" className="absolute border border-[#f63c3c] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_7px_24px_0px_rgba(0,0,0,0.07)]" />
      <Point1 />
      <Tip />
    </div>
  );
}

function Point() {
  return (
    <div className="content-stretch flex flex-col h-[249px] items-center pt-[4px] relative shrink-0 w-full" data-name="point">
      <Reward />
    </div>
  );
}

function Contents() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="contents">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[20px] relative size-full">
          <Top />
          <Point />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#ca3633] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[86px] py-[16px] relative size-full">
          <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-center text-white tracking-[-0.32px] whitespace-nowrap">포인트 사용가능 매장 확인</p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e1302d] border-[0.7px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[86px] py-[16px] relative size-full">
          <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#e1302d] text-[16px] text-center tracking-[-0.32px] whitespace-nowrap">미션 홈으로 돌아가기</p>
        </div>
      </div>
    </div>
  );
}

function MissionDetail() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="MissionDetail">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center pb-[25px] pt-[3.89px] px-[24px] relative size-full">
          <Button />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[360px]" data-name="main">
      <div className="content-stretch flex flex-col gap-[14px] items-start pt-[50px] relative size-full">
        <Contents />
        <MissionDetail />
      </div>
    </div>
  );
}

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
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[360px]" data-name="Mobile_Browser_top">
      <HedaerBar />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.p8cc5b00} fill="var(--fill-0, #FF6665)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#ff6665] text-[11px] text-center tracking-[-0.22px] uppercase whitespace-nowrap">
        <p className="leading-none">미션</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p1f25e00} fill="var(--fill-0, #A8A29E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#a8a29e] text-[11px] text-center tracking-[-0.22px] uppercase whitespace-nowrap">
        <p className="leading-none">주변</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Icon">
          <path d={svgPaths.p2d683a00} id="Vector" stroke="var(--stroke-0, #A8A29E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          <path d="M11 7.33333V19.25" id="Vector_2" stroke="var(--stroke-0, #A8A29E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          <path d={svgPaths.p146f4580} id="Vector_3" stroke="var(--stroke-0, #A8A29E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          <path d={svgPaths.p45e9548} id="Vector_4" stroke="var(--stroke-0, #A8A29E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#a8a29e] text-[11px] text-center tracking-[-0.22px] uppercase whitespace-nowrap">
        <p className="leading-none">스토어</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p37375e00} fill="var(--fill-0, #A8A29E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#a8a29e] text-[11px] text-center tracking-[-0.22px] uppercase whitespace-nowrap">
        <p className="leading-none">마이</p>
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
    <div className="-translate-x-1/2 absolute bottom-0 content-stretch flex flex-col items-center left-[calc(50%-0.5px)]" data-name="bottom">
      <div className="backdrop-blur-[6px] bg-white content-stretch flex gap-[34px] h-[59px] items-end justify-center px-[16px] relative shrink-0 w-[360px]" data-name="Bottom_nav_bar">
        <div aria-hidden="true" className="absolute border-[#ededed] border-solid border-t inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-col gap-[5px] h-[59px] items-center justify-center pb-[8px] pt-[14px] px-[16px] relative rounded-[16px] shrink-0" data-name="Link">
          <Container />
          <Margin />
        </div>
        <div className="content-stretch flex flex-col gap-[5px] h-[59px] items-center justify-center pb-[8px] pt-[14px] px-[16px] relative shrink-0" data-name="Link">
          <Container1 />
          <Margin1 />
        </div>
        <div className="content-stretch flex flex-col gap-[5px] h-[59px] items-center justify-center pb-[8px] pt-[14px] px-[11px] relative shrink-0" data-name="Link">
          <Icon2 />
          <Margin2 />
        </div>
        <div className="content-stretch flex flex-col gap-[5px] h-[59px] items-center justify-center pb-[8px] pt-[14px] px-[16px] relative shrink-0" data-name="Link">
          <Container2 />
          <Margin3 />
        </div>
      </div>
      <MobileBrowserBottom />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative rounded-[24px] size-full" data-name="미션완료">
      <Main />
      <MobileBrowserTop />
      <Bottom />
    </div>
  );
}