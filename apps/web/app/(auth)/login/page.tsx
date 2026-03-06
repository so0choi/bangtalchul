import Link from "next/link";

export const metadata = {
  title: "로그인 | Bangtalchul",
  description: "나만의 방탈출 큐레이션을 위해 로그인하세요.",
};

export default function LoginPage() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-12 px-4 pb-16 pt-12 sm:px-6 lg:flex-row lg:px-8 lg:pt-16">
      <section className="flex-1 rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-900 via-slate-950 to-slate-950 p-8 shadow-2xl shadow-black/20">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">
          Personalized Escape
        </p>
        <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
          로그인하고 팀 맞춤 추천을 시작하세요.
        </h1>
        <p className="mt-4 text-base text-slate-300">
          방탈출러들의 집단 지성을 정리해 팀원 수, 이동 동선, 취향에 맞춘 추천을 제공합니다.
          로그인하고 단 한 번의 실패도 없는 시나리오를 만들어 보세요.
        </p>
        <div className="mt-8 space-y-4 text-sm text-slate-200">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">
              실시간 랭킹 요약
            </p>
            <p className="mt-2 text-lg font-semibold text-white">
              지금 가장 핫한 테마 10개를 한눈에
            </p>
            <p className="text-slate-400">10분마다 업데이트</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">
              팀 매칭
            </p>
            <p className="mt-2 text-lg font-semibold text-white">
              플레이 스타일이 비슷한 팀과 연결
            </p>
            <p className="text-slate-400">베타 기능 우선 제공</p>
          </div>
        </div>
      </section>
      <section className="flex-1 rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-black/30 backdrop-blur">
        <h2 className="text-2xl font-semibold text-white">계정 로그인</h2>
        <p className="mt-2 text-sm text-slate-400">
          아직 계정이 없다면{" "}
          <Link href="/signup" className="text-indigo-300 underline-offset-4 hover:underline">
            회원가입
          </Link>
          .
        </p>
        <form className="mt-8 space-y-6">
          <div>
            <label htmlFor="email" className="text-sm font-semibold text-slate-200">
              이메일
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="team@bangtalchul.com"
              className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-sm font-semibold text-slate-200">
                비밀번호
              </label>
              <button
                type="button"
                className="text-xs font-semibold text-indigo-300 hover:text-indigo-200"
              >
                비밀번호 찾기
              </button>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
            />
          </div>
          <div className="flex items-center justify-between text-sm text-slate-300">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-white/20 bg-white/10 text-indigo-500 focus:ring-indigo-500/60"
              />
              로그인 유지
            </label>
            <p className="text-xs text-slate-500">공용 PC에서는 비활성화하세요.</p>
          </div>
          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-500/40 transition hover:-translate-y-0.5"
          >
            로그인
          </button>
        </form>
        <div className="mt-8 space-y-3 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <div className="h-px flex-1 bg-white/10" />
            <span>또는</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-semibold text-white transition hover:bg-white/10">
              카카오로 시작하기
            </button>
            <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-semibold text-white transition hover:bg-white/10">
              Apple로 시작하기
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
