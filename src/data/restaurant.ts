export interface MenuPhoto {
  src: string;
  alt: string;
  caption: string;
}

export interface FeaturedMenuItem {
  id: string;
  name: string;
  category: '세트·찌개' | '마요 덮밥' | '직화·특선';
  price: string;
  description: string;
  note?: string;
  photos: MenuPhoto[];
}

export interface MenuPriceRow {
  name: string;
  price: string;
  description: string;
  featuredId?: string;
}

export interface MenuPriceCategory {
  id: string;
  title: string;
  subtitle: string;
  items: MenuPriceRow[];
}

export const STORE_INFO = {
  brandName: '밥은화',
  fullName: '밥은화 전남순천대점',
  district: '전라남도 순천시 석현동 · 순천대 인근',
  address: '전라남도 순천시 삼산2길 48, 1층',
  jibunAddress: '전라남도 순천시 석현동 78-21',
  phone: '061-752-7404',
  hours: '매일 운영 · 20:00 마감',
  hoursNote: '대학가 상권 특성상 방학·주말에는 영업시간이 유동적일 수 있습니다.',
  seatingNote: '1인석 구비 · 혼밥 및 포장 이용 가능',
  heroImage: '/src/assets/images/hero_babeunhwa_set_1795762783467.jpg',
  naverMapUrl:
    'https://map.naver.com/p/search/%EB%B0%A5%EC%9D%80%ED%99%94%20%EC%A0%84%EB%82%A8%EC%88%9C%EC%B2%9C%EB%8C%80%EC%A0%90',
  googleMapUrl:
    'https://www.google.com/maps/search/?api=1&query=%EC%A0%84%EB%9D%BC%EB%82%A8%EB%8F%84+%EC%88%9C%EC%B2%9C%EC%8B%9C+%EC%82%BC%EC%82%B02%EA%B8%B8+48+%EB%B0%A5%EC%9D%80%ED%99%94',
  naverReviewWriteUrl: 'https://m.place.naver.com/my/checkin',
  naverPlaceReviewUrl:
    'https://m.place.naver.com/restaurant/list?query=%EB%B0%A5%EC%9D%80%ED%99%94%20%EC%A0%84%EB%82%A8%EC%88%9C%EC%B2%9C%EB%8C%80%EC%A0%90',
};

