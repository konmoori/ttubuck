import { useNavigate } from 'react-router';
import { MobileLayout } from '../components/common/MobileLayout';
import svgPaths from '../../imports/svg-rpjst1itsj';

export function CouponUseCompletePage() {
  const navigate = useNavigate();

  return (
    <MobileLayout showBottom={false}>
      <div className="bg-gradient-to-b flex-[1_0_0] from-[#f63c3c] min-h-px relative to-[#e47f53] w-[360px]">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[23px] items-center justify-center pb-[25px] px-[25px] relative size-full">
            {/* Icon and Text */}
            <div className="content-stretch flex flex-col gap-[17px] items-center relative shrink-0">
              <div className="bg-white content-stretch flex items-center justify-center px-[24px] relative rounded-[22369600px] shrink-0 size-[128px]">
                <div className="relative shrink-0 size-[80px]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
                    <g id="Icon">
                      <path d={svgPaths.p18232480} id="Vector" stroke="var(--stroke-0, #E1302D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6.66667" />
                      <path d={svgPaths.p9836f60} id="Vector_2" stroke="var(--stroke-0, #E1302D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6.66667" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0">
                <div className="h-[39px] relative shrink-0 w-[103.875px]">
                  <p className="-translate-x-1/2 absolute font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-none left-[51px] text-[26px] text-center text-white top-0 tracking-[-0.52px] whitespace-nowrap">사용 완료!</p>
                </div>
                <div className="h-[22.5px] relative shrink-0 w-[163.104px]">
                  <p className="-translate-x-1/2 absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none left-[80px] text-[15px] text-[rgba(255,255,255,0.9)] text-center top-[-1px] tracking-[-0.3px] whitespace-nowrap">쿠폰이 사용 처리되었습니다</p>
                </div>
              </div>
            </div>
            {/* Button */}
            <button
              onClick={() => navigate('/home')}
              className="bg-white relative rounded-[8px] shrink-0 w-full"
            >
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center px-[86px] py-[16px] relative size-full">
                  <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#e1302d] text-[16px] text-center tracking-[-0.32px] whitespace-nowrap">미션 홈으로</p>
                </div>
              </div>
            </button>
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
    </MobileLayout>
  );
}
