'use client';

import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";

const navigation = [
  { name: "홈", href: "/" },
  { name: "냉장고", href: "/#fridge" },
  { name: "레시피", href: "/#recipes" },
  { name: "커뮤니티", href: "/#community" },
];

const Navigation: React.FC<{isLoggedIn: boolean}> = ({isLoggedIn}) => {
  return (
    <Disclosure
      as="nav"
      className="bg-white/90 backdrop-blur border-b border-slate-200 sticky top-0 z-50"
    >
      {({ open }) => (
        <>
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-emerald-500 px-3 py-1 text-base shadow-sm">
                🧊
              </span>
              <div>
                <p className="text-xs font-medium text-slate-500">
                  냉장고를 부탁해
                </p>
                <p className="text-lg font-bold text-slate-900 leading-tight">냉부</p>
              </div>
            </div>
            <div className="hidden items-center gap-8 text-sm font-semibold text-slate-600 lg:flex">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="transition hover:text-emerald-600"
                >
                  {item.name}
                </Link>
              ))}
              {!isLoggedIn ? (
                <Link
                  href="/login"
                  className="rounded-full bg-emerald-600 px-5 py-2 text-white shadow-sm transition hover:bg-emerald-700"
                >
                  로그인
                </Link>
              ) : (
                <Link
                  href="/logout"
                  className="rounded-full bg-emerald-600 px-5 py-2 text-white shadow-sm transition hover:bg-emerald-700"
                >
                  로그아웃
                </Link>
              )}
            </div>
            <div className="lg:hidden">
              <Disclosure.Button className="inline-flex items-center rounded-md p-2 text-slate-600 hover:bg-slate-100 focus:outline-none">
                <span className="sr-only">메뉴 열기</span>
                {open ? (
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          </div>
          <Disclosure.Panel className="lg:hidden border-t border-slate-100">
            <div className="space-y-1 px-4 pb-4 pt-2 text-sm text-slate-700">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 hover:bg-emerald-50 hover:text-emerald-700"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <Disclosure.Button
                as={Link}
                href="/login"
                className="block rounded-lg bg-emerald-600 px-3 py-2 text-center font-semibold text-white mt-2"
              >
                로그인
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navigation;
