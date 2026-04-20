import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '../components/common/MobileLayout';
import { Logo } from '../components/common/Logo';

export function SplashPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <MobileLayout>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip relative w-full">
        <Logo />
      </div>
    </MobileLayout>
  );
}
