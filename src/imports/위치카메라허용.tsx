import svgPaths from "./svg-n4rksvo9pn";

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

function H() {
  return (
    <div className="relative shrink-0" data-name="h2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <div className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[#030213] text-[24px] text-center tracking-[-0.528px] whitespace-nowrap">
          <p className="leading-[1.26] mb-0">뚜벅을 시작하려면</p>
          <p className="leading-[1.26]">접근권한 허용이 필요해요</p>
        </div>
      </div>
    </div>
  );
}

function Span() {
  return (
    <div className="relative shrink-0" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#5b5b70] text-[15px] text-center whitespace-nowrap">미션 진행을 위해 필요한 권한입니다</p>
      </div>
    </div>
  );
}

function Tit() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] h-[106.363px] items-center justify-center relative shrink-0 w-full" data-name="tit">
      <H />
      <Span />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[23.993px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9926 23.9926">
        <g id="Icon">
          <path d={svgPaths.p37a54600} id="Vector" stroke="var(--stroke-0, #E1302D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99938" />
          <path d={svgPaths.p294d4a00} id="Vector_2" stroke="var(--stroke-0, #E1302D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99938" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#fff5f5] relative rounded-[36829000px] shrink-0 size-[47.985px]" data-name="icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[11.988px] pr-[12.005px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 3">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#030213] text-[16px] whitespace-nowrap">위치 정보</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[1.61] relative shrink-0 text-[#5b5b70] text-[14px] w-[198px]">미션 체크포인트 확인과 주변 제휴 매장 찾기에 사용됩니다</p>
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[197.858_0_0] h-[73.47px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between pt-[3px] relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Location() {
  return (
    <div className="bg-white h-[123.65px] relative rounded-[16px] shrink-0 w-[312.007px]" data-name="location">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-[1.098px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[15.984px] items-start pb-[25.098px] pt-[25.091px] px-[25.091px] relative size-full">
        <Icon />
        <Container />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[23.993px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9926 23.9926">
        <g id="Icon">
          <path d={svgPaths.p32225c00} id="Vector" stroke="var(--stroke-0, #E1302D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99938" />
          <path d={svgPaths.p33853500} id="Vector_2" stroke="var(--stroke-0, #E1302D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99938" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="bg-[#fff5f5] relative rounded-[36829000px] shrink-0 size-[47.985px]" data-name="icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[11.988px] pr-[12.005px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 3">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#030213] text-[16px] whitespace-nowrap">카메라</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <div className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#5b5b70] text-[14px] w-[198px]">
        <p className="leading-[1.61] mb-0">목표물 촬영을 통한 미션 인증에</p>
        <p className="leading-[1.61]">사용됩니다</p>
      </div>
    </div>
  );
}

function Txt() {
  return (
    <div className="flex-[197.858_0_0] h-[73.47px] min-w-px relative" data-name="txt">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between pt-[3px] relative size-full">
        <Heading1 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Camera() {
  return (
    <div className="bg-white h-[123.65px] relative rounded-[16px] shrink-0 w-[312.007px]" data-name="camera">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-[1.098px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[15.984px] items-start pb-[25.098px] pt-[25.091px] px-[25.091px] relative size-full">
        <Icon2 />
        <Txt />
      </div>
    </div>
  );
}

function Con() {
  return (
    <div className="content-stretch flex flex-col gap-[15.984px] h-[263.284px] items-start relative shrink-0 w-[312.007px]" data-name="con">
      <Location />
      <Camera />
    </div>
  );
}

function P() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="p">
      <div className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#717182] text-[13px] text-center w-[281px]">
        <p className="leading-[21.125px] mb-0">권한은 서비스 이용 목적으로만 사용되며,</p>
        <p className="leading-[21.125px]">언제든지 설정에서 변경할 수 있어요</p>
      </div>
    </div>
  );
}

function Notice() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col h-[74.19px] items-start pt-[15.984px] px-[15.984px] relative rounded-[12px] shrink-0 w-[312.007px]" data-name="notice">
      <P />
    </div>
  );
}

function Contents() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[28px] h-[590px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="contents">
      <Tit />
      <Con />
      <Notice />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#e1302d] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[86px] py-[16px] relative size-full">
          <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-center text-white tracking-[-0.32px] whitespace-nowrap">권한 허용하고 시작하기</p>
        </div>
      </div>
    </div>
  );
}

function MissionDetail() {
  return (
    <div className="bg-white h-[105.077px] relative shrink-0 w-full" data-name="MissionDetail">
      <div aria-hidden="true" className="absolute border-[#f3f3f5] border-solid border-t-[1.098px] inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pt-[25px] px-[24px] relative size-full">
          <Button />
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
    <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative rounded-[24px] size-full" data-name="위치_카메라_허용">
      <MobileBrowserTop />
      <Contents />
      <MissionDetail />
      <MobileBrowserBottom />
    </div>
  );
}