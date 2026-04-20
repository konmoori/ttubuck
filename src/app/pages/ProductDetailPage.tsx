import { useNavigate } from 'react-router';
import { MobileLayout } from '../components/common/MobileLayout';
import svgPaths from '../../imports/svg-zplsgcmdrh';
import imgChatGptImage20264200146091 from "figma:asset/77d3b752e61ada91d5ecd2b492601c6f823eb2a6.png";

export function ProductDetailPage() {
  const navigate = useNavigate();

  return (
    <MobileLayout showBottom={false}>
      <div className="bg-white flex-[1_0_0] min-h-px relative w-full flex flex-col">
        {/* Header */}
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
                          <path d={svgPaths.p3dd8ec0} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99938" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
              <div className="relative shrink-0">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                  <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#030213] text-[20px] tracking-[-0.4px] whitespace-nowrap">상품 상세</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-[1_0_0] min-h-px overflow-y-auto w-full">
          {/* Product Image */}
          <div className="bg-[#fff8f8] content-stretch flex flex-col items-center relative shrink-0 w-full">
            <div className="h-[186px] relative shrink-0 w-[124px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-full left-[-0.15%] max-w-none top-0 w-[100.31%]" src={imgChatGptImage20264200146091} />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="bg-white relative shadow-[0px_-4px_37.1px_0px_rgba(0,0,0,0.05)] shrink-0 w-full">
            <div className="flex flex-col items-center size-full">
              <div className="content-stretch flex flex-col gap-[22px] items-center p-[20px] relative size-full">
                {/* Title */}
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[304.667px]">
                  <div className="h-[18px] relative shrink-0 w-[304.667px]">
                    <p className="absolute font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[18px] left-0 text-[#e1302d] text-[12px] top-0 whitespace-nowrap">베스킨라빈스</p>
                  </div>
                  <div className="content-stretch flex items-center pb-[3px] relative shrink-0 w-full">
                    <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#030213] text-[22px] whitespace-nowrap">싱글레귤러 아이스크림</p>
                  </div>
                  <div className="bg-gradient-to-r content-stretch flex from-[rgba(225,48,45,0.05)] gap-[8px] items-center px-[10px] py-[6px] relative rounded-[6px] shrink-0 to-[rgba(255,110,64,0.05)]">
                    <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(225,48,45,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
                    <div className="bg-[rgba(255,110,64,0.1)] content-stretch flex items-center justify-center px-[3px] relative rounded-[22369600px] shrink-0 size-[16px]">
                      <div className="bg-[#ff6e40] rounded-[22369600px] shrink-0 size-[10px]" />
                    </div>
                    <div className="flex flex-row items-center self-stretch">
                      <div className="content-stretch flex h-full items-center justify-center relative shrink-0">
                        <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#e1302d] text-[16px] whitespace-nowrap">4,680P</p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center justify-center relative shrink-0">
                      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#717182] text-[13px] whitespace-nowrap">필요</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[304.667px]">
                  <div className="content-stretch flex flex-col gap-[8px] h-[75.292px] items-start relative shrink-0 w-full">
                    <div className="h-[22.5px] relative shrink-0 w-full">
                      <p className="absolute font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[22.5px] left-0 text-[#030213] text-[15px] top-[-1px] whitespace-nowrap">상품 설명</p>
                    </div>
                    <div className="h-[44.792px] relative shrink-0 w-full">
                      <div className="absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[0] left-0 text-[#5b5b70] text-[14px] top-[-0.33px] w-[305px]">
                        <p className="leading-[1.67] mb-0">베스킨라빈스 전국 매장에서 사용 가능한 싱글레귤러</p>
                        <p className="leading-[1.67]">아이스크림 기프티콘입니다.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#f8f8fa] h-[74.5px] relative rounded-[12px] shrink-0 w-full">
                    <div className="content-stretch flex flex-col items-start pt-[16px] px-[16px] relative size-full">
                      <div className="h-[42.5px] relative shrink-0 w-full">
                        <div className="absolute left-0 size-[18px] top-[2px]">
                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                            <g id="Icon">
                              <path d="M6 1.5V4.5" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                              <path d="M12 1.5V4.5" id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                              <path d={svgPaths.p13693a10} id="Vector_3" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                              <path d="M2.25 7.5H15.75" id="Vector_4" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            </g>
                          </svg>
                        </div>
                        <div className="absolute content-stretch flex flex-col gap-[10px] h-[42.5px] items-start justify-center left-[30px] top-0 w-[105.5px]">
                          <div className="content-stretch flex items-center relative shrink-0 w-full">
                            <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#717182] text-[13px] whitespace-nowrap">유효기간</p>
                          </div>
                          <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                            <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#030213] text-[14px] whitespace-nowrap">발급일로부터 30일</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* How to use */}
                <div className="content-stretch flex flex-col gap-[12px] h-[145px] items-start relative shrink-0 w-[304.667px]">
                  <div className="h-[22.5px] relative shrink-0 w-full">
                    <p className="absolute font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[22.5px] left-0 text-[#030213] text-[15px] top-[-1px] whitespace-nowrap">사용 방법</p>
                  </div>
                  <div className="bg-[#f8f8fa] h-[110.5px] relative rounded-[12px] shrink-0 w-full">
                    <div className="content-stretch flex flex-col items-start pt-[16px] px-[16px] relative size-full">
                      <div className="content-stretch flex flex-col gap-[15px] h-[78.5px] items-start justify-center relative shrink-0 w-full">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                          <div className="bg-[#e1302d] rounded-[22369600px] shrink-0 size-[6px]" />
                          <div className="content-stretch flex items-center justify-center relative shrink-0">
                            <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#5b5b70] text-[13px] whitespace-nowrap">전국 베스킨라빈스 매장에서 사용 가능합니다</p>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                          <div className="bg-[#e1302d] rounded-[22369600px] shrink-0 size-[6px]" />
                          <div className="content-stretch flex items-center justify-center relative shrink-0">
                            <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#5b5b70] text-[13px] whitespace-nowrap">매장 방문 시 기프티콘 화면을 보여주세요</p>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                          <div className="bg-[#e1302d] rounded-[22369600px] shrink-0 size-[6px]" />
                          <div className="content-stretch flex items-center justify-center relative shrink-0">
                            <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#5b5b70] text-[13px] whitespace-nowrap">유효기간 내에 사용하지 않으면 자동 소멸됩니다</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Notice */}
                <div className="bg-[#fff9e6] content-stretch flex flex-col h-[92.833px] items-start pb-[0.667px] pt-[16.667px] px-[16.667px] relative rounded-[12px] shrink-0 w-[304.667px]">
                  <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,214,0,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                  <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
                    <div className="bg-[rgba(255,214,0,0.2)] content-stretch flex items-center justify-center px-[8px] relative rounded-[22369600px] shrink-0 size-[32px]">
                      <div className="relative shrink-0 size-[16px]">
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
                    </div>
                    <div className="content-stretch flex flex-col gap-[4px] h-[59.5px] items-start relative shrink-0 w-[227.333px]">
                      <div className="h-[19.5px] relative shrink-0 w-full">
                        <p className="absolute font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[19.5px] left-0 text-[#030213] text-[13px] top-[0.33px] whitespace-nowrap">안내사항</p>
                      </div>
                      <div className="h-[36px] relative shrink-0 w-full">
                        <p className="absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#5b5b70] text-[12px] top-0 w-[228px]">교환한 상품은 취소 및 환불이 불가능하며, 유효기간이 지나면 자동으로 소멸됩니다.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-white content-stretch flex flex-col gap-[12px] h-[149.667px] items-start pt-[20.667px] px-[20px] relative shrink-0 w-[360px]">
          <div aria-hidden="true" className="absolute border-[#f3f3f5] border-solid border-t-[0.667px] inset-0 pointer-events-none" />
          <div className="relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[8px] items-start pb-[4px] pl-[12px] relative size-full">
              <div className="relative shrink-0 w-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                  <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#717182] text-[11px] whitespace-nowrap">내 포인트</p>
                </div>
              </div>
              <div className="relative shrink-0 w-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                  <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#030213] text-[16px] whitespace-nowrap">200P</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#e1302d] relative rounded-[8px] shrink-0 w-full">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[86px] py-[16px] relative size-full">
                <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-center text-white tracking-[-0.32px] whitespace-nowrap">포인트로 교환하기</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom spacer */}
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