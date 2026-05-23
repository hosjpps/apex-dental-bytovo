export interface ClinicInfo {
  name: string;
  legalName: string;
  inn: string;
  license: string;
  address: {
    street: string;
    city: string;
    district: string;
    postalCode: string;
    lat: number;
    lng: number;
  };
  phones: { label: string; value: string; display: string }[];
  email: string;
  website: string;
  yclientsUrl: string;
  social: {
    instagram?: string;
    yandexMapsId?: string;
  };
  rating: {
    value: number;
    votes: number;
    reviews: number;
    award?: string;
  };
  metro: { name: string; walkMin: number; walkMeters?: number; line?: string }[];
  bus: { lines: string[]; stop: string };
  founded: number;
  hours: { day: string; open: string; close: string }[];
  features: string[];
  promos: string[];
}

export const clinic: ClinicInfo = {
  name: 'АПЕКС',
  legalName: 'ООО «ИМПЕРИАЛ»',
  inn: '1187746945352',
  license: 'ЛО-77-01-020937 от 22.12.2020',
  address: {
    street: 'ул. Изюмская, д. 39, корп. 1',
    city: 'Москва',
    district: 'Южное Бутово',
    postalCode: '117645',
    lat: 55.549949,
    lng: 37.569118,
  },
  phones: [
    { label: 'Основной',       value: '+74951572770', display: '+7 (495) 157-27-70' },
    { label: 'Дополнительный', value: '+74954107333', display: '+7 (495) 410-73-33' },
  ],
  email: 'stomapex21@yandex.ru',
  // Существующий старый сайт. При покупке клиентом — заменить на новый домен.
  website: 'https://stomapeks.ru',
  yclientsUrl: 'https://n551917.yclients.com/',
  social: {
    instagram: 'stomapeks21',
    yandexMapsId: '109445100310',
  },
  rating: {
    value: 5.0,
    votes: 281,
    reviews: 227,
    award: 'Хорошее место 2026',
  },
  metro: [
    { name: 'Скобелевская',        walkMin: 11, walkMeters: 950 },
    { name: 'Б. Адмирала Ушакова', walkMin: 22 },
    { name: 'Старокачаловская',     walkMin: 30 },
  ],
  bus: {
    lines: ['С1', 'С53', '146', '636'],
    stop: 'Ул. Новобутовская д. 13',
  },
  founded: 2010,
  hours: [
    { day: 'Пн–Сб', open: '09:00', close: '19:00' },
    { day: 'Вс',    open: '',      close: ''        },
  ],
  features: [
    'Детский кабинет',
    'Пандус / подъёмник',
    'Wi-Fi',
    'Парковка',
    'Рассрочка',
    'Оплата картой / QR / наличные',
  ],
  promos: [
    'Семейная скидка 15%',
    'Рассрочка без переплаты',
    'Кешбэк 5% по Я.Картам',
  ],
};
