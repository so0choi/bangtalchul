const SocialSignupButtons = () => {
  return (
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
  );
};

export default SocialSignupButtons;
