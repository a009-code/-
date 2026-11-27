import { useState } from 'react';
import { ArrowUpRight, MapPin, UtensilsCrossed } from 'lucide-react';
import { STORE_INFO } from '../data/restaurant';

export function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="top" className="border-b border-zinc-200 bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:py-16">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col justify-between lg:col-span-6">
            <div>
              <p className="text-sm font-medium text-zinc-500">
                <span>{STORE_INFO.fullName}</span>
                <span className="mx-2 text-zinc-300" aria-hidden="true">
                  ·
                </span>
                <span>순천대학교 인근 단골 식당</span>
              </p>

              <h1 className="font-display mt-4 text-3xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-4xl lg:text-[2.75rem] text-balance">
                순천대 앞 든든한 한 끼, 매일 찾고 싶은 식당 밥은화
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-600">
                전라남도 순천시 삼산2길에 자리한 밥은화는 따뜻한 밥과 정성스러운 한 그릇 요리를
                부담 없는 가격에 선보이는 동네 단골 식당입니다. 혼밥하기 좋은 1인석부터 든든한
                식사 메뉴까지 언제든 편안하게 들러보세요.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={STORE_INFO.naverMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white transition-colors duration-150 hover:bg-red-800 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
                >
                  <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>네이버 지도 연결</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </a>

                <a
                  href={STORE_INFO.googleMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 transition-colors duration-150 hover:bg-zinc-50 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
                >
                  <span>구글 맵 연결</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-zinc-500" aria-hidden="true" />
                </a>

                <a
                  href="#menu-showcase"
                  className="inline-flex min-h-[44px] items-center px-3 py-2.5 text-sm font-medium text-zinc-700 transition-colors duration-150 hover:text-zinc-900 hover:underline underline-offset-4 whitespace-nowrap shrink-0"
                >
                  대표 메뉴 보기
                </a>
              </div>
            </div>

            <div className="mt-10 border-t border-zinc-200 pt-5 text-xs text-zinc-500 flex flex-wrap items-center gap-x-4 gap-y-1">
              <span>가성비 덮밥 5,500원부터</span>
              <span aria-hidden="true">·</span>
              <span>덮밥 + 반그릇 김치찌개 세트</span>
              <span aria-hidden="true">·</span>
              <span>1인석 혼밥 좌석 구비</span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 lg:aspect-auto lg:h-full lg:min-h-[380px]">
              {!imgError ? (
                <img
                  src={STORE_INFO.heroImage}
                  alt="밥은화 전남순천대점의 직화 돼지숙주덮밥과 뚝배기 김치찌개 한 상 차림"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-zinc-100 to-zinc-200 p-6 text-center text-zinc-600">
                  <UtensilsCrossed className="h-8 w-8 text-zinc-400" aria-hidden="true" />
                  <p className="text-sm font-medium">{STORE_INFO.fullName} 대표 상차림</p>
                </div>
              )}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent p-5">
                <p className="text-xs font-medium text-white/90">
                  시그니처 상차림 · 직화 덮밥 &amp; 반그릇 김치찌개
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 divide-y divide-zinc-200 rounded-xl border border-zinc-200 bg-zinc-50 sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
          <div className="p-5">
            <p className="text-xs font-medium text-zinc-500">식당 이름</p>
            <p className="mt-1.5 text-sm font-semibold text-zinc-900">{STORE_INFO.fullName}</p>
          </div>
          <div className="p-5">
            <p className="text-xs font-medium text-zinc-500">매장 위치</p>
            <p className="mt-1.5 text-sm font-semibold text-zinc-900">{STORE_INFO.address}</p>
          </div>
          <div className="p-5">
            <p className="text-xs font-medium text-zinc-500">영업 시간</p>
            <p className="mt-1.5 text-sm font-semibold text-zinc-900 tabular-nums">
              {STORE_INFO.hours}
            </p>
          </div>
          <div className="p-5">
            <p className="text-xs font-medium text-zinc-500">전화 문의</p>
            <a
              href={`tel:${STORE_INFO.phone}`}
              className="mt-1.5 inline-block text-sm font-semibold text-zinc-900 tabular-nums hover:text-red-700 hover:underline underline-offset-4"
            >
              {STORE_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
