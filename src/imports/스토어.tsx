import svgPaths from "./svg-ruu02df8b4";
import imgChatGptImage20264200146091 from "figma:asset/77d3b752e61ada91d5ecd2b492601c6f823eb2a6.png";

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
        <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[#030213] text-[24px] tracking-[-0.48px] whitespace-nowrap">스토어</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0 w-[8.724px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#030213] text-[16px] whitespace-nowrap">P</p>
      </div>
    </div>
  );
}

function Point() {
  return (
    <div className="bg-[#fff5f5] content-stretch flex gap-[5.989px] h-[38.979px] items-center justify-end pl-[11.995px] pr-[12px] py-[6px] relative rounded-[40px] shrink-0" data-name="point">
      <Text />
      <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#e1302d] text-[16px] text-right whitespace-nowrap">200</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[8px] size-[23.99px] top-[8px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.99 23.99">
        <g id="Icon">
          <path d={svgPaths.p1aeb5f60} id="Vector" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99917" />
          <path d={svgPaths.p14dd400} id="Vector_2" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99917" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return <div className="absolute bg-[#e1302d] left-[26px] rounded-[37170400px] size-[7.997px] top-[5.99px]" data-name="Container" />;
}

function Button() {
  return (
    <div className="relative shrink-0 size-[39.983px]" data-name="Button">
      <Icon />
      <Container />
    </div>
  );
}

function Right1() {
  return (
    <div className="relative shrink-0" data-name="right">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Point />
        <Button />
      </div>
    </div>
  );
}

function Top() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="top">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] py-[11px] relative size-full">
          <H />
          <Right1 />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[19.992px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9917 19.9917">
        <g id="Icon">
          <path d={svgPaths.p66c0400} id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66597" />
          <path d={svgPaths.p34162640} id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66597" />
        </g>
      </svg>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-[#f9fafb] flex-[1_0_0] h-[47.997px] min-w-px relative rounded-[14px]" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[20px] pr-[16px] relative size-full">
          <Icon1 />
          <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#717182] text-[15px] whitespace-nowrap">상품명/브랜드 검색</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.108px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Box() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="box">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center py-[14px] relative size-full">
          <TextInput />
        </div>
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="bg-white h-[63.991px] relative shrink-0 w-full" data-name="search">
      <div className="content-stretch flex flex-col items-start px-[20px] relative size-full">
        <Box />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#e1302d] h-[36px] relative rounded-[37170400px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16px] py-[7px] relative size-full">
        <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[14px] text-center text-white tracking-[-0.28px] whitespace-nowrap">전체</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[37170400px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[15px] py-[7px] relative size-full">
        <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#717182] text-[14px] text-center tracking-[-0.28px] whitespace-nowrap">상품권</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[37170400px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[15px] py-[7px] relative size-full">
        <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#717182] text-[14px] text-center tracking-[-0.28px] whitespace-nowrap">커피/음료</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[37170400px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[15px] py-[7px] relative size-full">
        <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#717182] text-[14px] text-center tracking-[-0.28px] whitespace-nowrap">편의점</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[37170400px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[15px] py-[7px] relative size-full">
        <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#717182] text-[14px] text-center tracking-[-0.28px] whitespace-nowrap">피자/치킨</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-white h-[65.6px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-x-auto overflow-y-clip size-full">
        <div className="content-stretch flex gap-[7.997px] items-center pb-[12px] px-[20px] relative size-full">
          <Button1 />
          <Button2 />
          <Button3 />
          <Button4 />
          <Button5 />
        </div>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20.996px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#e1302d] text-[14px] top-[-0.89px] whitespace-nowrap">총 8개</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-white h-[36.989px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[30px] relative size-full">
        <Paragraph />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#fff8f8] content-stretch flex h-[119.473px] items-center justify-center relative shrink-0 w-[143.473px]" data-name="Container">
      <div className="h-[134px] relative shrink-0 w-[89px]" data-name="ChatGPT Image 2026년 4월 20일 오전 01_46_09 1">
        <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-0.15%] max-w-none top-0 w-[100.31%]" src={imgChatGptImage20264200146091} />
        </div>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="Paragraph">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#717182] text-[11px] tracking-[-0.22px] whitespace-nowrap">베스킨라빈스</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="Heading 3">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#030213] text-[14px] tracking-[-0.308px] whitespace-nowrap">싱글레귤러 아이스크림</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#e1302d] text-[16px] tracking-[-0.16px] whitespace-nowrap">4,680P</p>
      </div>
    </div>
  );
}

