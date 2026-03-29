import HeroSection from "@/src/components/sections/HeroSection";
import RankingSection, {
  FeaturedRecipe,
} from "@/src/components/sections/RankingSection";
import ReviewHighlightsSection, {
  ReviewHighlight,
} from "@/src/components/sections/ReviewHighlightsSection";
import CommunitySection, {
  CommunityPost,
} from "@/src/components/sections/CommunitySection";

const heroStats = [
  { label: "관리 중인 식재료", value: "12만+" },
  { label: "제공 레시피", value: "3,200+" },
  { label: "절약된 식재료", value: "8.1K" },
  { label: "평균 유통기한 절감", value: "4.2일" },
];

const featuredRecipes: FeaturedRecipe[] = [
  {
    title: "두부 된장찌개",
    category: "한식 · 국물요리",
    description: "두부, 애호박, 된장만 있으면 완성",
    difficulty: "난이도 ★☆☆☆☆",
    rating: 4.9,
    reviewCount: 521,
    tags: ["두부", "된장", "애호박"],
  },
  {
    title: "계란 볶음밥",
    category: "한식 · 볶음",
    description: "냉장고 자투리 재료 총출동",
    difficulty: "난이도 ★★☆☆☆",
    rating: 4.7,
    reviewCount: 389,
    tags: ["계란", "밥", "당근", "파"],
  },
  {
    title: "닭가슴살 샐러드",
    category: "샐러드 · 건강식",
    description: "유통기한 임박 채소 활용 레시피",
    difficulty: "난이도 ★☆☆☆☆",
    rating: 4.8,
    reviewCount: 274,
    tags: ["닭가슴살", "양상추", "토마토"],
  },
];

const reviewHighlights: ReviewHighlight[] = [
  {
    name: "수현",
    role: "자취 3년차",
    quote:
      "냉부 쓰고 나서 유통기한 넘겨서 버리는 식재료가 거의 없어졌어요. 알림 기능이 특히 유용해요.",
  },
  {
    name: "민준",
    role: "요리 입문자",
    quote:
      "냉장고에 뭐가 있는지 입력하면 만들 수 있는 레시피를 바로 추천해줘서 요리 고민이 사라졌어요.",
  },
  {
    name: "지아",
    role: "살림 꼼꼼파",
    quote:
      "가족 냉장고를 공유해서 같이 관리하니까 장 볼 때도 중복 구매가 없어졌어요. 식비가 확실히 줄었어요.",
  },
];

const communityPosts: CommunityPost[] = [
  {
    title: "유통기한 D-3 재료로 만드는 빠른 한 끼 5선",
    author: "냉장고탐험가",
    category: "인기 레시피",
  },
  {
    title: "채소 신선하게 오래 보관하는 방법 총정리",
    author: "살림연구소",
    category: "보관 꿀팁",
  },
  {
    title: "자취생 냉장고 필수 식재료 리스트",
    author: "자취왕",
    category: "초보 가이드",
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pt-16">
      <HeroSection
        eyebrow="Smart Fridge Manager"
        headline="냉장고 속 재료로, 오늘의 요리를 완성하세요."
        description="식재료를 등록하면 유통기한을 알아서 관리하고, 지금 있는 재료로 만들 수 있는 레시피를 바로 추천해드려요."
        stats={heroStats}
        primaryCta={{ label: "레시피 추천 받기", href: "#recipes" }}
        secondaryCta={{ label: "냉장고 등록하기", href: "/login" }}
      />
      <RankingSection
        eyebrow="Today's Recipes"
        title="지금 재료로 만들 수 있는 추천 레시피"
        description="유통기한 임박 재료를 우선으로, 낭비 없는 한 끼."
        cta={{ label: "레시피 더 보기 →", href: "#community" }}
        recipes={featuredRecipes}
      />
      <ReviewHighlightsSection
        eyebrow="Real Stories"
        title="냉부 사용자들의 이야기"
        description="식비 절약부터 요리 습관 변화까지."
        cta={{ label: "후기 남기기", href: "/login" }}
        reviews={reviewHighlights}
      />
      <CommunitySection
        eyebrow="Community"
        title="냉장고 꿀팁 모음"
        ctaLabel="팁 공유하기"
        posts={communityPosts}
        spotlight={{
          eyebrow: "Smart Management",
          title: "유통기한 걱정 없는 냉장고",
          description:
            "식재료를 등록하면 냉부가 유통기한 순으로 정리하고, 임박 식재료는 미리 알림을 보내드려요. 남은 재료로 만들 수 있는 레시피까지 자동으로 추천해드립니다.",
          bullets: [
            "유통기한 D-3 알림 자동 발송",
            "보유 식재료 기반 레시피 즉시 추천",
            "가족·룸메이트와 냉장고 공유 관리",
          ],
          cta: { label: "냉장고 관리 시작하기", href: "/login" },
        }}
      />
    </main>
  );
}
