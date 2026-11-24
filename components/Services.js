import { services } from '@/data/portfolioData';

export default function Services() {
  return (
    <section id="services" className="bg-light-surface border-y border-light-outline-variant py-section-lg">
      <div className="max-w-6xl mx-auto px-gutter-md lg:px-gutter-xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-gutter-lg mb-gutter-xl">
          <div className="flex flex-col gap-gutter-xs">
            <span className="font-label text-label-sm text-light-primary" data-design-text-token="label-sm">
              SERVICES
            </span>
            <h2 className="font-headline text-headline-lg text-light-on-background text-balance" data-design-text-token="headline-lg">
              Offer a range of services to elevate your product
            </h2>
          </div>
          <a
            href="#contact"
            className="self-start sm:self-auto shrink-0 inline-flex items-center gap-gutter-sm bg-obsidian text-on-obsidian hover:bg-obsidian-muted px-gutter-lg py-3 rounded-full font-label text-label-lg transition-colors duration-state-change"
          >
            <span className="whitespace-nowrap" data-design-text-token="label-lg">
              Start a Project
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter-lg items-stretch">
          {services.map((item) => {
            if (item.featured) {
              return (
                <article
                  key={item.title}
                  className="bg-obsidian text-on-obsidian rounded-xl p-gutter-lg flex flex-col gap-gutter-md shadow-sm h-full"
                >
                  <span className="material-symbols-outlined text-dark-primary text-headline-md" aria-hidden="true">
                    {item.icon}
                  </span>
                  <h3 className="font-headline text-title-lg text-on-obsidian" data-design-text-token="title-lg">
                    {item.title}
                  </h3>
                  <p className="font-body text-body-md text-on-obsidian-muted text-pretty" data-design-text-token="body-md">
                    {item.description}
                  </p>
                </article>
              );
            }

            return (
              <article
                key={item.title}
                className="bg-light-surface-container-lowest border border-light-outline-variant rounded-xl p-gutter-lg flex flex-col gap-gutter-md shadow-sm h-full"
              >
                <span className="material-symbols-outlined text-accent text-headline-md" aria-hidden="true">
                  {item.icon}
                </span>
                <h3 className="font-headline text-title-lg text-light-on-background" data-design-text-token="title-lg">
                  {item.title}
                </h3>
                <p className="font-body text-body-md text-light-on-surface-variant text-pretty" data-design-text-token="body-md">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
