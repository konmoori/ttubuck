import svgPaths from "./svg-c7ykx4qa4p";
import imgImg from "figma:asset/006c3b8e81f487d64d8579be8cb04418d9318579.png";

function Container() {
  return <div className="absolute h-[24px] left-[16px] top-[160px] w-[44.75px]" data-name="Container" />;
}

function Img() {
  return (
    <div className="h-[200px] relative shrink-0 w-full" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg} />
      <Container />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 2">
      <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#030213] text-[22px] whitespace-nowrap">카페 모카</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p1539e500} id="Vector" stroke="var(--stroke-0, #E1302D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p37b99980} id="Vector_2" stroke="var(--stroke-0, #E1302D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#717182] text-[13px] whitespace-nowrap">120m</p>
      </div>
    </div>
  );
}

function Location() {
  return (
    <div className="content-stretch flex gap-[4px] h-[19.5px] items-center relative shrink-0 w-full" data-name="location">
      <Icon />
      <Text />
    </div>
  );
}

function Tit() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[60.5px] items-start relative shrink-0 w-[304.667px]" data-name="tit">
      <Heading />
      <Location />
    </div>
  );
}

function H() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="h3">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#030213] text-[20px] whitespace-nowrap">대표 메뉴</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#030213] text-[14px] whitespace-nowrap">아메리카노</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="relative shrink-0" data-name="text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium h-[21px] leading-none relative shrink-0 text-[#030213] text-[14px] tracking-[-0.14px] w-[50px]">4,500원</p>
      </div>
    </div>
  );
}

function Li() {
  return (
    <div className="h-[31.667px] relative shrink-0 w-full" data-name="li">
      <div aria-hidden="true" className="absolute border-[#ececf0] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[10.667px] relative size-full">
          <Text1 />
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#030213] text-[14px] whitespace-nowrap">카페라떼</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#030213] text-[14px] tracking-[-0.14px] whitespace-nowrap">5,000원</p>
      </div>
    </div>
  );
}

function Li1() {
  return (
    <div className="h-[31.667px] relative shrink-0 w-full" data-name="li">
      <div aria-hidden="true" className="absolute border-[#ececf0] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[10.667px] relative size-full">
          <Text3 />
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#030213] text-[14px] whitespace-nowrap">바닐라라떼</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#030213] text-[14px] tracking-[-0.14px] whitespace-nowrap">5,500원</p>
      </div>
    </div>
  );
}

function Li2() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="li">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Text5 />
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function Ul() {
  return (
    <div className="bg-[#f8f8fa] h-[136.333px] relative rounded-[10px] shrink-0 w-full" data-name="ul">
      <div className="content-stretch flex flex-col gap-[10px] items-start pt-[16px] px-[16px] relative size-full">
        <Li />
        <Li1 />
        <Li2 />
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[172.333px] items-start relative shrink-0 w-[304.667px]" data-name="menu">
      <H />
      <Ul />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 3">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#030213] text-[20px] whitespace-nowrap">교환 가능한 혜택</p>
    </div>
  );
}

function H1() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="h3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-none left-0 text-[#030213] text-[16px] top-[-1px] tracking-[-0.32px] whitespace-nowrap">전메뉴 1,000원 할인</p>
      </div>
    </div>
  );
}

function Span() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none left-0 text-[#717182] text-[14px] top-[0.33px] whitespace-nowrap">구매시 전메뉴 적용 가능한 1,000원 할인 쿠폰</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[46px] items-start relative shrink-0 w-full" data-name="Container">
      <H1 />
      <Span />
    </div>
  );
}

function Container8() {
  return <div className="bg-[#ff6e40] rounded-[22369600px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container7() {
  return (
    <div className="bg-[rgba(255,110,64,0.1)] relative rounded-[22369600px] shrink-0 size-[14px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[3px] relative size-full">
        <Container8 />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="flex-[1_0_0] h-[19.5px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#717182] text-[13px] top-[0.33px] whitespace-nowrap">200P 필요</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[51.385px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Container7 />
        <Text7 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <button className="bg-[#e1302d] cursor-pointer relative rounded-[8px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[20px] py-[12px] relative size-full">
        <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">교환하기</p>
      </div>
    </button>
  );
}

function Container5() {
  return (
    <div className="h-[48.167px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f3f5] border-solid border-t-[0.667px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[12.667px] relative size-full">
          <Container6 />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white h-[139.5px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f3f5] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.06)]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-[0.667px] pt-[16.667px] px-[16.667px] relative size-full">
        <Container4 />
        <Container5 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-[304.667px]" data-name="Container">
      <Heading1 />
      <Container2 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_5_2163)" id="Icon">
          <path d={svgPaths.p3dc49580} id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M9 4.5V9L12 10.5" id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_5_2163">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#717182] text-[13px] top-[0.33px] whitespace-nowrap">영업시간</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[42.5px] items-start relative shrink-0 w-[86.917px]" data-name="Container">
      <Container10 />
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal h-[21px] leading-[21px] relative shrink-0 text-[#030213] text-[14px] w-[87px]">09:00 - 22:00</p>
    </div>
  );
}

