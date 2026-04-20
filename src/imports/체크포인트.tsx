import svgPaths from "./svg-pfvwnfjgvl";
import imgContainer from "figma:asset/ece298d0ec2c16f10310d45724b276a6035cb503.png";
import imgContainer1 from "figma:asset/dc9876355d74c7900bf853d8250ee694af070b2e.png";
import imgContainer2 from "figma:asset/2cc72b65c15e701889eb917ee3285f0691252c66.png";

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
        <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#030213] text-[20px] tracking-[-0.4px] whitespace-nowrap">체크포인트</p>
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

function Round() {
  return <div className="absolute bg-[rgba(225,48,45,0.5)] border border-[#e1302d] border-solid inset-[17.99%_25.99%_34.35%_26.34%] rounded-[80px]" data-name="round" />;
}

function Icon1() {
  return (
    <div className="opacity-20 relative shrink-0 size-[299.985px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Round />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex h-[339.995px] items-center justify-center pl-[29.995px] pr-[30.012px] relative shrink-0 w-[359.992px]" data-name="Container">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgContainer} />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[105.88%] left-0 max-w-none top-[-5.86%] w-full" src={imgContainer1} />
        </div>
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgContainer2} />
      </div>
      <Icon1 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[55.994px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[0.01%_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47.9852 55.9828">
          <path d={svgPaths.p2eda58c0} fill="var(--fill-0, #E1302D)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[25.01%_33.33%_46.43%_33.33%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9951 15.9951">
          <path d={svgPaths.p2930dd80} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[55.994px] items-start left-[155.99px] top-[114px] w-[47.985px]" data-name="icon">
      <Icon3 />
    </div>
  );
}

function Container3() {
  return <div className="bg-[#e1302d] opacity-80 rounded-[36829000px] shrink-0 size-[7.992px]" data-name="Container" />;
}

function Text() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#030213] text-[14px] tracking-[-0.28px] whitespace-nowrap">현재 위치</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[7.992px] h-[20.991px] items-center relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Text />
    </div>
  );
}

function Now() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[36.975px] items-center justify-center left-[125.56px] px-[15.984px] rounded-[20px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] top-[271.04px] w-[108.85px]" data-name="now">
      <Container2 />
    </div>
  );
}

function PointMap() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0" data-name="point_map">
      <Container1 />
      <Icon2 />
      <Now />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[48.002px] relative shrink-0 w-[319.999px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[48px] left-[160.05px] not-italic text-[#0a0a0a] text-[48px] text-center top-[-3.78px] whitespace-nowrap">🎯</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[27.491px] relative shrink-0 w-[319.999px]" data-name="Heading 2">
      <p className="-translate-x-1/2 absolute font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[27.5px] left-[159.59px] text-[#030213] text-[22px] text-center top-[-1.1px] tracking-[-0.44px] whitespace-nowrap">체크포인트에 도착했어요!</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24.37px] relative shrink-0 w-[319.999px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[24.375px] left-[160.76px] text-[#5b5b70] text-[15px] text-center top-[-1.8px] whitespace-nowrap">주변을 잘 살펴보세요</p>
    </div>
  );
}

function Tit() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="tit">
      <Container4 />
      <Heading1 />
      <Paragraph />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[31.984px] relative shrink-0 w-[24.541px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] not-italic relative shrink-0 text-[#0a0a0a] text-[24px] whitespace-nowrap">💡</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="flex-[1_0_0] h-[23.993px] min-w-px relative" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="flex-[1_0_0] font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none min-w-px relative text-[#030213] text-[16px] tracking-[-0.32px]">2차 힌트</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[7.992px] h-[31.984px] items-center relative shrink-0 w-full" data-name="Container">
      <Text1 />
      <Heading2 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
      <div className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#5b5b70] text-[15px] tracking-[-0.15px] w-[260px]">
        <p className="leading-[24.375px] mb-0">나는 토끼가 없고 꽃을 단 분홍색 건물 옆,</p>
        <p className="leading-[24.375px] mb-0">골목 끝에 숨어 있어요.</p>
        <p className="leading-[24.375px]">(분홍색 건물은 단 3개)</p>
      </div>
    </div>
  );
}

function Hint() {
  return (
    <div className="bg-[#fff3f3] relative rounded-[16px] shrink-0 w-full" data-name="hint2">
      <div aria-hidden="true" className="absolute border border-[#ffdbda] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[11.988px] items-start p-[25.09px] relative size-full">
        <Container5 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Contents() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="contents">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[18px] items-center p-[20px] relative size-full">
          <Tit />
          <Hint />
        </div>
      </div>
    </div>
  );
}

function ConV() {
  return (
    <div className="content-stretch flex flex-col h-[468px] items-start relative shrink-0 w-full" data-name="con_v">
      <PointMap />
      <Contents />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#e1302d] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[86px] py-[16px] relative size-full">
          <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-center text-white tracking-[-0.32px] whitespace-nowrap">목표물 찾기 시작</p>
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

function Container6() {
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

function Container7() {
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

function Container8() {
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
    <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative rounded-[24px] size-full" data-name="체크포인트">
      <MobileBrowserTop />
      <Container />
      <ConV />
      <MissionDetail />
      <div className="backdrop-blur-[6px] bg-white content-stretch flex gap-[34px] h-[59px] items-end justify-center px-[16px] relative shrink-0 w-[360px]" data-name="Bottom_nav_bar">
        <div aria-hidden="true" className="absolute border-[#ededed] border-solid border-t inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-col gap-[5px] h-[59px] items-center justify-center pb-[8px] pt-[14px] px-[16px] relative rounded-[16px] shrink-0" data-name="Link">
          <Container6 />
          <Margin />
        </div>
        <div className="content-stretch flex flex-col gap-[5px] h-[59px] items-center justify-center pb-[8px] pt-[14px] px-[16px] relative shrink-0" data-name="Link">
          <Container7 />
          <Margin1 />
        </div>
        <div className="content-stretch flex flex-col gap-[5px] h-[59px] items-center justify-center pb-[8px] pt-[14px] px-[11px] relative shrink-0" data-name="Link">
          <Icon4 />
          <Margin2 />
        </div>
        <div className="content-stretch flex flex-col gap-[5px] h-[59px] items-center justify-center pb-[8px] pt-[14px] px-[16px] relative shrink-0" data-name="Link">
          <Container8 />
          <Margin3 />
        </div>
      </div>
      <MobileBrowserBottom />
    </div>
  );
}