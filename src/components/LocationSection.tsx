import { useState } from 'react';
import { ArrowUpRight, Check, Copy, MapPin, Phone, Clock } from 'lucide-react';
import { STORE_INFO } from '../data/restaurant';

export function LocationSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(STORE_INFO.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="location" className="bg-white py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12">
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <p className="text-sm font-medium text-red-700">오시는 길 및 식당 지도</p>
              <h2 className="font-display mt-1.5 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
                순천대학교 인근, 찾기 쉬운 골목 1층
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                순천대학교 정문 인근 석현동 상권에 자리하고 있어 수업 전후 점심이나 저녁 식사로
                방문하기 좋습니다.
              </p>

              <dl className="mt-8 divide-y divide-zinc-200 border-y border-zinc-200">
                <div className="flex items-start justify-between gap-4 py-4">
                  <dt className="flex items-center gap-2 text-xs font-medium text-zinc-500 shrink-0">
                    <MapPin className="h-4 w-4 text-zinc-400" aria-hidden="true" />
                    <span>도로명 주소</span>
                  </dt>
                  <dd className="text-right">
                    <p className="text-sm font-semibold text-zinc-900">{STORE_INFO.address}</p>
                    <p className="mt-0.5 text-xs text-zinc-500">지번: {STORE_INFO.jibunAddress}</p>
                  </dd>
                </div>

                <div className="flex items-start justify-between gap-4 py-4">
                  <dt className="flex items-center gap-2 text-xs font-medium text-zinc-500 shrink-0">
                    <Clock className="h-4 w-4 text-zinc-400" aria-hidden="true" />
                    <span>영업 안내</span>
                  </dt>
                  <dd className="text-right">
                    <p className="text-sm font-semibold text-zinc-900 tabular-nums">
                      {STORE_INFO.hours}
                    </p>
                    <p className="mt-0.5 text-xs text-zinc-500">{STORE_INFO.hoursNote}</p>
                  </dd>
                </div>

                <div className="flex items-start justify-between gap-4 py-4">
                  <dt className="flex items-center gap-2 text-xs font-medium text-zinc-500 shrink-0">
                    <Phone className="h-4 w-4 text-zinc-400" aria-hidden="true" />
                    <span>매장 연락처</span>
                  </dt>
                  <dd className="text-right">
                    <a
                      href={`tel:${STORE_INFO.phone}`}
                      className="text-sm font-semibold text-zinc-900 tabular-nums hover:text-red-700 hover:underline underline-offset-4"
                    >
                      {STORE_INFO.phone}
                    </a>
                    <p className="mt-0.5 text-xs text-zinc-500">{STORE_INFO.seatingNote}</p>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={STORE_INFO.naverMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white transition-colors duration-150 hover:bg-red-800 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
              >
                <span>네이버 지도로 보기</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>

              <a
                href={STORE_INFO.googleMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 transition-colors duration-150 hover:bg-zinc-50 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
              >
                <span>구글 맵으로 보기</span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-zinc-500" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={handleCopyAddress}
                className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm font-medium text-zinc-700 transition-colors duration-150 hover:bg-zinc-100 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-700" aria-hidden="true" />
                    <span>주소 복사됨</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 text-zinc-500" aria-hidden="true" />
                    <span>주소 복사</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative flex h-full min-h-[340px] flex-col justify-between overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 p-6">
              <svg
                viewBox="0 0 640 400"
                className="absolute inset-0 h-full w-full object-cover opacity-90"
                aria-hidden="true"
              >
                <rect width="640" height="400" fill="#F4F4F5" />
                <g stroke="#E4E4E7" strokeWidth="1">
                  <line x1="0" y1="80" x2="640" y2="80" />
                  <line x1="0" y1="160" x2="640" y2="160" />
                  <line x1="0" y1="240" x2="640" y2="240" />
                  <line x1="0" y1="320" x2="640" y2="320" />
                  <line x1="120" y1="0" x2="120" y2="400" />
                  <line x1="240" y1="0" x2="240" y2="400" />
                  <line x1="360" y1="0" x2="360" y2="400" />
                  <line x1="480" y1="0" x2="480" y2="400" />
                </g>

                <path
                  d="M 40 310 Q 220 270 370 210 T 620 120"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="22"
                  strokeLinecap="round"
                />
                <path
                  d="M 180 30 L 290 380"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="16"
                  strokeLinecap="round"
                />
                <path
                  d="M 320 230 L 420 120 L 530 160"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <rect
                  x="70"
                  y="75"
                  width="115"
                  height="70"
                  rx="8"
                  fill="#E4E4E7"
                  stroke="#D4D4D8"
                />
                <text
                  x="127"
                  y="115"
                  textAnchor="middle"
                  fill="#52525B"
                  fontSize="12"
                  fontWeight="600"
                >
                  순천대학교 정문
                </text>

                <text x="275" y="285" fill="#71717A" fontSize="11" fontWeight="500">
                  삼산로
                </text>
                <text x="415" y="155" fill="#71717A" fontSize="11" fontWeight="500">
                  삼산2길
                </text>

                <circle cx="375" cy="195" r="24" fill="#B91C1C" fillOpacity="0.14" />
                <circle cx="375" cy="195" r="9" fill="#B91C1C" stroke="#FFFFFF" strokeWidth="3" />
              </svg>

              <div className="relative z-10 flex items-start justify-between gap-4">
                <div className="rounded-lg border border-zinc-200 bg-white/95 px-3.5 py-2 shadow-xs backdrop-blur-xs">
                  <p className="text-xs font-medium text-zinc-500">약도 안내</p>
                  <p className="text-sm font-bold text-zinc-900">순천시 삼산2길 48 · 밥은화</p>
                </div>
              </div>

              <div className="relative z-10 mt-auto flex flex-wrap items-center justify-between gap-3 rounded-lg border border-zinc-200 bg-white/95 p-4 shadow-xs backdrop-blur-xs">
                <div>
                  <p className="text-sm font-bold text-zinc-900">실시간 길찾기가 필요하신가요?</p>
                  <p className="text-xs text-zinc-500">
                    지도 버튼을 누르면 네이버 지도 또는 구글 맵 앱·웹으로 바로 연결됩니다.
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={STORE_INFO.naverMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[38px] items-center gap-1.5 rounded-md bg-zinc-900 px-3.5 py-2 text-xs font-medium text-white transition-colors hover:bg-zinc-800 whitespace-nowrap"
                  >
                    <span>네이버 지도</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                  <a
                    href={STORE_INFO.googleMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[38px] items-center gap-1.5 rounded-md border border-zinc-300 bg-white px-3.5 py-2 text-xs font-medium text-zinc-900 transition-colors hover:bg-zinc-50 whitespace-nowrap"
                  >
                    <span>구글 맵</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
