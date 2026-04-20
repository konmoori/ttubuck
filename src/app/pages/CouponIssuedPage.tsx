import { useNavigate } from 'react-router';
import { MobileLayout } from '../components/common/MobileLayout';
import svgPaths from '../../imports/svg-p23521k7ap';
import imgImg from "figma:asset/f26a24f11945616fc5f617110dd0c23a3ec93469.png";

export function CouponIssuedPage() {
  const navigate = useNavigate();

  return (
    <MobileLayout showBottom={false}>
      <div className="bg-white content-stretch flex flex-col items-center overflow-hidden relative w-full flex-[1_0_0] min-h-px">
        <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[22px] items-center min-h-px overflow-clip px-[20px] relative w-[360px]">
          {/* Top */}
          <div className="h-[196px] relative shrink-0 w-[360px]">
            <div className="-translate-x-1/2 absolute h-[184px] left-[calc(50%+0.17px)] top-[28px] w-[310.343px]">
              <div className="absolute content-stretch flex items-center justify-center left-[115.17px] px-[20.003px] rounded-[43.754px] size-[80px] top-[6px]" style={{ backgroundImage: "linear-gradient(146.31deg, rgb(246, 60, 60) 15.859%, rgb(228, 127, 83) 92.037%)" }}>
                <div className="relative shrink-0 size-[43px]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 43">
                    <g id="Icon">
                      <path d={svgPaths.p88bede0} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                      <path d={svgPaths.p1bdc4300} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-0 text-center top-[102px] w-[310.343px]">
                <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#030213] text-[27px] tracking-[-0.81px] w-full">쿠폰이 발급되었어요!</p>
                <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#717182] text-[16px] tracking-[-0.288px] w-full">매장에서 쿠폰을 사용해보세요</p>
              </div>
              <div className="absolute flex h-[60.084px] items-center justify-center left-[214px] top-[24px] w-[63.17px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
                <div className="-scale-y-100 flex-none rotate-[-78.07deg]">
                  <div className="h-[54px] relative w-[50px]">
                    <div className="absolute inset-0 opacity-31 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImg} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute h-[54px] left-[221px] top-[6px] w-[50px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImg} />
                </div>
              </div>
              <div className="absolute flex h-[60.084px] items-center justify-center left-[48px] top-[52px] w-[63.17px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
                <div className="-scale-y-100 flex-none rotate-[-78.07deg]">
                  <div className="h-[54px] relative w-[50px]">
                    <div className="absolute inset-0 opacity-31 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImg} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex h-[73.513px] items-center justify-center left-[15px] top-[32px] w-[73.56px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
                <div className="flex-none rotate-[-134.52deg]">
                  <div className="h-[54px] relative w-[50px]">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImg} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coupon */}
          <div className="content-stretch flex flex-col items-center pt-[4px] relative shrink-0 w-full">
            <div className="bg-white content-stretch flex flex-col gap-[13px] items-center justify-center px-[24px] py-[23px] relative rounded-[16px] shrink-0 w-[300px]">
              <div aria-hidden="true" className="absolute border border-[#f63c3c] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_40.5px_0px_rgba(0,0,0,0.07)]" />
              <div className="content-stretch flex gap-[8px] h-[42px] items-center relative shrink-0 w-full">
                <div className="bg-[#ede9e9] relative rounded-[22369600px] shrink-0 size-[40px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
                    <div className="relative shrink-0 size-[20px]">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <g id="Icon">
                          <path d={svgPaths.p26ddc800} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          <path d={svgPaths.p35ba4680} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="h-[42px] relative shrink-0 w-[59.01px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between py-[4px] relative size-full">
                    <div className="content-stretch flex items-center relative shrink-0 w-full">
                      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#717182] text-[12px] whitespace-nowrap">발급 매장</p>
                    </div>
                    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                      <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#030213] text-[16px] whitespace-nowrap">카페 모카</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#fff5f5] relative rounded-[16px] shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[12px] items-start px-[19px] py-[16px] relative size-full">
                  <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#030213] text-[15px] tracking-[-0.3px] whitespace-nowrap">전메뉴 1,000원 할인 쿠폰</p>
                  <div className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#717182] text-[13px] tracking-[-0.13px] w-[min-content]">
                    <p className="leading-[1.4] mb-0">구매시 전메뉴 적용 가능한</p>
                    <p className="leading-[1.4]">1,000원 할인 쿠폰</p>
                  </div>
                  <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0 w-full">
                    <div className="relative shrink-0 size-[14px]">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                        <g id="Icon">
                          <path d="M4.66667 1.16667V3.5" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                          <path d="M9.33333 1.16667V3.5" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                          <path d={svgPaths.p24a2b500} stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                          <path d="M1.75 5.83333H12.25" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                        </g>
                      </svg>
                    </div>
                    <div className="relative shrink-0">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                        <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#5f5f5f] text-[12px] whitespace-nowrap">유효기간: 2026.05.17까지</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tip */}
          <div className="bg-[#f8f8fa] content-stretch flex flex-col h-[76px] items-start pt-[16px] px-[18px] relative rounded-[10px] shrink-0 w-[312px]">
            <div className="h-[44.5px] relative shrink-0 w-full">
              <div className="absolute bg-[rgba(225,48,45,0.1)] content-stretch flex items-center justify-center left-0 px-[12px] rounded-[22369600px] size-[32px] top-[2px]">
                <div className="bg-[#e1302d] rounded-[22369600px] shrink-0 size-[8px]" />
              </div>
              <div className="absolute content-stretch flex flex-col gap-[4px] h-[44.5px] items-start left-[44px] top-0 w-[229.792px]">
                <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[21px] relative shrink-0 text-[#030213] text-[14px] whitespace-nowrap">사용 방법</p>
                <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#5b5b70] text-[13px] whitespace-nowrap">매장 방문시 쿠폰 화면을 직원에게 보여주세요</p>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="bg-white content-stretch flex flex-col gap-[10px] items-center justify-center px-[24px] py-[8px] relative shrink-0 w-[360px]">
          <button
            onClick={() => navigate('/coupon-use/1')}
            className="bg-[#ca3633] relative rounded-[8px] shrink-0 w-full"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[86px] py-[16px] relative size-full">
                <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-center text-white tracking-[-0.32px] whitespace-nowrap">사용하러 가기</p>
              </div>
            </div>
          </button>
          <button
            onClick={() => navigate('/home')}
            className="bg-white relative rounded-[8px] shrink-0 w-full"
          >
            <div aria-hidden="true" className="absolute border-[#e1302d] border-[0.7px] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[86px] py-[16px] relative size-full">
                <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#e1302d] text-[16px] text-center tracking-[-0.32px] whitespace-nowrap">미션 홈으로</p>
              </div>
            </div>
          </button>
        </div>

        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[375px]">
            <div className="bg-white h-[34px] relative shrink-0 w-full">
              <div className="-translate-x-1/2 absolute bg-black bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] w-[134px]" />
            </div>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}
