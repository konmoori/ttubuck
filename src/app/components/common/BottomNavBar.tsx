import { useNavigate, useLocation } from 'react-router';
import svgPaths from '../../../imports/svg-1ctto1i7u9';

interface BottomNavBarProps {
  activeTab?: 'mission' | 'nearby' | 'store' | 'my';
}

export function BottomNavBar({ activeTab = 'mission' }: BottomNavBarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (tab: string) => {
    if (tab === 'mission') {
      navigate('/home');
    } else if (tab === 'nearby') {
      navigate('/store/1');
    } else if (tab === 'store') {
      navigate('/store');
    } else if (tab === 'my') {
      navigate('/my');
    }
  };

  return (
    <>
      <div className="backdrop-blur-[6px] bg-white content-stretch flex gap-[34px] h-[59px] items-end justify-center px-[16px] relative shrink-0 w-[360px]">
        <div aria-hidden="true" className="absolute border-[#ededed] border-solid border-t inset-0 pointer-events-none" />
        <button
          onClick={() => handleNavigation('mission')}
          className="content-stretch flex flex-col gap-[5px] h-[59px] items-center justify-center pb-[8px] pt-[14px] px-[16px] relative rounded-[16px] shrink-0"
        >
          <div className="h-[20px] relative shrink-0 w-[18px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
              <g id="Container">
                <path d={svgPaths.p8cc5b00} fill={activeTab === 'mission' ? 'var(--fill-0, #FF6665)' : 'var(--fill-0, #A8A29E)'} id="Icon" />
              </g>
            </svg>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0">
            <div className={`flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 ${activeTab === 'mission' ? 'text-[#ff6665]' : 'text-[#a8a29e]'} text-[11px] text-center tracking-[-0.22px] uppercase whitespace-nowrap`}>
              <p className="leading-none">미션</p>
            </div>
          </div>
        </button>
        <button
          onClick={() => handleNavigation('nearby')}
          className="content-stretch flex flex-col gap-[5px] h-[59px] items-center justify-center pb-[8px] pt-[14px] px-[16px] relative shrink-0"
        >
          <div className="relative shrink-0 size-[18px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <g id="Container">
                <path d={svgPaths.p1f25e00} fill={activeTab === 'nearby' ? 'var(--fill-0, #FF6665)' : 'var(--fill-0, #A8A29E)'} id="Icon" />
              </g>
            </svg>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0">
            <div className={`flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 ${activeTab === 'nearby' ? 'text-[#ff6665]' : 'text-[#a8a29e]'} text-[11px] text-center tracking-[-0.22px] uppercase whitespace-nowrap`}>
              <p className="leading-none">주변</p>
            </div>
          </div>
        </button>
        <button
          onClick={() => handleNavigation('store')}
          className="content-stretch flex flex-col gap-[5px] h-[59px] items-center justify-center pb-[8px] pt-[14px] px-[11px] relative shrink-0"
        >
          <div className="relative shrink-0 size-[22px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
              <g id="Icon">
                <path d={svgPaths.p2d683a00} id="Vector" stroke={activeTab === 'store' ? 'var(--stroke-0, #FF6665)' : 'var(--stroke-0, #A8A29E)'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                <path d="M11 7.33333V19.25" id="Vector_2" stroke={activeTab === 'store' ? 'var(--stroke-0, #FF6665)' : 'var(--stroke-0, #A8A29E)'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                <path d={svgPaths.p146f4580} id="Vector_3" stroke={activeTab === 'store' ? 'var(--stroke-0, #FF6665)' : 'var(--stroke-0, #A8A29E)'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                <path d={svgPaths.p45e9548} id="Vector_4" stroke={activeTab === 'store' ? 'var(--stroke-0, #FF6665)' : 'var(--stroke-0, #A8A29E)'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </g>
            </svg>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0">
            <div className={`flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 ${activeTab === 'store' ? 'text-[#ff6665]' : 'text-[#a8a29e]'} text-[11px] text-center tracking-[-0.22px] uppercase whitespace-nowrap`}>
              <p className="leading-none">스토어</p>
            </div>
          </div>
        </button>
        <button
          onClick={() => handleNavigation('my')}
          className="content-stretch flex flex-col gap-[5px] h-[59px] items-center justify-center pb-[8px] pt-[14px] px-[16px] relative shrink-0"
        >
          <div className="relative shrink-0 size-[16px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g id="Container">
                <path d={svgPaths.p37375e00} fill={activeTab === 'my' ? 'var(--fill-0, #FF6665)' : 'var(--fill-0, #A8A29E)'} id="Icon" />
              </g>
            </svg>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0">
            <div className={`flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 ${activeTab === 'my' ? 'text-[#ff6665]' : 'text-[#a8a29e]'} text-[11px] text-center tracking-[-0.22px] uppercase whitespace-nowrap`}>
              <p className="leading-none">마이</p>
            </div>
          </div>
        </button>
      </div>
    </>
  );
}