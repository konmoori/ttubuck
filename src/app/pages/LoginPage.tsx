import { useNavigate } from 'react-router';
import { MobileLayout } from '../components/common/MobileLayout';
import { Logo } from '../components/common/Logo';
import { useAppStore } from '../store/useAppStore';
import svgPaths from '../../imports/svg-n21pbs55af';

function RiKakaoTalkFill() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ri:kakao-talk-fill">
          <path d={svgPaths.p2d640300} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DeviconGoogle() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_google)" id="devicon:google">
          <path d={svgPaths.p19853700} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p24dbf480} fill="var(--fill-0, #E33629)" id="Vector_2" />
          <path d={svgPaths.p2d1024f0} fill="var(--fill-0, #F8BD00)" id="Vector_3" />
          <path d={svgPaths.p1ecd2a80} fill="var(--fill-0, #587DBD)" id="Vector_4" />
          <path d={svgPaths.p3f06c700} fill="var(--fill-0, #319F43)" id="Vector_5" />
        </g>
        <defs>
          <clipPath id="clip0_google">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export function LoginPage() {
  const navigate = useNavigate();
  const setLoggedIn = useAppStore((state) => state.setLoggedIn);

  const handleLogin = () => {
    setLoggedIn(true);
    navigate('/onboarding');
  };

  return (
    <MobileLayout>
      <div className="flex-[1_0_0] min-h-px overflow-y-auto py-[20px] relative w-full">
        <div className="flex flex-col items-center justify-center rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[100px] items-center justify-center px-[20px] relative size-full">
            <div className="content-stretch flex flex-col gap-[60px] items-center relative shrink-0">
              <div className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[#030213] text-[26px] text-center tracking-[-0.52px] whitespace-nowrap">
                <p className="leading-[1.34] mb-0">안녕하세요</p>
                <p className="leading-[1.34]">뚜벅 입니다</p>
              </div>
              <Logo />
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
              <button
                onClick={handleLogin}
                className="bg-[#fee500] relative rounded-[8px] shrink-0 w-full"
              >
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex gap-[10px] items-center justify-center px-[86px] py-[16px] relative size-full">
                    <RiKakaoTalkFill />
                    <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#030213] text-[16px] text-center tracking-[-0.16px] whitespace-nowrap">카카오로 시작하기</p>
                  </div>
                </div>
              </button>
              <button
                onClick={handleLogin}
                className="bg-white relative rounded-[8px] shrink-0 w-full"
              >
                <div aria-hidden="true" className="absolute border-[#d2d2d2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex gap-[10px] items-center justify-center px-[86px] py-[16px] relative size-full">
                    <DeviconGoogle />
                    <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#030213] text-[16px] text-center tracking-[-0.16px] whitespace-nowrap">구글로 시작하기</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}
