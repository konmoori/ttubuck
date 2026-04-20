import svgPaths from "./svg-1ctto1i7u9";
import imgFrame34 from "figma:asset/12cd4b119fa1ff5a35275aab988d4c6f116defc3.png";

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

function MapPin() {
  return (
    <div className="h-[22px] relative shrink-0 w-[18px]" data-name="map-pin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22">
        <g id="map-pin">
          <path d={svgPaths.p381f2780} fill="var(--fill-0, #030213)" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Location() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-[202px]" data-name="location">
      <MapPin />
      <div className="flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#030213] text-[18px] text-center tracking-[-0.36px] uppercase whitespace-nowrap">
        <p className="leading-none">강동구 성내동</p>
      </div>
    </div>
  );
}

function NavIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="nav_icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="nav_icon">
          <path d={svgPaths.p1e4b7b80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p146fda80} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function TopInfo() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="top_info">
      <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-end justify-between px-[25px] py-[10px] relative size-full">
          <Location />
          <NavIcon />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px relative w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[18.101px] min-w-px relative text-[#e1302d] text-[12.671px] tracking-[-0.2534px]">오늘의 미션</p>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[7px] h-[56.316px] items-start min-w-px relative" data-name="left">
      <Container />
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[30.6px] relative shrink-0 text-[#030213] text-[22px] tracking-[-0.44px] w-full">별을 따라 걷다 보면</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[56.32px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgFrame34} />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Heading 2">
      <Left />
      <Frame />
    </div>
  );
}

function Tit() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[5px] pr-[2px] relative shrink-0 w-[282.122px]" data-name="tit">
      <Heading />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[18.098px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0983 18.0983">
        <g id="Icon">
          <path d={svgPaths.p355ac780} id="Vector" stroke="var(--stroke-0, #F34C4A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.50819" />
          <path d={svgPaths.p9dd6b80} id="Vector_2" stroke="var(--stroke-0, #F34C4A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.50819" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#fff5f5] relative rounded-[33332576px] shrink-0 size-[36.197px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[9.049px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[14.482px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[14.481px] left-0 text-[#5b5b70] text-[12px] top-[-0.99px] tracking-[-0.24px] whitespace-nowrap">소요 시간</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[21.715px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[21.722px] min-w-px relative text-[#030213] text-[14px] tracking-[-0.14px]">도보 10분</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[36.197px] relative shrink-0 w-[65.3px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Time() {
  return (
    <div className="h-[36.197px] relative shrink-0 w-[108.729px]" data-name="time">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.233px] items-center relative size-full">
        <Container1 />
        <Container2 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[18.098px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0983 18.0983">
        <g id="Icon">
          <path d={svgPaths.p389d8b00} id="Vector" stroke="var(--stroke-0, #F34C4A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.50819" />
          <path d="M9.04801 6.03185V15.8351" id="Vector_2" stroke="var(--stroke-0, #F34C4A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.50819" />
          <path d={svgPaths.p3ff5d5e0} id="Vector_3" stroke="var(--stroke-0, #F34C4A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.50819" />
          <path d={svgPaths.p9740c00} id="Vector_4" stroke="var(--stroke-0, #F34C4A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.50819" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#fff5f5] relative rounded-[33332576px] shrink-0 size-[36.197px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[9.049px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[14.482px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[14.481px] left-0 text-[#5b5b70] text-[12px] top-[-0.99px] tracking-[-0.24px] whitespace-nowrap">보상</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex h-[21.715px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[21.722px] relative shrink-0 text-[#e1302d] text-[14px] tracking-[-0.14px] whitespace-nowrap">400P</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[36.197px] relative shrink-0 w-[51.827px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container7 />
        <Container8 />
      </div>
    </div>
  );
}

function Point() {
  return (
    <div className="h-[36.197px] relative shrink-0 w-[95.257px]" data-name="point">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.233px] items-center relative size-full">
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function TimePoint() {
  return (
    <div className="content-stretch flex gap-[21.715px] h-[36.197px] items-center px-px relative shrink-0 w-[282.122px]" data-name="time_point">
      <Time />
      <Point />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#e1302d] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[112px] py-[12px] relative size-full">
          <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[16px] text-center text-white tracking-[-0.32px] whitespace-nowrap">미션 상세 보기</p>
        </div>
      </div>
    </div>
  );
}

function MainMission() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[25px] items-center px-[20px] py-[29px] relative rounded-[12px] shrink-0 w-[320.122px]" data-name="main_mission">
      <div aria-hidden="true" className="absolute border-2 border-[#f63c3c] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1.81px_18.101px_0px_rgba(0,0,0,0.06)]" />
      <Tit />
      <TimePoint />
      <Button />
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="top">
      <TopInfo />
      <MainMission />
    </div>
  );
}

