import { ReactNode } from 'react';
import svgPaths from '../../../imports/svg-cfkf0686f0';
import { BottomNavBar } from './BottomNavBar';

function TimeStyle() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[15px] text-black text-center tracking-[-0.24px] whitespace-nowrap">9:41</p>
    </div>
  );
}

function Right() {
  return (
    <div className="h-[11.333px] relative shrink-0 w-[66.661px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66.6611 11.3333">
        <g id="right">
          <path d={svgPaths.p242b4c00} fill="var(--fill-0, black)" id="Cellular Connection" />
          <path d={svgPaths.p399b0600} fill="var(--fill-0, black)" id="Wifi" />
          <g clipPath="url(#clip0_battery)" id="Battery">
            <rect height="10.3333" id="Border" opacity="0.35" rx="2.16667" stroke="var(--stroke-0, black)" width="21" x="42.833" y="0.5" />
            <path d={svgPaths.p2ad1ca80} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
            <rect fill="var(--fill-0, black)" height="7.33333" id="Capacity" rx="1.33333" width="18" x="44.333" y="2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_battery">
            <rect fill="white" height="11.3333" transform="translate(42.333)" width="24.328" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MobileBrowserTop() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[360px]">
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
            <TimeStyle />
            <Right />
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileBrowserBottom() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[375px]">
      <div className="bg-white h-[34px] relative shrink-0 w-full">
        <div className="-translate-x-1/2 absolute bg-black bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] w-[134px]" />
      </div>
    </div>
  );
}

interface MobileLayoutProps {
  children: ReactNode;
  showBottom?: boolean;
  activeTab?: 'mission' | 'nearby' | 'store' | 'my';
}

export function MobileLayout({ children, showBottom = true, activeTab }: MobileLayoutProps) {
  return (
    <div className="bg-white content-stretch flex flex-col items-center overflow-hidden relative rounded-[24px] size-full">
      <MobileBrowserTop />
      {children}
      {showBottom && activeTab && <BottomNavBar activeTab={activeTab} />}
      {showBottom && <MobileBrowserBottom />}
    </div>
  );
}