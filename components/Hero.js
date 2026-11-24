import { profile, heroBadges } from '@/data/portfolioData';

export default function Hero() {
  return (
    <section id="hero" className="max-w-6xl mx-auto px-gutter-md lg:px-gutter-xl pt-section-sm pb-section-lg">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-center">
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col gap-gutter-lg">
          <div className="flex flex-wrap items-center gap-gutter-sm">
            {/* Chip with Code Icon */}
            <span
              data-component-id="chip-with-icon"
              data-component-type="chip"
              data-component-variant="with-icon"
              className="inline-flex items-center gap-gutter-xs px-3 py-1.5 rounded-full bg-light-surface-container-low border border-light-outline-variant text-light-on-background"
            >
              <span className="material-symbols-outlined text-label-lg text-accent" aria-hidden="true">
                code
              </span>
              <span className="font-label text-label-sm" data-design-text-token="label-sm">
                MERN Stack | React.js &amp; Next.js Developer
              </span>
            </span>

            {/* Location Chip */}
            <span className="inline-flex items-center gap-gutter-xs px-3 py-1.5 rounded-full bg-light-secondary-container text-light-on-secondary-container">
              <span className="material-symbols-outlined text-label-lg" aria-hidden="true">
                location_on
              </span>
              <span className="font-label text-label-sm" data-design-text-token="label-sm">
                Islamabad / Rawalpindi
              </span>
            </span>
          </div>

          <div className="flex flex-col gap-gutter-md">
            <p className="font-title text-title-lg text-light-primary" data-design-text-token="title-lg">
              Hi, I&#39;m {profile.name}
            </p>
            {/* Display Typography */}
            <h1
              data-component-id="typography-display"
              data-component-type="typography"
              data-component-variant="display"
              data-design-text-token="display-lg"
              className="font-display text-display-lg-mobile lg:text-display-lg text-light-on-background text-balance"
            >
              {profile.headline}
            </h1>
            {/* Body Typography */}
            <p
              data-component-id="typography-body"
              data-component-type="typography"
              data-component-variant="body"
              data-design-text-token="body-lg"
              className="font-body text-body-lg text-light-on-surface-variant max-w-prose text-pretty"
            >
              {profile.intro}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-gutter-md">
            <a
              href="#projects"
              data-component-id="button-primary"
              data-component-type="button"
              data-component-variant="primary"
              className="inline-flex items-center justify-center gap-gutter-sm bg-obsidian text-on-obsidian hover:bg-obsidian-muted px-gutter-lg py-3 rounded-full transition-colors duration-state-change ease-state-change"
            >
              <span className="font-label text-label-lg whitespace-nowrap" data-design-text-token="label-lg">
                View My Work
              </span>
              <span className="material-symbols-outlined text-title-md" aria-hidden="true">
                arrow_downward
              </span>
            </a>
            <a
              href="#contact"
              data-component-id="button-secondary"
              data-component-type="button"
              data-component-variant="secondary"
              className="inline-flex items-center justify-center gap-gutter-sm bg-light-surface-container-lowest text-light-on-background border border-light-outline-variant hover:bg-light-surface-container-low px-gutter-lg py-3 rounded-full transition-colors duration-state-change ease-state-change"
            >
              <span className="font-label text-label-lg whitespace-nowrap" data-design-text-token="label-lg">
                Contact Me
              </span>
            </a>
            {/* <a
              href={profile.cvUrl}
              download
              className="inline-flex items-center justify-center gap-gutter-sm bg-light-surface-container-low text-light-on-background border border-light-outline-variant hover:bg-light-surface-container px-5 py-3 rounded-full transition-colors duration-state-change ease-state-change font-label text-label-md"
            >
              <span>Download CV</span>
              <span className="material-symbols-outlined text-label-lg" aria-hidden="true">
                download
              </span>
            </a> */}
          </div>

          {/* Social / Connect Links */}
          <div className="flex flex-wrap items-center gap-gutter-md pt-gutter-sm">
            <span className="font-label text-label-sm text-light-on-surface-variant" data-design-text-token="label-sm">
              CONNECT
            </span>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-gutter-xs px-3 py-1.5 rounded-full bg-light-surface-container-low hover:bg-light-surface-container text-light-on-background transition-colors duration-state-change"
            >
              <span className="material-symbols-outlined text-label-lg" aria-hidden="true">
                terminal
              </span>
              <span className="font-label text-label-lg" data-design-text-token="label-lg">
                GitHub
              </span>
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-gutter-xs px-3 py-1.5 rounded-full bg-light-surface-container-low hover:bg-light-surface-container text-light-on-background transition-colors duration-state-change"
            >
              <span className="material-symbols-outlined text-label-lg text-accent" aria-hidden="true">
                work
              </span>
              <span className="font-label text-label-lg" data-design-text-token="label-lg">
                LinkedIn
              </span>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-gutter-xs px-3 py-1.5 rounded-full bg-light-surface-container-low hover:bg-light-surface-container text-light-on-background transition-colors duration-state-change"
            >
              <span className="material-symbols-outlined text-label-lg" aria-hidden="true">
                mail
              </span>
              <span className="font-label text-label-lg" data-design-text-token="label-lg">
                Email
              </span>
            </a>
          </div>
        </div>

        {/* Right Column: Dribbble-inspired Bento Visual */}
        <div className="lg:col-span-5 grid grid-cols-1 gap-gutter-md">
          <div className="grid grid-cols-12 gap-gutter-md items-stretch">
            {/* Sana Ullah Actual Profile Photo (Downloaded from Stitch AI) */}
            <div className="col-span-7 bg-light-surface-container-low border border-light-outline-variant rounded-xl overflow-hidden shadow-sm relative min-h-[288px]">
              <img
                src="/images/sunny20.jpg?v=3"
                alt="Sana Ullah — MERN Stack Developer"
                className="w-full h-72 object-cover object-top"
                loading="eager"
              />
            </div>
            <div className="col-span-5 flex flex-col gap-gutter-md">
              <div className="bg-accent text-on-accent rounded-xl p-gutter-md flex-1 flex flex-col justify-between shadow-sm">
                <span className="material-symbols-outlined text-headline-md" aria-hidden="true">
                  bolt
                </span>
                <div>
                  <p className="font-headline text-headline-md tabular-nums" data-design-text-token="headline-md">
                    3+ Years
                  </p>
                  <p className="font-body text-label-sm text-on-accent" data-design-text-token="label-sm">
                    MERN &amp; NEXT.JS
                  </p>
                </div>
              </div>
              <div className="bg-obsidian text-on-obsidian rounded-xl p-gutter-md flex flex-col gap-gutter-xs shadow-sm">
                <span className="font-label text-label-sm text-dark-primary" data-design-text-token="label-sm">
                  AVAILABILITY
                </span>
                <p className="font-title text-title-md text-on-obsidian" data-design-text-token="title-md">
                  Open for Roles
                </p>
              </div>
            </div>
          </div>
          <div className="bg-light-surface-container-low border border-light-outline-variant rounded-xl overflow-hidden shadow-sm">
            <img
              src="/images/workstation.jpg"
              alt="Minimalist developer workstation running React and Next.js"
              className="w-full h-44 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Mission Strip (Dribbble reference) */}
      <div className="mt-section-sm bg-light-surface border border-light-outline-variant rounded-2xl p-gutter-lg lg:p-gutter-xl flex flex-col items-center text-center gap-gutter-lg">
        <p className="font-headline text-headline-md text-light-on-background max-w-3xl text-balance" data-design-text-token="headline-md">
          {profile.mission}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-gutter-sm">
          {heroBadges.map((badge, idx) => (
            <span
              key={badge}
              className={`px-3.5 py-1.5 rounded-full font-label text-label-sm ${idx === heroBadges.length - 1
                ? 'bg-light-secondary-container text-light-on-secondary-container'
                : 'bg-light-surface-container-lowest border border-light-outline-variant text-light-on-surface'
                }`}
              data-design-text-token="label-sm"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
