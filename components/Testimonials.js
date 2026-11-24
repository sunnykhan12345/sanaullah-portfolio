import { testimonials } from '@/data/portfolioData';

export default function Testimonials() {
  return (
    <section id="testimonials" className="max-w-6xl mx-auto px-gutter-md lg:px-gutter-xl py-section-lg">
      <div className="flex flex-col gap-gutter-xs mb-gutter-xl text-center items-center">
        <span className="font-label text-label-sm text-light-primary" data-design-text-token="label-sm">
          TESTIMONIALS
        </span>
        <h2 className="font-headline text-headline-lg text-light-on-background text-balance" data-design-text-token="headline-lg">
          Feedback from teams and leaders I&#39;ve collaborated with
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-lg items-stretch">
        {testimonials.map((t, idx) => (
          <article
            key={idx}
            className="bg-light-surface-container-lowest border border-light-outline-variant rounded-xl p-gutter-lg flex flex-col justify-between shadow-sm gap-gutter-md"
          >
            <p className="font-body text-body-md text-light-on-surface-variant italic text-pretty">
              &ldquo;{t.feedback}&rdquo;
            </p>

            <div className="flex items-center gap-3 pt-gutter-sm border-t border-light-outline-variant">
              <img
                src={t.image}
                alt={t.name}
                className="w-11 h-11 rounded-full object-cover shrink-0"
              />
              <div className="flex flex-col">
                <h3 className="font-headline text-title-md text-light-on-background">{t.name}</h3>
                <span className="font-label text-label-sm text-light-primary">
                  {t.role} • {t.company}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