function Text2() {
  return <div className="h-[14px] shrink-0 w-[8.551px]" data-name="Text" />;
}

function P() {
  return (
    <div className="content-stretch flex gap-[3.998px] items-center relative shrink-0 w-[119.483px]" data-name="p">
      <Text1 />
      <Text2 />
    </div>
  );
}

function Txt() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="txt">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start justify-center px-[10px] py-[5px] relative size-full">
          <Paragraph1 />
          <Heading />
          <P />
        </div>
      </div>
    </div>
  );
}

function Li() {
  return (
    <div className="bg-white h-[204px] relative rounded-[16px] shrink-0" data-name="li">
      <div className="content-stretch flex flex-col items-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Container3 />
        <Txt />
      </div>
      <div aria-hidden="true" className="absolute border-[#ffdbda] border-[1.108px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#fff8f8] content-stretch flex h-[119.473px] items-center justify-center relative shrink-0 w-[143.473px]" data-name="Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[96px] relative shrink-0 text-[#0a0a0a] text-[64px] text-center whitespace-nowrap">🎁</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="Paragraph">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#717182] text-[11px] tracking-[-0.22px] whitespace-nowrap">CU</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="Heading 3">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#030213] text-[14px] tracking-[-0.308px] whitespace-nowrap">신라면</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#e1302d] text-[16px] tracking-[-0.16px] whitespace-nowrap">1,200P</p>
      </div>
    </div>
  );
}

function Text4() {
  return <div className="h-[14px] shrink-0 w-[8.551px]" data-name="Text" />;
}

function P1() {
  return (
    <div className="content-stretch flex gap-[3.998px] items-center relative shrink-0 w-[119.483px]" data-name="p">
      <Text3 />
      <Text4 />
    </div>
  );
}

function Txt1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="txt">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start justify-center px-[10px] py-[5px] relative size-full">
          <Paragraph2 />
          <Heading1 />
          <P1 />
        </div>
      </div>
    </div>
  );
}

function Li1() {
  return (
    <div className="bg-white h-[204px] relative rounded-[16px] shrink-0" data-name="li">
      <div className="content-stretch flex flex-col items-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Container4 />
        <Txt1 />
      </div>
      <div aria-hidden="true" className="absolute border-[#ffdbda] border-[1.108px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Ul() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="ul">
      <Li />
      <Li1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#fff8f8] content-stretch flex h-[119.473px] items-center justify-center relative shrink-0 w-[143.473px]" data-name="Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[96px] relative shrink-0 text-[#0a0a0a] text-[64px] text-center whitespace-nowrap">🎁</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="Paragraph">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#717182] text-[11px] tracking-[-0.22px] whitespace-nowrap">GS25</p>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="Heading 3">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#030213] text-[14px] tracking-[-0.308px] whitespace-nowrap">광동)제주삼다수</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#e1302d] text-[16px] tracking-[-0.16px] whitespace-nowrap">1,320P</p>
      </div>
    </div>
  );
}

function Text6() {
  return <div className="h-[14px] shrink-0 w-[8.551px]" data-name="Text" />;
}

function P2() {
  return (
    <div className="content-stretch flex gap-[3.998px] items-center relative shrink-0 w-[119.483px]" data-name="p">
      <Text5 />
      <Text6 />
    </div>
  );
}

