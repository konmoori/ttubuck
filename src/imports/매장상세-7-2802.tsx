import svgPaths from "./svg-zplsgcmdrh";
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
        <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#030213] text-[20px] tracking-[-0.4px] whitespace-nowrap">상품 상세</p>
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

function Img() {
  return (
    <div className="bg-[#fff8f8] content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="img">
      <div className="h-[186px] relative shrink-0 w-[124px]" data-name="ChatGPT Image 2026년 4월 20일 오전 01_46_09 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-0.15%] max-w-none top-0 w-[100.31%]" src={imgChatGptImage20264200146091} />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[18px] relative shrink-0 w-[304.667px]" data-name="Container">
      <p className="absolute font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[18px] left-0 text-[#e1302d] text-[12px] top-0 whitespace-nowrap">베스킨라빈스</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex items-center pb-[3px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#030213] text-[22px] whitespace-nowrap">싱글레귤러 아이스크림</p>
    </div>
  );
}

function Container3() {
  return <div className="bg-[#ff6e40] rounded-[22369600px] shrink-0 size-[10px]" data-name="Container" />;
}

function Container2() {
  return (
    <div className="bg-[rgba(255,110,64,0.1)] content-stretch flex items-center justify-center px-[3px] relative rounded-[22369600px] shrink-0 size-[16px]" data-name="Container">
      <Container3 />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex h-full items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#e1302d] text-[16px] whitespace-nowrap">4,680P</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#717182] text-[13px] whitespace-nowrap">필요</p>
    </div>
  );
}

function Box() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[rgba(225,48,45,0.05)] gap-[8px] items-center px-[10px] py-[6px] relative rounded-[6px] shrink-0 to-[rgba(255,110,64,0.05)]" data-name="box">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(225,48,45,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Container2 />
      <div className="flex flex-row items-center self-stretch">
        <Text />
      </div>
      <Text1 />
    </div>
  );
}

function Tit() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[304.667px]" data-name="tit">
      <Container1 />
      <Heading1 />
      <Box />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[22.5px] left-0 text-[#030213] text-[15px] top-[-1px] whitespace-nowrap">상품 설명</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[44.792px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[0] left-0 text-[#5b5b70] text-[14px] top-[-0.33px] w-[305px]">
        <p className="leading-[1.67] mb-0">베스킨라빈스 전국 매장에서 사용 가능한 싱글레귤러</p>
        <p className="leading-[1.67]">아이스크림 기프티콘입니다.</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[75.292px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Paragraph />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-0 size-[18px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M6 1.5V4.5" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M12 1.5V4.5" id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p13693a10} id="Vector_3" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M2.25 7.5H15.75" id="Vector_4" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Span() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="span">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#717182] text-[13px] whitespace-nowrap">유효기간</p>
    </div>
  );
}

function Span1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="span">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#030213] text-[14px] whitespace-nowrap">발급일로부터 30일</p>
    </div>
  );
}

function Txt1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[42.5px] items-start justify-center left-[30px] top-0 w-[105.5px]" data-name="txt">
      <Span />
      <Span1 />
    </div>
  );
}

function Txt() {
  return (
    <div className="h-[42.5px] relative shrink-0 w-full" data-name="txt">
      <Icon1 />
      <Txt1 />
    </div>
  );
}

function Box1() {
  return (
    <div className="bg-[#f8f8fa] h-[74.5px] relative rounded-[12px] shrink-0 w-full" data-name="box">
      <div className="content-stretch flex flex-col items-start pt-[16px] px-[16px] relative size-full">
        <Txt />
      </div>
    </div>
  );
}

function Notice() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[304.667px]" data-name="notice">
      <Container4 />
      <Box1 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[22.5px] left-0 text-[#030213] text-[15px] top-[-1px] whitespace-nowrap">사용 방법</p>
    </div>
  );
}

function Container5() {
  return <div className="bg-[#e1302d] rounded-[22369600px] shrink-0 size-[6px]" data-name="Container" />;
}

function Paragraph1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Paragraph">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#5b5b70] text-[13px] whitespace-nowrap">전국 베스킨라빈스 매장에서 사용 가능합니다</p>
    </div>
  );
}

function P() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="p">
      <Container5 />
      <Paragraph1 />
    </div>
  );
}

function Container6() {
  return <div className="bg-[#e1302d] rounded-[22369600px] shrink-0 size-[6px]" data-name="Container" />;
}

function Paragraph2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Paragraph">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#5b5b70] text-[13px] whitespace-nowrap">매장 방문 시 기프티콘 화면을 보여주세요</p>
    </div>
  );
}

function P1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="p">
      <Container6 />
      <Paragraph2 />
    </div>
  );
}

function Container7() {
  return <div className="bg-[#e1302d] rounded-[22369600px] shrink-0 size-[6px]" data-name="Container" />;
}

function Paragraph3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Paragraph">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#5b5b70] text-[13px] whitespace-nowrap">유효기간 내에 사용하지 않으면 자동 소멸됩니다</p>
    </div>
  );
}

