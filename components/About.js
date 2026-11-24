import { profile, stats, aboutHighlights } from '@/data/portfolioData';

export default function About() {
  return (
    <section id="about" className="bg-light-surface border-y border-light-outline-variant py-section-lg">
      <div className="max-w-6xl mx-auto px-gutter-md lg:px-gutter-xl grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-center">
        {/* Left Column: Portrait */}
        <div className="lg:col-span-5">
          <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-2xl p-gutter-md shadow-sm">
            <img
              src="/images/sunny20.jpg?v=3"
              alt="Sana Ullah portrait"
              className="w-full h-96 object-cover object-top rounded-xl"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right Column: Bio & Stats */}
        <div className="lg:col-span-7 flex flex-col gap-gutter-lg">
          <div className="flex flex-col gap-gutter-sm">
            <span className="font-label text-label-sm text-light-primary" data-design-text-token="label-sm">
              ABOUT ME
            </span>
            <h2 className="font-headline text-headline-lg text-light-on-background text-balance" data-design-text-token="headline-lg">
              Passionate MERN Stack Developer crafting production web apps
            </h2>
          </div>

          <p className="font-body text-body-lg text-light-on-surface-variant text-pretty" data-design-text-token="body-lg">
            {profile.intro}
          </p>

          {/* Highlights List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 pt-1">
            {aboutHighlights.map((highlight, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="material-symbols-outlined text-accent text-title-md shrink-0 mt-0.5" aria-hidden="true">
                  check_circle
                </span>
                <span className="font-body text-body-sm text-light-on-surface">{highlight}</span>
              </div>
            ))}
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-gutter-md pt-gutter-sm">
            {stats.map((s, idx) => (
              <div
                key={idx}
                className="bg-light-surface-container-lowest border border-light-outline-variant rounded-xl p-gutter-md"
              >
                <p
                  className={`font-headline text-headline-lg tabular-nums ${s.accent ? 'text-accent' : 'text-light-on-background'
                    }`}
                  data-design-text-token="headline-lg"
                >
                  {s.value}
                </p>
                <p className="font-body text-label-sm text-light-on-surface-variant" data-design-text-token="body-md">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-gutter-md">
            <a
              href="#contact"
              className="inline-flex items-center gap-gutter-sm bg-obsidian text-on-obsidian hover:bg-obsidian-muted px-gutter-lg py-3 rounded-full transition-colors duration-state-change"
            >
              <span className="font-label text-label-lg whitespace-nowrap" data-design-text-token="label-lg">
                Discuss a Project
              </span>
              <span className="material-symbols-outlined text-title-md" aria-hidden="true">
                arrow_outward
              </span>
            </a>
            <a
              href={profile.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-label text-label-lg text-light-primary hover:underline break-all"
              data-design-text-token="label-lg"
            >
              sanaullah-dev-portfolio.vercel.app
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
