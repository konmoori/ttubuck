import svgPaths from "./svg-p23521k7ap";
import imgImg from "figma:asset/f26a24f11945616fc5f617110dd0c23a3ec93469.png";

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
    <div className="relative shrink-0 size-[43px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 43">
        <g id="Icon">
          <path d={svgPaths.p88bede0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d={svgPaths.p1bdc4300} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
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
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#030213] text-[27px] tracking-[-0.81px] w-full">쿠폰이 발급되었어요!</p>
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#717182] text-[16px] tracking-[-0.288px] w-full">매장에서 쿠폰을 사용해보세요</p>
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
      <div className="absolute flex h-[60.084px] items-center justify-center left-[48px] top-[52px] w-[63.17px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-[-78.07deg]">
          <div className="h-[54px] relative w-[50px]" data-name="img">
            <div className="absolute inset-0 opacity-31 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImg} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[73.513px] items-center justify-center left-[15px] top-[32px] w-[73.56px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
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
    <div className="h-[196px] relative shrink-0 w-[360px]" data-name="top">
      <Wrap />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p26ddc800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p35ba4680} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="bg-[#ede9e9] relative rounded-[22369600px] shrink-0 size-[40px]" data-name="icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Span() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="span">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#717182] text-[12px] whitespace-nowrap">발급 매장</p>
    </div>
  );
}

function H() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="h3">
      <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#030213] text-[16px] whitespace-nowrap">카페 모카</p>
    </div>
  );
}

function Txt() {
  return (
    <div className="h-[42px] relative shrink-0 w-[59.01px]" data-name="txt">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between py-[4px] relative size-full">
        <Span />
        <H />
      </div>
    </div>
  );
}

function Top1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[42px] items-center relative shrink-0 w-full" data-name="top">
      <Icon2 />
      <Txt />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M4.66667 1.16667V3.5" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M9.33333 1.16667V3.5" id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24a2b500} id="Vector_3" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M1.75 5.83333H12.25" id="Vector_4" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#5f5f5f] text-[12px] whitespace-nowrap">유효기간: 2026.05.17까지</p>
      </div>
    </div>
  );
}

function Bottom() {
  return (
    <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0 w-full" data-name="bottom">
      <Icon4 />
      <Text />
    </div>
  );
}

function Notice() {
  return (
    <div className="bg-[#fff5f5] relative rounded-[16px] shrink-0 w-full" data-name="notice">
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[19px] py-[16px] relative size-full">
        <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#030213] text-[15px] tracking-[-0.3px] whitespace-nowrap">전메뉴 1,000원 할인 쿠폰</p>
        <div className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#717182] text-[13px] tracking-[-0.13px] w-[min-content]">
          <p className="leading-[1.4] mb-0">구매시 전메뉴 적용 가능한</p>
          <p className="leading-[1.4]">1,000원 할인 쿠폰</p>
        </div>
        <Bottom />
      </div>
    </div>
  );
}

function Reward() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[13px] items-center justify-center px-[24px] py-[23px] relative rounded-[16px] shrink-0 w-[300px]" data-name="reward">
      <div aria-hidden="true" className="absolute border border-[#f63c3c] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_40.5px_0px_rgba(0,0,0,0.07)]" />
      <Top1 />
      <Notice />
    </div>
  );
}

function Coupon() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[4px] relative shrink-0 w-full" data-name="coupon">
      <Reward />
    </div>
  );
}

function Container() {
  return <div className="bg-[#e1302d] rounded-[22369600px] shrink-0 size-[8px]" data-name="Container" />;
}

function Span1() {
  return (
    <div className="absolute bg-[rgba(225,48,45,0.1)] content-stretch flex items-center justify-center left-0 px-[12px] rounded-[22369600px] size-[32px] top-[2px]" data-name="span">
      <Container />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#030213] text-[14px] top-0 whitespace-nowrap">사용 방법</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#5b5b70] text-[13px] top-[0.33px] whitespace-nowrap">매장 방문시 쿠폰 화면을 직원에게 보여주세요</p>
    </div>
  );
}

function P() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[44.5px] items-start left-[44px] top-0 w-[229.792px]" data-name="p">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Txt1() {
  return (
    <div className="h-[44.5px] relative shrink-0 w-full" data-name="txt">
      <Span1 />
      <P />
    </div>
  );
}

function Tip() {
  return (
    <div className="bg-[#f8f8fa] content-stretch flex flex-col h-[76px] items-start pt-[16px] px-[18px] relative rounded-[10px] shrink-0 w-[312px]" data-name="tip">
      <Txt1 />
    </div>
  );
}

function Contents() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[22px] items-center min-h-px overflow-clip px-[20px] relative w-[360px]" data-name="contents">
      <Top />
      <Coupon />
      <Tip />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#ca3633] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[86px] py-[16px] relative size-full">
          <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-center text-white tracking-[-0.32px] whitespace-nowrap">사용하러 가기</p>
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
          <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#e1302d] text-[16px] text-center tracking-[-0.32px] whitespace-nowrap">미션 홈으로</p>
        </div>
      </div>
    </div>
  );
}

function MissionDetail() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-center justify-center px-[24px] py-[8px] relative shrink-0 w-[360px]" data-name="MissionDetail">
      <Button />
      <Button1 />
    </div>
  );
}

function Bottom2() {
  return (
    <div className="bg-white h-[34px] relative shrink-0 w-full" data-name="bottom">
      <div className="-translate-x-1/2 absolute bg-black bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function MobileBrowserBottom() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[375px]" data-name="Mobile-Browser-bottom">
      <Bottom2 />
    </div>
  );
}

function Bottom1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="bottom">
      <MobileBrowserBottom />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative rounded-[24px] size-full" data-name="쿠폰발급완료">
      <MobileBrowserTop />
      <Contents />
      <MissionDetail />
      <Bottom1 />
    </div>
  );
}