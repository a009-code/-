import { useState } from 'react';
import { Camera } from 'lucide-react';
import { FULL_MENU_CATEGORIES } from '../data/restaurant';

interface PriceTableProps {
  onViewDishPhoto: (featuredId: string) => void;
}

export function PriceTable({ onViewDishPhoto }: PriceTableProps) {
  const [activeTab, setActiveTab] = useState<string>('all');

  const visibleCategories =
    activeTab === 'all'
      ? FULL_MENU_CATEGORIES
      : FULL_MENU_CATEGORIES.filter((cat) => cat.id === activeTab);

  const handleScrollToDish = (featuredId: string) => {
    onViewDishPhoto(featuredId);
  };

  return (
    <section id="price-table" className="border-b border-zinc-200 bg-white py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-medium text-red-700">전체 메뉴판 및 가격표</p>
            <h2 className="font-display mt-1.5 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
              밥은화 전남순천대점 차림표
            </h2>
            <p className="mt-2 text-sm text-zinc-600">
              모든 덮밥과 국물 메뉴, 사이드 가격을 한눈에 확인하실 수 있습니다. (매장 사정에 따라 일부
              메뉴 및 가격은 변동될 수 있습니다.)
            </p>
          </div>

          <div
            role="tablist"
            aria-label="전체 가격표 카테고리"
            className="flex flex-wrap items-center gap-1 rounded-lg border border-zinc-200 bg-zinc-50 p-1"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'all'}
              onClick={() => setActiveTab('all')}
              className={`min-h-[36px] rounded-md px-3.5 py-1.5 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-red-700 ${
                activeTab === 'all'
                  ? 'bg-zinc-900 text-white'
                  : 'text-zinc-600 hover:bg-white hover:text-zinc-900'
              }`}
            >
              전체 보기
            </button>
            {FULL_MENU_CATEGORIES.map((category) => (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={activeTab === category.id}
                onClick={() => setActiveTab(category.id)}
                className={`min-h-[36px] rounded-md px-3.5 py-1.5 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-red-700 ${
                  activeTab === category.id
                    ? 'bg-zinc-900 text-white'
                    : 'text-zinc-600 hover:bg-white hover:text-zinc-900'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-2">
          {visibleCategories.map((category) => (
            <div key={category.id} className="flex flex-col">
              <div className="border-b-2 border-zinc-900 pb-3">
                <h3 className="text-lg font-bold text-zinc-900">{category.title}</h3>
                <p className="mt-1 text-xs text-zinc-500">{category.subtitle}</p>
              </div>

              <ul className="divide-y divide-zinc-200">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-start justify-between gap-4 py-4"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm font-semibold text-zinc-900">{item.name}</span>
                        {item.featuredId && (
                          <button
                            type="button"
                            onClick={() => handleScrollToDish(item.featuredId!)}
                            className="inline-flex items-center gap-1 text-xs font-medium text-red-700 hover:underline underline-offset-4 whitespace-nowrap shrink-0"
                          >
                            <Camera className="h-3.5 w-3.5" aria-hidden="true" />
                            <span>사진 보기</span>
                          </button>
                        )}
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-zinc-500">
                        {item.description}
                      </p>
                    </div>
                    <span className="shrink-0 text-sm font-bold text-zinc-900 tabular-nums">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