function Li3() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="li">
      <Icon1 />
      <Container9 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p339e780} id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2ef6c000} id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#717182] text-[13px] top-[0.33px] whitespace-nowrap">주소</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#030213] text-[14px] top-0 whitespace-nowrap">서울 강동구 성내동 123-45</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[42.5px] items-start relative shrink-0 w-[153.49px]" data-name="Container">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Li4() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="li">
      <Icon2 />
      <Container11 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_5_2160)" id="Icon">
          <path d={svgPaths.p32db8200} id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_5_2160">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#717182] text-[13px] top-[0.33px] whitespace-nowrap">전화번호</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#030213] text-[14px] top-0 whitespace-nowrap">02-1234-5678</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[42.5px] items-start relative shrink-0 w-[93.375px]" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Li5() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="li">
      <Icon3 />
      <Container14 />
    </div>
  );
}

function Ul1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[151.5px] items-start relative shrink-0 w-full" data-name="ul">
      <Li3 />
      <Li4 />
      <Li5 />
    </div>
  );
}

function Caption() {
  return (
    <div className="bg-[#f8f8fa] content-stretch flex flex-col h-[183.5px] items-start pt-[16px] px-[16px] relative rounded-[12px] shrink-0 w-[304.667px]" data-name="caption">
      <Ul1 />
    </div>
  );
}

function ConWrap() {
  return (
    <div className="relative shrink-0 w-full" data-name="con_wrap">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[21px] items-center p-[20px] relative size-full">
          <Tit />
          <Menu />
          <Container1 />
          <Caption />
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[111px] relative shrink-0 w-full" data-name="main">
      <Img />
      <ConWrap />
    </div>
  );
}

function Contents() {
  return (
    <div className="content-stretch flex flex-col h-[687px] items-start relative shrink-0 w-full" data-name="contents">
      <Main />
    </div>
  );
}

function Container17() {
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

function Container18() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p1f25e00} fill="var(--fill-0, #FF6665)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#ff6665] text-[11px] text-center tracking-[-0.22px] uppercase whitespace-nowrap">
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

function Container19() {
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

function Icon5() {
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

function Button1() {
  return (
    <div className="relative shrink-0 size-[39.976px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.992px] px-[7.992px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#030213] text-[20px] tracking-[-0.4px] whitespace-nowrap">매장 상세</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-white h-[64.041px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f3f5] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[15.984px] items-center pl-[7.992px] py-px relative size-full">
          <Button1 />
          <Heading2 />
        </div>
      </div>
    </div>
  );
}

function Top() {
  return (
    <div className="absolute content-stretch flex flex-col h-[111px] items-start left-0 top-0 w-[360px]" data-name="top">
      <MobileBrowserTop />
      <Container20 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative rounded-[24px] size-full" data-name="매장상세">
      <Contents />
      <div className="backdrop-blur-[6px] bg-white content-stretch flex gap-[34px] h-[59px] items-end justify-center px-[16px] relative shrink-0 w-[360px]" data-name="Bottom_nav_bar">
        <div aria-hidden="true" className="absolute border-[#ededed] border-solid border-t inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-col gap-[5px] h-[59px] items-center justify-center pb-[8px] pt-[14px] px-[16px] relative rounded-[16px] shrink-0" data-name="Link">
          <Container17 />
          <Margin />
        </div>
        <div className="content-stretch flex flex-col gap-[5px] h-[59px] items-center justify-center pb-[8px] pt-[14px] px-[16px] relative shrink-0" data-name="Link">
          <Container18 />
          <Margin1 />
        </div>
        <div className="content-stretch flex flex-col gap-[5px] h-[59px] items-center justify-center pb-[8px] pt-[14px] px-[11px] relative shrink-0" data-name="Link">
          <Icon4 />
          <Margin2 />
        </div>
        <div className="content-stretch flex flex-col gap-[5px] h-[59px] items-center justify-center pb-[8px] pt-[14px] px-[16px] relative shrink-0" data-name="Link">
          <Container19 />
          <Margin3 />
        </div>
      </div>
      <MobileBrowserBottom />
      <Top />
    </div>
  );
}