function Txt2() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="txt">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start justify-center px-[10px] py-[5px] relative size-full">
          <Paragraph3 />
          <Heading2 />
          <P2 />
        </div>
      </div>
    </div>
  );
}

function Li2() {
  return (
    <div className="bg-white h-[204px] relative rounded-[16px] shrink-0" data-name="li">
      <div className="content-stretch flex flex-col items-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Container5 />
        <Txt2 />
      </div>
      <div aria-hidden="true" className="absolute border-[#ffdbda] border-[1.108px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#fff8f8] content-stretch flex h-[119.473px] items-center justify-center relative shrink-0 w-[143.473px]" data-name="Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[96px] relative shrink-0 text-[#0a0a0a] text-[64px] text-center whitespace-nowrap">🎁</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="Paragraph">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#717182] text-[11px] tracking-[-0.22px] whitespace-nowrap">메가MGC커피</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="Heading 3">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#030213] text-[14px] tracking-[-0.308px] whitespace-nowrap">(ICE)아메리카노</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#e1302d] text-[16px] tracking-[-0.16px] whitespace-nowrap">2,400P</p>
      </div>
    </div>
  );
}

function Text8() {
  return <div className="h-[14px] shrink-0 w-[8.551px]" data-name="Text" />;
}

function P3() {
  return (
    <div className="content-stretch flex gap-[3.998px] items-center relative shrink-0 w-[119.483px]" data-name="p">
      <Text7 />
      <Text8 />
    </div>
  );
}

function Txt3() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="txt">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start justify-center px-[10px] py-[5px] relative size-full">
          <Paragraph4 />
          <Heading3 />
          <P3 />
        </div>
      </div>
    </div>
  );
}

function Li3() {
  return (
    <div className="bg-white h-[204px] relative rounded-[16px] shrink-0" data-name="li">
      <div className="content-stretch flex flex-col items-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Container6 />
        <Txt3 />
      </div>
      <div aria-hidden="true" className="absolute border-[#ffdbda] border-[1.108px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Ul1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="ul">
      <Li2 />
      <Li3 />
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#fff8f8] content-stretch flex h-[119.473px] items-center justify-center relative shrink-0 w-[143.473px]" data-name="Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[96px] relative shrink-0 text-[#0a0a0a] text-[64px] text-center whitespace-nowrap">🎁</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="Paragraph">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#717182] text-[11px] tracking-[-0.22px] whitespace-nowrap">다이소</p>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[127px]" data-name="Heading 3">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none overflow-hidden relative shrink-0 text-[#030213] text-[14px] text-ellipsis tracking-[-0.308px] w-[127px] whitespace-nowrap">모바일 금액권 3,000원</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#e1302d] text-[16px] tracking-[-0.16px] whitespace-nowrap">3,600P</p>
      </div>
    </div>
  );
}

function Text10() {
  return <div className="h-[14px] shrink-0 w-[8.551px]" data-name="Text" />;
}

function P4() {
  return (
    <div className="content-stretch flex gap-[3.998px] items-center relative shrink-0 w-[119.483px]" data-name="p">
      <Text9 />
      <Text10 />
    </div>
  );
}

function Txt4() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="txt">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start justify-center px-[10px] py-[5px] relative size-full">
          <Paragraph5 />
          <Heading4 />
          <P4 />
        </div>
      </div>
    </div>
  );
}

function Li4() {
  return (
    <div className="bg-white h-[204px] relative rounded-[16px] shrink-0 w-[145px]" data-name="li">
      <div className="content-stretch flex flex-col items-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Container7 />
        <Txt4 />
      </div>
      <div aria-hidden="true" className="absolute border-[#ffdbda] border-[1.108px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#fff8f8] content-stretch flex h-[119.473px] items-center justify-center relative shrink-0 w-[143.473px]" data-name="Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[96px] relative shrink-0 text-[#0a0a0a] text-[64px] text-center whitespace-nowrap">🎁</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="Paragraph">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#717182] text-[11px] tracking-[-0.22px] whitespace-nowrap">올리브영</p>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none overflow-hidden relative shrink-0 text-[#030213] text-[14px] text-ellipsis tracking-[-0.308px] w-[123px] whitespace-nowrap">모바일상품권 10,000원ㅀㅎㅇㅀ</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#e1302d] text-[16px] tracking-[-0.16px] whitespace-nowrap">12,000P</p>
      </div>
    </div>
  );
}

