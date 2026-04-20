import { useNavigate } from 'react-router';
import { MobileLayout } from '../components/common/MobileLayout';
import { useAppStore } from '../store/useAppStore';
import svgPaths from '../../imports/svg-n4rksvo9pn';

function LocationIcon() {
  return (
    <div className="relative shrink-0 size-[23.993px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9926 23.9926">
        <g id="Icon">
          <path d={svgPaths.p37a54600} id="Vector" stroke="var(--stroke-0, #E1302D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99938" />
          <path d={svgPaths.p294d4a00} id="Vector_2" stroke="var(--stroke-0, #E1302D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99938" />
        </g>
      </svg>
    </div>
  );
}

function CameraIcon() {
  return (
    <div className="relative shrink-0 size-[23.993px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9926 23.9926">
        <g id="Icon">
          <path d={svgPaths.p32225c00} id="Vector" stroke="var(--stroke-0, #E1302D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99938" />
          <path d={svgPaths.p33853500} id="Vector_2" stroke="var(--stroke-0, #E1302D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99938" />
        </g>
      </svg>
    </div>
  );
}

export function PermissionPage() {
  const navigate = useNavigate();
  const setGrantedPermissions = useAppStore((state) => state.setGrantedPermissions);

  const handleGrantPermissions = async () => {
    try {
      if ('geolocation' in navigator) {
        await new Promise<void>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
            () => resolve(),
            () => reject()
          );
        });
      }

      if ('mediaDevices' in navigator) {
        await navigator.mediaDevices.getUserMedia({ video: true });
      }

      setGrantedPermissions(true);
      navigate('/home');
    } catch (error) {
      setGrantedPermissions(true);
      navigate('/home');
    }
  };

  return (
    <MobileLayout>
      <div className="bg-white content-stretch flex flex-col gap-[28px] flex-[1_0_0] items-center justify-center min-h-px overflow-y-auto py-[20px] relative w-full">
        <div className="content-stretch flex flex-col gap-[22px] h-[106.363px] items-center justify-center relative shrink-0 w-full">
          <div className="relative shrink-0">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
              <div className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[#030213] text-[24px] text-center tracking-[-0.528px] whitespace-nowrap">
                <p className="leading-[1.26] mb-0">뚜벅을 시작하려면</p>
                <p className="leading-[1.26]">접근권한 허용이 필요해요</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
              <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#5b5b70] text-[15px] text-center whitespace-nowrap">미션 진행을 위해 필요한 권한입니다</p>
            </div>
          </div>
        </div>

        <div className="content-stretch flex flex-col gap-[15.984px] h-[263.284px] items-start relative shrink-0 w-[312.007px]">
          <div className="bg-white h-[123.65px] relative rounded-[16px] shrink-0 w-[312.007px]">
            <div aria-hidden="true" className="absolute border-[#e8e8e8] border-[1.098px] border-solid inset-0 pointer-events-none rounded-[16px]" />
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[15.984px] items-start pb-[25.098px] pt-[25.091px] px-[25.091px] relative size-full">
              <div className="bg-[#fff5f5] relative rounded-[36829000px] shrink-0 size-[47.985px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[11.988px] pr-[12.005px] relative size-full">
                  <LocationIcon />
                </div>
              </div>
              <div className="flex-[197.858_0_0] h-[73.47px] min-w-px relative">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between pt-[3px] relative size-full">
                  <div className="content-stretch flex items-center relative shrink-0 w-full">
                    <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#030213] text-[16px] whitespace-nowrap">위치 정보</p>
                  </div>
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                    <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[1.61] relative shrink-0 text-[#5b5b70] text-[14px] w-[198px]">미션 체크포인트 확인과 주변 제휴 매장 찾기에 사용됩니다</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white h-[123.65px] relative rounded-[16px] shrink-0 w-[312.007px]">
            <div aria-hidden="true" className="absolute border-[#e8e8e8] border-[1.098px] border-solid inset-0 pointer-events-none rounded-[16px]" />
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[15.984px] items-start pb-[25.098px] pt-[25.091px] px-[25.091px] relative size-full">
              <div className="bg-[#fff5f5] relative rounded-[36829000px] shrink-0 size-[47.985px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[11.988px] pr-[12.005px] relative size-full">
                  <CameraIcon />
                </div>
              </div>
              <div className="flex-[197.858_0_0] h-[73.47px] min-w-px relative">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between pt-[3px] relative size-full">
                  <div className="content-stretch flex items-center relative shrink-0 w-full">
                    <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#030213] text-[16px] whitespace-nowrap">카메라</p>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0 w-full">
                    <div className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#5b5b70] text-[14px] w-[198px]">
                      <p className="leading-[1.61] mb-0">목표물 촬영을 통한 미션 인증에</p>
                      <p className="leading-[1.61]">사용됩니다</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#f9fafb] content-stretch flex flex-col h-[74.19px] items-start pt-[15.984px] px-[15.984px] relative rounded-[12px] shrink-0 w-[312.007px]">
          <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
            <div className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#717182] text-[13px] text-center w-[281px]">
              <p className="leading-[21.125px] mb-0">권한은 서비스 이용 목적으로만 사용되며,</p>
              <p className="leading-[21.125px]">언제든지 설정에서 변경할 수 있어요</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white h-[105.077px] relative shrink-0 w-full">
        <div aria-hidden="true" className="absolute border-[#f3f3f5] border-solid border-t-[1.098px] inset-0 pointer-events-none" />
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center pt-[25px] px-[24px] relative size-full">
            <button
              onClick={handleGrantPermissions}
              className="bg-[#e1302d] relative rounded-[8px] shrink-0 w-full"
            >
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center px-[86px] py-[16px] relative size-full">
                  <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-center text-white tracking-[-0.32px] whitespace-nowrap">권한 허용하고 시작하기</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}