export const FEATURED_MENUS: FeaturedMenuItem[] = [
  {
    id: 'kimchi-set',
    name: '덮밥 + 반그릇 김치찌개 SET',
    category: '세트·찌개',
    price: '8,500원 ~ 12,500원',
    description:
      '원하는 직화·마요 덮밥에 뚝배기에 보글보글 끓여 나오는 반그릇 김치찌개를 곁들이는 밥은화의 대표 인기 조합입니다.',
    note: '단골 추천 세트',
    photos: [
      {
        src: '/src/assets/images/kimchi_jjigae_pot_1795762787019.jpg',
        alt: '덮밥과 반그릇 김치찌개 세트 상차림',
        caption: '한 상 차림 · 덮밥과 뚝배기 찌개',
      },
      {
        src: '/src/assets/images/kimchi_jjigae_detail_1795762788007.jpg',
        alt: '뚝배기 반그릇 김치찌개 근접 사진',
        caption: '얼큰한 묵은지 · 두부 뚝배기',
      },
      {
        src: '/src/assets/images/hero_babeunhwa_set_1795762783467.jpg',
        alt: '돼지숙주덮밥과 김치찌개 세트 테이블',
        caption: '직화 덮밥 세트 구성 예시',
      },
    ],
  },
  {
    id: 'pork-sprout',
    name: '돼지숙주덮밥',
    category: '직화·특선',
    price: '6,500원',
    description:
      '센 불에 직화로 구워 불향이 배어든 돼지고기와 아삭한 숙주를 특제 간장 타레 소스와 함께 넉넉하게 올렸습니다.',
    note: '직화 대표 메뉴',
    photos: [
      {
        src: '/src/assets/images/pork_sprout_bowl_1795762785953.jpg',
        alt: '불향 가득한 돼지숙주덮밥 전체 사진',
        caption: '전체 구성 · 노른자와 직화 돼지고기',
      },
      {
        src: '/src/assets/images/pork_sprout_detail_1795762786566.jpg',
        alt: '직화 돼지숙주덮밥 클로즈업',
        caption: '불향 가득 구운 고기와 아삭한 숙주',
      },
    ],
  },
  {
    id: 'spam-mayo',
    name: '스팸마요덮밥',
    category: '마요 덮밥',
    price: '5,500원',
    description:
      '노릇하게 구운 스팸 큐브, 포슬포슬한 스크램블 에그, 달콤짭짤한 데리야끼 소스와 마요네즈가 어우러진 든든한 기본기 메뉴입니다.',
    note: '가성비 베스트',
    photos: [
      {
        src: '/src/assets/images/spam_mayo_bowl_1795762783583.jpg',
        alt: '스팸마요덮밥 정면 사진',
        caption: '노릇한 스팸과 에그 스크램블',
      },
      {
        src: '/src/assets/images/spam_mayo_detail_1795762783486.jpg',
        alt: '스팸마요덮밥 한 숟가락 클로즈업',
        caption: '소스가 배어든 촉촉한 한 숟가락',
      },
    ],
  },
  {
    id: 'chicken-mayo',
    name: '치킨마요덮밥',
    category: '마요 덮밥',
    price: '6,000원',
    description:
      '바삭하게 튀겨낸 순살 치킨에 감칠맛 도는 간장 소스와 마요네즈, 김가루를 듬뿍 얹어 남녀노소 부담 없이 즐기기 좋습니다.',
    photos: [
      {
        src: '/src/assets/images/chicken_mayo_bowl_1795762784034.jpg',
        alt: '치킨마요덮밥 그릇 전체 사진',
        caption: '바삭한 치킨 가라아게 토핑',
      },
      {
        src: '/src/assets/images/chicken_mayo_detail_1795762785758.jpg',
        alt: '치킨마요덮밥과 장국 단무지 한 상',
        caption: '장국·단무지와 함께 나오는 식사 트레이',
      },
    ],
  },
  {
    id: 'mazesoba',
    name: '마제소바',
    category: '직화·특선',
    price: '7,000원',
    description:
      '쫄깃한 중화면 위에 다진 고기 소보로, 부추, 김가루, 다진 마늘과 신선한 노른자를 올려 진하게 비벼 먹는 별미 비빔면입니다.',
    photos: [
      {
        src: '/src/assets/images/mazesoba_noodles_1795762787917.jpg',
        alt: '마제소바 비비기 전 토핑 사진',
        caption: '신선한 노른자와 다진 고기 토핑',
      },
      {
        src: '/src/assets/images/mazesoba_mixed_1795762788726.jpg',
        alt: '잘 비벼진 마제소바 면발 클로즈업',
        caption: '소스와 노른자가 감긴 쫄깃한 면발',
      },
    ],
  },
  {
    id: 'mara-beef',
    name: '우삼겹마라덮밥',
    category: '직화·특선',
    price: '9,500원',
    description:
      '고소한 우삼겹을 알싸한 마라 소스와 청경채, 목이버섯과 함께 센 불에 볶아내 중독성 있는 매콤함을 즐길 수 있는 특선 덮밥입니다.',
    photos: [
      {
        src: '/src/assets/images/mara_beef_bowl_1795762789376.jpg',
        alt: '우삼겹마라덮밥 전체 사진',
        caption: '알싸한 마라 향이 배어든 우삼겹',
      },
      {
        src: '/src/assets/images/mara_beef_detail_1795762866286.jpg',
        alt: '우삼겹마라덮밥 젓가락 클로즈업',
        caption: '청경채와 함께 즐기는 매콤한 풍미',
      },
    ],
  },
];

