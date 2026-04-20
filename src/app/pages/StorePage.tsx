import { useNavigate } from 'react-router';
import { MobileLayout } from '../components/common/MobileLayout';
import svgPaths from '../../imports/svg-ruu02df8b4';
import imgChatGptImage20264200146091 from "figma:asset/77d3b752e61ada91d5ecd2b492601c6f823eb2a6.png";

export function StorePage() {
  const navigate = useNavigate();

  const products = [
    { id: 1, brand: '베스킨라빈스', name: '싱글레귤러 아이스크림', price: '4,680P', img: imgChatGptImage20264200146091 },
    { id: 2, brand: 'CU', name: '신라면', price: '1,200P', emoji: '🎁' },
    { id: 3, brand: 'GS25', name: '광동제약 선다수', price: '1,320P', emoji: '🎁' },
    { id: 4, brand: '메가커피', name: '(ICE)아메리카노', price: '2,400P', emoji: '🎁' },
  ];

  return (
    <MobileLayout activeTab="store">
      <div className="bg-white flex-[1_0_0] min-h-px relative w-full overflow-y-auto pb-[20px]">
        {/* Header */}
        <div className="bg-white relative shrink-0 w-full">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between px-[20px] py-[11px] relative size-full">
              <div className="relative shrink-0">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                  <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[#030213] text-[24px] tracking-[-0.48px] whitespace-nowrap">스토어</p>
                </div>
              </div>
              <div className="relative shrink-0">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
                  <div className="bg-[#fff5f5] content-stretch flex gap-[5.989px] h-[38.979px] items-center justify-end pl-[11.995px] pr-[12px] py-[6px] relative rounded-[40px] shrink-0">
                    <div className="relative shrink-0 w-[8.724px]">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                        <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#030213] text-[16px] whitespace-nowrap">P</p>
                      </div>
                    </div>
                    <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#e1302d] text-[16px] text-right whitespace-nowrap">200</p>
                  </div>
                  <div className="relative shrink-0 size-[39.983px]">
                    <div className="absolute left-[8px] size-[23.99px] top-[8px]">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.99 23.99">
                        <g id="Icon">
                          <path d={svgPaths.p1aeb5f60} id="Vector" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99917" />
                          <path d={svgPaths.p14dd400} id="Vector_2" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99917" />
                        </g>
                      </svg>
                    </div>
                    <div className="absolute bg-[#e1302d] left-[26px] rounded-[37170400px] size-[7.997px] top-[5.99px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white h-[63.991px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start px-[20px] relative size-full">
            <div className="flex-[1_0_0] min-h-px relative w-full">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center py-[14px] relative size-full">
                  <div className="bg-[#f9fafb] flex-[1_0_0] h-[47.997px] min-w-px relative rounded-[14px]">
                    <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex gap-[12px] items-center pl-[20px] pr-[16px] relative size-full">
                        <div className="relative shrink-0 size-[19.992px]">
                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9917 19.9917">
                            <g id="Icon">
                              <path d={svgPaths.p66c0400} id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66597" />
                              <path d={svgPaths.p34162640} id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66597" />
                            </g>
                          </svg>
                        </div>
                        <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#717182] text-[15px] whitespace-nowrap">상품명/브랜드 검색</p>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border-[1.108px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter buttons */}
        <div className="bg-white h-[65.6px] relative shrink-0 w-full">
          <div className="flex flex-row items-center overflow-x-auto overflow-y-clip size-full">
            <div className="content-stretch flex gap-[7.997px] items-center pb-[12px] px-[20px] relative size-full">
              <div className="bg-[#e1302d] h-[36px] relative rounded-[37170400px] shrink-0">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16px] py-[7px] relative size-full">
                  <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[14px] text-center text-white tracking-[-0.28px] whitespace-nowrap">전체</p>
                </div>
              </div>
              <div className="bg-[#f3f3f5] h-[36px] relative rounded-[37170400px] shrink-0">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[15px] py-[7px] relative size-full">
                  <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#717182] text-[14px] text-center tracking-[-0.28px] whitespace-nowrap">상품권</p>
                </div>
              </div>
              <div className="bg-[#f3f3f5] h-[36px] relative rounded-[37170400px] shrink-0">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[15px] py-[7px] relative size-full">
                  <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#717182] text-[14px] text-center tracking-[-0.28px] whitespace-nowrap">커피/음료</p>
                </div>
              </div>
              <div className="bg-[#f3f3f5] h-[36px] relative rounded-[37170400px] shrink-0">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[15px] py-[7px] relative size-full">
                  <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#717182] text-[14px] text-center tracking-[-0.28px] whitespace-nowrap">편의점</p>
                </div>
              </div>
              <div className="bg-[#f3f3f5] h-[36px] relative rounded-[37170400px] shrink-0">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[15px] py-[7px] relative size-full">
                  <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#717182] text-[14px] text-center tracking-[-0.28px] whitespace-nowrap">피자/치킨</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product count */}
        <div className="bg-white h-[36.989px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start px-[30px] relative size-full">
            <div className="h-[20.996px] relative shrink-0 w-full">
              <p className="absolute font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#e1302d] text-[14px] top-[-0.89px] whitespace-nowrap">총 8개</p>
            </div>
          </div>
        </div>

        {/* Product grid */}
        <div className="bg-white relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[16px] items-center px-[20px] relative size-full">
            <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full">
              {/* Product 1 */}
              <button
                onClick={() => navigate('/product/1')}
                className="bg-white h-[204px] relative rounded-[16px] shrink-0"
              >
                <div className="content-stretch flex flex-col items-center overflow-clip p-px relative rounded-[inherit] size-full">
                  <div className="bg-[#fff8f8] content-stretch flex h-[119.473px] items-center justify-center relative shrink-0 w-[143.473px]">
                    <div className="h-[134px] relative shrink-0 w-[89px]">
                      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute h-full left-[-0.15%] max-w-none top-0 w-[100.31%]" src={imgChatGptImage20264200146091} />
                      </div>
                    </div>
                  </div>
                  <div className="flex-[1_0_0] min-h-px relative w-full">
                    <div className="flex flex-col justify-center size-full">
                      <div className="content-stretch flex flex-col gap-[10px] items-start justify-center px-[10px] py-[5px] relative size-full">
                        <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0">
                          <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#717182] text-[11px] tracking-[-0.22px] whitespace-nowrap">베스킨라빈스</p>
                        </div>
                        <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0">
                          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#030213] text-[14px] tracking-[-0.308px] whitespace-nowrap">싱글레귤러 아이스크림</p>
                        </div>
                        <div className="content-stretch flex gap-[3.998px] items-center relative shrink-0 w-[119.483px]">
                          <div className="relative shrink-0">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                              <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#e1302d] text-[16px] tracking-[-0.16px] whitespace-nowrap">4,680P</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border-[#ffdbda] border-[1.108px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.05)]" />
              </button>

              {/* Product 2 */}
              <button
                onClick={() => navigate('/product/2')}
                className="bg-white h-[204px] relative rounded-[16px] shrink-0 w-[145px]"
              >
                <div className="content-stretch flex flex-col items-center overflow-clip p-px relative rounded-[inherit] size-full">
                  <div className="bg-[#fff8f8] content-stretch flex h-[119.473px] items-center justify-center relative shrink-0 w-[143.473px]">
                    <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[96px] relative shrink-0 text-[#0a0a0a] text-[64px] text-center whitespace-nowrap">🎁</p>
                  </div>
                  <div className="flex-[1_0_0] min-h-px relative w-full">
                    <div className="flex flex-col justify-center size-full">
                      <div className="content-stretch flex flex-col gap-[10px] items-start justify-center px-[10px] py-[5px] relative size-full">
                        <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0">
                          <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#717182] text-[11px] tracking-[-0.22px] whitespace-nowrap">CU</p>
                        </div>
                        <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0">
                          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#030213] text-[14px] tracking-[-0.308px] whitespace-nowrap">신라면</p>
                        </div>
                        <div className="content-stretch flex gap-[3.998px] items-center relative shrink-0 w-[119.483px]">
                          <div className="relative shrink-0">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                              <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#e1302d] text-[16px] tracking-[-0.16px] whitespace-nowrap">1,200P</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border-[#ffdbda] border-[1.108px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.05)]" />
              </button>
            </div>

            {/* Second row */}
            <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full">
              {/* Product 3 */}
              <button
                onClick={() => navigate('/product/3')}
                className="bg-white h-[204px] relative rounded-[16px] shrink-0 w-[145px]"
              >
                <div className="content-stretch flex flex-col items-center overflow-clip p-px relative rounded-[inherit] size-full">
                  <div className="bg-[#fff8f8] content-stretch flex h-[119.473px] items-center justify-center relative shrink-0 w-[143.473px]">
                    <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[96px] relative shrink-0 text-[#0a0a0a] text-[64px] text-center whitespace-nowrap">🎁</p>
                  </div>
                  <div className="flex-[1_0_0] min-h-px relative w-full">
                    <div className="flex flex-col justify-center size-full">
                      <div className="content-stretch flex flex-col gap-[10px] items-start justify-center px-[10px] py-[5px] relative size-full">
                        <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0">
                          <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#717182] text-[11px] tracking-[-0.22px] whitespace-nowrap">GS25</p>
                        </div>
                        <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0">
                          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#030213] text-[14px] tracking-[-0.308px] whitespace-nowrap">광동제약 선다수</p>
                        </div>
                        <div className="content-stretch flex gap-[3.998px] items-center relative shrink-0 w-[119.483px]">
                          <div className="relative shrink-0">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                              <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#e1302d] text-[16px] tracking-[-0.16px] whitespace-nowrap">1,320P</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border-[#ffdbda] border-[1.108px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.05)]" />
              </button>

              {/* Product 4 */}
              <button
                onClick={() => navigate('/product/4')}
                className="bg-white h-[204px] relative rounded-[16px] shrink-0 w-[145px]"
              >
                <div className="content-stretch flex flex-col items-center overflow-clip p-px relative rounded-[inherit] size-full">
                  <div className="bg-[#fff8f8] content-stretch flex h-[119.473px] items-center justify-center relative shrink-0 w-[143.473px]">
                    <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[96px] relative shrink-0 text-[#0a0a0a] text-[64px] text-center whitespace-nowrap">🎁</p>
                  </div>
                  <div className="flex-[1_0_0] min-h-px relative w-full">
                    <div className="flex flex-col justify-center size-full">
                      <div className="content-stretch flex flex-col gap-[10px] items-start justify-center px-[10px] py-[5px] relative size-full">
                        <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0">
                          <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#717182] text-[11px] tracking-[-0.22px] whitespace-nowrap">메가커피</p>
                        </div>
                        <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full">
                          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none overflow-hidden relative shrink-0 text-[#030213] text-[14px] text-ellipsis tracking-[-0.308px] w-[123px] whitespace-nowrap">(ICE)아메리카노</p>
                        </div>
                        <div className="content-stretch flex gap-[3.998px] items-center relative shrink-0 w-[119.483px]">
                          <div className="relative shrink-0">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                              <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#e1302d] text-[16px] tracking-[-0.16px] whitespace-nowrap">2,400P</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border-[#ffdbda] border-[1.108px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.05)]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}