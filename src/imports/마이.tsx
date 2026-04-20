import svgPaths from "./svg-fwcdgiuy9h";
import img from "figma:asset/392798e4ec51e4ac4066582a7ce33707299f4a5e.png";
import img1 from "figma:asset/f31d588a5eaf4f28989be19bf8c42d4c19db9fbf.png";
import img2 from "figma:asset/cd56c723a6d6b2afe8d8a7266ece1d607ac77a02.png";

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

function Text() {
  return (
    <div className="h-[31.984px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[24px] text-center text-white whitespace-nowrap">뚜</p>
      </div>
    </div>
  );
}

function Img() {
  return (
    <div className="bg-gradient-to-b from-[#f63c3c] relative rounded-[36829000px] shrink-0 size-[79.987px] to-[#e47f53]" data-name="img">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 2">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[30px] relative shrink-0 text-[#030213] text-[20px] tracking-[-0.24px] whitespace-nowrap">김탐험</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[15.984px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9836 15.9836">
        <g clipPath="url(#clip0_7_2932)" id="Icon">
          <path d={svgPaths.p20c8e280} id="Vector" stroke="var(--stroke-0, #E1302D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33197" />
          <path d={svgPaths.p2bcd73f0} id="Vector_2" stroke="var(--stroke-0, #E1302D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33197" />
        </g>
        <defs>
          <clipPath id="clip0_7_2932">
            <rect fill="white" height="15.9836" width="15.9836" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[23.993px] relative shrink-0 w-[82.01px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#e1302d] text-[16px] whitespace-nowrap">Lv.7 탐험가</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[7.992px] h-[23.993px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon />
      <Text1 />
    </div>
  );
}

function Id() {
  return (
    <div className="flex-[279.714_0_0] h-[57.984px] min-w-px relative" data-name="id">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.996px] items-start relative size-full">
        <Heading />
        <Container />
      </div>
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex gap-[15.984px] h-[79.987px] items-center relative shrink-0 w-full" data-name="top">
      <Img />
      <Id />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[19.98px] relative shrink-0 w-[60.899px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#5b5b70] text-[14px]">내 포인트</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[15.984px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9836 15.9836">
        <g id="Icon">
          <path d={svgPaths.p19263e00} id="Vector" stroke="var(--stroke-0, #5B5B70)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33197" />
        </g>
      </svg>
    </div>
  );
}

function PTxt() {
  return (
    <div className="content-stretch flex h-[19.997px] items-center relative shrink-0 w-full" data-name="p_txt">
      <Text2 />
      <Icon1 />
    </div>
  );
}

function Span() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="span">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#030213] text-[20px] whitespace-nowrap">200P</p>
    </div>
  );
}

function Box() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="box">
      <div className="content-stretch flex flex-col gap-[9.99px] items-start p-[16px] relative size-full">
        <PTxt />
        <Span />
      </div>
    </div>
  );
}

function Line() {
  return <div className="bg-[#5b5b70] h-[35px] opacity-60 shrink-0 w-[0.4px]" data-name="line" />;
}

function Text3() {
  return (
    <div className="h-[19.98px] relative shrink-0 w-[46.905px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#5b5b70] text-[14px]">내 쿠폰</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[15.984px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9836 15.9836">
        <g id="Icon">
          <path d={svgPaths.p19263e00} id="Vector" stroke="var(--stroke-0, #5B5B70)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33197" />
        </g>
      </svg>
    </div>
  );
}

function Coupon() {
  return (
    <div className="content-stretch flex h-[19.997px] items-center relative shrink-0 w-full" data-name="coupon">
      <Text3 />
      <Icon2 />
    </div>
  );
}

function Span1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="span">
      <p className="flex-[1_0_0] font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none min-w-px relative text-[#030213] text-[20px]">3개</p>
    </div>
  );
}

function Box1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="box">
      <div className="content-stretch flex flex-col gap-[9.99px] items-start pl-[30px] pr-[16px] py-[16px] relative size-full">
        <Coupon />
        <Span1 />
      </div>
    </div>
  );
}

function Warp() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="warp">
      <Box />
      <Line />
      <Box1 />
    </div>
  );
}

function Point() {
  return (
    <div className="bg-[#f4f5fa] h-[107.987px] relative rounded-[9px] shrink-0 w-full" data-name="point">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[13px] relative size-full">
          <Warp />
        </div>
      </div>
    </div>
  );
}

function MyInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[23.993px] h-[226px] items-start relative shrink-0 w-full" data-name="my_info">
      <Top />
      <Point />
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#030213] text-[20px] tracking-[-0.4px] whitespace-nowrap">내 배지</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[15.984px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9836 15.9836">
        <g id="Icon">
          <path d={svgPaths.p19263e00} id="Vector" stroke="var(--stroke-0, #5B5B70)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33197" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7px] items-center relative size-full">
        <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#5b5b70] text-[14px] text-center whitespace-nowrap">전체보기</p>
        <Icon3 />
      </div>
    </div>
  );
}

