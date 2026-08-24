import React, { useState } from 'react';
import { ArrowUpRight, Menu, X, MapPin, Phone, Send, Sun, Moon, Globe } from 'lucide-react';

const Instagram = ({ size = 16, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

// Hero background videos sequence
const heroVideos = [
  "https://assets.mixkit.co/videos/preview/mixkit-modern-architecture-building-4231-large.mp4",
  "https://assets.mixkit.co/videos/preview/mixkit-living-room-of-a-modern-house-41584-large.mp4",
  "https://assets.mixkit.co/videos/preview/mixkit-architectural-model-of-a-building-41585-large.mp4"
];

// Translation Dictionary (UZ -> RU -> EN)
const content = {
  uz: {
    nav: {
      philosophy: 'Falsafa',
      services: 'Xizmatlar',
      process: 'Jarayon',
      works: 'Loyihalar',
      contact: 'Aloqa',
    },
    hero: {
      eyebrow: 'Arxitektura amaliyoti — 2020-yildan',
      h1_1: 'Loyiha — bu',
      h1_2: 'fikrning',
      h1_3: 'moddiylashuvi.',
      desc: 'Biz har bir detalni — joylashuv, buyurtmachi, material va yorug‘likni hurmat qiladigan bino hamda interyerlarni loyihalashtiramiz.',
      btnServices: 'Xizmatlarimiz',
      btnProjects: 'Loyihalarni ko‘rish →',
    },
    metrics: {
      yearsNum: '6',
      yearsLabel: 'Yillik tajriba',
      projectsNum: '100+',
      projectsLabel: 'Muvaffaqiyatli loyihalar',
      accuracyNum: '100%',
      accuracyLabel: 'Aniq muhandislik',
      hqNum: 'Toshkent',
      hqLabel: 'Bosh qarorgoh',
    },
    disciplines: {
      eyebrow: 'Asosiy Yo‘nalishlar',
      d1Title: 'Turar-joy arxitekturasi',
      d1Desc: 'Tabiiy yorug‘lik va uzoq umr ko‘rishga moslashtirilgan shaxsiy villalar hamda rezidensiyalar.',
      d2Title: 'Loyihaviy reja',
      d2Desc: 'Passiv iqlim nazorati va zamonaviy materiallar bilan loyihalashtirilgan biznes markazlari va fazoviy yechimlar.',
      d3Title: 'Interyer va fazoviy dizayn',
      d3Desc: 'Materiallar sofligi, akustika va yog‘och unsurlarga ega minimalist interyerlar.',
    },
    philosophy: {
      eyebrow: 'Falsafa',
      title: 'Fazo va shakl uyg‘unligi.',
      desc: 'Arxitektura sun’iy bezaklar bilan e’tiborni tortmasligi kerak. Biz aniq geometriya, to‘g‘ri yorug‘lik burchaklari va chidamli materiallarga e’tibor qaratamiz.',
      p1Title: '[01] Materiallar sofligi',
      p1Desc: 'Ochiq beton, shisha, po‘lat va tabiiy yog‘och o‘z holicha go‘zal qarishi uchun qoldiriladi.',
      p2Title: '[02] Hajmiy muvozanat',
      p2Desc: 'Baland shiftlar va ochiq ko‘rinish maydonlarini hisoblash orqali fazoviy erkinlikni yaratish.',
      p3Title: '[03] Quyosh ergonomikasi',
      p3Desc: 'Kun davomida xonalarga tabiiy yorug‘lik tushishini ta’minlaydigan loyihalash.',
    },
    services: {
      eyebrow: 'Xizmatlar',
      title: 'Arxitektura yo‘nalishlari',
      subtitle: 'Loyihalashtirish va mualliflik nazoratining to‘liq sikli',
      items: [
        { num: '01', title: 'Turar-joy arxitekturasi', desc: 'Tabiiy yorug‘lik va muloqot joylashuviga moslashtirilgan shaxsiy villalar hamda rezidensiyalar.' },
        { num: '02', title: 'Tijorat arxitekturasi', desc: 'Passiv iqlim nazorati va zamonaviy materiallar bilan loyihalashtirilgan biznes markazlari va savdo maydonlari.' },
        { num: '03', title: 'Interyer va fazoviy dizayn', desc: 'Materiallar sofligi, akustika va yorug‘lik aksentiga ega minimalist interyerlar.' },
        { num: '04', title: 'Rejalashtirish yechimlari', desc: 'Maydonni unumli tashkil etish, funksional zonalarga ajratish va loyihalash.' },
        { num: '05', title: 'Qayta tiklash va rekonstruksiya', desc: 'Mavjud bino va inshootlarni ehtiyotkorlik bilan tiklash hamda modernizatsiya qilish.' },
        { num: '06', title: 'Landshaft integratsiyasi', desc: 'Beton va po‘lat unsurlarining tabiiy landshaft bilan uyg‘unlashgan ko‘rinishi.' },
      ],
    },
    process: {
      eyebrow: 'Jarayon',
      title: 'Chizmadan Inshootgacha',
      items: [
        { phase: '01', title: 'Hudud tahlili', desc: 'Maydonni baholash, quyosh tushish burchagi va loyiha talablarini o‘rganish.' },
        { phase: '02', title: 'Konseptni shakllantirish', desc: 'Dastlabki hajmiy va strukturaviy eskizlar, materiallar tanlovi.' },
        { phase: '03', title: 'Sxematik dizayn', desc: 'Aniq 3D vizualizatsiya va xonalar ketma-ketligi rejalari.' },
        { phase: '04', title: 'Texnik chizmalar', desc: 'To‘liq qurilish hujjatlari va muhandislik hisob-kitoblari.' },
        { phase: '05', title: 'Qurilish nazorati', desc: 'Obyektdagi qurilish jarayoni va sifat ustidan mualliflik nazorati.' },
        { phase: '06', title: 'Topshirish va foydalanish', desc: 'Yakuniy arxitektura ko‘rigi va obyektni foydalanishga topshirish.' },
      ],
    },
    works: {
      eyebrow: 'Loyihalar',
      title: 'Saralangan Loyihalar',
      filters: { all: 'Barchasi', residential: 'Turar-joy', commercial: 'Tijorat', public: 'Jamoat' },
      viewSpecs: 'Spetsifikatsiyani ko‘rish',
      projects: [
        { id: 1, num: 'P-01', title: 'Minimalist Beton Villa', category: 'Residential', location: 'Toshkent, UZ', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80', description: 'Issiq yog‘och akustik panellari bilan uyg‘unlashgan beton geometriya.' },
        { id: 2, num: 'P-02', title: 'Markaziy Biznes Kompleksi', category: 'Commercial', location: 'Toshkent, UZ', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80', description: 'Passiv sovutish tizimiga ega yuqori texnologiyali oyna fasad.' },
        { id: 3, num: 'P-03', title: 'Shisha va Po‘lat Pavilyon', category: 'Residential', location: 'Tog‘ bag‘ri', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80', description: 'Tabiat manzarasi bilan 360 darajada uyg‘unlashgan shisha bino.' },
        { id: 4, num: 'P-04', title: 'Zamonaviy Madaniyat Markazi', category: 'Public', location: 'Shahar markazi', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80', description: 'Ko‘rgazmalar va me’moriy uchrashuvlar uchun mo‘ljallangan jamoat binosi.' },
      ]
    },
    quote: {
      eyebrow: 'Aestetik tamoyil',
      text: '"Arxitektura — bu yorug‘lik ostida to‘plangan shakllarning mukammal va mo‘jizaviy o‘yinidir."',
      author: 'samandar_arxitector',
    },
    contact: {
      eyebrow: 'Aloqa',
      title: 'Loyiha muhokamasini boshlang.',
      desc: 'Toshkent va xalqaro miqyosda villalar, tijorat bino loyihalari va shaharsozlik konsultatsiyasi uchun ochiqman.',
      location: 'Toshkent, O‘zbekiston',
    },
    footer: {
      rights: 'Barcha huquqlar himoyalangan.',
    }
  },
  ru: {
    nav: {
      philosophy: 'Философия',
      services: 'Услуги',
      process: 'Процесс',
      works: 'Проекты',
      contact: 'Контакты',
    },
    hero: {
      eyebrow: 'Архитектурная практика — с 2020 года',
      h1_1: 'Пространство —',
      h1_2: 'воплощенная',
      h1_3: 'мысль.',
      desc: 'Мы проектируем здания и интерьеры, учитывающие особенности участка, клиента, материалов и света. Архитектура как практика глубокого внимания.',
      btnServices: 'Наши Услуги',
      btnProjects: 'Смотреть Проекты →',
    },
    metrics: {
      yearsNum: '6',
      yearsLabel: 'Лет практики',
      projectsNum: '100+',
      projectsLabel: 'Реализованных проектов',
      accuracyNum: '100%',
      accuracyLabel: 'Точность расчетов',
      hqNum: 'Ташкент',
      hqLabel: 'Главный офис',
    },
    disciplines: {
      eyebrow: 'Основные Направления',
      d1Title: 'Жилая Архитектура',
      d1Desc: 'Частные виллы и резиденции, спроектированные с учетом ландшафта и естественного света.',
      d2Title: 'планировочное решение',
      d2Desc: 'Грамотная организация внутреннего пространства и оптимизация каждого квадратного метра.',
      d3Title: 'Интерьерный Дизайн',
      d3Desc: 'Минималистичные интерьеры с акустической проработкой, натуральным деревом и камнем.',
    },
    philosophy: {
      eyebrow: 'Философия',
      title: 'Создание пространства через лаконичность.',
      desc: 'Архитектура не должна привлекать внимание искусственным декором. Мы фокусируемся на чистой геометрии, естественном освещении и долговечных материалах.',
      p1Title: '[01] Честность материалов',
      p1Desc: 'Открытый бетон, стекло, сталь и натуральное дерево оставлены в первозданном виде.',
      p2Title: '[02] Объёмный баланс',
      p2Desc: 'Расчет высоких потолков и открытых перспектив для максимального ощущения свободы.',
      p3Title: '[03] Солнечная эргономика',
      p3Desc: 'Проектирование планировок для оптимального естественного освещения в течение дня.',
    },
    services: {
      eyebrow: 'Услуги',
      title: 'Архитектурные дисциплины',
      subtitle: 'Полный цикл архитектурного проектирования и контроля',
      items: [
        { num: '01', title: 'Жилая архитектура', desc: 'Частные виллы и резиденции, спроектированные с учетом ландшафта и естественного света.' },
        { num: '02', title: 'Коммерческая архитектура', desc: 'Высокотехнологичные офисные центры, торговые пространства и корпоративные здания.' },
        { num: '03', title: 'Интерьерный и пространственный дизайн', desc: 'Минималистичная интерьерная архитектура с акцентом на честность материалов и акустику.' },
        { num: '04', title: 'Планировочные решения', desc: 'Продуманная организация пространства, разработка планировочных решений и зонирование.' },
        { num: '05', title: 'Реконструкция и реставрация', desc: 'Бережное восстановление и модернизация существующих строений.' },
        { num: '06', title: 'Ландшафтная интеграция', desc: 'Гармоничное сочетание бетона и стали с натуральным ландшафтом.' },
      ],
    },
    process: {
      eyebrow: 'Процесс',
      title: 'От чертежа к зданию',
      items: [
        { phase: '01', title: 'Анализ участка', desc: 'Оценка территории, инсоляции, зонирования и задач клиента.' },
        { phase: '02', title: 'Формирование концепции', desc: 'Объёмно-пространственные исследования, эскизы и подбор материалов.' },
        { phase: '03', title: 'Эскизный проект', desc: 'Детальные 3D-визуализации, планировочные решения и чертежи.' },
        { phase: '04', title: 'Рабочая документация', desc: 'Полный комплект строительных чертежей и инженерных расчетов.' },
        { phase: '05', title: 'Авторский надзор', desc: 'Контроль качества строительства и соответствия проекту на объекте.' },
        { phase: '06', title: 'Сдача объекта', desc: 'Финальная валидация архитектурных решений и ввод в эксплуатацию.' },
      ],
    },
    works: {
      eyebrow: 'Проекты',
      title: 'Избранные Проекты',
      filters: { all: 'Все', residential: 'Жилые', commercial: 'Коммерческие', public: 'Общественные' },
      viewSpecs: 'Смотреть спецификацию',
      projects: [
        { id: 1, num: 'P-01', title: 'Минималистичная Бетонная Вилла', category: 'Residential', location: 'Ташкент, UZ', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80', description: 'Строгая геометрия бетона в сочетании с теплыми деревянными панелями.' },
        { id: 2, num: 'P-02', title: 'Центральный Бизнес Комплекс', category: 'Commercial', location: 'Ташкент, UZ', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80', description: 'Стеклянный фасад с интегрированными системами пассивного охлаждения.' },
        { id: 3, num: 'P-03', title: 'Павильон из Стекла и Стали', category: 'Residential', location: 'Горный район', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80', description: 'Панорамный стеклянный объем с видом 360 градусов на природный ландшафт.' },
        { id: 4, num: 'P-04', title: 'Современный Культурный Центр', category: 'Public', location: 'Городской центр', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80', description: 'Общественное пространство для проведения выставок и архитектурных встреч.' },
      ]
    },
    quote: {
      eyebrow: 'Эстетический принцип',
      text: '"Архитектура — это искусно, правильно и величественно сыгранная игра объемов, освещенных солнцем."',
      author: 'samandar_arxitector',
    },
    contact: {
      eyebrow: 'Контакты',
      title: 'Обсудить Ваш Проект.',
      desc: 'Доступен для консультаций по виллам, коммерческим объектам и планировочным решениям в Ташкенте и за рубежом.',
      location: 'Ташкент, Узбекистан',
    },
    footer: {
      rights: 'Все права защищены.',
    }
  },
  en: {
    nav: {
      philosophy: 'Philosophy',
      services: 'Services',
      process: 'Process',
      works: 'Works',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Architectural Practice — Est. 2020',
      h1_1: 'Space is',
      h1_2: 'thought',
      h1_3: 'made real.',
      desc: 'We design buildings and interiors that respect the particular — the site, the client, the material, the light. Architecture as a practice of close attention.',
      btnServices: 'Our Services',
      btnProjects: 'View Projects →',
    },
    metrics: {
      yearsNum: '6',
      yearsLabel: 'Years in Practice',
      projectsNum: '100+',
      projectsLabel: 'Projects Delivered',
      accuracyNum: '100%',
      accuracyLabel: 'Structural Accuracy',
      hqNum: 'Tashkent',
      hqLabel: 'Base Headquarters',
    },
    disciplines: {
      eyebrow: 'Selected Disciplines',
      d1Title: 'Residential Architecture',
      d1Desc: 'Private villas and residences engineered for natural daylight and structural longevity.',
      d2Title: 'Spatial Layout Planning',
      d2Desc: 'High-density spatial layouts designed with passive climate control and modern materials.',
      d3Title: 'Interior Spatial Design',
      d3Desc: 'Acoustically tuned, minimalist interior spaces with exposed timber and raw stone.',
    },
    philosophy: {
      eyebrow: 'Philosophy',
      title: 'Designing space through subtraction.',
      desc: 'Architecture should not demand attention through artificial ornament. We focus on clean geometry, precise lighting angles, durable materials, and natural ergonomics that stand the test of time.',
      p1Title: '[01] Material Honesty',
      p1Desc: 'Exposed concrete, glass, steel, and natural timber left untreated to age gracefully.',
      p2Title: '[02] Volumetric Balance',
      p2Desc: 'Calculating high ceilings and open sightlines to maximize psychological spatial freedom.',
      p3Title: '[03] Solar Ergonomics',
      p3Desc: 'Aligning floorplans to direct natural daylight across key living zones throughout the day.',
    },
    services: {
      eyebrow: 'Services',
      title: 'Architectural Disciplines',
      subtitle: 'Full cycle of architectural design and oversight',
      items: [
        { num: '01', title: 'Residential Architecture', desc: 'Private villas and residences designed with landscape and natural light in mind.' },
        { num: '02', title: 'Commercial Architecture', desc: 'High-tech office centers, retail spaces, and corporate buildings with passive climate control.' },
        { num: '03', title: 'Interior & Spatial Design', desc: 'Minimalist interior architecture focusing on material honesty, lighting, and acoustics.' },
        { num: '04', title: 'Space Planning', desc: 'Thoughtful spatial layout, floor plan optimization, and functional zoning.' },
        { num: '05', title: 'Reconstruction & Restoration', desc: 'Careful restoration, structural strengthening, and modernization of existing buildings.' },
        { num: '06', title: 'Landscape Integration', desc: 'Harmonious integration of concrete, glass, and steel with natural topographies.' },
      ],
    },
    process: {
      eyebrow: 'Process',
      title: 'From Plot to Structure',
      items: [
        { phase: '01', title: 'Discovery & Plot Analysis', desc: 'Site evaluation, zoning verification, solar orientation assessment, and client ambition mapping.' },
        { phase: '02', title: 'Concept Formulation', desc: 'Initial massing studies, structural wireframes, volumetric proportions, and material sampling.' },
        { phase: '03', title: 'Schematic Design', desc: 'Detailed 3D visualizations, precise floorplan layouts, and preliminary engineering specs.' },
        { phase: '04', title: 'Technical Blueprinting', desc: 'Complete construction documentation, structural calculations, and permit compliance drawings.' },
        { phase: '05', title: 'Execution Oversight', desc: 'On-site supervision, craftsman guidance, and rigorous quality check during construction.' },
        { phase: '06', title: 'Handover & Commissioning', desc: 'Final architectural validation, acoustic testing, and spatial commissioning for immediate occupancy.' },
      ],
    },
    works: {
      eyebrow: 'Works',
      title: 'Selected Projects',
      filters: { all: 'All', residential: 'Residential', commercial: 'Commercial', public: 'Public' },
      viewSpecs: 'View Specifications',
      projects: [
        { id: 1, num: 'P-01', title: 'Minimalist Concrete Villa', category: 'Residential', location: 'Tashkent, UZ', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80', description: 'Raw concrete geometry paired with warm timber acoustic panels.' },
        { id: 2, num: 'P-02', title: 'Central Business Plaza', category: 'Commercial', location: 'Tashkent, UZ', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80', description: 'High-performance commercial glass facade integrating passive cooling systems.' },
        { id: 3, num: 'P-03', title: 'Glass & Steel Pavilion', category: 'Residential', location: 'Mountain Suburbs', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80', description: 'Suspended glass enclosure offering 360-degree panoramic landscape integration.' },
        { id: 4, num: 'P-04', title: 'Modern Cultural Center', category: 'Public', location: 'Urban District', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80', description: 'Fluid public geometry constructed for exhibitions and architectural gatherings.' },
      ]
    },
    quote: {
      eyebrow: 'Aesthetic Principle',
      text: '"Architecture is the learned game, correct and magnificent, of forms assembled in the light."',
      author: 'samandar_arxitector',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Initiate a Spatial Project.',
      desc: 'Available for residential villa consultations, commercial architectural planning, and site development in Tashkent and internationally.',
      location: 'Tashkent, Uzbekistan',
    },
    footer: {
      rights: 'All rights reserved.',
    }
  }
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState('uz');
  const heroVideos = [
    "/videos/vid1.mp4",
    "/videos/vid2.mp4",
    "/videos/vid3.mp4",
    "/videos/vid4.mp4"  
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);


  const t = content[lang];

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % heroVideos.length);
  };

  const filterCategoryMap = {
    All: 'All',
    [t.works.filters.residential]: 'Residential',
    [t.works.filters.commercial]: 'Commercial',
    [t.works.filters.public]: 'Public'
  };

  const filteredProjects = activeFilter === 'All'
    ? t.works.projects
    : t.works.projects.filter(p => p.category === filterCategoryMap[activeFilter] || p.category === activeFilter);

  return (
    <div className={`min-h-screen font-body transition-colors duration-300 selection:bg-[#7A6348] selection:text-white ${darkMode ? 'bg-[#121110] text-[#F4EFE6]' : 'bg-[#F4EFE6] text-[#1A1917]'
      }`}>

      {/* Inject Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,300&family=JetBrains+Mono:wght@400;500&family=Outfit:wght@300;400;500&display=swap');
        .font-display { font-family: 'Fraunces', serif; }
        .font-serif-editorial { font-family: 'Fraunces', serif; }
        .font-mono-code { font-family: 'JetBrains Mono', monospace; }
        .font-body { font-family: 'Outfit', sans-serif; }
        .font-sans-body { font-family: 'Outfit', sans-serif; }
      `}</style>

      {/* Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${darkMode
        ? 'bg-[#121110]/90 border-[#F4EFE6]/15'
        : 'bg-[#F4EFE6]/90 border-[#1A1917]/15'
        }`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="font-display font-medium text-lg tracking-tight uppercase flex items-center gap-2">
            <span className="w-2 h-2 bg-[#7A6348]"></span>
            samandar_arxitector
          </a>

          <nav className={`hidden lg:flex items-center space-x-8 text-xs uppercase tracking-widest font-mono-code ${darkMode ? 'text-[#A09A90]' : 'text-[#666158]'
            }`}>
            <a href="#philosophy" className={`transition-colors ${darkMode ? 'hover:text-[#F4EFE6]' : 'hover:text-[#1A1917]'}`}>{t.nav.philosophy}</a>
            <a href="#services" className={`transition-colors ${darkMode ? 'hover:text-[#F4EFE6]' : 'hover:text-[#1A1917]'}`}>{t.nav.services}</a>
            <a href="#process" className={`transition-colors ${darkMode ? 'hover:text-[#F4EFE6]' : 'hover:text-[#1A1917]'}`}>{t.nav.process}</a>
            <a href="#works" className={`transition-colors ${darkMode ? 'hover:text-[#F4EFE6]' : 'hover:text-[#1A1917]'}`}>{t.nav.works}</a>
            <a href="#contact" className={`transition-colors ${darkMode ? 'hover:text-[#F4EFE6]' : 'hover:text-[#1A1917]'}`}>{t.nav.contact}</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher (UZ -> RU -> EN) */}
            <div className={`flex items-center gap-1 font-mono-code text-xs border px-2 py-1 ${darkMode ? 'border-[#F4EFE6]/20' : 'border-[#1A1917]/20'
              }`}>
              <Globe size={13} className={darkMode ? 'text-[#A09A90]' : 'text-[#666158]'} />
              {['uz', 'ru', 'en'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-1.5 py-0.5 uppercase tracking-wider transition-colors ${lang === l
                    ? darkMode ? 'bg-[#F4EFE6] text-[#121110] font-bold' : 'bg-[#1A1917] text-[#F4EFE6] font-bold'
                    : darkMode ? 'text-[#A09A90] hover:text-[#F4EFE6]' : 'text-[#666158] hover:text-[#1A1917]'
                    }`}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 border transition-colors ${darkMode
                ? 'border-[#F4EFE6]/20 text-[#F4EFE6] hover:bg-[#F4EFE6]/10'
                : 'border-[#1A1917]/20 text-[#1A1917] hover:bg-[#1A1917]/10'
                }`}
              title="Toggle Theme"
            >
              {darkMode ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* Instagram Link */}
            <a
              href="https://www.instagram.com/samandar_arxitektor"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 text-xs font-mono-code uppercase tracking-widest border px-4 py-2 transition-all ${darkMode
                ? 'border-[#F4EFE6]/20 hover:bg-[#F4EFE6] hover:text-[#121110]'
                : 'border-[#1A1917]/20 hover:bg-[#1A1917] hover:text-[#F4EFE6]'
                }`}
            >
              <Instagram size={14} />
              <span>@samandar_arxitector</span>
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 ${darkMode ? 'text-[#F4EFE6]' : 'text-[#1A1917]'}`}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className={`lg:hidden border-b px-6 py-8 space-y-4 font-mono-code text-xs uppercase tracking-widest ${darkMode ? 'bg-[#121110] border-[#F4EFE6]/20' : 'bg-[#F4EFE6] border-[#1A1917]/20'
            }`}>
            <a href="#philosophy" onClick={() => setMobileMenuOpen(false)} className="block py-2">{t.nav.philosophy}</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block py-2">{t.nav.services}</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)} className="block py-2">{t.nav.process}</a>
            <a href="#works" onClick={() => setMobileMenuOpen(false)} className="block py-2">{t.nav.works}</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2">{t.nav.contact}</a>

            <div className="pt-4 flex items-center justify-between border-t border-[#1A1917]/15">
              <div className="flex items-center gap-2">
                {['uz', 'ru', 'en'].map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`px-2 py-1 uppercase border ${lang === l
                      ? darkMode ? 'bg-[#F4EFE6] text-[#121110]' : 'bg-[#1A1917] text-[#F4EFE6]'
                      : 'border-transparent'
                      }`}
                  >
                    {l}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 border ${darkMode ? 'border-[#F4EFE6]/20' : 'border-[#1A1917]/20'}`}
              >
                {darkMode ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </div>

            <a
              href="https://www.instagram.com/samandar_arxitektor"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 border px-4 py-2 mt-4 ${darkMode ? 'border-[#F4EFE6]' : 'border-[#1A1917]'
                }`}
            >
              <Instagram size={14} />
              <span>@samandar_arxitektor</span>
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="min-h-[calc(100vh-80px)] pt-28 pb-16 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          <div className="lg:col-span-7">
            <div className={`font-mono-code text-[11px] tracking-[0.2em] uppercase mb-6 ${darkMode ? 'text-[#C4A482]' : 'text-[#8C7B6B]'
              }`}>
              {t.hero.eyebrow}
            </div>

            <h1 className="font-serif-editorial text-5xl sm:text-6xl lg:text-[76px] leading-[0.98] tracking-tight mb-8 font-normal">
              {t.hero.h1_1} <br />
              <span className="italic font-light">{t.hero.h1_2}</span> <br />
              {t.hero.h1_3}
            </h1>

            <p className={`font-sans-body text-base md:text-lg font-light max-w-xl leading-relaxed mb-10 ${darkMode ? 'text-[#A09A90]' : 'text-[#55514B]'
              }`}>
              {t.hero.desc}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className={`border px-8 py-4 font-mono-code text-[11px] tracking-[0.2em] uppercase transition-all ${darkMode
                  ? 'border-[#F4EFE6] hover:bg-[#F4EFE6] hover:text-[#121110]'
                  : 'border-[#1A1917] hover:bg-[#1A1917] hover:text-[#F4EFE6]'
                  }`}
              >
                {t.hero.btnServices}
              </a>
              <a
                href="#works"
                className={`border px-8 py-4 font-mono-code text-[11px] tracking-[0.2em] uppercase transition-all ${darkMode
                  ? 'border-[#F4EFE6] hover:bg-[#F4EFE6] hover:text-[#121110]'
                  : 'border-[#1A1917] hover:bg-[#1A1917] hover:text-[#F4EFE6]'
                  }`}
              >
                {t.hero.btnProjects}
              </a>
            </div>
          </div>

          {/* Sequential Hero Video Player */}
          <div className="lg:col-span-5 relative">
            <div
              className={`aspect-[4/5] sm:aspect-[3/4] overflow-hidden border relative ${darkMode
                  ? "border-[#F4EFE6]/20 bg-[#181614]"
                  : "border-[#1A1917]/20 bg-[#EFE8DC]"
                }`}
            >
              <video
                key={heroVideos[currentVideoIndex]}
                src={heroVideos[currentVideoIndex]}
                autoPlay
                muted
                playsInline
                controls={false}
                className="w-full h-full object-cover"
                onEnded={() => {
                  setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % heroVideos.length);
                }}
                onError={(e) => {
                  console.log("VIDEO ERROR:", e.currentTarget.error);
                  console.log("VIDEO SRC:", e.currentTarget.src);
                }}
              />

              {/* Video Slide Indicators */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center bg-black/40 backdrop-blur-sm px-3 py-1.5 font-mono-code text-[10px] text-white">
                <span className="uppercase tracking-widest">
                  Video 0{currentVideoIndex + 1} / 0{heroVideos.length}
                </span>

                <div className="flex gap-1.5">
                  {heroVideos.map((_, idx) => (
                    <span
                      key={idx}
                      onClick={() => setCurrentVideoIndex(idx)}
                      className={`h-1 cursor-pointer transition-all ${currentVideoIndex === idx
                          ? "w-4 bg-white"
                          : "w-1.5 bg-white/40"
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disciplines Section */}
      <section id="services" className={`py-24 px-8 sm:px-12 lg:px-24 border-t max-w-7xl mx-auto ${darkMode ? 'border-[#F4EFE6]/15' : 'border-[#1A1917]/15'
        }`}>
        <div className={`font-mono-code text-[11px] tracking-[0.2em] uppercase mb-8 ${darkMode ? 'text-[#C4A482]' : 'text-[#8C7B6B]'
          }`}>
          {t.disciplines.eyebrow}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 font-sans-body">
          <div className={`border-t pt-6 ${darkMode ? 'border-[#F4EFE6]/20' : 'border-[#1A1917]/20'}`}>
            <h3 className="font-serif-editorial text-2xl mb-3">{t.disciplines.d1Title}</h3>
            <p className={`text-sm font-light leading-relaxed ${darkMode ? 'text-[#A09A90]' : 'text-[#55514B]'}`}>{t.disciplines.d1Desc}</p>
          </div>
          <div className={`border-t pt-6 ${darkMode ? 'border-[#F4EFE6]/20' : 'border-[#1A1917]/20'}`}>
            <h3 className="font-serif-editorial text-2xl mb-3">{t.disciplines.d2Title}</h3>
            <p className={`text-sm font-light leading-relaxed ${darkMode ? 'text-[#A09A90]' : 'text-[#55514B]'}`}>{t.disciplines.d2Desc}</p>
          </div>
          <div className={`border-t pt-6 ${darkMode ? 'border-[#F4EFE6]/20' : 'border-[#1A1917]/20'}`}>
            <h3 className="font-serif-editorial text-2xl mb-3">{t.disciplines.d3Title}</h3>
            <p className={`text-sm font-light leading-relaxed ${darkMode ? 'text-[#A09A90]' : 'text-[#55514B]'}`}>{t.disciplines.d3Desc}</p>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className={`border-b border-t ${darkMode ? 'bg-[#181614] border-[#F4EFE6]/15' : 'bg-[#EFE8DC] border-[#1A1917]/15'
        }`}>
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 font-mono-code">
          <div className={`border-l pl-6 ${darkMode ? 'border-[#F4EFE6]/15' : 'border-[#1A1917]/15'}`}>
            <div className="text-3xl md:text-4xl font-display font-light mb-1">{t.metrics.yearsNum}</div>
            <div className={`text-[10px] uppercase tracking-widest ${darkMode ? 'text-[#A09A90]' : 'text-[#666158]'}`}>{t.metrics.yearsLabel}</div>
          </div>
          <div className={`border-l pl-6 ${darkMode ? 'border-[#F4EFE6]/15' : 'border-[#1A1917]/15'}`}>
            <div className="text-3xl md:text-4xl font-display font-light mb-1">{t.metrics.projectsNum}</div>
            <div className={`text-[10px] uppercase tracking-widest ${darkMode ? 'text-[#A09A90]' : 'text-[#666158]'}`}>{t.metrics.projectsLabel}</div>
          </div>
          <div className={`border-l pl-6 ${darkMode ? 'border-[#F4EFE6]/15' : 'border-[#1A1917]/15'}`}>
            <div className="text-3xl md:text-4xl font-display font-light mb-1">{t.metrics.accuracyNum}</div>
            <div className={`text-[10px] uppercase tracking-widest ${darkMode ? 'text-[#A09A90]' : 'text-[#666158]'}`}>{t.metrics.accuracyLabel}</div>
          </div>
          <div className={`border-l pl-6 ${darkMode ? 'border-[#F4EFE6]/15' : 'border-[#1A1917]/15'}`}>
            <div className="text-3xl md:text-4xl font-display font-light mb-1">{t.metrics.hqNum}</div>
            <div className={`text-[10px] uppercase tracking-widest ${darkMode ? 'text-[#A09A90]' : 'text-[#666158]'}`}>{t.metrics.hqLabel}</div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className={`py-24 px-6 max-w-7xl mx-auto border-b ${darkMode ? 'border-[#F4EFE6]/15' : 'border-[#1A1917]/15'
        }`}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className={`font-mono-code text-xs uppercase tracking-widest mb-3 ${darkMode ? 'text-[#C4A482]' : 'text-[#7A6348]'
              }`}>{t.philosophy.eyebrow}</div>
            <h2 className="font-display text-3xl md:text-4xl font-light leading-tight">
              {t.philosophy.title}
            </h2>
          </div>
          <div className="md:col-span-8 space-y-12">
            <p className={`text-lg font-light leading-relaxed ${darkMode ? 'text-[#A09A90]' : 'text-[#666158]'}`}>
              {t.philosophy.desc}
            </p>

            <div className={`grid grid-cols-1 sm:grid-cols-3 gap-8 pt-6 border-t ${darkMode ? 'border-[#F4EFE6]/15' : 'border-[#1A1917]/15'
              }`}>
              <div>
                <div className={`font-mono-code text-xs mb-2 ${darkMode ? 'text-[#C4A482]' : 'text-[#7A6348]'}`}>{t.philosophy.p1Title}</div>
                <p className={`text-sm ${darkMode ? 'text-[#A09A90]' : 'text-[#666158]'}`}>{t.philosophy.p1Desc}</p>
              </div>
              <div>
                <div className={`font-mono-code text-xs mb-2 ${darkMode ? 'text-[#C4A482]' : 'text-[#7A6348]'}`}>{t.philosophy.p2Title}</div>
                <p className={`text-sm ${darkMode ? 'text-[#A09A90]' : 'text-[#666158]'}`}>{t.philosophy.p2Desc}</p>
              </div>
              <div>
                <div className={`font-mono-code text-xs mb-2 ${darkMode ? 'text-[#C4A482]' : 'text-[#7A6348]'}`}>{t.philosophy.p3Title}</div>
                <p className={`text-sm ${darkMode ? 'text-[#A09A90]' : 'text-[#666158]'}`}>{t.philosophy.p3Desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-24 px-6 max-w-7xl mx-auto border-b ${darkMode ? 'border-[#F4EFE6]/15' : 'border-[#1A1917]/15'
        }`}>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className={`font-mono-code text-xs uppercase tracking-widest mb-3 ${darkMode ? 'text-[#C4A482]' : 'text-[#7A6348]'
              }`}>{t.services.eyebrow}</div>
            <h2 className="font-display text-3xl md:text-4xl font-light">{t.services.title}</h2>
          </div>
          <p className={`text-sm font-mono-code ${darkMode ? 'text-[#A09A90]' : 'text-[#666158]'}`}>{t.services.subtitle}</p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l ${darkMode ? 'border-[#F4EFE6]/15' : 'border-[#1A1917]/15'
          }`}>
          {t.services.items.map((s) => (
            <div
              key={s.num}
              className={`p-8 border-r border-b transition-colors group ${darkMode
                ? 'border-[#F4EFE6]/15 bg-[#121110] hover:bg-[#1C1A18]'
                : 'border-[#1A1917]/15 bg-[#F4EFE6] hover:bg-[#EFE8DC]'
                }`}
            >
              <div className={`font-mono-code text-xs mb-6 ${darkMode ? 'text-[#C4A482]' : 'text-[#7A6348]'}`}>{s.num}</div>
              <h3 className="font-display text-xl font-normal mb-3">{s.title}</h3>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-[#A09A90]' : 'text-[#666158]'}`}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className={`py-24 px-6 max-w-7xl mx-auto border-b ${darkMode ? 'border-[#F4EFE6]/15' : 'border-[#1A1917]/15'
        }`}>
        <div className="max-w-2xl mb-16">
          <div className={`font-mono-code text-xs uppercase tracking-widest mb-3 ${darkMode ? 'text-[#C4A482]' : 'text-[#7A6348]'
            }`}>{t.process.eyebrow}</div>
          <h2 className="font-display text-3xl md:text-4xl font-light">{t.process.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.process.items.map((p) => (
            <div key={p.phase} className={`border-t pt-6 ${darkMode ? 'border-[#F4EFE6]/30' : 'border-[#1A1917]/30'}`}>
              <div className={`font-mono-code text-xs mb-2 ${darkMode ? 'text-[#C4A482]' : 'text-[#7A6348]'}`}>PHASE {p.phase}</div>
              <h3 className="font-display text-lg font-normal mb-2">{p.title}</h3>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-[#A09A90]' : 'text-[#666158]'}`}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className={`py-24 px-6 max-w-7xl mx-auto border-b ${darkMode ? 'border-[#F4EFE6]/15' : 'border-[#1A1917]/15'
        }`}>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className={`font-mono-code text-xs uppercase tracking-widest mb-3 ${darkMode ? 'text-[#C4A482]' : 'text-[#7A6348]'
              }`}>{t.works.eyebrow}</div>
            <h2 className="font-display text-3xl md:text-4xl font-light">{t.works.title}</h2>
          </div>

          <div className="flex flex-wrap gap-2 font-mono-code text-xs uppercase tracking-wider">
            {[t.works.filters.all, t.works.filters.residential, t.works.filters.commercial, t.works.filters.public].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 border transition-all ${activeFilter === cat
                  ? darkMode ? 'bg-[#F4EFE6] text-[#121110] border-[#F4EFE6]' : 'bg-[#1A1917] text-[#F4EFE6] border-[#1A1917]'
                  : darkMode
                    ? 'border-[#F4EFE6]/20 text-[#A09A90] hover:border-[#F4EFE6] hover:text-[#F4EFE6]'
                    : 'border-[#1A1917]/20 text-[#666158] hover:border-[#1A1917] hover:text-[#1A1917]'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredProjects.map((p) => (
            <div key={p.id} className={`group border ${darkMode ? 'border-[#F4EFE6]/15 bg-[#181614]' : 'border-[#1A1917]/15 bg-[#EFE8DC]'
              }`}>
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className={`absolute top-4 left-4 border px-3 py-1 font-mono-code text-[10px] uppercase tracking-widest ${darkMode ? 'bg-[#121110] border-[#F4EFE6]/20' : 'bg-[#F4EFE6] border-[#1A1917]/20'
                  }`}>
                  {p.num}
                </div>
              </div>
              <div className="p-8">
                <div className={`flex items-center justify-between font-mono-code text-xs mb-2 ${darkMode ? 'text-[#C4A482]' : 'text-[#7A6348]'
                  }`}>
                  <span>{p.category}</span>
                  <span>{p.location}</span>
                </div>
                <h3 className="font-display text-2xl font-light mb-3">{p.title}</h3>
                <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-[#A09A90]' : 'text-[#666158]'}`}>{p.description}</p>
                <div className={`inline-flex items-center gap-2 font-mono-code text-xs uppercase tracking-widest transition-colors ${darkMode ? 'text-[#F4EFE6] group-hover:text-[#C4A482]' : 'text-[#1A1917] group-hover:text-[#7A6348]'
                  }`}>
                  <span>{t.works.viewSpecs}</span>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Break */}
      <section className={`py-28 px-6 text-center ${darkMode ? 'bg-[#181614] text-[#F4EFE6]' : 'bg-[#1A1917] text-[#F4EFE6]'
        }`}>
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="font-mono-code text-xs uppercase tracking-widest text-[#C4A482]">{t.quote.eyebrow}</div>
          <blockquote className="font-display text-3xl md:text-5xl font-light leading-snug tracking-tight">
            {t.quote.text}
          </blockquote>
          <div className="font-mono-code text-xs uppercase tracking-widest text-[#A09A90]">{t.quote.author}</div>
        </div>
      </section>

      {/* Clean Contact Section */}
      <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-8">
          <div className={`font-mono-code text-xs uppercase tracking-widest ${darkMode ? 'text-[#C4A482]' : 'text-[#7A6348]'
            }`}>{t.contact.eyebrow}</div>
          <h2 className="font-display text-4xl md:text-6xl font-light leading-tight">
            {t.contact.title}
          </h2>
          <p className={`text-base md:text-lg font-light leading-relaxed ${darkMode ? 'text-[#A09A90]' : 'text-[#666158]'}`}>
            {t.contact.desc}
          </p>

          <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono-code text-xs uppercase tracking-widest">
            <div className="flex items-center gap-3">
              <MapPin size={18} className={darkMode ? 'text-[#C4A482]' : 'text-[#7A6348]'} />
              <span>{t.contact.location}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className={darkMode ? 'text-[#C4A482]' : 'text-[#7A6348]'} />
              <a href="tel:+998332634242" className="hover:underline transition-colors">+998 33 263 42 42</a>
            </div>
            <div className="flex items-center gap-3">
              <Send size={18} className={darkMode ? 'text-[#C4A482]' : 'text-[#7A6348]'} />
              <a href="https://t.me/uz_702" target="_blank" rel="noopener noreferrer" className="hover:underline transition-colors">@uz_702</a>
            </div>
            <div className="flex items-center gap-3">
              <Instagram size={18} className={darkMode ? 'text-[#C4A482]' : 'text-[#7A6348]'} />
              <a href="https://www.instagram.com/samandar_arxitektor" target="_blank" rel="noopener noreferrer" className="hover:underline transition-colors">
                @samandar_arxitektor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t py-10 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-mono-code text-xs ${darkMode ? 'border-[#F4EFE6]/15 text-[#A09A90]' : 'border-[#1A1917]/15 text-[#666158]'
        }`}>
        <div>© {new Date().getFullYear()} samandar_arxitektor. {t.footer.rights}</div>
        <div className="flex items-center gap-6">
          <a href="tel:+998332634242" className={`transition-colors ${darkMode ? 'hover:text-[#F4EFE6]' : 'hover:text-[#1A1917]'}`}>
            +998 33 263 42 42
          </a>
          <a href="https://t.me/uz_702" target="_blank" rel="noopener noreferrer" className={`transition-colors ${darkMode ? 'hover:text-[#F4EFE6]' : 'hover:text-[#1A1917]'}`}>
            Telegram: @uz_702
          </a>
          <a
            href="https://www.instagram.com/samandar_arxitektor"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 transition-colors ${darkMode ? 'hover:text-[#F4EFE6]' : 'hover:text-[#1A1917]'}`}
          >
            <Instagram size={14} />
            <span>@samandar_arxitektor</span>
          </a>
        </div>
      </footer>

    </div>
  );
}