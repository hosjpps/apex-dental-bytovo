export interface Doctor {
  id: string;
  name: string;
  position: string;
  specialization: string;
  education: string;
  experience: string;
  courses?: string[];
  photo: string;
  initials: string;
}

export const doctors: Doctor[] = [
  {
    id: 'balabanova',
    name: 'Балабанова Светлана Николаевна',
    position: 'Главный врач',
    specialization: 'Терапевт, хирург, пародонтолог',
    education: 'СПбГМУ им. И.П. Павлова',
    experience: '20+ лет',
    courses: [
      'ЦНИИС — эндодонтия',
      'Ортодонтия Г.Б. Шторина (СПб)',
      'Vector-терапия',
    ],
    photo: '/images/doctors/balabanova.jpg',
    initials: 'СБ',
  },
  {
    id: 'rylik',
    name: 'Рылик Анжела Юрьевна',
    position: 'Врач высшей категории',
    specialization: 'Терапевт, хирург, детский стоматолог',
    education: 'Киевский мединститут им. Богомольца',
    experience: '37 лет',
    photo: '/images/doctors/rylik.jpg',
    initials: 'РА',
  },
  {
    id: 'shkabrika',
    name: 'Шкабрика Валентина Андреевна',
    position: 'Врач-ортодонт',
    specialization: 'Ортодонтия',
    education: 'МГМСУ им. А.И. Евдокимова',
    experience: '9 лет',
    photo: '/images/doctors/shkabrika.jpg',
    initials: 'ШВ',
  },
  {
    id: 'andreychuk',
    name: 'Андрейчук Сергей Владиславович',
    position: 'Стоматолог-хирург-имплантолог',
    specialization: 'Хирургия, имплантология, ЧЛХ',
    education: 'МГМСУ + ЦНИИС и ЧЛХ',
    experience: '',
    photo: '/images/doctors/andreychuk.jpg',
    initials: 'АС',
  },
  {
    id: 'vafaev',
    name: 'Вафаев Бекзод Сухробович',
    position: 'Врач высшей категории, к.м.н.',
    specialization: 'Ортопед, хирург-имплантолог',
    education: 'СПбГМПУ',
    experience: '10+ лет',
    courses: [
      'All-on-4 / All-on-6',
      'Автор научных публикаций',
    ],
    photo: '/images/doctors/vafaev.jpg',
    initials: 'ВБ',
  },
  {
    id: 'darsigov',
    name: 'Дарсигов Руслан Нуретдинович',
    position: 'Стоматолог-хирург-имплантолог',
    specialization: 'Хирургия, имплантология',
    education: 'Первый МГМУ им. Сеченова',
    experience: '7 лет',
    photo: '/images/doctors/darsigov.jpg',
    initials: 'ДР',
  },
  {
    id: 'shitova',
    name: 'Шитова Татьяна Валерьевна',
    position: 'Стоматолог-терапевт',
    specialization: 'Терапевт, хирург, детский стоматолог',
    education: 'СГМУ',
    experience: '20+ лет',
    // Фото отсутствует в открытых источниках — запросить у клиники
    photo: '/images/doctors/shitova.jpg',
    initials: 'ШТ',
  },
];
