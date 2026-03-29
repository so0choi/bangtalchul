'use client';

import { logout } from "@/app/actions/logout";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from 'next/image'

const navigation = [
  { name: "홈", href: "/" },
  { name: "냉장고", href: "/#fridge" },
  { name: "레시피", href: "/#recipes" },
  { name: "커뮤니티", href: "/#community" },
];

const Navigation: React.FC<{ isLoggedIn: boolean }> = ({ isLoggedIn }) => {
  return (
    <Disclosure
      as="nav"
      className="bg-surface-container-lowest/85 backdrop-blur-sm shadow-ambient sticky top-0 z-50"
    >
      {({ open }) => (
        <>
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2">
              <Link href="/">
              <div className="flex">
              <Image alt="logo" src="/logo.png" width={80} height={80}/>
              <div>
                <p className="text-xs font-medium text-on-surface-variant">
                  냉장고를 부탁해
                </p>
                <p className="font-display text-lg font-bold text-on-surface leading-tight">냉부</p>
                </div>
                </div>
              </Link>
            </div>
            <div className="hidden items-center gap-8 text-sm font-semibold text-on-surface-variant lg:flex">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="transition hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
              {!isLoggedIn ? (
                <Link
                  href="/login"
                  className="rounded-full bg-primary px-5 py-2 text-on-primary shadow-ambient transition hover:opacity-90"
                >
                  로그인
                </Link>
              ) : (
                <button
                  onClick={logout}
                  className="rounded-full bg-primary px-5 py-2 text-on-primary shadow-ambient transition hover:opacity-90"
                >
                  로그아웃
                </button>
              )}
            </div>
            <div className="lg:hidden">
              <Disclosure.Button className="inline-flex items-center rounded-xl p-2 text-on-surface-variant hover:bg-surface-container focus:outline-none">
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
            <div className="space-y-1 px-4 pb-4 pt-2 text-sm text-on-surface-variant">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  href={item.href}
                  className="block rounded-xl px-3 py-2 hover:bg-surface-container hover:text-primary"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <Disclosure.Button
                as={Link}
                href="/login"
                className="block rounded-xl bg-primary px-3 py-2 text-center font-semibold text-on-primary mt-2"
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
