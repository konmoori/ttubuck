import { useNavigate, useParams } from 'react-router';
import { MobileLayout } from '../components/common/MobileLayout';
import { BottomNavBar } from '../components/common/BottomNavBar';
import svgPaths from '../../imports/svg-pfvwnfjgvl';
import imgContainer from "figma:asset/ece298d0ec2c16f10310d45724b276a6035cb503.png";
import imgContainer1 from "figma:asset/dc9876355d74c7900bf853d8250ee694af070b2e.png";
import imgContainer2 from "figma:asset/2cc72b65c15e701889eb917ee3285f0691252c66.png";

export function CheckpointPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <MobileLayout showBottom={false}>
      <div className="bg-white h-[64.041px] relative shrink-0 w-full">
        <div aria-hidden="true" className="absolute border-[#f3f3f5] border-b border-solid border-t inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[15.984px] items-center pl-[7.992px] py-px relative size-full">
            <button onClick={() => navigate(`/mission/${id}`)} className="relative shrink-0 size-[39.976px]">
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
                <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#030213] text-[20px] tracking-[-0.4px] whitespace-nowrap">체크포인트</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-stretch flex flex-col flex-[1_0_0] items-start min-h-px overflow-y-auto pb-[20px] relative w-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
          <div className="content-stretch flex h-[339.995px] items-center justify-center pl-[29.995px] pr-[30.012px] relative shrink-0 w-[359.992px]">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <img alt="" className="absolute max-w-none object-cover size-full" src={imgContainer} />
              <div className="absolute inset-0 overflow-hidden">
                <img alt="" className="absolute h-[105.88%] left-0 max-w-none top-[-5.86%] w-full" src={imgContainer1} />
              </div>
              <img alt="" className="absolute max-w-none object-cover size-full" src={imgContainer2} />
            </div>
            <div className="opacity-20 relative shrink-0 size-[299.985px]">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
                <div className="absolute bg-[rgba(225,48,45,0.5)] border border-[#e1302d] border-solid inset-[17.99%_25.99%_34.35%_26.34%] rounded-[80px]" />
              </div>
            </div>
          </div>

          <div className="absolute content-stretch flex flex-col h-[55.994px] items-start left-[155.99px] top-[114px] w-[47.985px]">
            <div className="h-[55.994px] overflow-clip relative shrink-0 w-full">
              <div className="absolute inset-[0.01%_0]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47.9852 55.9828">
                  <path d={svgPaths.p2eda58c0} fill="var(--fill-0, #E1302D)" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[25.01%_33.33%_46.43%_33.33%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9951 15.9951">
                  <path d={svgPaths.p2930dd80} fill="var(--fill-0, white)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>

          <div className="absolute bg-white content-stretch flex flex-col h-[36.975px] items-center justify-center left-[125.56px] px-[15.984px] rounded-[20px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] top-[271.04px] w-[108.85px]">
            <div className="content-stretch flex gap-[7.992px] h-[20.991px] items-center relative shrink-0 w-full">
              <div className="bg-[#e1302d] opacity-80 rounded-[36829000px] shrink-0 size-[7.992px]" />
              <div className="flex-[1_0_0] min-w-px relative">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                  <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#030213] text-[14px] tracking-[-0.28px] whitespace-nowrap">현재 위치</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white relative shrink-0 w-full">
          <div className="flex flex-col items-center rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[18px] items-center p-[20px] relative size-full">
              <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
                <div className="h-[48.002px] relative shrink-0 w-[319.999px]">
                  <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[48px] left-[160.05px] not-italic text-[#0a0a0a] text-[48px] text-center top-[-3.78px] whitespace-nowrap">🎯</p>
                </div>
                <div className="h-[27.491px] relative shrink-0 w-[319.999px]">
                  <p className="-translate-x-1/2 absolute font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[27.5px] left-[159.59px] text-[#030213] text-[22px] text-center top-[-1.1px] tracking-[-0.44px] whitespace-nowrap">체크포인트에 도착했어요!</p>
                </div>
                <div className="h-[24.37px] relative shrink-0 w-[319.999px]">
                  <p className="-translate-x-1/2 absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[24.375px] left-[160.76px] text-[#5b5b70] text-[15px] text-center top-[-1.8px] whitespace-nowrap">주변을 잘 살펴보세요</p>
                </div>
              </div>

              <div className="bg-[#fff3f3] relative rounded-[16px] shrink-0 w-full">
                <div aria-hidden="true" className="absolute border border-[#ffdbda] border-solid inset-0 pointer-events-none rounded-[16px]" />
                <div className="content-stretch flex flex-col gap-[11.988px] items-start p-[25.09px] relative size-full">
                  <div className="content-stretch flex gap-[7.992px] h-[31.984px] items-center relative shrink-0 w-full">
                    <div className="h-[31.984px] relative shrink-0 w-[24.541px]">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] not-italic relative shrink-0 text-[#0a0a0a] text-[24px] whitespace-nowrap">💡</p>
                      </div>
                    </div>
                    <div className="flex-[1_0_0] h-[23.993px] min-w-px relative">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                        <p className="flex-[1_0_0] font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none min-w-px relative text-[#030213] text-[16px] tracking-[-0.32px]">2차 힌트</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-start relative shrink-0 w-full">
                    <div className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#5b5b70] text-[15px] tracking-[-0.15px] w-[260px]">
                      <p className="leading-[24.375px] mb-0">나는 토끼가 없고 꽃을 단 분홍색 건물 옆,</p>
                      <p className="leading-[24.375px] mb-0">골목 끝에 숨어 있어요.</p>
                      <p className="leading-[24.375px]">(분홍색 건물은 단 3개)</p>
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
              onClick={() => navigate('/camera/1')}
              className="bg-[#e1302d] relative rounded-[8px] shrink-0 w-full"
            >
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center px-[86px] py-[16px] relative size-full">
                  <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-center text-white tracking-[-0.32px] whitespace-nowrap">목표물 찾기 시작</p>
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
