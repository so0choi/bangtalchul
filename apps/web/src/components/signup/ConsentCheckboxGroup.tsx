const consentOptions = [
  {
    label: "서비스 이용약관 및 개인정보 수집·이용에 동의합니다. (필수)",
    required: true,
  },
  {
    label: "프로모션, 이벤트 알림을 이메일로 받겠습니다. (선택)",
    required: false,
  },
];

const ConsentCheckboxGroup = () => {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
      {consentOptions.map((option) => (
        <label key={option.label} className="mt-3 flex items-start gap-3 first:mt-0">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500/40"
          />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default ConsentCheckboxGroup;
