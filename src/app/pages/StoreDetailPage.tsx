import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { MobileLayout } from '../components/common/MobileLayout';
import { BottomNavBar } from '../components/common/BottomNavBar';
import svgPaths from '../../imports/svg-c7ykx4qa4p';
import imgImg from "figma:asset/006c3b8e81f487d64d8579be8cb04418d9318579.png";
import CouponDetails from '../../imports/CouponDetails';

export function StoreDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showCouponModal, setShowCouponModal] = useState(false);

  const handleExchange = () => {
    setShowCouponModal(false);
    navigate('/coupon-issued/1');
  };

  return (
    <MobileLayout showBottom={false}>
      <div className="bg-white content-stretch flex flex-col items-center overflow-hidden relative w-full flex-[1_0_0] min-h-px">
        {/* Header */}
        <div className="absolute content-stretch flex flex-col h-[111px] items-start left-0 top-0 w-[360px] z-10 bg-white">
          <div className="bg-white h-[47px] relative shrink-0 w-full" />
          <div className="bg-white h-[64.041px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#f3f3f5] border-b border-solid border-t inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[15.984px] items-center pl-[7.992px] py-px relative size-full">
                <button
                  onClick={() => navigate(-1)}
                  className="relative shrink-0 size-[39.976px]"
                >
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.992px] px-[7.992px] relative size-full">
                    <div className="h-[23.993px] overflow-clip relative shrink-0 w-full">
                      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4">
                        <div className="absolute inset-[-8.33%_-16.67%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.99754 13.9957">
                            <path d={svgPaths.p3dd8ec0} stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99938" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
                <div className="relative shrink-0">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                    <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#030213] text-[20px] tracking-[-0.4px] whitespace-nowrap">매장 상세</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content - Scrollable */}
        <div className="content-stretch flex flex-col items-start pt-[111px] relative shrink-0 w-full overflow-y-auto flex-[1_0_0] min-h-px">
          {/* Image */}
          <div className="h-[200px] relative shrink-0 w-full">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg} />
          </div>

          {/* Store Info */}
          <div className="relative shrink-0 w-full">
            <div className="flex flex-col items-center size-full">
              <div className="content-stretch flex flex-col gap-[21px] items-center p-[20px] relative size-full">
                {/* Title */}
                <div className="content-stretch flex flex-col gap-[8px] h-[60.5px] items-start relative shrink-0 w-[304.667px]">
                  <div className="content-stretch flex items-center relative shrink-0 w-full">
                    <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#030213] text-[22px] whitespace-nowrap">카페 모카</p>
                  </div>
                  <div className="content-stretch flex gap-[4px] h-[19.5px] items-center relative shrink-0 w-full">
                    <div className="relative shrink-0 size-[14px]">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                        <g id="Icon">
                          <path d={svgPaths.p1539e500} stroke="var(--stroke-0, #E1302D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                          <path d={svgPaths.p37b99980} stroke="var(--stroke-0, #E1302D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                        </g>
                      </svg>
                    </div>
                    <div className="relative shrink-0">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                        <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#717182] text-[13px] whitespace-nowrap">120m</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Menu */}
                <div className="content-stretch flex flex-col gap-[12px] h-[172.333px] items-start relative shrink-0 w-[304.667px]">
                  <div className="content-stretch flex items-center relative shrink-0 w-full">
                    <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#030213] text-[20px] whitespace-nowrap">대표 메뉴</p>
                  </div>
                  <div className="bg-[#f8f8fa] h-[136.333px] relative rounded-[10px] shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[10px] items-start pt-[16px] px-[16px] relative size-full">
                      <div className="h-[31.667px] relative shrink-0 w-full">
                        <div aria-hidden="true" className="absolute border-[#ececf0] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center justify-between pb-[10.667px] relative size-full">
                            <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#030213] text-[14px] whitespace-nowrap">아메리카노</p>
                            <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium h-[21px] leading-none relative shrink-0 text-[#030213] text-[14px] tracking-[-0.14px] w-[50px]">4,500원</p>
                          </div>
                        </div>
                      </div>
                      <div className="h-[31.667px] relative shrink-0 w-full">
                        <div aria-hidden="true" className="absolute border-[#ececf0] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center justify-between pb-[10.667px] relative size-full">
                            <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#030213] text-[14px] whitespace-nowrap">카페라떼</p>
                            <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#030213] text-[14px] tracking-[-0.14px] whitespace-nowrap">5,000원</p>
                          </div>
                        </div>
                      </div>
                      <div className="h-[21px] relative shrink-0 w-full">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center justify-between relative size-full">
                            <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#030213] text-[14px] whitespace-nowrap">바닐라라떼</p>
                            <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#030213] text-[14px] tracking-[-0.14px] whitespace-nowrap">5,500원</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Coupon */}
                <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-[304.667px]">
                  <div className="content-stretch flex items-center relative shrink-0 w-full">
                    <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#030213] text-[20px] whitespace-nowrap">교환 가능한 혜택</p>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="bg-white h-[139.5px] relative rounded-[16px] shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[#f3f3f5] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.06)]" />
                      <div className="content-stretch flex flex-col gap-[12px] items-start pb-[0.667px] pt-[16.667px] px-[16.667px] relative size-full">
                        <div className="content-stretch flex flex-col gap-[4px] h-[46px] items-start relative shrink-0 w-full">
                          <div className="h-[22.5px] relative shrink-0 w-full">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                              <p className="absolute font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-none left-0 text-[#030213] text-[16px] top-[-1px] tracking-[-0.32px] whitespace-nowrap">전메뉴 1,000원 할인</p>
                            </div>
                          </div>
                          <div className="h-[19.5px] relative shrink-0 w-full">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                              <p className="absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none left-0 text-[#717182] text-[14px] top-[0.33px] whitespace-nowrap">구매시 전메뉴 적용 가능한 1,000원 할인 쿠폰</p>
                            </div>
                          </div>
                        </div>
                        <div className="h-[48.167px] relative shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border-[#f3f3f5] border-solid border-t-[0.667px] inset-0 pointer-events-none" />
                          <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex items-center justify-between pt-[12.667px] relative size-full">
                              <div className="h-[19.5px] relative shrink-0 w-[51.385px]">
                                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
                                  <div className="bg-[rgba(255,110,64,0.1)] relative rounded-[22369600px] shrink-0 size-[14px]">
                                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[3px] relative size-full">
                                      <div className="bg-[#ff6e40] rounded-[22369600px] shrink-0 size-[8px]" />
                                    </div>
                                  </div>
                                  <div className="flex-[1_0_0] h-[19.5px] min-w-px relative">
                                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                      <p className="absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#717182] text-[13px] top-[0.33px] whitespace-nowrap">200P 필요</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <button
                                onClick={() => setShowCouponModal(true)}
                                className="bg-[#e1302d] cursor-pointer relative rounded-[8px] shrink-0"
                              >
                                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[20px] py-[12px] relative size-full">
                                  <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">교환하기</p>
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Store Details */}
                <div className="bg-[#f8f8fa] content-stretch flex flex-col h-[183.5px] items-start pt-[16px] px-[16px] relative rounded-[12px] shrink-0 w-[304.667px]">
                  <div className="content-stretch flex flex-col gap-[12px] h-[151.5px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
                      <div className="relative shrink-0 size-[18px]">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                          <g clipPath="url(#clip0_5_2163)" id="Icon">
                            <path d={svgPaths.p3dc49580} stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            <path d="M9 4.5V9L12 10.5" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          </g>
                          <defs>
                            <clipPath id="clip0_5_2163">
                              <rect fill="white" height="18" width="18" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="content-stretch flex flex-col gap-[2px] h-[42.5px] items-start relative shrink-0 w-[86.917px]">
                        <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#717182] text-[13px] whitespace-nowrap">영업시간</p>
                        <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal h-[21px] leading-[21px] relative shrink-0 text-[#030213] text-[14px] w-[87px]">09:00 - 22:00</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
                      <div className="relative shrink-0 size-[20px]">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g id="Icon">
                            <path d={svgPaths.p339e780} stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            <path d={svgPaths.p2ef6c000} stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          </g>
                        </svg>
                      </div>
                      <div className="content-stretch flex flex-col gap-[2px] h-[42.5px] items-start relative shrink-0 w-[153.49px]">
                        <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#717182] text-[13px] whitespace-nowrap">주소</p>
                        <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#030213] text-[14px] whitespace-nowrap">서울 강동구 성내동 123-45</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
                      <div className="relative shrink-0 size-[18px]">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                          <g clipPath="url(#clip0_5_2160)" id="Icon">
                            <path d={svgPaths.p32db8200} stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          </g>
                          <defs>
                            <clipPath id="clip0_5_2160">
                              <rect fill="white" height="18" width="18" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="content-stretch flex flex-col gap-[2px] h-[42.5px] items-start relative shrink-0 w-[93.375px]">
                        <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#717182] text-[13px] whitespace-nowrap">전화번호</p>
                        <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#030213] text-[14px] whitespace-nowrap">02-1234-5678</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        {showCouponModal && (
          <div className="absolute inset-0 bg-black/50 z-20 flex items-end" onClick={() => setShowCouponModal(false)}>
            <div className="w-full" onClick={(e) => e.stopPropagation()}>
              <CouponDetails onClose={() => setShowCouponModal(false)} onConfirm={handleExchange} />
            </div>
          </div>
        )}
      </div>
      <BottomNavBar activeTab="nearby" />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[375px]">
        <div className="bg-white h-[34px] relative shrink-0 w-full">
          <div className="-translate-x-1/2 absolute bg-black bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] w-[134px]" />
        </div>
      </div>
    </MobileLayout>
  );
}
