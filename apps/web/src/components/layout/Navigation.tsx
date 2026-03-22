'use client';

import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";

const navigation = [
  { name: "홈", href: "/" },
  { name: "리뷰", href: "/#reviews" },
  { name: "랭킹", href: "/#ranking" },
  { name: "커뮤니티", href: "/#community" },
];

const Navigation = () => {
  return (
    <Disclosure
      as="nav"
      className="bg-slate-950/70 backdrop-blur border-b border-white/10"
    >
      {({ open }) => (
        <>
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-white">
              <span className="rounded-full bg-indigo-500/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                B
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-300">
                  방탈출 큐레이션
                </p>
                <p className="text-lg font-bold text-white">Bangtalchul</p>
              </div>
            </div>
            <div className="hidden items-center gap-8 text-sm font-semibold text-slate-200 lg:flex">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="transition hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/login"
                className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-2 text-white shadow-lg shadow-indigo-500/30 transition hover:scale-105"
              >
                로그인
              </Link>
            </div>
            <div className="lg:hidden">
              <Disclosure.Button className="inline-flex items-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none">
                <span className="sr-only">메뉴 열기</span>
                {open ? (
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          </div>
          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-4 pb-4 pt-2 text-sm text-slate-200">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  href={item.href}
                  className="block rounded-md px-3 py-2 hover:bg-white/10"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <Disclosure.Button
                as={Link}
                href="/login"
                className="block rounded-md bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-3 py-2 text-center font-semibold text-white"
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
