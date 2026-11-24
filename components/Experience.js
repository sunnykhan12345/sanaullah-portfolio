import { experiences } from '@/data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="bg-light-surface border-y border-light-outline-variant py-section-lg">
      <div className="max-w-6xl mx-auto px-gutter-md lg:px-gutter-xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-gutter-md mb-gutter-xl">
          <div className="flex flex-col gap-gutter-xs">
            <span className="font-label text-label-sm text-light-primary" data-design-text-token="label-sm">
              WORK EXPERIENCE
            </span>
            <h2 className="font-headline text-headline-lg text-light-on-background text-balance" data-design-text-token="headline-lg">
              A snapshot of my engineering growth
            </h2>
          </div>
          <span className="font-label text-label-sm text-light-on-surface-variant" data-design-text-token="label-sm">
            2020 – PRESENT
          </span>
        </div>

        <div className="flex flex-col gap-gutter-md">
          {experiences.map((exp) => (
            <div
              key={exp.num}
              className="bg-light-surface-container-lowest border border-light-outline-variant rounded-xl p-gutter-lg flex flex-col lg:flex-row lg:items-start justify-between gap-gutter-lg shadow-sm"
            >
              <div className="flex items-start gap-gutter-lg">
                <span
                  className={`shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-full font-headline text-title-md tabular-nums ${
                    exp.current
                      ? 'bg-accent text-on-accent'
                      : 'bg-light-surface-container border border-light-outline-variant text-light-on-background'
                  }`}
                  data-design-text-token="title-md"
                >
                  {exp.num}
                </span>
                <div className="flex flex-col gap-gutter-xs">
                  <div className="flex flex-wrap items-center gap-gutter-sm">
                    <h3 className="font-headline text-title-lg text-light-on-background" data-design-text-token="title-lg">
                      {exp.company}
                    </h3>
                    <span className="font-body text-body-md text-light-on-surface-variant" data-design-text-token="body-md">
                      • {exp.role}
                    </span>
                  </div>
                  <p className="font-body text-body-md text-light-on-surface-variant max-w-2xl text-pretty" data-design-text-token="body-md">
                    {exp.description}
                  </p>
                  {exp.points && exp.points.length > 0 && (
                    <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-light-on-surface-variant/90">
                      {exp.points.map((pt, i) => (
                        <li key={i}>{pt}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <span
                className={`self-start lg:self-center shrink-0 px-4 py-1.5 rounded-full font-label text-label-sm tabular-nums whitespace-nowrap ${
                  exp.current
                    ? 'bg-accent text-on-accent'
                    : 'bg-light-surface-container-low border border-light-outline-variant text-light-on-surface'
                }`}
                data-design-text-token="label-sm"
              >
                {exp.period}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
