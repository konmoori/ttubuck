import { useNavigate } from 'react-router';
import { MobileLayout } from '../components/common/MobileLayout';
import { BottomNavBar } from '../components/common/BottomNavBar';
import svgPaths from '../../imports/svg-1ctto1i7u9';
import imgFrame34 from "figma:asset/12cd4b119fa1ff5a35275aab988d4c6f116defc3.png";

export function HomePage() {
  const navigate = useNavigate();

  return (
    <MobileLayout showBottom={false}>
      <div className="bg-[#f9f9f9] content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-center min-h-px overflow-y-auto pb-[20px] relative w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
          <div className="h-[50px] relative shrink-0 w-full">
            <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-end justify-between px-[25px] py-[10px] relative size-full">
                <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-[202px]">
                  <div className="h-[22px] relative shrink-0 w-[18px]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22">
                      <g id="map-pin">
                        <path d={svgPaths.p381f2780} fill="var(--fill-0, #030213)" id="Subtract" />
                      </g>
                    </svg>
                  </div>
                  <div className="flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#030213] text-[18px] text-center tracking-[-0.36px] uppercase whitespace-nowrap">
                    <p className="leading-none">강동구 성내동</p>
                  </div>
                </div>
                <div className="relative shrink-0 size-[24px]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g id="nav_icon">
                      <path d={svgPaths.p1e4b7b80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d={svgPaths.p146fda80} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white content-stretch flex flex-col gap-[25px] items-center px-[20px] py-[29px] relative rounded-[12px] shrink-0 w-[320.122px]">
            <div aria-hidden="true" className="absolute border-2 border-[#f63c3c] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1.81px_18.101px_0px_rgba(0,0,0,0.06)]" />
            <div className="content-stretch flex flex-col items-start pl-[5px] pr-[2px] relative shrink-0 w-[282.122px]">
              <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[7px] h-[56.316px] items-start min-w-px relative">
                  <div className="content-stretch flex flex-[1_0_0] items-start min-h-px relative w-full">
                    <p className="flex-[1_0_0] font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[18.101px] min-w-px relative text-[#e1302d] text-[12.671px] tracking-[-0.2534px]">오늘의 미션</p>
                  </div>
                  <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[30.6px] relative shrink-0 text-[#030213] text-[22px] tracking-[-0.44px] w-full">별을 따라 걷다 보면</p>
                </div>
                <div className="relative rounded-[12px] shrink-0 size-[56.32px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgFrame34} />
                </div>
              </div>
            </div>

            <div className="content-stretch flex gap-[21.715px] h-[36.197px] items-center px-px relative shrink-0 w-[282.122px]">
              <div className="h-[36.197px] relative shrink-0 w-[108.729px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.233px] items-center relative size-full">
                  <div className="bg-[#fff5f5] relative rounded-[33332576px] shrink-0 size-[36.197px]">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[9.049px] relative size-full">
                      <div className="relative shrink-0 size-[18.098px]">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0983 18.0983">
                          <g id="Icon">
                            <path d={svgPaths.p355ac780} id="Vector" stroke="var(--stroke-0, #F34C4A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.50819" />
                            <path d={svgPaths.p9dd6b80} id="Vector_2" stroke="var(--stroke-0, #F34C4A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.50819" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="h-[36.197px] relative shrink-0 w-[65.3px]">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                      <div className="h-[14.482px] relative shrink-0 w-full">
                        <p className="absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[14.481px] left-0 text-[#5b5b70] text-[12px] top-[-0.99px] tracking-[-0.24px] whitespace-nowrap">소요 시간</p>
                      </div>
                      <div className="content-stretch flex h-[21.715px] items-start relative shrink-0 w-full">
                        <p className="flex-[1_0_0] font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[21.722px] min-w-px relative text-[#030213] text-[14px] tracking-[-0.14px]">도보 10분</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[36.197px] relative shrink-0 w-[95.257px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.233px] items-center relative size-full">
                  <div className="bg-[#fff5f5] relative rounded-[33332576px] shrink-0 size-[36.197px]">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[9.049px] relative size-full">
                      <div className="relative shrink-0 size-[18.098px]">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0983 18.0983">
                          <g id="Icon">
                            <path d={svgPaths.p389d8b00} id="Vector" stroke="var(--stroke-0, #F34C4A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.50819" />
                            <path d="M9.04801 6.03185V15.8351" id="Vector_2" stroke="var(--stroke-0, #F34C4A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.50819" />
                            <path d={svgPaths.p3ff5d5e0} id="Vector_3" stroke="var(--stroke-0, #F34C4A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.50819" />
                            <path d={svgPaths.p9740c00} id="Vector_4" stroke="var(--stroke-0, #F34C4A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.50819" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="h-[36.197px] relative shrink-0 w-[51.827px]">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                      <div className="h-[14.482px] relative shrink-0 w-full">
                        <p className="absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[14.481px] left-0 text-[#5b5b70] text-[12px] top-[-0.99px] tracking-[-0.24px] whitespace-nowrap">보상</p>
                      </div>
                      <div className="content-stretch flex h-[21.715px] items-start relative shrink-0 w-full">
                        <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[21.722px] relative shrink-0 text-[#e1302d] text-[14px] tracking-[-0.14px] whitespace-nowrap">400P</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => navigate('/mission/1')}
              className="bg-[#e1302d] relative rounded-[8px] shrink-0 w-full"
            >
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center px-[112px] py-[12px] relative size-full">
                  <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[16px] text-center text-white tracking-[-0.32px] whitespace-nowrap">미션 상세 보기</p>
                </div>
              </div>
            </button>
          </div>
        </div>

        <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full">
          <div className="h-[43px] relative shrink-0 w-full">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center px-[25px] py-[10px] relative size-full">
                <div className="content-stretch flex items-center relative shrink-0 w-[202px]">
                  <div className="flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#030213] text-[18px] text-center tracking-[-0.36px] uppercase whitespace-nowrap">
                    <p className="leading-[normal]">추가 미션</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[187px] relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[14.041px] items-start px-[20px] relative size-full">
              <div className="bg-white relative rounded-[12px] shadow-[0px_1.757px_10.542px_0px_rgba(0,0,0,0.04)] shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start p-[21px] relative size-full">
                  <div className="content-stretch flex h-[44.79px] items-center justify-between relative shrink-0 w-full">
                    <div className="h-[44.79px] relative shrink-0 w-[158.896px]">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start justify-center relative size-full">
                        <div className="content-stretch flex items-center relative shrink-0 w-full">
                          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#030213] text-[16px] tracking-[-0.32px] whitespace-nowrap">성내동 숨은 보물 찾기</p>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <p className="flex-[1_0_0] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none min-w-px relative text-[#d83633] text-[12px] tracking-[-0.24px]">도보 5분 · 150P</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#f3f3f5] relative rounded-[32352922px] shrink-0">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[14px] py-[6px] relative size-full">
                        <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[17.569px] relative shrink-0 text-[#717182] text-[12.298px] tracking-[-0.246px] whitespace-nowrap">예정</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white relative rounded-[12px] shadow-[0px_1.757px_10.542px_0px_rgba(0,0,0,0.04)] shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start p-[21px] relative size-full">
                  <div className="content-stretch flex h-[44.79px] items-center justify-between relative shrink-0 w-full">
                    <div className="h-[44.79px] relative shrink-0 w-[137.548px]">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start justify-center relative size-full">
                        <div className="content-stretch flex items-center relative shrink-0 w-full">
                          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#030213] text-[16px] tracking-[-0.32px] whitespace-nowrap">천호동 비밀의 정원</p>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <p className="flex-[1_0_0] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none min-w-px relative text-[#d83633] text-[12px] tracking-[-0.24px]">도보 10분 · 150P</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#f3f3f5] relative rounded-[32352922px] shrink-0">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[14px] py-[6px] relative size-full">
                        <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[17.569px] relative shrink-0 text-[#717182] text-[12.298px] tracking-[-0.246px] whitespace-nowrap">예정</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
