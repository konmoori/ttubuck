import svgPaths from "./svg-5ywb98m4vo";

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

function Icon() {
  return (
    <div className="h-[23.993px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.99754 13.9957">
            <path d={svgPaths.p3dd8ec0} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99938" />
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
        <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#030213] text-[20px] tracking-[-0.4px] whitespace-nowrap">쿠폰 사용</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white h-[64.041px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f3f5] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[15.984px] items-center pl-[7.992px] py-px relative size-full">
          <Button />
          <Heading />
        </div>
      </div>
    </div>
  );
}

function H() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="h2">
      <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#030213] text-[26px] text-center tracking-[-0.52px] whitespace-nowrap">전메뉴 1,000원 할인</p>
    </div>
  );
}

function Span() {
  return (
    <div className="content-stretch flex items-center justify-center px-[37px] relative shrink-0" data-name="span">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#5b5b70] text-[14px] text-center tracking-[-0.28px] whitespace-nowrap">구매시 전메뉴 적용 가능 1,000원 할인</p>
    </div>
  );
}

function Txt() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-full" data-name="txt">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#717182] text-[14px] text-center tracking-[-0.28px] whitespace-nowrap">카페 모카</p>
      <H />
      <Span />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[180px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 180">
        <g clipPath="url(#clip0_5_2191)" id="Icon">
          <path d="M180 0H0V180H180V0Z" fill="var(--fill-0, white)" id="Vector" />
          <g id="Group" opacity="0.8">
            <path d={svgPaths.p3114a800} fill="var(--fill-0, #030213)" id="Vector_2" />
            <g id="Vector_3" />
            <path d={svgPaths.pbd42280} fill="var(--fill-0, #030213)" id="Vector_4" />
            <g id="Vector_5" />
            <path d={svgPaths.p2a5cb400} fill="var(--fill-0, #030213)" id="Vector_6" />
            <g id="Vector_7" />
            <path d={svgPaths.p17d4db00} fill="var(--fill-0, #030213)" id="Vector_8" />
            <g id="Vector_9" />
            <path d={svgPaths.p1bc48200} fill="var(--fill-0, #030213)" id="Vector_10" />
            <g id="Vector_11" />
            <path d={svgPaths.p38210a80} fill="var(--fill-0, #030213)" id="Vector_12" />
            <g id="Vector_13" />
            <path d={svgPaths.p177fd280} fill="var(--fill-0, #030213)" id="Vector_14" />
            <g id="Vector_15" />
            <path d={svgPaths.p30c04100} fill="var(--fill-0, #030213)" id="Vector_16" />
            <g id="Vector_17" />
            <path d={svgPaths.p12952e00} fill="var(--fill-0, #030213)" id="Vector_18" />
            <g id="Vector_19" />
            <path d={svgPaths.p5db2500} fill="var(--fill-0, #030213)" id="Vector_20" />
            <g id="Vector_21" />
            <path d={svgPaths.p3237ff00} fill="var(--fill-0, #030213)" id="Vector_22" />
            <g id="Vector_23" />
            <path d={svgPaths.p33b9200} fill="var(--fill-0, #030213)" id="Vector_24" />
            <g id="Vector_25" />
            <path d={svgPaths.p81ae700} fill="var(--fill-0, #030213)" id="Vector_26" />
            <g id="Vector_27" />
            <path d={svgPaths.p24010480} fill="var(--fill-0, #030213)" id="Vector_28" />
            <g id="Vector_29" />
            <path d={svgPaths.pd889840} fill="var(--fill-0, #030213)" id="Vector_30" />
            <g id="Vector_31" />
            <path d={svgPaths.p20434680} fill="var(--fill-0, #030213)" id="Vector_32" />
            <g id="Vector_33" />
            <path d={svgPaths.p3cf554c0} fill="var(--fill-0, #030213)" id="Vector_34" />
            <g id="Vector_35" />
            <path d={svgPaths.p1ac8d180} fill="var(--fill-0, #030213)" id="Vector_36" />
            <g id="Vector_37" />
            <path d={svgPaths.p9a33f80} fill="var(--fill-0, #030213)" id="Vector_38" />
            <g id="Vector_39" />
            <path d={svgPaths.p3b2d2b00} fill="var(--fill-0, #030213)" id="Vector_40" />
            <g id="Vector_41" />
            <path d={svgPaths.pd565300} fill="var(--fill-0, #030213)" id="Vector_42" />
            <g id="Vector_43" />
            <path d={svgPaths.p37b938f0} fill="var(--fill-0, #030213)" id="Vector_44" />
            <g id="Vector_45" />
            <path d={svgPaths.p3d32fb80} fill="var(--fill-0, #030213)" id="Vector_46" />
            <g id="Vector_47" />
            <path d={svgPaths.p390e1a00} fill="var(--fill-0, #030213)" id="Vector_48" />
            <g id="Vector_49" />
            <path d={svgPaths.p333eb3b2} fill="var(--fill-0, #030213)" id="Vector_50" />
            <g id="Vector_51" />
            <path d={svgPaths.p30d4aa80} fill="var(--fill-0, #030213)" id="Vector_52" />
            <g id="Vector_53" />
            <path d={svgPaths.p21490e70} fill="var(--fill-0, #030213)" id="Vector_54" />
            <g id="Vector_55" />
            <path d={svgPaths.p2dfd29f0} fill="var(--fill-0, #030213)" id="Vector_56" />
            <g id="Vector_57" />
            <path d={svgPaths.p196c3700} fill="var(--fill-0, #030213)" id="Vector_58" />
            <g id="Vector_59" />
            <path d={svgPaths.pda93700} fill="var(--fill-0, #030213)" id="Vector_60" />
            <g id="Vector_61" />
            <path d={svgPaths.pdc36800} fill="var(--fill-0, #030213)" id="Vector_62" />
            <g id="Vector_63" />
            <path d={svgPaths.p176898c0} fill="var(--fill-0, #030213)" id="Vector_64" />
            <g id="Vector_65" />
            <path d={svgPaths.p36a7000} fill="var(--fill-0, #030213)" id="Vector_66" />
            <g id="Vector_67" />
            <path d={svgPaths.p293a9100} fill="var(--fill-0, #030213)" id="Vector_68" />
            <g id="Vector_69" />
            <path d={svgPaths.p33e2d00} fill="var(--fill-0, #030213)" id="Vector_70" />
            <g id="Vector_71" />
            <path d={svgPaths.p2d340a00} fill="var(--fill-0, #030213)" id="Vector_72" />
            <g id="Vector_73" />
            <path d={svgPaths.p9a90f80} fill="var(--fill-0, #030213)" id="Vector_74" />
            <g id="Vector_75" />
            <path d={svgPaths.p3e698e00} fill="var(--fill-0, #030213)" id="Vector_76" />
            <g id="Vector_77" />
            <path d={svgPaths.p6730500} fill="var(--fill-0, #030213)" id="Vector_78" />
            <g id="Vector_79" />
            <path d={svgPaths.p3b4b8a00} fill="var(--fill-0, #030213)" id="Vector_80" />
            <g id="Vector_81" />
            <path d={svgPaths.p3dbf2cf0} fill="var(--fill-0, #030213)" id="Vector_82" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_5_2191">
            <rect fill="white" height="180" width="180" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="bg-[#3c3c3e] h-[208px] relative rounded-[16px] shrink-0 w-full" data-name="icon">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[14px] relative size-full">
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Span1() {
  return (
    <div className="relative shrink-0 w-full" data-name="span">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[84px] relative size-full">
          <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#717182] text-[11px] text-center whitespace-nowrap">쿠폰 번호</p>
        </div>
      </div>
    </div>
  );
}

function Span2() {
  return (
    <div className="relative shrink-0 w-full" data-name="span">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[42px] relative size-full">
          <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#030213] text-[16px] text-center tracking-[0.8px] whitespace-nowrap">A24170412001</p>
        </div>
      </div>
    </div>
  );
}

function BTxt() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] h-[44.5px] items-center relative shrink-0 w-full" data-name="b_txt">
      <Span1 />
      <Span2 />
    </div>
  );
}

