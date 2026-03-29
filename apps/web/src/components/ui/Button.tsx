import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
}

const Button = ({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonProps) => {
  const base =
    'w-full rounded-2xl px-4 py-3 text-base font-semibold transition hover:-translate-y-0.5 cursor-pointer';

  const variants = {
    primary: 'bg-emerald-600 text-white shadow-sm hover:bg-emerald-700',
    outline: 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300',
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
