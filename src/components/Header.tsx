import { MapPin } from 'lucide-react';
import { STORE_INFO } from '../data/restaurant';

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-8 px-4 py-3.5 sm:px-6">
        <a
          href="#top"
          className="font-display text-xl font-bold tracking-tight text-zinc-900 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-700"
        >
          {STORE_INFO.brandName}
        </a>

        <nav
          aria-label="주요 메뉴"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-600"
        >
          <a
            href="#menu-showcase"
            className="whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-zinc-900 hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-700"
          >
            대표 메뉴
          </a>
          <a
            href="#price-table"
            className="whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-zinc-900 hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-700"
          >
            전체 가격표
          </a>
          <a
            href="#review-event"
            className="whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-zinc-900 hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-700"
          >
            리뷰 이벤트
          </a>
          <a
            href="#location"
            className="whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-zinc-900 hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-700"
          >
            오시는 길
          </a>
        </nav>

        <div className="shrink-0">
          <a
            href={STORE_INFO.naverMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[40px] items-center gap-2 rounded-lg bg-red-700 px-4 py-2 text-sm font-medium text-white transition-colors duration-150 hover:bg-red-800 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
          >
            <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>식당 지도</span>
          </a>
        </div>
      </div>
    </header>
  );
}