function Qr() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0 w-full" data-name="qr">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center pb-[5px] pt-[15px] px-[22px] relative size-full">
          <Icon1 />
          <BTxt />
        </div>
      </div>
    </div>
  );
}

function Icon3() {
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
    <div className="content-stretch flex gap-[8px] h-[18px] items-center justify-center relative shrink-0 w-full" data-name="bottom">
      <Icon3 />
      <Text />
    </div>
  );
}

function Coupon() {
  return (
    <div className="bg-[rgba(255,255,255,0.95)] h-[444px] relative rounded-[20px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.12)] shrink-0 w-full" data-name="coupon">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center pb-[20px] pt-[25px] px-[28px] relative size-full">
          <Txt />
          <Qr />
          <Bottom />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return <div className="bg-white rounded-[22369600px] shrink-0 size-[8px]" data-name="Container" />;
}

function Span3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.3)] content-stretch flex items-center justify-center left-0 px-[12px] rounded-[22369600px] size-[32px] top-[2px]" data-name="span">
      <Container1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[21px] left-0 text-[14px] text-white top-0 tracking-[-0.28px] whitespace-nowrap">사용 안내</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[13px] text-white top-[0.33px] tracking-[-0.26px] whitespace-nowrap">이 화면을 매장 직원에게 보여주세요</p>
    </div>
  );
}

function P() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[44.5px] items-start left-[44px] top-0 w-[229.792px]" data-name="p">
      <Heading1 />
      <Paragraph />
    </div>
  );
}

function Txt1() {
  return (
    <div className="h-[44.5px] relative shrink-0 w-full" data-name="txt">
      <Span3 />
      <P />
    </div>
  );
}

function Tip() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[76px] relative rounded-[14px] shrink-0 w-full" data-name="tip">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col items-start pt-[16px] px-[18px] relative size-full">
        <Txt1 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[86px] py-[16px] relative size-full">
          <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#e1302d] text-[16px] text-center tracking-[-0.32px] whitespace-nowrap">직원 확인</p>
        </div>
      </div>
    </div>
  );
}

function Contents() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#f63c3c] gap-[13px] h-[631.959px] items-center overflow-clip px-[25px] py-[15px] relative shrink-0 to-[#e47f53] w-[360px]" data-name="contents">
      <Coupon />
      <Tip />
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
    <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative rounded-[24px] size-full" data-name="쿠폰사용">
      <MobileBrowserTop />
      <Container />
      <Contents />
      <Bottom1 />
    </div>
  );
}