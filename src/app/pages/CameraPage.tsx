import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { MobileLayout } from '../components/common/MobileLayout';
import svgPaths from '../../imports/svg-bja3huqcmj';

export function CameraPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [captured, setCaptured] = useState(false);

  const handleCapture = () => {
    setCaptured(true);
  };

  const handleSubmit = () => {
    navigate('/mission-complete/1');
  };

  return (
    <MobileLayout>
      <div className="bg-[#030213] h-[64.041px] relative shrink-0 w-full">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[15.984px] items-center pl-[7.992px] relative size-full">
            <button onClick={() => navigate(`/checkpoint/${id}`)} className="relative shrink-0 size-[39.976px]">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.992px] px-[7.992px] relative size-full">
                <div className="h-[23.993px] overflow-clip relative shrink-0 w-full">
                  <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4">
                    <div className="absolute inset-[-8.33%_-16.67%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.99754 13.9957">
                        <path d={svgPaths.p3dd8ec0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99938" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </button>
            <div className="relative shrink-0">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] text-white tracking-[-0.4px] whitespace-nowrap">사진 인증</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1a1a2f] flex-[1_0_0] min-h-px relative w-full">
        <div className="flex flex-col items-center justify-center rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center px-[30px] relative size-full">
            <div className="content-stretch flex flex-col gap-[15px] h-[345px] items-center justify-center relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-center justify-center px-[19.997px] py-[10px] relative rounded-[40px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0">
                <div className="content-stretch flex h-[23.993px] items-center justify-center relative shrink-0">
                  <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[19px] text-center text-white tracking-[-0.456px] whitespace-nowrap">
                    {captured ? '인증 완료 버튼을 눌러주세요 !' : '목표물 발견 !'}
                  </p>
                </div>
              </div>

              <div className="flex-[1_0_0] min-h-px relative rounded-[32px] w-full">
                <div aria-hidden="true" className="absolute border-[#cacaca] border-[3.293px] border-dashed inset-0 pointer-events-none rounded-[32px]" />
                {!captured ? (
                  <div className="content-stretch flex flex-col items-start p-[3.293px] relative size-full">
                    <div className="flex-[1_0_0] min-h-px relative w-full">
                      <div className="flex flex-col items-center justify-center size-full">
                        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center px-[24px] relative size-full">
                          <div className="relative shrink-0 size-[63.986px]">
                            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63.986 63.986">
                              <g id="Icon" opacity="0.8">
                                <path d={svgPaths.p2382fe00} id="Vector" stroke="var(--stroke-0, #CACACA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33217" />
                                <path d={svgPaths.p304a100} id="Vector_2" stroke="var(--stroke-0, #CACACA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33217" />
                              </g>
                            </svg>
                          </div>
                          <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                            <div className="font-['Pretendard_Variable:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#cacaca] text-[14px] text-center tracking-[-0.14px] whitespace-nowrap">
                              <p className="leading-[20px] mb-0 whitespace-pre">
                                대상이
                                <br aria-hidden="true" />
                                {`프레임 안에 들어오도록 `}
                              </p>
                              <p className="leading-[20px] whitespace-pre">촬영해주세요</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center size-full">
                    <div className="content-stretch flex flex-col items-center justify-center p-[3.293px] relative size-full">
                      <div className="content-stretch flex flex-col gap-[15.984px] h-[119.963px] items-start relative shrink-0 w-[79.987px]">
                        <div className="bg-[#323546] h-[79.987px] relative rounded-[36829000px] shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border-2 border-[#5a5d6e] border-solid inset-0 pointer-events-none rounded-[36829000px]" />
                          <div className="flex flex-row items-center justify-center size-full">
                            <div className="content-stretch flex items-center justify-center px-[18.001px] py-[2px] relative size-full">
                              <div className="relative shrink-0 size-[47.985px]">
                                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47.9852 47.9852">
                                  <g filter="url(#filter0_d_camera)" id="Icon">
                                    <path d={svgPaths.p11366040} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.99877" />
                                  </g>
                                  <defs>
                                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="55.9852" id="filter0_d_camera" width="55.9852" x="-4" y="0">
                                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                      <feOffset dy="4" />
                                      <feGaussianBlur stdDeviation="2" />
                                      <feComposite in2="hardAlpha" operator="out" />
                                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                      <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_camera" />
                                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_camera" mode="normal" result="shape" />
                                    </filter>
                                  </defs>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex h-[23.993px] items-start relative shrink-0 w-full">
                          <p className="flex-[1_0_0] font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[24px] min-w-px relative text-[18px] text-center text-white tracking-[-0.36px]">인증 성공!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#030213] h-[135.964px] relative shrink-0 w-full">
        <div className="flex flex-col items-center size-full">
          {!captured ? (
            <div className="content-stretch flex flex-col items-center pt-[23.993px] px-[140px] relative size-full">
              <button
                onClick={handleCapture}
                className="bg-white h-[79.987px] relative rounded-[36829000px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 w-full"
              >
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center pl-[7.992px] pr-[8.009px] relative size-full">
                    <div className="relative rounded-[36829000px] shrink-0 size-[63.986px]">
                      <div aria-hidden="true" className="absolute border-[#e1302d] border-[3.293px] border-solid inset-0 pointer-events-none rounded-[36829000px]" />
                    </div>
                  </div>
                </div>
              </button>
            </div>
          ) : (
            <div className="content-stretch flex flex-col items-center justify-center px-[24px] relative size-full">
              <button
                onClick={handleSubmit}
                className="bg-[#ca3634] relative rounded-[8px] shrink-0 w-full"
              >
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center px-[86px] py-[16px] relative size-full">
                    <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-center text-white tracking-[-0.32px] whitespace-nowrap">인증 완료</p>
                  </div>
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
    </MobileLayout>
  );
}
