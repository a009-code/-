import { useState } from 'react';
import { ChevronLeft, ChevronRight, UtensilsCrossed, X } from 'lucide-react';
import { FEATURED_MENUS, type FeaturedMenuItem } from '../data/restaurant';

export type CategoryFilter = '전체' | '세트·찌개' | '마요 덮밥' | '직화·특선';

const FILTER_TABS: CategoryFilter[] = ['전체', '세트·찌개', '마요 덮밥', '직화·특선'];

interface MenuPhotoCardProps {
  item: FeaturedMenuItem;
  onOpenModal: (item: FeaturedMenuItem, activeIndex: number) => void;
}

function MenuPhotoCard({ item, onOpenModal }: MenuPhotoCardProps) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [failedSrcs, setFailedSrcs] = useState<Record<string, boolean>>({});

  const totalPhotos = item.photos.length;
  const hasMultiplePhotos = totalPhotos > 1;
  const currentPhoto = item.photos[photoIndex] ?? item.photos[0];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPhotoIndex((prev) => (prev - 1 + totalPhotos) % totalPhotos);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPhotoIndex((prev) => (prev + 1) % totalPhotos);
  };

  return (
    <article
      id={`dish-${item.id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white transition-shadow duration-150 hover:shadow-md"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
        {!failedSrcs[currentPhoto.src] ? (
          <button
            type="button"
            onClick={() => onOpenModal(item, photoIndex)}
            className="block h-full w-full cursor-zoom-in focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-red-700"
            aria-label={`${item.name} 사진 크게 보기 (${photoIndex + 1}/${totalPhotos})`}
          >
            <img
              src={currentPhoto.src}
              alt={currentPhoto.alt}
              referrerPolicy="no-referrer"
              onError={() =>
                setFailedSrcs((prev) => ({
                  ...prev,
                  [currentPhoto.src]: true,
                }))
              }
              className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </button>
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-zinc-100 to-zinc-200 p-6 text-center text-zinc-600">
            <UtensilsCrossed className="h-7 w-7 text-zinc-400" aria-hidden="true" />
            <span className="text-sm font-medium">{item.name}</span>
          </div>
        )}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

        {hasMultiplePhotos && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              aria-label={`${item.name} 이전 사진`}
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow-sm transition-all duration-150 hover:bg-white hover:scale-105 focus-visible:outline-2 focus-visible:outline-red-700"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label={`${item.name} 다음 사진`}
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow-sm transition-all duration-150 hover:bg-white hover:scale-105 focus-visible:outline-2 focus-visible:outline-red-700"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </>
        )}

        <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2">
          <span className="truncate text-xs font-medium text-white/95">
            {currentPhoto.caption}
          </span>

          {hasMultiplePhotos && (
            <div className="flex items-center gap-2 shrink-0">
              <div className="flex items-center gap-1" role="tablist" aria-label="사진 선택">
                {item.photos.map((photo, idx) => (
                  <button
                    key={photo.src}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setPhotoIndex(idx);
                    }}
                    aria-label={`${idx + 1}번째 사진 보기`}
                    aria-selected={idx === photoIndex}
                    className={`h-1.5 rounded-full transition-all duration-150 ${
                      idx === photoIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/55 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs font-semibold text-white tabular-nums">
                {photoIndex + 1} / {totalPhotos}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
            <span>{item.category}</span>
            {item.note && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-red-700">{item.note}</span>
              </>
            )}
          </div>

          <h3 className="mt-1.5 text-lg font-bold tracking-tight text-zinc-900">{item.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">{item.description}</p>
        </div>

        <div className="mt-5 flex items-baseline justify-between border-t border-zinc-100 pt-4">
          <span className="text-xs text-zinc-500">매장 식사 · 포장</span>
          <span className="text-base font-bold text-zinc-900 tabular-nums">{item.price}</span>
        </div>
      </div>
    </article>
  );
}

interface MenuShowcaseProps {
  selectedCategory: CategoryFilter;
  onSelectCategory: (category: CategoryFilter) => void;
}

export function MenuShowcase({ selectedCategory, onSelectCategory }: MenuShowcaseProps) {
  const [modalState, setModalState] = useState<{
    item: FeaturedMenuItem;
    index: number;
  } | null>(null);

  const visibleMenus =
    selectedCategory === '전체'
      ? FEATURED_MENUS
      : FEATURED_MENUS.filter((item) => item.category === selectedCategory);

  const handleModalPrev = () => {
    if (!modalState) return;
    const total = modalState.item.photos.length;
    setModalState({
      ...modalState,
      index: (modalState.index - 1 + total) % total,
    });
  };

  const handleModalNext = () => {
    if (!modalState) return;
    const total = modalState.item.photos.length;
    setModalState({
      ...modalState,
      index: (modalState.index + 1) % total,
    });
  };

  return (
    <section id="menu-showcase" className="border-b border-zinc-200 bg-zinc-50 py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium text-red-700">대표 메뉴 및 사진</p>
            <h2 className="font-display mt-1.5 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
              한 그릇의 정직한 맛, 사진으로 먼저 확인하세요
            </h2>
            <p className="mt-2 text-sm text-zinc-600">
              메뉴 사진 좌우의 화살표 버튼을 누르면 다른 각도와 상세 사진을 넘겨보실 수 있습니다.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="대표 메뉴 분류"
            className="inline-flex w-fit items-center gap-1 rounded-lg border border-zinc-200 bg-white p-1"
          >
            {FILTER_TABS.map((tab) => {
              const active = selectedCategory === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => onSelectCategory(tab)}
                  className={`min-h-[36px] rounded-md px-3.5 py-1.5 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-red-700 ${
                    active
                      ? 'bg-zinc-900 text-white'
                      : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visibleMenus.map((item) => (
            <MenuPhotoCard
              key={item.id}
              item={item}
              onOpenModal={(targetItem, activeIndex) =>
                setModalState({ item: targetItem, index: activeIndex })
              }
            />
          ))}
        </div>
      </div>

      {modalState && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${modalState.item.name} 사진 상세 보기`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-xs"
          onClick={() => setModalState(null)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-3.5">
              <div>
                <h3 className="text-base font-bold text-zinc-900">{modalState.item.name}</h3>
                <p className="text-xs text-zinc-500">
                  {modalState.item.photos[modalState.index].caption} ·{' '}
                  <span className="tabular-nums">
                    {modalState.index + 1} / {modalState.item.photos.length}
                  </span>
                </p>
              </div>
              <button
                type="button"
                onClick={() => setModalState(null)}
                aria-label="사진 닫기"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-2 focus-visible:outline-red-700"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="relative aspect-[4/3] w-full bg-zinc-100">
              <img
                src={modalState.item.photos[modalState.index].src}
                alt={modalState.item.photos[modalState.index].alt}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />

              {modalState.item.photos.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handleModalPrev}
                    aria-label="이전 사진"
                    className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow-md transition-transform hover:scale-105 hover:bg-white focus-visible:outline-2 focus-visible:outline-red-700"
                  >
                    <ChevronLeft className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={handleModalNext}
                    aria-label="다음 사진"
                    className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow-md transition-transform hover:scale-105 hover:bg-white focus-visible:outline-2 focus-visible:outline-red-700"
                  >
                    <ChevronRight className="h-6 w-6" aria-hidden="true" />
                  </button>
                </>
              )}
            </div>

            <div className="flex items-center justify-between gap-4 px-5 py-4">
              <p className="text-sm text-zinc-600">{modalState.item.description}</p>
              <span className="shrink-0 text-base font-bold text-zinc-900 tabular-nums">
                {modalState.item.price}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
