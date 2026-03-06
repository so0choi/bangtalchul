import HeroSection from "@/components/sections/HeroSection";
import RankingSection, {
  FeaturedRoom,
} from "@/components/sections/RankingSection";
import ReviewHighlightsSection, {
  ReviewHighlight,
} from "@/components/sections/ReviewHighlightsSection";
import CommunitySection, {
  CommunityPost,
} from "@/components/sections/CommunitySection";

const heroStats = [
  { label: "일주일 리뷰", value: "1,240+" },
  { label: "등록 테마", value: "580" },
  { label: "단골 팀", value: "8.4K" },
  { label: "평균 평점", value: "4.8 / 5" },
];

const featuredRooms: FeaturedRoom[] = [
  {
    title: "네온 마인드",
    studio: "Seoul Mystery Lab",
    location: "홍대 · 사이버 범죄 추적",
    difficulty: "난이도 ★★★★☆",
    rating: 4.9,
    reviewCount: 412,
    tags: ["추리", "긴장감", "테크 기반"],
  },
  {
    title: "길 위의 서커스",
    studio: "Keysome",
    location: "건대 · 감성 스토리",
    difficulty: "난이도 ★★☆☆☆",
    rating: 4.7,
    reviewCount: 268,
    tags: ["스토리텔링", "협동", "몰입감"],
  },
  {
    title: "서늘한 수장고",
    studio: "Problem Room",
    location: "혜화 · 리얼 호러",
    difficulty: "난이도 ★★★★★",
    rating: 4.8,
    reviewCount: 353,
    tags: ["공포", "연기력", "극강난도"],
  },
];

const reviewHighlights: ReviewHighlight[] = [
  {
    name: "윤지",
    role: "방탈출 기록러",
    quote:
      "Bangtalchul 덕분에 난이도와 분위기 필터링이 쉬워져서 취향 맞는 테마만 골라가기 훨씬 편해졌어요.",
  },
  {
    name: "한결",
    role: "신규 스토리 헌터",
    quote:
      "리뷰만 읽어도 서사가 그려져서 방문 전 설렘이 생겨요. 실제 방문 후에는 바로 후기를 남기게 되는 UX!",
  },
  {
    name: "은별",
    role: "팀 플레이 마스터",
    quote:
      "협동 요소 평가가 따로 있는 게 신의 한 수. 파티 특성에 따라 추천을 받아서 실패 없는 라운드를 만들었어요.",
  },
];

const communityPosts: CommunityPost[] = [
  {
    title: "2024 가을 시즌 신규 테마 총정리",
    author: "큐어",
    category: "인기 글",
  },
  {
    title: "초심자 추천 : 몰입형 스토리 best 5",
    author: "탈출로그",
    category: "큐레이터 pick",
  },
  {
    title: "밤 10시 이후도 재밌게 운영하는 지점 모음",
    author: "Esc in the City",
    category: "야간 팁",
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pt-16">
      <HeroSection
        eyebrow="Made for Escape Lovers"
        headline="방탈출의 모든 순간을 큐레이션하다."
        description="리뷰 데이터와 실시간 랭킹을 기반으로 팀의 성향, 난이도 취향, 방문 가능한 시간까지 고려한 맞춤 테마를 추천해 드려요."
        stats={heroStats}
        primaryCta={{ label: "인기 랭킹 보기", href: "#ranking" }}
        secondaryCta={{ label: "나의 큐레이션 받기", href: "/login" }}
      />
      <RankingSection
        eyebrow="Weekly Ranking"
        title="이번 주 집중 탐험 테마"
        description="몰입도, 공포도, 협동 요소까지 한 눈에."
        cta={{ label: "커뮤니티 분석 보기 →", href: "#community" }}
        rooms={featuredRooms}
      />
      <ReviewHighlightsSection
        eyebrow="Real Stories"
        title="생생한 리뷰 하이라이트"
        description="분위기를 먼저 느끼고, 팀에 맞게 예약하세요."
        cta={{ label: "내 후기 남기기", href: "/login" }}
        reviews={reviewHighlights}
      />
      <CommunitySection
        eyebrow="Community"
        title="큐레이터들의 최신 포스트"
        ctaLabel="제보하기"
        posts={communityPosts}
        spotlight={{
          eyebrow: "Personalized Flow",
          title: "팀 분위기에 맞춘 추천",
          description:
            "플레이 인원, 경험 레벨, 좋아하는 장르, 스케줄만 입력하면 Bangtalchul이 일정과 이동 동선까지 고려한 플랜을 제안해요.",
          bullets: [
            "실시간 예약 가능 여부 표시",
            "팀원 호흡을 고려한 협동 지수",
            "스포 없는 리뷰 카드로 분위기 파악",
          ],
          cta: { label: "큐레이션 시작하기", href: "/login" },
        }}
      />
    </main>
  );
}
