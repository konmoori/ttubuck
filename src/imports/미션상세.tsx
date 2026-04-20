import svgPaths from "./svg-t4a5bw9pws";
import imgContainer from "figma:asset/12cd4b119fa1ff5a35275aab988d4c6f116defc3.png";

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
            <path d={svgPaths.p3dd8ec0} id="Vector" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99938" />
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
        <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#030213] text-[20px] tracking-[-0.4px] whitespace-nowrap">미션 상세</p>
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

function Container1() {
  return (
    <div className="h-[239.995px] relative shrink-0 w-full" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer} />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[27.491px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none left-0 text-[#030213] text-[22px] top-[-1.1px] tracking-[-0.44px] whitespace-nowrap">별을 따라 걷다 보면</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <div className="font-['Pretendard_Variable:Light',sans-serif] font-light leading-[0] relative shrink-0 text-[#5b5b70] text-[16px] tracking-[-0.32px] w-[320px]">
        <p className="leading-[24.375px] mb-0">이 길에는 숨겨진 단서가 있어요. 그 단서를 따라</p>
        <p className="leading-[24.375px]">
          가다 보면 어딘가에서 답을 찾게 될 거예요.
          <br aria-hidden="true" />
          주변을 잘 살펴보세요.
        </p>
      </div>
    </div>
  );
}

function Tit() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[319.999px]" data-name="tit">
      <Heading1 />
      <Paragraph />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[19.997px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9967 19.9967">
        <g clipPath="url(#clip0_4_941)" id="Icon">
          <path d={svgPaths.p2cd66aa0} id="Vector" stroke="var(--stroke-0, #F34C4A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
          <path d={svgPaths.p1a86f780} id="Vector_2" stroke="var(--stroke-0, #F34C4A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
        </g>
        <defs>
          <clipPath id="clip0_4_941">
            <rect fill="white" height="19.9967" width="19.9967" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Txt() {
  return (
    <div className="content-stretch flex h-[19.499px] items-start relative shrink-0 w-full" data-name="txt">
      <p className="flex-[1_0_0] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[19.5px] min-w-px relative text-[#5b5b70] text-[13px] text-center tracking-[-0.26px]">거리</p>
    </div>
  );
}

function Span() {
  return (
    <div className="h-[22.501px] relative shrink-0 w-full" data-name="span">
      <p className="-translate-x-1/2 absolute font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[22.5px] left-[33.61px] text-[#201f3b] text-[15px] text-center top-[-1.9px] tracking-[-0.15px] whitespace-nowrap">1.2km</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#fff5f5] content-stretch flex flex-col gap-[6px] items-center p-[16px] relative rounded-[12px] shrink-0 w-[98.663px]" data-name="Container">
      <Icon1 />
      <Txt />
      <Span />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_4_937)" id="Icon">
          <path d={svgPaths.p3dc49580} id="Vector" stroke="var(--stroke-0, #F34C4A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
          <path d="M9 4.5V9L12 10.5" id="Vector_2" stroke="var(--stroke-0, #F34C4A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
        </g>
        <defs>
          <clipPath id="clip0_4_937">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Txt1() {
  return (
    <div className="content-stretch flex h-[19.499px] items-start relative shrink-0 w-full" data-name="txt">
      <p className="flex-[1_0_0] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[19.5px] min-w-px relative text-[#5b5b70] text-[13px] text-center tracking-[-0.26px]">예상</p>
    </div>
  );
}

function Span1() {
  return (
    <div className="h-[22.501px] relative shrink-0 w-full" data-name="span">
      <p className="-translate-x-1/2 absolute font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[22.5px] left-[33.17px] text-[#201f3b] text-[15px] text-center top-[-1.9px] tracking-[-0.15px] whitespace-nowrap">10분</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#fff5f5] content-stretch flex flex-col gap-[6px] items-center p-[16px] relative rounded-[12px] shrink-0 w-[98.68px]" data-name="Container">
      <Icon2 />
      <Txt1 />
      <Span1 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[19.997px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9967 19.9967">
        <g clipPath="url(#clip0_4_933)" id="Icon">
          <path d={svgPaths.p24679780} id="Vector" stroke="var(--stroke-0, #F34C4A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
          <path d={svgPaths.p1d873e00} id="Vector_2" stroke="var(--stroke-0, #F34C4A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
        </g>
        <defs>
          <clipPath id="clip0_4_933">
            <rect fill="white" height="19.9967" width="19.9967" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Txt2() {
  return (
    <div className="content-stretch flex h-[19.499px] items-start relative shrink-0 w-full" data-name="txt">
      <p className="flex-[1_0_0] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[19.5px] min-w-px relative text-[#5b5b70] text-[13px] text-center tracking-[-0.26px]">보상</p>
    </div>
  );
}

function Span2() {
  return (
    <div className="h-[22.501px] relative shrink-0 w-full" data-name="span">
      <p className="-translate-x-1/2 absolute font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[22.5px] left-[34.19px] text-[#201f3b] text-[15px] text-center top-[-1.9px] tracking-[-0.15px] whitespace-nowrap">700P</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#fff5f5] content-stretch flex flex-col gap-[6px] items-center p-[16px] relative rounded-[12px] shrink-0 w-[98.663px]" data-name="Container">
      <Icon3 />
      <Txt2 />
      <Span2 />
    </div>
  );
}

function Box() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="box">
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[27.989px] relative shrink-0 w-[20.46px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#0a0a0a] text-[20px] whitespace-nowrap">💡</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#030213] text-[16px] tracking-[-0.32px] whitespace-nowrap">1차 힌트</p>
      </div>
    </div>
  );
}

function H() {
  return (
    <div className="content-stretch flex gap-[7.992px] h-[27.989px] items-center relative shrink-0 w-full" data-name="h2">
      <Text />
      <Heading2 />
    </div>
  );
}

function Txt3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="txt">
      <div className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#5b5b70] text-[15px] tracking-[-0.15px] w-[271px]">
        <p className="leading-[22.75px] mb-0">나는 노랑색 집이 있어요.</p>
        <p className="leading-[22.75px]">벽에 항상 붙어있어요.</p>
      </div>
    </div>
  );
}

function Hint() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[7.992px] items-start pb-[21.09px] pt-[21.094px] px-[21.094px] relative rounded-[16px] shrink-0 w-[319.999px]" data-name="hint">
      <div aria-hidden="true" className="absolute border border-[#ffa09e] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <H />
      <Txt3 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[22.501px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[22.5px] left-0 text-[#030213] text-[15px] top-[-1.9px] tracking-[-0.3px] whitespace-nowrap">미션 진행 방법</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20.991px] relative shrink-0 w-[10.77px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#e1302d] text-[14px] top-[-0.9px] whitespace-nowrap">1.</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Pretendard_Variable:Light',sans-serif] font-light leading-[21px] relative shrink-0 text-[#5b5b70] text-[14px] tracking-[-0.14px] whitespace-nowrap">아래 버튼을 눌러 체크포인트까지 이동하세요</p>
      </div>
    </div>
  );
}

function ListItem() {
  return (
    <div className="content-stretch flex gap-[7.992px] items-start relative shrink-0 w-full" data-name="List Item">
      <Text1 />
      <Text2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20.991px] relative shrink-0 w-[10.77px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#e1302d] text-[14px] top-[-0.9px] whitespace-nowrap">2.</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Pretendard_Variable:Light',sans-serif] font-light leading-[21px] relative shrink-0 text-[#5b5b70] text-[14px] tracking-[-0.14px] w-[258px]">도착 후 주변을 살펴보세요</p>
      </div>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="content-stretch flex gap-[7.992px] items-start relative shrink-0 w-full" data-name="List Item">
      <Text3 />
      <Text4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[20.991px] relative shrink-0 w-[10.77px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#e1302d] text-[14px] top-[-0.9px] whitespace-nowrap">3.</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <div className="flex-[1_0_0] font-['Pretendard_Variable:Light',sans-serif] font-light leading-[0] min-w-px relative text-[#5b5b70] text-[14px] tracking-[-0.14px]">
          <p className="leading-[21px] mb-0">단서를 바탕으로 목표물을 찾아 촬영하면</p>
          <p className="leading-[21px]">미션완료!</p>
        </div>
      </div>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="content-stretch flex gap-[7.992px] items-start relative shrink-0 w-full" data-name="List Item">
      <Text5 />
      <Text6 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[7.992px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
    </div>
  );
}

function Rull() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col gap-[11.988px] items-start pb-[20px] pt-[19.997px] px-[19.997px] relative rounded-[16px] shrink-0 w-[320px]" data-name="rull">
      <Heading3 />
      <List />
    </div>
  );
}

function Contents() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="contents">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-center p-[20px] relative size-full">
          <Tit />
          <Box />
          <Hint />
          <Rull />
        </div>
      </div>
    </div>
  );
}

function ConV() {
  return (
    <div className="content-stretch flex flex-col h-[468px] items-start relative shrink-0 w-full" data-name="con_v">
      <Container1 />
      <Contents />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#e1302d] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[86px] py-[16px] relative size-full">
          <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-center text-white tracking-[-0.32px] whitespace-nowrap">지금 바로 출발하기</p>
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
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
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

function Container6() {
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

function Icon4() {
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

function Container7() {
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
    <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative rounded-[24px] size-full" data-name="미션상세">
      <MobileBrowserTop />
      <Container />
      <ConV />
      <MissionDetail />
      <div className="backdrop-blur-[6px] bg-white content-stretch flex gap-[34px] h-[59px] items-end justify-center px-[16px] relative shrink-0 w-[360px]" data-name="Bottom_nav_bar">
        <div aria-hidden="true" className="absolute border-[#ededed] border-solid border-t inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-col gap-[5px] h-[59px] items-center justify-center pb-[8px] pt-[14px] px-[16px] relative rounded-[16px] shrink-0" data-name="Link">
          <Container5 />
          <Margin />
        </div>
        <div className="content-stretch flex flex-col gap-[5px] h-[59px] items-center justify-center pb-[8px] pt-[14px] px-[16px] relative shrink-0" data-name="Link">
          <Container6 />
          <Margin1 />
        </div>
        <div className="content-stretch flex flex-col gap-[5px] h-[59px] items-center justify-center pb-[8px] pt-[14px] px-[11px] relative shrink-0" data-name="Link">
          <Icon4 />
          <Margin2 />
        </div>
        <div className="content-stretch flex flex-col gap-[5px] h-[59px] items-center justify-center pb-[8px] pt-[14px] px-[16px] relative shrink-0" data-name="Link">
          <Container7 />
          <Margin3 />
        </div>
      </div>
      <MobileBrowserBottom />
    </div>
  );
}