function Tit() {
  return (
    <div className="relative shrink-0 w-full" data-name="tit">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[3px] relative size-full">
          <Heading1 />
          <Button />
        </div>
      </div>
    </div>
  );
}

function ConBox() {
  return (
    <div className="bg-[#e5cefd] h-[95.159px] relative rounded-[19.035px] shadow-[0px_4.759px_7.138px_0px_rgba(0,0,0,0.1),0px_2.379px_4.759px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="con_box">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24.32px] relative size-full">
          <div className="h-[42px] relative shrink-0 w-[40px]" data-name="개체">
            <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Con() {
  return (
    <div className="relative self-stretch shrink-0 w-[95.159px]" data-name="con">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[11px] items-center relative size-full">
        <ConBox />
        <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[19.035px] relative shrink-0 text-[#5b5b70] text-[14.276px] text-center w-full">첫 미션</p>
      </div>
    </div>
  );
}

function ConBox1() {
  return (
    <div className="bg-[#ffa09e] h-[95.159px] relative rounded-[19.035px] shadow-[0px_4.759px_7.138px_0px_rgba(0,0,0,0.1),0px_2.379px_4.759px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="con_box">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[31.216px] relative size-full">
          <div className="h-[38px] relative shrink-0 w-[40px]" data-name="개체">
            <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Con1() {
  return (
    <div className="relative shrink-0 w-[95.159px]" data-name="con">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[11px] items-center relative size-full">
        <ConBox1 />
        <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[19.035px] relative shrink-0 text-[#5b5b70] text-[14.276px] text-center w-full">10km</p>
      </div>
    </div>
  );
}

function ConBox2() {
  return (
    <div className="bg-[#fc882a] h-[95.159px] relative rounded-[19.035px] shadow-[0px_4.759px_7.138px_0px_rgba(0,0,0,0.1),0px_2.379px_4.759px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="con_box">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[23.076px] relative size-full">
          <div className="h-[39px] relative shrink-0 w-[40px]" data-name="개체">
            <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Con2() {
  return (
    <div className="relative shrink-0 w-[95.159px]" data-name="con">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[11px] items-center relative size-full">
        <ConBox2 />
        <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[19.035px] relative shrink-0 text-[#5b5b70] text-[14.276px] text-center w-full">탐험가</p>
      </div>
    </div>
  );
}

function Wrap() {
  return (
    <div className="content-stretch flex gap-[11.988px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="wrap">
      <Con />
      <Con1 />
      <Con2 />
    </div>
  );
}

function Badge() {
  return (
    <div className="content-stretch flex flex-col gap-[15.984px] items-start relative shrink-0 w-full" data-name="badge">
      <Tit />
      <Wrap />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Heading 2">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#030213] text-[20px] tracking-[-0.4px] whitespace-nowrap">완료한 미션</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[15.984px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9836 15.9836">
        <g id="Icon">
          <path d={svgPaths.p19263e00} id="Vector" stroke="var(--stroke-0, #5B5B70)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33197" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0" data-name="Button">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#5b5b70] text-[14px] text-center whitespace-nowrap">전체보기</p>
      <Icon4 />
    </div>
  );
}

function Tit1() {
  return (
    <div className="relative shrink-0 w-full" data-name="tit">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[3px] relative size-full">
          <Heading2 />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[19.997px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9967 19.9967">
        <g id="Icon">
          <path d={svgPaths.p276ce100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
        </g>
      </svg>
    </div>
  );
}

function Icon5() {
  return (
    <div className="bg-[#6ad36f] relative rounded-[36829000px] shrink-0 size-[39.993px]" data-name="icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[9.998px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#030213] text-[18px] tracking-[-0.36px] whitespace-nowrap">별을 따라 걷다 보면</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none min-w-px relative text-[#5b5b70] text-[14px]">2026.04.05</p>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-w-px relative" data-name="left">
      <Heading3 />
      <Container2 />
    </div>
  );
}

function Right1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="right">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#d83835] text-[14px] text-right tracking-[-0.14px] whitespace-nowrap">400P</p>
    </div>
  );
}

function Txt() {
  return (
    <div className="relative self-stretch shrink-0 w-[213.843px]" data-name="txt">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Left />
        <Right1 />
      </div>
    </div>
  );
}

function Con3() {
  return (
    <div className="relative shrink-0 w-full" data-name="con">
      <div className="content-stretch flex gap-[15.984px] items-start relative size-full">
        <Icon5 />
        <Txt />
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="list">
      <div aria-hidden="true" className="absolute border-[#f3f3f5] border-[1.098px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.06)]" />
      <div className="content-stretch flex flex-col items-start pb-[21.09px] pt-[21.094px] px-[21.094px] relative size-full">
        <Con3 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <List />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[19.997px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9967 19.9967">
        <g id="Icon">
          <path d={svgPaths.p276ce100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
        </g>
      </svg>
    </div>
  );
}

function Icon7() {
  return (
    <div className="bg-[#6ad36f] relative rounded-[36829000px] shrink-0 size-[39.993px]" data-name="icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[9.998px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#030213] text-[18px] tracking-[-0.36px] whitespace-nowrap">천호동 요정 찾기</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none min-w-px relative text-[#5b5b70] text-[14px]">2026.04.02</p>
    </div>
  );
}

function Left1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-w-px relative" data-name="left">
      <Heading4 />
      <Container4 />
    </div>
  );
}

function Right2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="right">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#d83835] text-[14px] text-right tracking-[-0.14px] whitespace-nowrap">150P</p>
    </div>
  );
}

function Txt1() {
  return (
    <div className="relative self-stretch shrink-0 w-[213.843px]" data-name="txt">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Left1 />
        <Right2 />
      </div>
    </div>
  );
}

function Con4() {
  return (
    <div className="relative shrink-0 w-full" data-name="con">
      <div className="content-stretch flex gap-[15.984px] items-start relative size-full">
        <Icon7 />
        <Txt1 />
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="list">
      <div aria-hidden="true" className="absolute border-[#f3f3f5] border-[1.098px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.06)]" />
      <div className="content-stretch flex flex-col items-start pb-[21.09px] pt-[21.094px] px-[21.094px] relative size-full">
        <Con4 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <List1 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[19.997px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9967 19.9967">
        <g id="Icon">
          <path d={svgPaths.p276ce100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
        </g>
      </svg>
    </div>
  );
}

function Icon9() {
  return (
    <div className="bg-[#6ad36f] relative rounded-[36829000px] shrink-0 size-[39.993px]" data-name="icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[9.998px] relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#030213] text-[18px] tracking-[-0.36px] whitespace-nowrap">명일동 책방 미션</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none min-w-px relative text-[#5b5b70] text-[14px]">2026.03.28</p>
    </div>
  );
}

function Left2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-w-px relative" data-name="left">
      <Heading5 />
      <Container6 />
    </div>
  );
}

function Right3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="right">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#d83835] text-[14px] text-right tracking-[-0.14px] whitespace-nowrap">300P</p>
    </div>
  );
}

function Txt2() {
  return (
    <div className="relative self-stretch shrink-0 w-[213.843px]" data-name="txt">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Left2 />
        <Right3 />
      </div>
    </div>
  );
}

function Con5() {
  return (
    <div className="relative shrink-0 w-full" data-name="con">
      <div className="content-stretch flex gap-[15.984px] items-start relative size-full">
        <Icon9 />
        <Txt2 />
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="list">
      <div aria-hidden="true" className="absolute border-[#f3f3f5] border-[1.098px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.06)]" />
      <div className="content-stretch flex flex-col items-start pb-[21.09px] pt-[21.094px] px-[21.094px] relative size-full">
        <Con5 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <List2 />
    </div>
  );
}

function SuccessMy() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start py-[18px] relative shrink-0 w-full" data-name="success_my">
      <Tit1 />
      <Container1 />
      <Container3 />
      <Container5 />
    </div>
  );
}

function Contents() {
  return (
    <div className="bg-white h-[637px] relative shrink-0 w-full" data-name="contents">
      <div className="flex flex-col items-center overflow-x-clip overflow-y-auto size-full">
        <div className="content-stretch flex flex-col gap-[18px] items-center p-[20px] relative size-full">
          <MyInfo />
          <Badge />
          <SuccessMy />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.p8cc5b00} fill="var(--fill-0, #A8A29E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#a8a29e] text-[11px] text-center tracking-[-0.22px] uppercase whitespace-nowrap">
        <p className="leading-none">미션</p>
      </div>
    </div>
  );
}

function Container8() {
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

function Icon11() {
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

function Container9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p37375e00} fill="var(--fill-0, #FF6665)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#ff6665] text-[11px] text-center tracking-[-0.22px] uppercase whitespace-nowrap">
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
    <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative rounded-[24px] size-full" data-name="마이">
      <MobileBrowserTop />
      <Contents />
      <div className="backdrop-blur-[6px] bg-white content-stretch flex gap-[34px] h-[59px] items-end justify-center px-[16px] relative shrink-0 w-[360px]" data-name="Bottom_nav_bar">
        <div aria-hidden="true" className="absolute border-[#ededed] border-solid border-t inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-col gap-[5px] h-[59px] items-center justify-center pb-[8px] pt-[14px] px-[16px] relative rounded-[16px] shrink-0" data-name="Link">
          <Container7 />
          <Margin />
        </div>
        <div className="content-stretch flex flex-col gap-[5px] h-[59px] items-center justify-center pb-[8px] pt-[14px] px-[16px] relative shrink-0" data-name="Link">
          <Container8 />
          <Margin1 />
        </div>
        <div className="content-stretch flex flex-col gap-[5px] h-[59px] items-center justify-center pb-[8px] pt-[14px] px-[11px] relative shrink-0" data-name="Link">
          <Icon11 />
          <Margin2 />
        </div>
        <div className="content-stretch flex flex-col gap-[5px] h-[59px] items-center justify-center pb-[8px] pt-[14px] px-[16px] relative shrink-0" data-name="Link">
          <Container9 />
          <Margin3 />
        </div>
      </div>
      <MobileBrowserBottom />
    </div>
  );
}