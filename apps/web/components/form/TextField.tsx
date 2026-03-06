import { InputHTMLAttributes } from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const TextField = ({ label, id, className = "", ...props }: TextFieldProps) => {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-slate-200">
        {label}
      </label>
      <input
        id={id}
        className={`mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 ${className}`}
        {...props}
      />
    </div>
  );
};

export default TextField;
