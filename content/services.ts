export interface Service {
  id: string;
  icon: string;       // lucide-react icon name (PascalCase)
  title: string;
  description: string;
  items: string[];    // 3-4 sub-items
  href: string;
  highlight?: boolean; // true = show "Популярно" badge
}

export const services: Service[] = [
  {
    id: 'implantatsiya',
    icon: 'Sparkles',
    title: 'Имплантация',
    description:
      'Восстановление зубов с гарантией. Работаем с пятью брендами: Dentium, Nobel Biocare, Straumann, Alfa Bio, Ot Medical.',
    items: [
      'Имплант + коронка под ключ',
      'All-on-4 / All-on-6',
      'Костная пластика',
      'Синус-лифтинг',
    ],
    href: '/uslugi#implantatsiya',
    highlight: true,
  },
  {
    id: 'ortodontiya',
    icon: 'Smile',
    title: 'Ортодонтия',
    description:
      'Исправление прикуса и выравнивание зубов для взрослых и детей от 12 лет.',
    items: [
      'Металлические брекеты',
      'Керамические брекеты',
      'Элайнеры (капы)',
      'Ретейнеры',
    ],
    href: '/uslugi#ortodontiya',
  },
  {
    id: 'terapiya',
    icon: 'Stethoscope',
    title: 'Терапия',
    description:
      'Лечение кариеса, реставрация, эндодонтия, профессиональная гигиена. Безболезненно с анестезией Ультракаин.',
    items: [
      'Лечение кариеса',
      'Художественная реставрация',
      'Профессиональная чистка',
      'Лечение каналов',
    ],
    href: '/uslugi#terapiya',
  },
  {
    id: 'hirurgiya',
    icon: 'Scissors',
    title: 'Хирургия',
    description:
      'Удаление зубов, атравматичная экстракция «восьмёрок», кистэктомия, альвеолопластика.',
    items: [
      'Простое удаление',
      'Сложное удаление (зубы мудрости)',
      'Кистэктомия',
      'Посттравматическая помощь',
    ],
    href: '/uslugi#hirurgiya',
  },
  {
    id: 'ortopediya',
    icon: 'Crown',
    title: 'Ортопедия',
    description:
      'Коронки, виниры, мосты, протезирование на имплантах. Лаборатория полного цикла.',
    items: [
      'Коронки металлокерамика / цирконий',
      'Виниры керамические',
      'Протезы на имплантах',
      'Вкладки и накладки',
    ],
    href: '/uslugi#ortopediya',
  },
  {
    id: 'detskaya',
    icon: 'Baby',
    title: 'Детская стоматология',
    description:
      'Выделенный детский кабинет. Врачи Рылик А.Ю. и Шитова Т.В. — стаж 37 и 20 лет.',
    items: [
      'Лечение молочных зубов',
      'Герметизация фиссур',
      'Ортодонтические пластины',
      'Профессиональная гигиена детям',
    ],
    href: '/uslugi#detskaya',
  },
];
