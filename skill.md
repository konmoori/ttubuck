# 뚜벅 (Ttubuck) — 작업 인수인계 누적 기록

---

## 앱 개요

**뚜벅**은 도보 기반 위치 미션 앱이다.  
사용자가 도보로 이동하며 미션을 수행하고, 완료 시 포인트/쿠폰을 획득해 제휴 매장에서 사용하는 구조다.

---

## 기술 스택

| 항목 | 기술 |
|------|------|
| 프레임워크 | React 18 + TypeScript + Vite |
| 라우팅 | React Router v7 (`createBrowserRouter`) |
| 전역 상태관리 | Zustand v5 (`persist` 미들웨어로 localStorage 동기화) |
| UI 컴포넌트 | shadcn/ui (Radix UI 기반) + MUI Icons |
| 스타일 | Tailwind CSS v4 |
| 애니메이션 | motion (Framer Motion) |
| 폰트 | Pretendard Variable |
| 디자인 원본 | Figma 추출 (`src/imports/` — 한글 파일명 컴포넌트) |

---

## 작업 기록

---

### [작업 7] 전체 화면 스크롤바 숨김 (2026-04-21)

#### 이번 작업 목표
- 모든 화면에서 스크롤바 UI 숨김 (스크롤 기능은 유지)

#### 조치
- `src/styles/index.css`에 `* { scrollbar-width: none; -ms-overflow-style: none; }` 및 `*::-webkit-scrollbar { display: none; }` 전역 추가

---

### [작업 6] 온보딩 step 0 뒤로가기 추가 + 스와이프 힌트 항상 표시 (2026-04-21)

#### 이번 작업 목표
- 첫 번째 온보딩(step 0)에도 뒤로가기 버튼 표시 → `/login`으로 이동
- 스와이프 힌트 애니메이션을 모든 스텝에서 항상 표시 (사라지지 않음)

#### 조치
- `handleBack`: step 0일 때 `navigate('/login')` 추가
- 뒤로가기 버튼 조건부 렌더링 제거 → 항상 표시
- `showHint` 상태 및 `AnimatePresence` 제거, 힌트를 단순 `div`로 항상 렌더링

---

### [작업 5] 온보딩 스와이프 전환 + 뒤로가기 + 스와이프 힌트 (2026-04-21)

#### 이번 작업 목표
- 온보딩 스텝 전환을 클릭 → 스와이프(좌/우)로 변경
- 건너뛰기 반대편에 뒤로가기 버튼 추가
- 스와이프 유도 손가락 애니메이션 + 안내 텍스트 추가

#### 조치
- `onTouchStart` / `onTouchEnd`로 수평 스와이프 감지 (threshold 50px), 좌→다음, 우→이전
- 상단 바 `justify-between`으로 뒤로가기(좌) / 건너뛰기(우) 배치; step 0엔 뒤로가기 숨김
- `SwipeHintIcon` SVG 컴포넌트 + `motion` 좌우 반복 애니메이션으로 힌트 표시
- 첫 스와이프 시 `showHint` false로 힌트 사라짐 (`AnimatePresence` fade out)

---

### [작업 4] 온보딩 마지막 스텝 건너뛰기 버튼 표시 (2026-04-21)

#### 이번 작업 목표
- 온보딩 3번째(마지막) 화면에도 건너뛰기 버튼 노출

#### 원인
- `showSkip = currentStep < 2` 조건으로 step 2에서 버튼이 숨겨져 있었음

#### 조치
- `OnboardingPage.tsx`: `showSkip` 변수 제거, 건너뛰기 버튼을 항상 렌더링하도록 변경

---

### [작업 3] OnboardingPage 콘텐츠 수직 가운데 정렬 (2026-04-21)

#### 이번 작업 목표
- 온보딩 1스텝의 말풍선 + 캐릭터 영역을 화면 Y축 가운데로 정렬

#### 원인
- 기존 코드가 `pt-[107px]` / `pt-[144px]` 고정 패딩으로 위치를 잡아 화면 상단에 치우침

