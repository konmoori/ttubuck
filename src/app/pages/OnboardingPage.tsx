import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '../components/common/MobileLayout';
import { LogoCharacter } from '../components/common/LogoCharacter';
import { PageIndicator } from '../components/common/IndicatorDot';
import { useAppStore } from '../store/useAppStore';

export function OnboardingPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const setCompletedOnboarding = useAppStore((state) => state.setCompletedOnboarding);
  const setOnboardingStep = useAppStore((state) => state.setOnboardingStep);

  const handleNext = () => {
    if (currentStep < 2) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      setOnboardingStep(nextStep);
    } else {
      setCompletedOnboarding(true);
      navigate('/permission');
    }
  };

  const handleSkip = () => {
    setCompletedOnboarding(true);
    navigate('/permission');
  };

  const showSkip = currentStep < 2;

  return (
    <MobileLayout>
      {showSkip && (
        <div className="relative shrink-0 w-full">
          <div className="flex flex-row justify-end overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-start justify-end px-[20px] py-[10px] relative size-full">
              <button onClick={handleSkip}>
                <p className="font-['Pretendard_Variable:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#030213] text-[14px] text-center tracking-[-0.28px] whitespace-nowrap">건너뛰기</p>
              </button>
            </div>
          </div>
        </div>
      )}
      <div
        className="bg-white flex-[1_0_0] min-h-px overflow-y-auto py-[20px] relative w-full cursor-pointer"
        onClick={handleNext}
      >
        <div className="flex flex-col items-center rounded-[inherit] size-full">
          <div className={`content-stretch flex flex-col items-center justify-between ${currentStep === 2 ? 'pt-[144px]' : 'pt-[107px]'} relative size-full`}>
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
            <PageIndicator total={3} current={currentStep} />
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}
