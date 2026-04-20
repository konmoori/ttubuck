import { useNavigate, useParams } from 'react-router';
import { MobileLayout } from '../components/common/MobileLayout';
import { BottomNavBar } from '../components/common/BottomNavBar';
import svgPaths from '../../imports/svg-t4a5bw9pws';
import imgContainer from "figma:asset/12cd4b119fa1ff5a35275aab988d4c6f116defc3.png";

export function MissionDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <MobileLayout showBottom={false}>
      <div className="bg-white h-[64.041px] relative shrink-0 w-full">
        <div aria-hidden="true" className="absolute border-[#f3f3f5] border-b border-solid border-t inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[15.984px] items-center pl-[7.992px] py-px relative size-full">
            <button onClick={() => navigate('/home')} className="relative shrink-0 size-[39.976px]">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.992px] px-[7.992px] relative size-full">
                <div className="h-[23.993px] overflow-clip relative shrink-0 w-full">
                  <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4">
                    <div className="absolute inset-[-8.33%_-16.67%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.99754 13.9957">
                        <path d={svgPaths.p3dd8ec0} id="Vector" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99938" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </button>
            <div className="relative shrink-0">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#030213] text-[20px] tracking-[-0.4px] whitespace-nowrap">미션 상세</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-stretch flex flex-col flex-[1_0_0] items-start min-h-px overflow-y-auto pb-[20px] relative w-full">
        <div className="h-[239.995px] relative shrink-0 w-full">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer} />
          <div className="flex flex-row items-center justify-center size-full">
            <div className="size-full" />
          </div>
        </div>

        <div className="bg-white relative shrink-0 w-full">
          <div className="flex flex-col items-center rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[20px] items-center p-[20px] relative size-full">
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[319.999px]">
                <div className="h-[27.491px] relative shrink-0 w-full">
                  <p className="absolute font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none left-0 text-[#030213] text-[22px] top-[-1.1px] tracking-[-0.44px] whitespace-nowrap">별을 따라 걷다 보면</p>
                </div>
                <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                  <div className="font-['Pretendard_Variable:Light',sans-serif] font-light leading-[0] relative shrink-0 text-[#5b5b70] text-[16px] tracking-[-0.32px] w-[320px]">
                    <p className="leading-[24.375px] mb-0">이 길에는 숨겨진 단서가 있어요. 그 단서를 따라</p>
                    <p className="leading-[24.375px]">
                      가다 보면 어딘가에서 답을 찾게 될 거예요.
                      <br aria-hidden="true" />
                      주변을 잘 살펴보세요.
                    </p>
                  </div>
                </div>
              </div>

              <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                <div className="bg-[#fff5f5] content-stretch flex flex-col gap-[6px] items-center p-[16px] relative rounded-[12px] shrink-0 w-[98.663px]">
                  <div className="relative shrink-0 size-[19.997px]">
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
                  <div className="content-stretch flex h-[19.499px] items-start relative shrink-0 w-full">
                    <p className="flex-[1_0_0] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[19.5px] min-w-px relative text-[#5b5b70] text-[13px] text-center tracking-[-0.26px]">거리</p>
                  </div>
                  <div className="h-[22.501px] relative shrink-0 w-full">
                    <p className="-translate-x-1/2 absolute font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[22.5px] left-[33.61px] text-[#201f3b] text-[15px] text-center top-[-1.9px] tracking-[-0.15px] whitespace-nowrap">1.2km</p>
                  </div>
                </div>

                <div className="bg-[#fff5f5] content-stretch flex flex-col gap-[6px] items-center p-[16px] relative rounded-[12px] shrink-0 w-[98.68px]">
                  <div className="relative shrink-0 size-[18px]">
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
                  <div className="content-stretch flex h-[19.499px] items-start relative shrink-0 w-full">
                    <p className="flex-[1_0_0] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[19.5px] min-w-px relative text-[#5b5b70] text-[13px] text-center tracking-[-0.26px]">예상</p>
                  </div>
                  <div className="h-[22.501px] relative shrink-0 w-full">
                    <p className="-translate-x-1/2 absolute font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[22.5px] left-[33.17px] text-[#201f3b] text-[15px] text-center top-[-1.9px] tracking-[-0.15px] whitespace-nowrap">10분</p>
                  </div>
                </div>

                <div className="bg-[#fff5f5] content-stretch flex flex-col gap-[6px] items-center p-[16px] relative rounded-[12px] shrink-0 w-[98.663px]">
                  <div className="relative shrink-0 size-[19.997px]">
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
                  <div className="content-stretch flex h-[19.499px] items-start relative shrink-0 w-full">
                    <p className="flex-[1_0_0] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[19.5px] min-w-px relative text-[#5b5b70] text-[13px] text-center tracking-[-0.26px]">보상</p>
                  </div>
                  <div className="h-[22.501px] relative shrink-0 w-full">
                    <p className="-translate-x-1/2 absolute font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[22.5px] left-[34.19px] text-[#201f3b] text-[15px] text-center top-[-1.9px] tracking-[-0.15px] whitespace-nowrap">700P</p>
                  </div>
                </div>
              </div>

              <div className="bg-white content-stretch flex flex-col gap-[7.992px] items-start pb-[21.09px] pt-[21.094px] px-[21.094px] relative rounded-[16px] shrink-0 w-[319.999px]">
                <div aria-hidden="true" className="absolute border border-[#ffa09e] border-solid inset-0 pointer-events-none rounded-[16px]" />
                <div className="content-stretch flex gap-[7.992px] h-[27.989px] items-center relative shrink-0 w-full">
                  <div className="h-[27.989px] relative shrink-0 w-[20.46px]">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#0a0a0a] text-[20px] whitespace-nowrap">💡</p>
                    </div>
                  </div>
                  <div className="flex-[1_0_0] min-w-px relative">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#030213] text-[16px] tracking-[-0.32px] whitespace-nowrap">1차 힌트</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-start relative shrink-0 w-full">
                  <div className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#5b5b70] text-[15px] tracking-[-0.15px] w-[271px]">
                    <p className="leading-[22.75px] mb-0">나는 노랑색 집이 있어요.</p>
                    <p className="leading-[22.75px]">벽에 항상 붙어있어요.</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f9fafb] content-stretch flex flex-col gap-[11.988px] items-start pb-[20px] pt-[19.997px] px-[19.997px] relative rounded-[16px] shrink-0 w-[320px]">
                <div className="h-[22.501px] relative shrink-0 w-full">
                  <p className="absolute font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[22.5px] left-0 text-[#030213] text-[15px] top-[-1.9px] tracking-[-0.3px] whitespace-nowrap">미션 진행 방법</p>
                </div>
                <div className="content-stretch flex flex-col gap-[7.992px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[7.992px] items-start relative shrink-0 w-full">
                    <div className="h-[20.991px] relative shrink-0 w-[10.77px]">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#e1302d] text-[14px] top-[-0.9px] whitespace-nowrap">1.</p>
                      </div>
                    </div>
                    <div className="flex-[1_0_0] min-w-px relative">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
                        <p className="font-['Pretendard_Variable:Light',sans-serif] font-light leading-[21px] relative shrink-0 text-[#5b5b70] text-[14px] tracking-[-0.14px] whitespace-nowrap">아래 버튼을 눌러 체크포인트까지 이동하세요</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[7.992px] items-start relative shrink-0 w-full">
                    <div className="h-[20.991px] relative shrink-0 w-[10.77px]">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#e1302d] text-[14px] top-[-0.9px] whitespace-nowrap">2.</p>
                      </div>
                    </div>
                    <div className="flex-[1_0_0] min-w-px relative self-stretch">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
                        <p className="font-['Pretendard_Variable:Light',sans-serif] font-light leading-[21px] relative shrink-0 text-[#5b5b70] text-[14px] tracking-[-0.14px] w-[258px]">도착 후 주변을 살펴보세요</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[7.992px] items-start relative shrink-0 w-full">
                    <div className="h-[20.991px] relative shrink-0 w-[10.77px]">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#e1302d] text-[14px] top-[-0.9px] whitespace-nowrap">3.</p>
                      </div>
                    </div>
                    <div className="flex-[1_0_0] min-w-px relative">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
                        <div className="flex-[1_0_0] font-['Pretendard_Variable:Light',sans-serif] font-light leading-[0] min-w-px relative text-[#5b5b70] text-[14px] tracking-[-0.14px]">
                          <p className="leading-[21px] mb-0">단서를 바탕으로 목표물을 찾아 촬영하면</p>
                          <p className="leading-[21px]">미션완료!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white h-[105.077px] relative shrink-0 w-full">
        <div aria-hidden="true" className="absolute border-[#f3f3f5] border-solid border-t-[1.098px] inset-0 pointer-events-none" />
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center pt-[25px] px-[24px] relative size-full">
            <button
              onClick={() => navigate('/checkpoint/1')}
              className="bg-[#e1302d] relative rounded-[8px] shrink-0 w-full"
            >
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center px-[86px] py-[16px] relative size-full">
                  <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-center text-white tracking-[-0.32px] whitespace-nowrap">지금 바로 출발하기</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <BottomNavBar activeTab="mission" />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[375px]">
        <div className="bg-white h-[34px] relative shrink-0 w-full">
          <div className="-translate-x-1/2 absolute bg-black bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] w-[134px]" />
        </div>
      </div>
    </MobileLayout>
  );
}
