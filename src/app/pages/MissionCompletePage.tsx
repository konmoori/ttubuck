import { useNavigate, useParams } from 'react-router';
import { MobileLayout } from '../components/common/MobileLayout';
import { BottomNavBar } from '../components/common/BottomNavBar';
import svgPaths from '../../imports/svg-r6z2cyjgre';
import imgImg from "figma:asset/f26a24f11945616fc5f617110dd0c23a3ec93469.png";

export function MissionCompletePage() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <MobileLayout showBottom={false}>
      <div className="flex-[1_0_0] min-h-px overflow-y-auto pb-[20px] relative w-[360px]">
        <div className="content-stretch flex flex-col gap-[14px] items-start pt-[50px] relative size-full">
          <div className="bg-white relative shrink-0 w-full">
            <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center px-[20px] relative size-full">
                <div className="h-[215px] relative shrink-0 w-[360px]">
                  <div className="-translate-x-1/2 absolute h-[184px] left-[calc(50%+0.17px)] top-[28px] w-[310.343px]">
                    <div className="absolute content-stretch flex items-center justify-center left-[115.17px] px-[20.003px] rounded-[43.754px] size-[80px] top-[6px]" style={{ backgroundImage: "linear-gradient(146.31deg, rgb(246, 60, 60) 15.859%, rgb(228, 127, 83) 92.037%)" }}>
                      <div className="relative shrink-0 size-[39.995px]">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.9947 39.9947">
                          <g id="Icon">
                            <path d={svgPaths.p304f4300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33289" />
                            <path d="M19.9976 13.3305V34.9943" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33289" />
                            <path d={svgPaths.p2409b200} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33289" />
                            <path d={svgPaths.pf7ace80} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33289" />
                          </g>
                        </svg>
                      </div>
                    </div>

                    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-0 text-center top-[102px] w-[310.343px]">
                      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#030213] text-[30px] tracking-[-0.9px] w-full">미션 완료!</p>
                      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#717182] text-[16px] tracking-[-0.288px] w-full">별을 따라 걷다 보면 Mission Complete</p>
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
                    <div className="absolute flex h-[60.084px] items-center justify-center left-[51px] top-[51px] w-[63.17px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
                      <div className="-scale-y-100 flex-none rotate-[-78.07deg]">
                        <div className="h-[54px] relative w-[50px]">
                          <div className="absolute inset-0 opacity-31 overflow-hidden pointer-events-none">
                            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImg} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex h-[73.513px] items-center justify-center left-[18px] top-[31px] w-[73.56px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
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

                <div className="content-stretch flex flex-col h-[249px] items-center pt-[4px] relative shrink-0 w-full">
                  <div className="bg-white content-stretch flex flex-col gap-[13px] items-center justify-center px-[24px] py-[23px] relative rounded-[16px] shrink-0 w-[300px]">
                    <div aria-hidden="true" className="absolute border border-[#f63c3c] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_7px_24px_0px_rgba(0,0,0,0.07)]" />
                    <div className="relative shrink-0 w-full">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center justify-between px-[10px] relative size-full">
                          <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#ca3633] text-[0px] text-center tracking-[-0.36px] whitespace-nowrap">
                            <span className="font-['Pretendard_Variable:Light',sans-serif] font-light leading-none text-[36px]">+</span>
                            <span className="leading-none text-[36px]">40</span>
                            <span className="leading-none text-[36px] tracking-[1.8px]">0</span>
                            <span className="leading-none text-[28px] tracking-[1.4px]">P</span>
                            <span className="leading-none text-[28px]">{` `}</span>
                          </p>
                          <div className="flex flex-row items-center self-stretch">
                            <div className="h-full relative shrink-0">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center pt-[2px] relative size-full">
                                  <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#5b5b70] text-[14px] text-center whitespace-nowrap">획득한 포인트</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#fff5f5] relative rounded-[16px] shrink-0 w-full">
                      <div className="content-stretch flex flex-col gap-[9px] items-start px-[19px] py-[18px] relative size-full">
                        <div className="bg-[#e1302d] content-stretch flex items-center justify-center px-[2px] relative shrink-0">
                          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">포인트 사용TIP!</p>
                        </div>
                        <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                          <p className="flex-[1_0_0] font-['Pretendard_Variable:Light',sans-serif] font-light leading-[1.36] min-w-px relative text-[#5b5b70] text-[14px] tracking-[-0.07px]">지금 바로 주변 제휴매장에서 포인트를 사용해보세요!</p>
                        </div>
                        <p className="font-['Pretendard_Variable:Light',sans-serif] font-light leading-none relative shrink-0 text-[#c53835] text-[14px] tracking-[-0.14px] w-[196px]">포인트를 쿠폰으로 교환해드려요.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white relative shrink-0 w-full">
            <div className="flex flex-col items-center size-full">
              <div className="content-stretch flex flex-col gap-[10px] items-center pb-[25px] pt-[3.89px] px-[24px] relative size-full">
                <button
                  onClick={() => navigate('/store/1')}
                  className="bg-[#ca3633] relative rounded-[8px] shrink-0 w-full"
                >
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center px-[86px] py-[16px] relative size-full">
                      <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-center text-white tracking-[-0.32px] whitespace-nowrap">포인트 사용가능 매장 확인</p>
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
                      <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#e1302d] text-[16px] text-center tracking-[-0.32px] whitespace-nowrap">미션 홈으로 돌아가기</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="-translate-x-1/2 absolute bottom-0 content-stretch flex flex-col items-center left-[calc(50%-0.5px)]">
        <BottomNavBar activeTab="mission" />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[375px]">
          <div className="bg-white h-[34px] relative shrink-0 w-full">
            <div className="-translate-x-1/2 absolute bg-black bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] w-[134px]" />
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}