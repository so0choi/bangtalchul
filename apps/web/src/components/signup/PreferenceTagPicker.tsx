interface PreferenceTagPickerProps {
  tags: readonly string[];
}

const PreferenceTagPicker = ({ tags }: PreferenceTagPickerProps) => {
  return (
    <div>
      <p className="text-sm font-semibold text-slate-700">선호 식재료 / 요리 (복수 선택)</p>
      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-slate-600 transition hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-700"
          >
            #{tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PreferenceTagPicker;
