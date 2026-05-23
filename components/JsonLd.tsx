import { clinic } from "@/content/clinic";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["Dentist", "LocalBusiness"],
    name: "Стоматология АПЕКС",
    legalName: clinic.legalName,
    url: "https://apex-dental.vercel.app/",
    telephone: clinic.phones[0].value,
    email: clinic.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.address.street,
      addressLocality: clinic.address.city,
      addressRegion: "Москва",
      postalCode: clinic.address.postalCode,
      addressCountry: "RU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: clinic.address.lat,
      longitude: clinic.address.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: clinic.rating.value.toFixed(1),
      reviewCount: clinic.rating.reviews,
      bestRating: 5,
      worstRating: 1,
    },
    priceRange: "₽₽",
    currenciesAccepted: "RUB",
    paymentAccepted: "Cash, Credit Card, QR",
    medicalSpecialty: "Dentistry",
    hasMap: `https://yandex.ru/maps/org/${clinic.social.yandexMapsId}`,
    foundingDate: String(clinic.founded),
  };

  // Content is derived from typed TS constants — not user input — so serialisation is safe
  const json = JSON.stringify(data);

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