#### 조치
- `OnboardingPage.tsx`: 고정 `pt-` 패딩 제거
- 콘텐츠 래퍼를 `flex-1 flex items-center justify-center`로 변경해 남은 공간에서 수직 가운데 정렬
- `PageIndicator`는 하단에 유지 (`justify-between` 구조 유지)

---

### [작업 2] VS Code CSS 빨강불 제거 (2026-04-20)

#### 이번 작업 목표
- `src/styles/tailwind.css`의 VS Code 빨강 밑줄 에러 제거

#### 원인
- Tailwind CSS v4의 `source(none)` 구문을 VS Code 기본 CSS 언어 서버가 인식 못 함
- 빌드/런타임 에러가 아닌 순수 IDE 린팅 오류

#### 조치
- `.vscode/settings.json`에 `"css.validate": false` 추가
- 기존 `"css.lint.unknownAtRules": "ignore"`는 유지

---

### [작업 1] 프로젝트 초기 세팅 확인 및 skill.md 생성 (2026-04-20)

#### 이번 작업 목표
- 현재 프로젝트 구조 파악
- skill.md 초기 문서 생성

#### 확인된 프로젝트 현황
- Figma 디자인에서 페이지별 컴포넌트가 `src/imports/` 한글 파일명으로 추출되어 있음
- 각 페이지는 `src/app/pages/`에 리팩토링된 형태로 존재
- Zustand 스토어 기초 구조 완성 (`useAppStore.ts`)
- React Router 라우트 전체 정의 완료 (`routes.ts`)
- BottomNavBar, MobileLayout 공통 컴포넌트 존재

---

## 확정된 UX 정책

- **모바일 우선**: 기본 레이아웃 너비 360px, MobileLayout 컴포넌트로 래핑
- **하단 탭바 4탭**: 미션 / 주변 / 스토어 / 마이
  - 미션 → `/home`
  - 주변 → `/store/:id` (현재 하드코딩 `/store/1`, 추후 위치 기반으로 변경 필요)
  - 스토어 → `/store`
  - 마이 → `/my`
- **온보딩 진입 조건**: `isLoggedIn`, `hasCompletedOnboarding`, `hasGrantedPermissions` 세 조건 모두 충족해야 홈 진입
- **권한 요청 흐름**: 스플래시 → 로그인 → 온보딩(3스텝) → 위치/카메라 권한 허용 → 홈
- **미션 수행 흐름**: 홈 → 미션 상세 → 체크포인트 → 카메라(사진인증) → 미션 완료
- **쿠폰 흐름**: 매장 상세 → 쿠폰 발급 완료 → 쿠폰 사용 → 쿠폰 사용 완료
- **포인트 단위**: 정수 (예: 500P, 1200P)
- **레벨 시스템**: "Lv.7 탐험가" 형태 — 레벨 + 칭호 구조 (목업 기준)
- **실제 결제/제휴 API 연동**: 이번 범위 제외, 목업 데이터로 처리

---

## 화면 구조

```
/ (SplashPage)
├── /login (LoginPage)
│   └── /onboarding (OnboardingPage)  ← 3스텝 슬라이드
│       └── /permission (PermissionPage)  ← 위치·카메라 권한 허용
│           └── /home (HomePage)  ← 메인 진입점
│
/home (HomePage)
├── /mission/:id (MissionDetailPage)
│   └── /checkpoint/:id (CheckpointPage)
│       └── /camera/:id (CameraPage)  ← 사진 인증
│           └── /mission-complete/:id (MissionCompletePage)
│
/store (StorePage)  ← 스토어 탭
├── /product/:id (ProductDetailPage)
│
/store/:id (StoreDetailPage)  ← 주변 탭 또는 홈에서 진입
├── /coupon-issued/:id (CouponIssuedPage)
│   └── /coupon-use/:id (CouponUsePage)
│       └── /coupon-use-complete/:id (CouponUseCompletePage)
│
/my (MyPage)  ← 마이 탭
```

---

## 상태관리 항목

