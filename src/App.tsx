/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LocationSection } from './components/LocationSection';
import { MenuShowcase, type CategoryFilter } from './components/MenuShowcase';
import { PriceTable } from './components/PriceTable';
import { ReviewEventSection } from './components/ReviewEventSection';

export default function App() {
  const [menuCategory, setMenuCategory] = useState<CategoryFilter>('전체');

  const handleViewDishPhoto = (featuredId: string) => {
    setMenuCategory('전체');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const el = document.getElementById(`dish-${featuredId}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          document.getElementById('menu-showcase')?.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />
      <main>
        <Hero />
        <MenuShowcase
          selectedCategory={menuCategory}
          onSelectCategory={setMenuCategory}
        />
        <PriceTable onViewDishPhoto={handleViewDishPhoto} />
        <ReviewEventSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}
