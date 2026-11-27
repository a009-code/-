import { ArrowUpRight, MessageSquareText } from 'lucide-react';
import { STORE_INFO } from '../data/restaurant';

const REVIEW_STEPS = [
  {
    step: '01. 영수증 보관 및 방문 인증',
    detail: '식사 후 카운터 또는 키오스크에서 출력된 종이 영수증이나 결제 내역을 준비해 주세요.',
  },
  {
    step: '02. 네이버 리뷰 작성하기',
    detail: '아래 리뷰이벤트 버튼을 눌러 네이버 영수증 리뷰 작성 화면으로 바로 이동합니다.',
  },
  {
    step: '03. 매장 직원에게 확인 요청',
    detail: '작성 완료된 리뷰 화면을 매장 직원에게 보여주시면 진행 중인 혜택 안내를 도와드립니다.',
  },
];

export function ReviewEventSection() {
  return (
    <section id="review-event" className="border-b border-zinc-200 bg-zinc-50 py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="rounded-xl border border-zinc-200 bg-white p-6 sm:p-10">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-sm font-medium text-red-700">네이버 방문자 리뷰 이벤트</p>
              <h2 className="font-display mt-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl text-balance">
                식사 후 따뜻한 리뷰를 남기고 리뷰 이벤트에 참여해 보세요
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                밥은화 전남순천대점을 찾아주신 소중한 후기는 더 맛있는 한 그릇을 만드는 큰 힘이 됩니다.
                버튼을 누르면 별도 검색 없이 네이버 리뷰 작성 페이지로 바로 연결됩니다.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={STORE_INFO.naverReviewWriteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white transition-colors duration-150 hover:bg-red-800 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
                >
                  <MessageSquareText className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>리뷰이벤트 · 네이버 리뷰 작성하기</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </a>

                <a
                  href={STORE_INFO.naverPlaceReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-800 transition-colors duration-150 hover:bg-zinc-50 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
                >
                  <span>네이버 플레이스 리뷰 보기</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-zinc-500" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ol className="divide-y divide-zinc-200 rounded-xl border border-zinc-200 bg-zinc-50">
                {REVIEW_STEPS.map((item) => (
                  <li key={item.step} className="p-4 sm:p-5">
                    <h3 className="text-sm font-bold text-zinc-900">{item.step}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-600">{item.detail}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