export const FULL_MENU_CATEGORIES: MenuPriceCategory[] = [
  {
    id: 'set',
    title: '세트 메뉴',
    subtitle: '단품 가격에 반그릇 김치찌개를 더해 더욱 든든하게 즐기는 인기 세트',
    items: [
      {
        name: '덮밥 + 반그릇 김치찌개 SET',
        price: '8,500원 ~ 12,500원',
        description: '선택한 덮밥 종류에 따라 가격이 결정되는 밥은화 시그니처 세트',
        featuredId: 'kimchi-set',
      },
    ],
  },
  {
    id: 'mayo-bowl',
    title: '마요 · 클래식 덮밥',
    subtitle: '혼밥하기 좋은 부담 없는 가격대의 인기 마요 덮밥 라인업',
    items: [
      {
        name: '스팸마요덮밥',
        price: '5,500원',
        description: '구운 스팸 큐브 + 에그 스크램블 + 데리야끼 마요 소스',
        featuredId: 'spam-mayo',
      },
      {
        name: '햄마요덮밥 (런천미트)',
        price: '5,500원',
        description: '담백한 런천미트 햄과 부드러운 계란, 마요 소스의 조화',
      },
      {
        name: '참치마요덮밥',
        price: '5,500원',
        description: '고소한 참치마요와 김가루, 계란이 어우러진 클래식 덮밥',
      },
      {
        name: '햄참치마요덮밥',
        price: '5,500원',
        description: '햄과 참치를 동시에 즐길 수 있는 실속 메뉴',
      },
      {
        name: '치킨마요덮밥',
        price: '6,000원',
        description: '바삭한 순살 치킨 튀김과 달콤짭짤한 간장 마요 덮밥',
        featuredId: 'chicken-mayo',
      },
      {
        name: '새우마요덮밥',
        price: '7,000원',
        description: '통통한 새우튀김을 얹어 바삭하고 고소한 마요 덮밥',
      },
    ],
  },
  {
    id: 'flame-special',
    title: '직화 · 특선 덮밥 & 면',
    subtitle: '센 불에 빠르게 볶아 불향을 입힌 직화 덮밥과 비빔면',
    items: [
      {
        name: '돼지숙주덮밥',
        price: '6,500원',
        description: '직화 구이 돼지고기와 아삭한 숙주나물을 올린 대표 덮밥',
        featuredId: 'pork-sprout',
      },
      {
        name: '간장제육덮밥',
        price: '6,500원',
        description: '달콤짭짤한 특제 간장 양념으로 볶아낸 불향 제육 덮밥',
      },
      {
        name: '매콤제육덮밥',
        price: '7,000원',
        description: '입맛을 돋우는 깔끔하게 매운 직화 제육 덮밥',
      },
      {
        name: '매콤돼지숙주덮밥',
        price: '7,000원',
        description: '매콤한 돼지고기 볶음과 아삭한 숙주의 조화',
      },
      {
        name: '쭈꾸미숙주덮밥',
        price: '7,000원',
        description: '탱글한 쭈꾸미와 숙주를 불향 나게 볶아낸 매콤한 덮밥',
      },
      {
        name: '일본식 민찌카레',
        price: '7,000원',
        description: '다진 고기를 듬뿍 넣어 진하게 끓인 일본식 카레 덮밥',
      },
      {
        name: '마제소바',
        price: '7,000원',
        description: '고기 소보로, 부추, 노른자를 비벼 먹는 일본식 비빔면',
        featuredId: 'mazesoba',
      },
      {
        name: '부추대패삼겹덮밥',
        price: '8,000원',
        description: '고소한 대패삼겹살과 신선한 부추무침을 곁들인 덮밥',
      },
      {
        name: '춘천닭갈비덮밥',
        price: '8,000원',
        description: '매콤달콤한 양념의 닭갈비를 밥 위에 듬뿍 올린 덮밥',
      },
      {
        name: '우삼겹마라덮밥',
        price: '9,500원',
        description: '진한 마라 풍미와 고소한 우삼겹이 어우러진 특선 덮밥',
        featuredId: 'mara-beef',
      },
    ],
  },
  {
    id: 'soup-noodle',
    title: '국물 · 라면 · 우동',
    subtitle: '덮밥과 함께 곁들이거나 단품으로 즐기는 따끈한 국물 메뉴',
    items: [
      {
        name: '계란라면',
        price: '4,000원',
        description: '계란을 풀어 넣어 깔끔하고 든든한 기본 라면',
      },
      {
        name: '숙주라면',
        price: '4,000원',
        description: '아삭한 숙주가 듬뿍 들어가 시원한 국물의 라면',
      },
      {
        name: '유부어묵우동',
        price: '6,000원',
        description: '달큰한 유부와 어묵이 올라간 따뜻한 국물 우동',
      },
      {
        name: '김치찌개 (단품)',
        price: '7,000원',
        description: '잘 익은 김치와 돼지고기, 두부를 뚝배기에 푹 끓인 찌개',
      },
    ],
  },
  {
    id: 'side-drink',
    title: '사이드 · 주류',
    subtitle: '한 끼를 더욱 풍성하게 채워주는 바삭한 사이드와 가벼운 한 잔',
    items: [
      {
        name: '해쉬브라운',
        price: '1,500원',
        description: '겉바속촉 고소한 감자 해쉬브라운',
      },
      {
        name: '치킨까스',
        price: '3,000원',
        description: '덮밥에 추가하기 좋은 바삭한 치킨까스',
      },
      {
        name: '닭껍질 교자',
        price: '3,000원',
        description: '쫄깃하고 바삭한 식감의 인기 사이드 교자',
      },
      {
        name: '새우튀김',
        price: '4,000원',
        description: '고소하고 바삭하게 튀겨낸 통새우 튀김',
      },
      {
        name: '납작당면만두',
        price: '4,000원',
        description: '매콤한 메뉴와 궁합이 좋은 바삭한 납작당면만두',
      },
      {
        name: '산토리 하이볼',
        price: '4,000원',
        description: '식사와 가볍게 곁들이기 좋은 청량한 하이볼',
      },
    ],
  },
];