### `useAppStore` (Zustand + persist → `ttubeok-storage`)

| 상태 키 | 타입 | 설명 |
|---------|------|------|
| `isLoggedIn` | boolean | 로그인 여부 |
| `hasCompletedOnboarding` | boolean | 온보딩 완료 여부 |
| `hasGrantedPermissions` | boolean | 위치·카메라 권한 허용 여부 |
| `currentOnboardingStep` | number | 현재 온보딩 스텝 (0~2) |

### 추가 예정 상태 (다음 작업에서 구현)

| 상태 키 | 타입 | 설명 |
|---------|------|------|
| `userProfile` | object | 닉네임, 레벨, 칭호 |
| `totalPoints` | number | 보유 포인트 합계 |
| `completedMissions` | string[] | 완료한 미션 ID 목록 |
| `bookmarkedMissions` | string[] | 찜한 미션 ID 목록 |
| `bookmarkedStores` | string[] | 찜한 매장 ID 목록 |
| `recentMissions` | string[] | 최근 수행 미션 ID (최대 5개) |
| `userCoupons` | Coupon[] | 보유 쿠폰 목록 |
| `currentLocation` | `{lat, lng}` \| null | 현재 위치 (권한 허용 시) |
| `notificationEnabled` | boolean | 알림 설정 |

---

## localStorage key 설계

| key | 저장 내용 | 관리 주체 |
|-----|---------|---------|
| `ttubeok-storage` | Zustand persist 전체 상태 (isLoggedIn, onboarding 등) | Zustand middleware 자동 |
| `ttubeok-missions` | 목업 미션 수행 기록 `{ missionId, completedAt, pointEarned }[]` | 직접 read/write |
| `ttubeok-points` | 포인트 내역 `{ amount, reason, date }[]` | 직접 read/write |
| `ttubeok-coupons` | 보유 쿠폰 `{ couponId, storeId, isUsed, issuedAt }[]` | 직접 read/write |
| `ttubeok-bookmarks` | 찜 목록 `{ missions: string[], stores: string[] }` | 직접 read/write |
| `ttubeok-settings` | 앱 설정 `{ notification: boolean, locationEnabled: boolean }` | 직접 read/write |

> **규칙**: localStorage 직접 접근은 `src/app/utils/storage.ts` 헬퍼 함수를 통해 처리 (아직 미생성, 다음 작업에서 생성 예정)

---

## 목업 데이터 구조 (예정)

### 미션 (Mission)
```ts
interface Mission {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  locationName: string;          // 예: "성내동 공원 앞"
  lat: number;
  lng: number;
  distanceFromUser?: number;     // 미터 단위, 런타임에 계산
  pointReward: number;           // 예: 500
  estimatedMinutes: number;      // 예: 20
  checkpointCount: number;       // 체크포인트 개수
  partneredStoreId?: string;     // 연계 제휴 매장
  tags: string[];                // 예: ["걷기", "역사", "사진"]
}
```

### 매장 (Store)
```ts
interface Store {
  id: string;
  name: string;
  category: string;              // 예: "카페", "식당"
  imageUrl: string;
  address: string;
  lat: number;
  lng: number;
  couponDescription: string;     // 예: "아메리카노 500원 할인"
  requiredPoints: number;        // 쿠폰 발급 필요 포인트
  operatingHours: string;
}
```

### 쿠폰 (Coupon)
```ts
interface Coupon {
  id: string;
  storeId: string;
  storeName: string;
  description: string;
  isUsed: boolean;
  issuedAt: string;              // ISO 8601
  expiresAt: string;             // ISO 8601
}
```

---

## 파일 구조 현황

