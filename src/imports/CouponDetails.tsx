function Icon() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d="M13 1L1 13" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d="M1 1L13 13" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

interface ButtonProps {
  onClick?: () => void;
}

function Button({ onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className="content-stretch cursor-pointer flex flex-col items-start pt-[4px] px-[4px] relative shrink-0 size-[32px]" data-name="Button">
      <Icon />
    </button>
  );
}

interface HeadingProps {
  onClose?: () => void;
}

function Heading({ onClose }: HeadingProps) {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[4px] relative size-full">
          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#030213] text-[20px] whitespace-nowrap">쿠폰 교환 확인</p>
          <Button onClick={onClose} />
        </div>
      </div>
    </div>
  );
}

function Span() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="span">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#5b5b70] text-[13px] whitespace-nowrap">매장</p>
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="name">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#030213] text-[15px] whitespace-nowrap">카페 모카</p>
    </div>
  );
}

function Li() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[58.667px] items-start pb-[0.667px] relative shrink-0 w-full" data-name="li">
      <div aria-hidden="true" className="absolute border-[#ececf0] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
      <Span />
      <Name />
    </div>
  );
}

function Span1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="span">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#5b5b70] text-[13px] whitespace-nowrap">혜택</p>
    </div>
  );
}

function H() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="h3">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#030213] text-[15px] tracking-[-0.3px] whitespace-nowrap">전메뉴 1,000원 할인 쿠폰</p>
    </div>
  );
}

function P() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="p">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#5b5b70] text-[13px] tracking-[-0.13px] whitespace-nowrap">구매시 전메뉴 적용 가능한 1,000원 할인 쿠폰</p>
    </div>
  );
}

function Li1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[69.5px] items-start relative shrink-0 w-full" data-name="li">
      <Span1 />
      <H />
      <P />
    </div>
  );
}

function Ul() {
  return (
    <div className="bg-[#f8f8fa] h-[172.167px] relative rounded-[10px] shrink-0 w-full" data-name="ul">
      <div className="content-stretch flex flex-col gap-[12px] items-start pt-[16px] px-[16px] relative size-full">
        <Li />
        <Li1 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#717182] text-[13px] tracking-[-0.13px] whitespace-nowrap">차감 포인트</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#e1302d] text-[16px] tracking-[-0.16px] whitespace-nowrap">-200P</p>
      </div>
    </div>
  );
}

function Li2() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="li">
      <Text />
      <Text1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#717182] text-[13px] tracking-[-0.13px] whitespace-nowrap">현재 보유 포인트</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#030213] text-[14px] tracking-[-0.14px] whitespace-nowrap">400P</p>
      </div>
    </div>
  );
}

function Li3() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="li">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Text2 />
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#030213] text-[14px] tracking-[-0.14px] whitespace-nowrap">교환 후 남은 포인트</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#030213] text-[18px] tracking-[-0.18px] whitespace-nowrap">200P</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Text4 />
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col h-[35.667px] items-start pt-[8.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(225,48,45,0.2)] border-solid border-t-[0.667px] inset-0 pointer-events-none" />
      <Container1 />
    </div>
  );
}

function Ul1() {
  return (
    <div className="bg-gradient-to-r from-[rgba(225,48,45,0.05)] h-[130px] relative rounded-[10px] shrink-0 to-[rgba(255,110,64,0.05)] w-full" data-name="ul">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(225,48,45,0.2)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[0.667px] pt-[16.667px] px-[16.667px] relative size-full">
        <Li2 />
        <Li3 />
        <Container />
      </div>
    </div>
  );
}

interface Button1Props {
  onClick?: () => void;
}

function Button1({ onClick }: Button1Props) {
  return (
    <button onClick={onClick} className="bg-[#f8f8fa] flex-[154_0_0] h-full min-w-px relative rounded-[8px] cursor-pointer" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[64px] py-[15px] relative size-full">
          <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#717182] text-[15px] text-center whitespace-nowrap">취소</p>
        </div>
      </div>
    </button>
  );
}

interface Button2Props {
  onClick?: () => void;
}

function Button2({ onClick }: Button2Props) {
  return (
    <button onClick={onClick} className="bg-[#e1302d] flex-[154_0_0] h-full min-w-px relative rounded-[8px] cursor-pointer" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[51px] py-[15px] relative size-full">
          <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">교환하기</p>
        </div>
      </div>
    </button>
  );
}

interface Container2Props {
  onCancel?: () => void;
  onConfirm?: () => void;
}

function Container2({ onCancel, onConfirm }: Container2Props) {
  return (
    <div className="content-stretch flex gap-[12px] h-[54.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Button1 onClick={onCancel} />
      <Button2 onClick={onConfirm} />
    </div>
  );
}

interface CouponDetailsProps {
  onClose?: () => void;
  onConfirm?: () => void;
}

export default function CouponDetails({ onClose, onConfirm }: CouponDetailsProps) {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[21px] items-start p-[20px] relative rounded-tl-[24px] rounded-tr-[24px] size-full" data-name="Coupon_Details">
      <Heading onClose={onClose} />
      <Ul />
      <Ul1 />
      <Container2 onCancel={onClose} onConfirm={onConfirm} />
    </div>
  );
}