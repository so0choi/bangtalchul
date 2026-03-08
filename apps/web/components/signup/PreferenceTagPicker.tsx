interface PreferenceTagPickerProps {
  tags: readonly string[];
}

const PreferenceTagPicker = ({ tags }: PreferenceTagPickerProps) => {
  return (
    <div>
      <p className="text-sm font-semibold text-slate-200">선호 테마 (복수 선택)</p>
      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-200 transition hover:border-indigo-400 hover:text-white"
          >
            #{tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PreferenceTagPicker;