function Text12() {
  return <div className="h-[14px] shrink-0 w-[8.551px]" data-name="Text" />;
}

function P5() {
  return (
    <div className="content-stretch flex gap-[3.998px] items-center relative shrink-0 w-[119.483px]" data-name="p">
      <Text11 />
      <Text12 />
    </div>
  );
}

function Txt5() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="txt">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start justify-center px-[10px] py-[5px] relative size-full">
          <Paragraph6 />
          <Heading5 />
          <P5 />
        </div>
      </div>
    </div>
  );
}

function Li5() {
  return (
    <div className="bg-white h-[204px] relative rounded-[16px] shrink-0 w-[145px]" data-name="li">
      <div className="content-stretch flex flex-col items-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Container8 />
        <Txt5 />
      </div>
      <div aria-hidden="true" className="absolute border-[#ffdbda] border-[1.108px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Ul2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="ul">
      <Li4 />
      <Li5 />
    </div>
  );
}

function Item() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="item">
      <div className="flex flex-col items-center overflow-x-clip overflow-y-auto size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center pb-[19px] px-[25px] relative size-full">
          <Ul />
          <Ul1 />
          <Ul2 />
        </div>
      </div>
    </div>
  );
}

function Contents() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[646px] items-center overflow-clip relative shrink-0 w-full" data-name="contents">
      <Top />
      <Search />
      <Container1 />
      <Container2 />
      <Item />
    </div>
  );
}

function Container9() {
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

function Container10() {
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
          <path d={svgPaths.p2d683a00} id="Vector" stroke="var(--stroke-0, #FF6665)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          <path d="M11 7.33333V19.25" id="Vector_2" stroke="var(--stroke-0, #FF6665)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          <path d={svgPaths.p146f4580} id="Vector_3" stroke="var(--stroke-0, #FF6665)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          <path d={svgPaths.p45e9548} id="Vector_4" stroke="var(--stroke-0, #FF6665)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#ff6665] text-[11px] text-center tracking-[-0.22px] uppercase whitespace-nowrap">
        <p className="leading-none">스토어</p>
      </div>
    </div>
  );
}

function Container11() {
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
    <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative rounded-[24px] size-full" data-name="스토어">
      <MobileBrowserTop />
      <Contents />
      <div className="backdrop-blur-[6px] bg-white content-stretch flex gap-[34px] h-[59px] items-end justify-center px-[16px] relative shrink-0 w-[360px]" data-name="Bottom_nav_bar">
        <div aria-hidden="true" className="absolute border-[#ededed] border-solid border-t inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-col gap-[5px] h-[59px] items-center justify-center pb-[8px] pt-[14px] px-[16px] relative rounded-[16px] shrink-0" data-name="Link">
          <Container9 />
          <Margin />
        </div>
        <div className="content-stretch flex flex-col gap-[5px] h-[59px] items-center justify-center pb-[8px] pt-[14px] px-[16px] relative shrink-0" data-name="Link">
          <Container10 />
          <Margin1 />
        </div>
        <div className="content-stretch flex flex-col gap-[5px] h-[59px] items-center justify-center pb-[8px] pt-[14px] px-[11px] relative shrink-0" data-name="Link">
          <Icon2 />
          <Margin2 />
        </div>
        <div className="content-stretch flex flex-col gap-[5px] h-[59px] items-center justify-center pb-[8px] pt-[14px] px-[16px] relative shrink-0" data-name="Link">
          <Container11 />
          <Margin3 />
        </div>
      </div>
      <MobileBrowserBottom />
    </div>
  );
}