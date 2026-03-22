import SignupIntroCard from "@/src/components/signup/SignupIntroCard";
import SignupForm from "@/src/components/signup/SignupForm";

export const metadata = {
  title: "회원가입 | Bangtalchul",
  description: "방탈출 리뷰와 큐레이션을 즐기기 위한 계정을 생성하세요.",
};

export default function SignupPage() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-12 px-4 pb-16 pt-12 sm:px-6 lg:flex-row lg:px-8 lg:pt-16">
      <SignupIntroCard
        eyebrow="Start Your Story"
        title="팀의 취향을 기록하고, 더 정교한 추천을 받아보세요."
        description="즐겨 찾는 테마와 플레이 스타일을 입력하면 Bangtalchul이 팀에게 맞는 라운드를 큐레이션합니다. 시즌 한정 이벤트와 얼리버드 알림도 받아보세요."
        progress={{
          title: "PROGRESS",
          subtitle: "누적 기록 12,480회",
          details: "팀별 맞춤 추천 98% 만족",
        }}
        benefits={[
          "큐레이터 전용 테마 프리뷰",
          "방문 루트 · 시간표 맞춤 제안",
          "협력 팀 매칭 베타 참여권",
        ]}
      />
      <SignupForm />
    </main>
  );
}