```
src/
├── app/
│   ├── App.tsx                  ← RouterProvider 루트
│   ├── routes.ts                ← 전체 라우트 정의
│   ├── components/
│   │   ├── common/
│   │   │   ├── BottomNavBar.tsx ← 하단 탭바 (4탭)
│   │   │   ├── MobileLayout.tsx ← 360px 모바일 래퍼
│   │   │   ├── Logo.tsx
│   │   │   ├── LogoCharacter.tsx
│   │   │   └── IndicatorDot.tsx ← 온보딩 스텝 점 표시
│   │   ├── ui/                  ← shadcn/ui 자동생성 컴포넌트
│   │   └── figma/
│   │       └── ImageWithFallback.tsx
│   ├── pages/                   ← 실제 사용 페이지 (15개)
│   │   ├── SplashPage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── OnboardingPage.tsx
│   │   ├── PermissionPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── MissionDetailPage.tsx
│   │   ├── CheckpointPage.tsx
│   │   ├── CameraPage.tsx
│   │   ├── MissionCompletePage.tsx
│   │   ├── StoreDetailPage.tsx
│   │   ├── CouponIssuedPage.tsx
│   │   ├── CouponUsePage.tsx
│   │   ├── CouponUseCompletePage.tsx
│   │   ├── StorePage.tsx
│   │   ├── ProductDetailPage.tsx
│   │   └── MyPage.tsx
│   └── store/
│       └── useAppStore.ts       ← Zustand 전역 상태
├── imports/                     ← Figma 추출 원본 (한글 파일명)
│   ├── 홈화면미션.tsx
│   ├── 미션상세.tsx
│   ├── 미션완료.tsx
│   ├── 체크포인트.tsx
│   ├── 사진인증.tsx / 사진인증완료.tsx
│   ├── 매장상세.tsx / 매장상세-7-2802.tsx
│   ├── 스토어.tsx
│   ├── 쿠폰사용.tsx / 쿠폰사용-7-2845.tsx / 쿠폰발급완료.tsx
│   ├── 로그인.tsx
│   ├── 마이.tsx
│   ├── 스플래시화면.tsx
│   ├── 위치카메라허용.tsx
│   ├── 스토리1.tsx / 스토리2.tsx / 스토리3.tsx  ← 온보딩
│   ├── CouponDetails.tsx
│   └── svg-*.ts / image-*.png   ← Figma 추출 에셋
├── assets/                      ← 정적 이미지
└── styles/
    ├── index.css
    ├── tailwind.css
    ├── theme.css                ← 색상 토큰
    └── fonts.css
```

---

## 디자인 토큰

| 용도 | 값 |
|------|----|
| 주 브랜드 색 (활성/강조) | `#FF6665` |
| 주 브랜드 색 (진한 버전) | `#E1302D` |
| 비활성 탭/아이콘 색 | `#A8A29E` |
| 배경 (홈) | `#F9F9F9` |
| 텍스트 기본 | `#030213` |
| 서브 텍스트 | `#5B5B70` |
| 폰트 | Pretendard Variable |

---

## 다음 작업 항목

### 우선순위 높음
- [ ] `src/app/utils/storage.ts` 생성 — localStorage 헬퍼 함수 (get/set/remove, 타입 안전)
- [ ] `src/app/data/missions.ts` 생성 — 목업 미션 데이터 5~10개
- [ ] `src/app/data/stores.ts` 생성 — 목업 제휴 매장 데이터 5~10개
- [ ] Zustand store 확장 — userProfile, points, bookmarks, coupons 상태 추가
- [ ] HomePage — 목업 미션 데이터 연결 (현재 하드코딩된 "별을 따라 걷다 보면")

### 우선순위 중간
- [ ] `주변` 탭 네비게이션 — 현재 `/store/1` 하드코딩 → 위치 기반 로직으로 교체
- [ ] MissionDetailPage — `useParams().id` 기반으로 목업 데이터 조회 연결
- [ ] MyPage — 실제 포인트/쿠폰/레벨 상태 연결 (현재 하드코딩 "Lv.7 탐험가", "김탐험")
- [ ] StorePage, StoreDetailPage — 목업 매장 데이터 연결

### 우선순위 낮음
- [ ] 데스크톱 확장 레이아웃 검토 (MobileLayout 바깥 배경 처리)
- [ ] 사진 인증 흐름 — 실제 카메라 API 대신 파일 업로드 목업으로 처리
