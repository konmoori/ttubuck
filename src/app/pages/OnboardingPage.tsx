import { useState, useRef } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { MobileLayout } from '../components/common/MobileLayout';
import { LogoCharacter } from '../components/common/LogoCharacter';
import { PageIndicator } from '../components/common/IndicatorDot';
import { useAppStore } from '../store/useAppStore';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export function OnboardingPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const setCompletedOnboarding = useAppStore((state) => state.setCompletedOnboarding);
  const setOnboardingStep = useAppStore((state) => state.setOnboardingStep);

  const goToStep = (step: number) => {
    setCurrentStep(step);
    setOnboardingStep(step);
  };

  const handleNext = () => {
    if (currentStep < 2) {
      goToStep(currentStep + 1);
    } else {
      setCompletedOnboarding(true);
      navigate('/permission');
    }
  };

  const handleBack = () => {
    if (currentStep > 0) goToStep(currentStep - 1);
    else navigate('/login');
  };

  const handleSkip = () => {
    setCompletedOnboarding(true);
    navigate('/permission');
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext();
      else handleBack();
    }
    touchStartX.current = null;
  };

  return (
    <MobileLayout>
      {/* 상단 버튼 바 */}
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center justify-between px-[20px] py-[10px] w-full">
          {/* 뒤로가기 */}
          <button onClick={handleBack} className="flex items-center justify-center w-[28px] h-[28px]">
            <ChevronLeftIcon sx={{ fontSize: 22, color: '#030213' }} />
          </button>
          {/* 건너뛰기 */}
          <button onClick={handleSkip}>
            <p className="font-['Pretendard_Variable:Light',sans-serif] font-light leading-[normal] text-[#030213] text-[14px] tracking-[-0.28px] whitespace-nowrap">건너뛰기</p>
          </button>
        </div>
      </div>

      {/* 콘텐츠 영역 */}
      <div
        className="bg-white flex-[1_0_0] min-h-px overflow-y-auto py-[20px] relative w-full select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex flex-col items-center rounded-[inherit] size-full">
          <div className="flex flex-col items-center justify-between size-full">
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0">
                <div className="bg-[#f3f3f3] h-[141px] overflow-clip relative rounded-[14px] shrink-0 w-[197px]">
                  {currentStep === 0 && (
                    <p className="-translate-x-1/2 absolute font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[1.3] left-1/2 text-[#030213] text-[16px] text-center top-[calc(50%-10.5px)] whitespace-nowrap">
                      " 내 이름은 뚜벅 "
                    </p>
                  )}
                  {currentStep === 1 && (
                    <p className="-translate-x-1/2 absolute font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[1.3] left-[calc(50%-0.5px)] text-[#030213] text-[16px] text-center top-[calc(50%-10.5px)] whitespace-nowrap">
                      " 수수께끼를 좋아하지 "
                    </p>
                  )}
                  {currentStep === 2 && (
                    <div className="-translate-x-1/2 absolute font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[0] left-1/2 text-[#030213] text-[16px] text-center top-[calc(50%-21.5px)] whitespace-nowrap">
                      <p className="leading-[1.3] mb-0">" 수수께끼를 풀면</p>
                      <p className="leading-[1.3]">좋은 일이 있을 거야 "</p>
                    </div>
                  )}
                </div>
                <LogoCharacter />
              </div>
            </div>

            {/* 하단: 스와이프 힌트 + 페이지 인디케이터 */}
            <div className="flex flex-col items-center gap-[12px] pb-[4px]">
              <div className="flex flex-col items-center gap-[6px]">
                <motion.div
                  animate={{ x: [0, -18, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 0.6, ease: 'easeInOut' }}
                >
                  <SwipeHintIcon />
                </motion.div>
                <p className="text-[11px] text-[#A8A29E] tracking-[-0.22px]">스와이프로 넘겨보세요</p>
              </div>
              <PageIndicator total={3} current={currentStep} />
            </div>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}

function SwipeHintIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 화살표 */}
      <path d="M8 18H26M20 12L26 18L20 24" stroke="#FF6665" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* 손가락 */}
      <circle cx="10" cy="18" r="5" fill="#FF6665" fillOpacity="0.15" />
      <circle cx="10" cy="18" r="3" fill="#FF6665" fillOpacity="0.5" />
    </svg>
  );
}