function P2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="p">
      <Container7 />
      <Paragraph3 />
    </div>
  );
}

function TBox() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] h-[78.5px] items-start justify-center relative shrink-0 w-full" data-name="t_box">
      <P />
      <P1 />
      <P2 />
    </div>
  );
}

function Txt2() {
  return (
    <div className="bg-[#f8f8fa] h-[110.5px] relative rounded-[12px] shrink-0 w-full" data-name="txt">
      <div className="content-stretch flex flex-col items-start pt-[16px] px-[16px] relative size-full">
        <TBox />
      </div>
    </div>
  );
}

function Use() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[145px] items-start relative shrink-0 w-[304.667px]" data-name="use">
      <Heading3 />
      <Txt2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_7_2912)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #FFD600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 10.6667V8" id="Vector_2" stroke="var(--stroke-0, #FFD600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 5.33333H8.00667" id="Vector_3" stroke="var(--stroke-0, #FFD600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_7_2912">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="bg-[rgba(255,214,0,0.2)] content-stretch flex items-center justify-center px-[8px] relative rounded-[22369600px] shrink-0 size-[32px]" data-name="icon">
      <Icon3 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[19.5px] left-0 text-[#030213] text-[13px] top-[0.33px] whitespace-nowrap">안내사항</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#5b5b70] text-[12px] top-0 w-[228px]">교환한 상품은 취소 및 환불이 불가능하며, 유효기간이 지나면 자동으로 소멸됩니다.</p>
    </div>
  );
}

function Txt3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[59.5px] items-start relative shrink-0 w-[227.333px]" data-name="txt">
      <Heading4 />
      <Paragraph4 />
    </div>
  );
}

function Wrap() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="wrap">
      <Icon2 />
      <Txt3 />
    </div>
  );
}

function Info() {
  return (
    <div className="bg-[#fff9e6] content-stretch flex flex-col h-[92.833px] items-start pb-[0.667px] pt-[16.667px] px-[16.667px] relative rounded-[12px] shrink-0 w-[304.667px]" data-name="info">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,214,0,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Wrap />
    </div>
  );
}

function ConWrap() {
  return (
    <div className="bg-white relative shadow-[0px_-4px_37.1px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="con_wrap">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[22px] items-center p-[20px] relative size-full">
          <Tit />
          <Notice />
          <Use />
          <Info />
        </div>
      </div>
    </div>
  );
}

function Contents() {
  return (
    <div className="content-stretch flex flex-col h-[424px] items-start relative shrink-0 w-full" data-name="contents">
      <Img />
      <ConWrap />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#717182] text-[11px] whitespace-nowrap">내 포인트</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#030213] text-[16px] whitespace-nowrap">200P</p>
      </div>
    </div>
  );
}

function Point() {
  return (
    <div className="relative shrink-0 w-full" data-name="point">
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[4px] pl-[12px] relative size-full">
        <Container8 />
        <Container9 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#e1302d] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[86px] py-[16px] relative size-full">
          <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-center text-white tracking-[-0.32px] whitespace-nowrap">포인트로 교환하기</p>
        </div>
      </div>
    </div>
  );
}

function ProductDetail() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] h-[149.667px] items-start pt-[20.667px] px-[20px] relative shrink-0 w-[360px]" data-name="ProductDetail">
      <div aria-hidden="true" className="absolute border-[#f3f3f5] border-solid border-t-[0.667px] inset-0 pointer-events-none" />
      <Point />
      <Button1 />
    </div>
  );
}

function Container10() {
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

function Container11() {
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

function Container12() {
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
    <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative rounded-[24px] size-full" data-name="매장상세">
      <MobileBrowserTop />
      <Container />
      <Contents />
      <ProductDetail />
      <div className="backdrop-blur-[6px] bg-white content-stretch flex gap-[34px] h-[59px] items-end justify-center px-[16px] relative shrink-0 w-[360px]" data-name="Bottom_nav_bar">
        <div aria-hidden="true" className="absolute border-[#ededed] border-solid border-t inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-col gap-[5px] h-[59px] items-center justify-center pb-[8px] pt-[14px] px-[16px] relative rounded-[16px] shrink-0" data-name="Link">
          <Container10 />
          <Margin />
        </div>
        <div className="content-stretch flex flex-col gap-[5px] h-[59px] items-center justify-center pb-[8px] pt-[14px] px-[16px] relative shrink-0" data-name="Link">
          <Container11 />
          <Margin1 />
        </div>
        <div className="content-stretch flex flex-col gap-[5px] h-[59px] items-center justify-center pb-[8px] pt-[14px] px-[11px] relative shrink-0" data-name="Link">
          <Icon4 />
          <Margin2 />
        </div>
        <div className="content-stretch flex flex-col gap-[5px] h-[59px] items-center justify-center pb-[8px] pt-[14px] px-[16px] relative shrink-0" data-name="Link">
          <Container12 />
          <Margin3 />
        </div>
      </div>
      <MobileBrowserBottom />
    </div>
  );
}