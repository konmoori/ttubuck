import { createBrowserRouter } from 'react-router';
import { SplashPage } from './pages/SplashPage';
import { LoginPage } from './pages/LoginPage';
import { OnboardingPage } from './pages/OnboardingPage';
import { PermissionPage } from './pages/PermissionPage';
import { HomePage } from './pages/HomePage';
import { MissionDetailPage } from './pages/MissionDetailPage';
import { CheckpointPage } from './pages/CheckpointPage';
import { CameraPage } from './pages/CameraPage';
import { MissionCompletePage } from './pages/MissionCompletePage';
import { StoreDetailPage } from './pages/StoreDetailPage';
import { CouponIssuedPage } from './pages/CouponIssuedPage';
import { CouponUsePage } from './pages/CouponUsePage';
import { CouponUseCompletePage } from './pages/CouponUseCompletePage';
import { StorePage } from './pages/StorePage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { MyPage } from './pages/MyPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: SplashPage,
  },
  {
    path: '/login',
    Component: LoginPage,
  },
  {
    path: '/onboarding',
    Component: OnboardingPage,
  },
  {
    path: '/permission',
    Component: PermissionPage,
  },
  {
    path: '/home',
    Component: HomePage,
  },
  {
    path: '/mission/:id',
    Component: MissionDetailPage,
  },
  {
    path: '/checkpoint/:id',
    Component: CheckpointPage,
  },
  {
    path: '/camera/:id',
    Component: CameraPage,
  },
  {
    path: '/mission-complete/:id',
    Component: MissionCompletePage,
  },
  {
    path: '/store/:id',
    Component: StoreDetailPage,
  },
  {
    path: '/coupon-issued/:id',
    Component: CouponIssuedPage,
  },
  {
    path: '/coupon-use/:id',
    Component: CouponUsePage,
  },
  {
    path: '/coupon-use-complete/:id',
    Component: CouponUseCompletePage,
  },
  {
    path: '/store',
    Component: StorePage,
  },
  {
    path: '/product/:id',
    Component: ProductDetailPage,
  },
  {
    path: '/my',
    Component: MyPage,
  },
]);