import { useNavigate } from 'react-router';
import { MobileLayout } from '../components/common/MobileLayout';
import svgPaths from '../../imports/svg-fwcdgiuy9h';
import img from "figma:asset/392798e4ec51e4ac4066582a7ce33707299f4a5e.png";
import img1 from "figma:asset/f31d588a5eaf4f28989be19bf8c42d4c19db9fbf.png";
import img2 from "figma:asset/cd56c723a6d6b2afe8d8a7266ece1d607ac77a02.png";

export function MyPage() {
  const navigate = useNavigate();

  return (
    <MobileLayout activeTab="my">
      <div className="bg-white flex-[1_0_0] min-h-px relative w-full overflow-y-auto pb-[20px]">
        <div className="content-stretch flex flex-col gap-[23.993px] items-start px-[20px] py-[24px] relative w-full">
          {/* Profile Section */}
          <div className="content-stretch flex flex-col gap-[23.993px] h-[226px] items-start relative shrink-0 w-full">
            {/* User Info */}
            <div className="content-stretch flex gap-[15.984px] h-[79.987px] items-center relative shrink-0 w-full">
              {/* Avatar */}
              <div className="bg-gradient-to-b from-[#f63c3c] relative rounded-[36829000px] shrink-0 size-[79.987px] to-[#e47f53]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                  <div className="h-[31.984px] relative shrink-0">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
                      <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[24px] text-center text-white whitespace-nowrap">뚜</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* User Details */}
              <div className="flex-[279.714_0_0] h-[57.984px] min-w-px relative">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.996px] items-start relative size-full">
                  <div className="content-stretch flex items-center relative shrink-0 w-full">
                    <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[30px] relative shrink-0 text-[#030213] text-[20px] tracking-[-0.24px] whitespace-nowrap">김탐험</p>
                  </div>
                  <div className="content-stretch flex gap-[7.992px] h-[23.993px] items-center relative shrink-0 w-full">
                    <div className="relative shrink-0 size-[15.984px]">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9836 15.9836">
                        <g clipPath="url(#clip0_7_2932)" id="Icon">
                          <path d={svgPaths.p20c8e280} id="Vector" stroke="var(--stroke-0, #E1302D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33197" />
                          <path d={svgPaths.p2bcd73f0} id="Vector_2" stroke="var(--stroke-0, #E1302D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33197" />
                        </g>
                        <defs>
                          <clipPath id="clip0_7_2932">
                            <rect fill="white" height="15.9836" width="15.9836" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="h-[23.993px] relative shrink-0 w-[82.01px]">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
                        <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#e1302d] text-[16px] whitespace-nowrap">Lv.7 탐험가</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Points & Coupons */}
            <div className="bg-[#f4f5fa] h-[107.987px] relative rounded-[9px] shrink-0 w-full">
              <div className="flex flex-col items-center justify-center size-full">
                <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[13px] relative size-full">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                    {/* Points */}
                    <div className="flex-[1_0_0] min-w-px relative rounded-[12px]">
                      <div className="content-stretch flex flex-col gap-[9.99px] items-start p-[16px] relative size-full">
                        <div className="content-stretch flex h-[19.997px] items-center relative shrink-0 w-full">
                          <div className="h-[19.98px] relative shrink-0 w-[60.899px]">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
                              <p className="flex-[1_0_0] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#5b5b70] text-[14px]">내 포인트</p>
                            </div>
                          </div>
                          <div className="relative shrink-0 size-[15.984px]">
                            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9836 15.9836">
                              <g id="Icon">
                                <path d={svgPaths.p19263e00} id="Vector" stroke="var(--stroke-0, #5B5B70)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33197" />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0">
                          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#030213] text-[20px] whitespace-nowrap">200P</p>
                        </div>
                      </div>
                    </div>
                    {/* Divider */}
                    <div className="bg-[#5b5b70] h-[35px] opacity-60 shrink-0 w-[0.4px]" />
                    {/* Coupons */}
                    <div className="flex-[1_0_0] min-w-px relative rounded-[12px]">
                      <div className="content-stretch flex flex-col gap-[9.99px] items-start pl-[30px] pr-[16px] py-[16px] relative size-full">
                        <div className="content-stretch flex h-[19.997px] items-center relative shrink-0 w-full">
                          <div className="h-[19.98px] relative shrink-0 w-[46.905px]">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
                              <p className="flex-[1_0_0] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#5b5b70] text-[14px]">내 쿠폰</p>
                            </div>
                          </div>
                          <div className="relative shrink-0 size-[15.984px]">
                            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9836 15.9836">
                              <g id="Icon">
                                <path d={svgPaths.p19263e00} id="Vector" stroke="var(--stroke-0, #5B5B70)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33197" />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <p className="flex-[1_0_0] font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none min-w-px relative text-[#030213] text-[20px]">3개</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Badges Section */}
          <div className="content-stretch flex flex-col gap-[15.984px] items-start relative shrink-0 w-full">
            {/* Title */}
            <div className="relative shrink-0 w-full">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center justify-between px-[3px] relative size-full">
                  <div className="relative shrink-0">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#030213] text-[20px] tracking-[-0.4px] whitespace-nowrap">내 배지</p>
                    </div>
                  </div>
                  <div className="relative shrink-0">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7px] items-center relative size-full">
                      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#5b5b70] text-[14px] text-center whitespace-nowrap">전체보기</p>
                      <div className="relative shrink-0 size-[15.984px]">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9836 15.9836">
                          <g id="Icon">
                            <path d={svgPaths.p19263e00} id="Vector" stroke="var(--stroke-0, #5B5B70)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33197" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Badge Cards */}
            <div className="content-stretch flex gap-[11.988px] items-start justify-center overflow-clip relative shrink-0 w-full">
              {/* Badge 1 */}
              <div className="relative self-stretch shrink-0 w-[95.159px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[11px] items-center relative size-full">
                  <div className="bg-[#e5cefd] h-[95.159px] relative rounded-[19.035px] shadow-[0px_4.759px_7.138px_0px_rgba(0,0,0,0.1),0px_2.379px_4.759px_0px_rgba(0,0,0,0.1)] shrink-0 w-full">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center px-[24.32px] relative size-full">
                        <div className="h-[42px] relative shrink-0 w-[40px]">
                          <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
                            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[19.035px] relative shrink-0 text-[#5b5b70] text-[14.276px] text-center w-full">첫 미션</p>
                </div>
              </div>
              {/* Badge 2 */}
              <div className="relative shrink-0 w-[95.159px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[11px] items-center relative size-full">
                  <div className="bg-[#ffa09e] h-[95.159px] relative rounded-[19.035px] shadow-[0px_4.759px_7.138px_0px_rgba(0,0,0,0.1),0px_2.379px_4.759px_0px_rgba(0,0,0,0.1)] shrink-0 w-full">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center px-[31.216px] relative size-full">
                        <div className="h-[38px] relative shrink-0 w-[40px]">
                          <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
                            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img1} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[19.035px] relative shrink-0 text-[#5b5b70] text-[14.276px] text-center w-full">10km</p>
                </div>
              </div>
              {/* Badge 3 */}
              <div className="relative shrink-0 w-[95.159px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[11px] items-center relative size-full">
                  <div className="bg-[#fc882a] h-[95.159px] relative rounded-[19.035px] shadow-[0px_4.759px_7.138px_0px_rgba(0,0,0,0.1),0px_2.379px_4.759px_0px_rgba(0,0,0,0.1)] shrink-0 w-full">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center px-[23.076px] relative size-full">
                        <div className="h-[39px] relative shrink-0 w-[40px]">
                          <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
                            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img2} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[19.035px] relative shrink-0 text-[#5b5b70] text-[14.276px] text-center w-full">탐험가</p>
                </div>
              </div>
            </div>
          </div>

          {/* Completed Missions Section */}
          <div className="content-stretch flex flex-col gap-[15.984px] items-start relative shrink-0 w-full">
            {/* Title */}
            <div className="relative shrink-0 w-full">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center justify-between px-[3px] relative size-full">
                  <div className="content-stretch flex items-center relative shrink-0">
                    <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#030213] text-[20px] tracking-[-0.4px] whitespace-nowrap">완료한 미션</p>
                  </div>
                  <div className="content-stretch flex gap-[7px] items-center relative shrink-0">
                    <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#5b5b70] text-[14px] text-center whitespace-nowrap">전체보기</p>
                    <div className="relative shrink-0 size-[15.984px]">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9836 15.9836">
                        <g id="Icon">
                          <path d={svgPaths.p19263e00} id="Vector" stroke="var(--stroke-0, #5B5B70)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33197" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Cards */}
            <div className="content-stretch flex flex-col gap-[9.992px] items-start relative shrink-0 w-full">
              {/* Mission 1 */}
              <div className="bg-white h-[79.987px] relative rounded-[9.992px] shrink-0 w-full">
                <div aria-hidden="true" className="absolute border border-[#f3f3f5] border-solid inset-0 pointer-events-none rounded-[9.992px]" />
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex gap-[11.988px] items-center pb-[13px] pl-[13px] pr-[9.992px] pt-[15.984px] relative size-full">
                    <div className="bg-[#6ad36f] relative rounded-[36829000px] shrink-0 size-[39.993px]">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[9.998px] relative size-full">
                        <div className="relative shrink-0 size-[19.997px]">
                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9967 19.9967">
                            <g id="Icon">
                              <path d={svgPaths.p276ce100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex-[1_0_0] min-h-px relative w-full">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.992px] items-start relative size-full">
                        <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full">
                          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#030213] text-[18px] tracking-[-0.36px] whitespace-nowrap">별을 따라 걷다 보면</p>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <p className="flex-[1_0_0] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none min-w-px relative text-[#5b5b70] text-[14px]">2026.04.05</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center justify-center relative shrink-0">
                      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#e1302d] text-[18px] text-right tracking-[-0.36px] whitespace-nowrap">400P</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mission 2 */}
              <div className="bg-white h-[79.987px] relative rounded-[9.992px] shrink-0 w-full">
                <div aria-hidden="true" className="absolute border border-[#f3f3f5] border-solid inset-0 pointer-events-none rounded-[9.992px]" />
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex gap-[11.988px] items-center pb-[13px] pl-[13px] pr-[9.992px] pt-[15.984px] relative size-full">
                    <div className="bg-[#6ad36f] relative rounded-[36829000px] shrink-0 size-[39.993px]">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[9.998px] relative size-full">
                        <div className="relative shrink-0 size-[19.997px]">
                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9967 19.9967">
                            <g id="Icon">
                              <path d={svgPaths.p276ce100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex-[1_0_0] min-h-px relative w-full">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.992px] items-start relative size-full">
                        <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full">
                          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none overflow-hidden relative shrink-0 text-[#030213] text-[18px] text-ellipsis tracking-[-0.36px] w-[203px] whitespace-nowrap">친호동 요정 찾기</p>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <p className="flex-[1_0_0] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none min-w-px relative text-[#5b5b70] text-[14px]">2025.11.28</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center justify-center relative shrink-0">
                      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#e1302d] text-[18px] text-right tracking-[-0.36px] whitespace-nowrap">150P</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}