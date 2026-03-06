import Link from "next/link";
import TextField from "@/components/form/TextField";
import PreferenceTagPicker from "@/components/signup/PreferenceTagPicker";
import ConsentCheckboxGroup from "@/components/signup/ConsentCheckboxGroup";
import SocialSignupButtons from "@/components/signup/SocialSignupButtons";
import Form from "next/form";
import {signUp} from "@/components/signup/actions/signup";

interface SignupFormProps {
  preferenceTags: string[];
}

const SignupForm = ({ preferenceTags }: SignupFormProps) => {


  return (
    <section className="flex-1 rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-black/30 backdrop-blur">
      <h2 className="text-2xl font-semibold text-white">회원가입</h2>
      <p className="mt-2 text-sm text-slate-400">
        이미 계정이 있다면{" "}
        <Link href="/login" className="text-indigo-300 underline-offset-4">
          로그인
        </Link>
        .
      </p>
      <Form className="mt-8 space-y-6" action={signUp}>
        <TextField id="name" name="name" label="닉네임" placeholder="방탈출러스" required/>
        <div className="grid gap-6 sm:grid-cols-2">
          <TextField
            id="email"
            name="email"
            type="email"
            label="이메일"
            placeholder="team@bangtalchul.com"
            required
          />
          <TextField
            id="phone"
            name="phone"
            type="tel"
            label="연락처 (선택)"
            placeholder="010-0000-0000"
          />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <TextField
              required
            id="password"
            name="password"
            type="password"
            label="비밀번호"
            placeholder="••••••••"
          />
          <TextField
              required
            id="confirm-password"
            name="confirmPassword"
            type="password"
            label="비밀번호 확인"
            placeholder="••••••••"
          />
        </div>
        <PreferenceTagPicker tags={preferenceTags} />
        <ConsentCheckboxGroup />
        <button
          type="submit"
          className="w-full rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-500/40 transition hover:-translate-y-0.5"
        >
          회원가입 완료
        </button>
      </Form>
      <SocialSignupButtons />
      <div className="mt-6 text-center text-xs text-slate-500">
        가입 시 서비스 이용약관과 개인정보처리방침에 동의하게 됩니다.
      </div>
    </section>
  );
};

export default SignupForm;
