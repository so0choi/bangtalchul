import SignupIntroCard from "@/src/components/signup/SignupIntroCard";
import SignupForm from "@/src/components/signup/SignupForm";

export const metadata = {
  title: "회원가입 | 냉부",
  description: "냉장고 식재료 관리와 맞춤 레시피 추천을 위한 계정을 만드세요.",
};

export default function SignupPage() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-12 px-4 pb-16 pt-12 sm:px-6 lg:flex-row lg:px-8 lg:pt-16">
      <SignupIntroCard
        eyebrow="Join 냉부"
        title="식재료를 등록하고, 낭비 없는 식탁을 만들어 보세요."
        description="냉장고 속 재료를 입력하면 냉부가 유통기한을 관리하고 오늘 만들 수 있는 레시피를 추천해드려요. 음식물 쓰레기는 줄이고 식비는 아끼세요."
        progress={{
          title: "STATS",
          subtitle: "절약된 식재료 8,100개+",
          details: "평균 월 식비 23% 절감 효과",
        }}
        benefits={[
          "유통기한 D-3 자동 알림",
          "보유 식재료 기반 레시피 즉시 추천",
          "가족·룸메이트와 냉장고 공유 관리",
        ]}
      />
      <SignupForm />
    </main>
  );
}