function Location1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[202px]" data-name="location">
      <div className="flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#030213] text-[18px] text-center tracking-[-0.36px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">추가 미션</p>
      </div>
    </div>
  );
}

function PMissionTit() {
  return (
    <div className="h-[43px] relative shrink-0 w-full" data-name="p_mission_tit">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[25px] py-[10px] relative size-full">
          <Location1 />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 3">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#030213] text-[16px] tracking-[-0.32px] whitespace-nowrap">성내동 숨은 보물 찾기</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none min-w-px relative text-[#d83633] text-[12px] tracking-[-0.24px]">도보 5분 · 150P</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[44.79px] relative shrink-0 w-[158.896px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start justify-center relative size-full">
        <Heading1 />
        <Container10 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#f3f3f5] relative rounded-[32352922px] shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[14px] py-[6px] relative size-full">
        <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[17.569px] relative shrink-0 text-[#717182] text-[12.298px] tracking-[-0.246px] whitespace-nowrap">예정</p>
      </div>
    </div>
  );
}

function Txt() {
  return (
    <div className="content-stretch flex h-[44.79px] items-center justify-between relative shrink-0 w-full" data-name="txt">
      <Container9 />
      <Container11 />
    </div>
  );
}

function MBox() {
  return (
    <div className="bg-white relative rounded-[12px] shadow-[0px_1.757px_10.542px_0px_rgba(0,0,0,0.04)] shrink-0 w-full" data-name="m_box">
      <div className="content-stretch flex flex-col items-start p-[21px] relative size-full">
        <Txt />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 3">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#030213] text-[16px] tracking-[-0.32px] whitespace-nowrap">천호동 비밀의 정원</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none min-w-px relative text-[#d83633] text-[12px] tracking-[-0.24px]">도보 10분 · 150P</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[44.79px] relative shrink-0 w-[137.548px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start justify-center relative size-full">
        <Heading2 />
        <Container13 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#f3f3f5] relative rounded-[32352922px] shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[14px] py-[6px] relative size-full">
        <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[17.569px] relative shrink-0 text-[#717182] text-[12.298px] tracking-[-0.246px] whitespace-nowrap">예정</p>
      </div>
    </div>
  );
}

function Txt1() {
  return (
    <div className="content-stretch flex h-[44.79px] items-center justify-between relative shrink-0 w-full" data-name="txt">
      <Container12 />
      <Container14 />
    </div>
  );
}

function MBox1() {
  return (
    <div className="bg-white relative rounded-[12px] shadow-[0px_1.757px_10.542px_0px_rgba(0,0,0,0.04)] shrink-0 w-full" data-name="m_box">
      <div className="content-stretch flex flex-col items-start p-[21px] relative size-full">
        <Txt1 />
      </div>
    </div>
  );
}

function PMission() {
  return (
    <div className="h-[187px] relative shrink-0 w-full" data-name="p_mission">
      <div className="content-stretch flex flex-col gap-[14.041px] items-start px-[20px] relative size-full">
        <MBox />
        <MBox1 />
      </div>
    </div>
  );
}

function PlusMission() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full" data-name="plus_mission">
      <PMissionTit />
      <PMission />
    </div>
  );
}

function Contents() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-center min-h-px overflow-clip relative w-full" data-name="contents">
      <Top />
      <PlusMission />
    </div>
  );
}

function Container15() {
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

function Container16() {
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

function Container17() {
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
    <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative rounded-[24px] size-full" data-name="홈화면_미션">
      <MobileBrowserTop />
      <Contents />
      <div className="backdrop-blur-[6px] bg-white content-stretch flex gap-[34px] h-[59px] items-end justify-center px-[16px] relative shrink-0 w-[360px]" data-name="Bottom_nav_bar">
        <div aria-hidden="true" className="absolute border-[#ededed] border-solid border-t inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-col gap-[5px] h-[59px] items-center justify-center pb-[8px] pt-[14px] px-[16px] relative rounded-[16px] shrink-0" data-name="Link">
          <Container15 />
          <Margin />
        </div>
        <div className="content-stretch flex flex-col gap-[5px] h-[59px] items-center justify-center pb-[8px] pt-[14px] px-[16px] relative shrink-0" data-name="Link">
          <Container16 />
          <Margin1 />
        </div>
        <div className="content-stretch flex flex-col gap-[5px] h-[59px] items-center justify-center pb-[8px] pt-[14px] px-[11px] relative shrink-0" data-name="Link">
          <Icon2 />
          <Margin2 />
        </div>
        <div className="content-stretch flex flex-col gap-[5px] h-[59px] items-center justify-center pb-[8px] pt-[14px] px-[16px] relative shrink-0" data-name="Link">
          <Container17 />
          <Margin3 />
        </div>
      </div>
      <MobileBrowserBottom />
    </div>
  );
}