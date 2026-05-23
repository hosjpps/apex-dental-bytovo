import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { featuredPrices } from '@/content/prices';

function formatPrice(price: number | null, unit?: string): string {
  if (price === null) return 'уточняйте';
  const formatted = price.toLocaleString('ru-RU');
  return unit ? `${formatted} ₽/${unit}` : `${formatted} ₽`;
}

export default function Prices() {
  return (
    <section
      id="prices"
      aria-labelledby="prices-heading"
      className="py-16 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-10">
          {/* Main price table — spans 2 columns on desktop */}
          <div className="lg:col-span-2">
            <h2
              id="prices-heading"
              className="font-serif text-primary text-3xl sm:text-4xl mb-2"
            >
              Открытые цены
            </h2>
            <p className="text-text-muted text-sm mb-8">
              Без скрытых платежей. Полный прайс — на странице услуг.
            </p>

            <Table>
              <TableHeader>
                <TableRow className="border-border">
                  <TableHead className="text-primary font-semibold w-full">Услуга</TableHead>
                  <TableHead className="text-primary font-semibold text-right whitespace-nowrap">Цена</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {featuredPrices.map((item, idx) => (
                  <TableRow
                    key={item.id}
                    className={`border-border ${idx % 2 === 1 ? 'bg-bg-soft' : ''}`}
                  >
                    <TableCell className="text-sm text-primary py-3 whitespace-normal">{item.name}</TableCell>
                    <TableCell className="text-sm font-medium text-primary text-right whitespace-nowrap py-3">
                      {formatPrice(item.price, item.unit)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="mt-6">
              <a
                href="/uslugi/"
                className="inline-flex items-center text-accent font-medium hover:text-primary transition-colors"
              >
                Полный прайс-лист (154 услуги) →
              </a>
            </div>
          </div>

          {/* Promo sidebar */}
          <aside className="mt-10 lg:mt-0 flex flex-col gap-4" aria-label="Акции и условия оплаты">
            <div className="bg-accent-soft rounded-[12px] p-6 border border-border">
              <p className="font-semibold text-primary text-lg mb-2">Семейная скидка 15%</p>
              <p className="text-sm text-text-muted">
                При одновременном лечении двух и более членов семьи.
              </p>
            </div>
            <div className="bg-accent-soft rounded-[12px] p-6 border border-border">
              <p className="font-semibold text-primary text-lg mb-2">Рассрочка 0%</p>
              <p className="text-sm text-text-muted">
                Оформляем на месте. Оплата картой, QR, наличными.
              </p>
            </div>
            <div className="bg-accent-soft rounded-[12px] p-6 border border-border">
              <p className="font-semibold text-primary text-lg mb-2">Кешбэк 5%</p>
              <p className="text-sm text-text-muted">
                При оплате картой Яндекс.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
