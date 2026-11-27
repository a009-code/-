import { STORE_INFO } from '../data/restaurant';

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 py-10">
      <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6">
        <div>
          <p className="font-display text-base font-bold text-zinc-900">{STORE_INFO.fullName}</p>
          <p className="mt-1 text-xs text-zinc-500">
            {STORE_INFO.address} ({STORE_INFO.jibunAddress}) · 전화 {STORE_INFO.phone}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-xs font-medium text-zinc-600">
          <a
            href={STORE_INFO.naverMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 hover:underline underline-offset-4 whitespace-nowrap"
          >
            네이버 지도
          </a>
          <a
            href={STORE_INFO.googleMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 hover:underline underline-offset-4 whitespace-nowrap"
          >
            구글 맵
          </a>
          <a
            href={STORE_INFO.naverReviewWriteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 hover:underline underline-offset-4 whitespace-nowrap"
          >
            네이버 리뷰 작성
          </a>
        </div>
      </div>
    </footer>
  );
}
