'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';
import { ClinicImage } from '@/components/ClinicImage';

// Use Yandex Maps photos (11-22): high-quality 1280x853/960x1280 shots.
// Old-site photos (01-10) are low-res 480x640 (business cards, certificates) — skipped.
// clinic-19 is used in Hero — exclude here to avoid duplicate.
const GALLERY_IMAGES = [11, 12, 13, 14, 15, 17, 18, 20, 22, 25, 26, 27].map((n) => ({
  src: `/images/clinic/clinic-${String(n).padStart(2, '0')}.jpg`,
  alt: `Клиника АПЕКС — интерьер ${n}`,
}));

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const prev = useCallback(
    () => setIndex(i => (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length),
    [],
  );
  const next = useCallback(
    () => setIndex(i => (i + 1) % GALLERY_IMAGES.length),
    [],
  );

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, prev, next]);

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="py-16 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="gallery-heading"
          className="font-serif text-primary text-3xl sm:text-4xl mb-2"
        >
          Клиника изнутри
        </h2>
        <p className="text-text-muted text-sm mb-8">
          Просторные кабинеты, современное оборудование
        </p>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {GALLERY_IMAGES.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => { setIndex(i); setOpen(true); }}
              className="block w-full break-inside-avoid rounded-[12px] overflow-hidden cursor-zoom-in hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-accent"
              aria-label={img.alt}
            >
              <ClinicImage
                src={img.src}
                alt={img.alt}
                sizes="(max-width: 767px) 50vw, (max-width: 1023px) 33vw, 25vw"
                className="w-full h-auto object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="max-w-4xl p-0 bg-black border-0 overflow-hidden"
          showCloseButton={false}
        >
          {/* sr-only title for a11y */}
          <DialogTitle className="sr-only">
            Галерея клиники АПЕКС — фото {index + 1} из {GALLERY_IMAGES.length}
          </DialogTitle>

          <div className="relative flex items-center justify-center min-h-[60vh]">
            <ClinicImage
              src={GALLERY_IMAGES[index].src}
              alt={GALLERY_IMAGES[index].alt}
              sizes="90vw"
              className="max-h-[85vh] w-auto object-contain"
            />

            <button
              type="button"
              onClick={prev}
              aria-label="Предыдущее фото"
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Следующее фото"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/60 text-sm select-none">
              {index + 1} / {GALLERY_IMAGES.length}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
