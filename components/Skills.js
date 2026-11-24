import { skillCategories } from '@/data/portfolioData';

export default function Skills() {
  const { frontend, backend, libraries, tools, ai } = skillCategories;

  return (
    <section id="skills" className="max-w-6xl mx-auto px-gutter-md lg:px-gutter-xl py-section-lg">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-gutter-lg mb-gutter-xl">
        <div className="flex flex-col gap-gutter-xs">
          <span className="font-label text-label-sm text-light-primary" data-design-text-token="label-sm">
            TECHNICAL SKILLS
          </span>
          <h2 className="font-headline text-headline-lg text-light-on-background text-balance" data-design-text-token="headline-lg">
            Tools &amp; technologies I ship with
          </h2>
        </div>
        <p className="font-body text-body-md text-light-on-surface-variant max-w-md text-pretty" data-design-text-token="body-md">
          Full-stack JavaScript ecosystem paired with modern DevOps and AI orchestration frameworks.
        </p>
      </div>

      {/* Row 1: Frontend, Backend & Database, Libraries */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-lg items-stretch">
        {/* Frontend */}
        <article className="bg-light-surface-container-lowest border border-light-outline-variant rounded-xl p-gutter-lg flex flex-col gap-gutter-md shadow-sm h-full">
          <header className="flex items-center justify-between">
            <h3 className="font-headline text-title-lg text-light-on-background" data-design-text-token="title-lg">
              {frontend.title}
            </h3>
            <span className="material-symbols-outlined text-accent text-headline-md" aria-hidden="true">
              {frontend.icon}
            </span>
          </header>
          <div className="flex flex-wrap gap-gutter-sm">
            {frontend.skills.map((skill) => {
              const isHighlight = skill === 'React.js' || skill === 'Next.js';
              return (
                <span
                  key={skill}
                  className={`px-3 py-1 rounded-full font-label text-label-sm ${
                    isHighlight
                      ? 'bg-light-secondary-container text-light-on-secondary-container'
                      : 'bg-light-surface-container-low border border-light-outline-variant text-light-on-surface'
                  }`}
                  data-design-text-token="label-sm"
                >
                  {skill}
                </span>
              );
            })}
          </div>
        </article>

        {/* Backend & Database */}
        <article className="bg-light-surface-container-lowest border border-light-outline-variant rounded-xl p-gutter-lg flex flex-col gap-gutter-md shadow-sm h-full">
          <header className="flex items-center justify-between">
            <h3 className="font-headline text-title-lg text-light-on-background" data-design-text-token="title-lg">
              {backend.title}
            </h3>
            <span className="material-symbols-outlined text-accent text-headline-md" aria-hidden="true">
              {backend.icon}
            </span>
          </header>
          <div className="flex flex-wrap gap-gutter-sm">
            {backend.skills.map((skill) => {
              const isHighlight = skill === 'Node.js' || skill === 'MongoDB';
              return (
                <span
                  key={skill}
                  className={`px-3 py-1 rounded-full font-label text-label-sm ${
                    isHighlight
                      ? 'bg-light-secondary-container text-light-on-secondary-container'
                      : 'bg-light-surface-container-low border border-light-outline-variant text-light-on-surface'
                  }`}
                  data-design-text-token="label-sm"
                >
                  {skill}
                </span>
              );
            })}
          </div>
        </article>

        {/* Libraries */}
        <article className="bg-light-surface-container-lowest border border-light-outline-variant rounded-xl p-gutter-lg flex flex-col gap-gutter-md shadow-sm h-full">
          <header className="flex items-center justify-between">
            <h3 className="font-headline text-title-lg text-light-on-background" data-design-text-token="title-lg">
              {libraries.title}
            </h3>
            <span className="material-symbols-outlined text-accent text-headline-md" aria-hidden="true">
              {libraries.icon}
            </span>
          </header>
          <div className="flex flex-wrap gap-gutter-sm">
            {libraries.skills.map((skill) => {
              const isHighlight = skill === 'Tailwind CSS' || skill === 'Shadcn UI';
              return (
                <span
                  key={skill}
                  className={`px-3 py-1 rounded-full font-label text-label-sm ${
                    isHighlight
                      ? 'bg-light-secondary-container text-light-on-secondary-container'
                      : 'bg-light-surface-container-low border border-light-outline-variant text-light-on-surface'
                  }`}
                  data-design-text-token="label-sm"
                >
                  {skill}
                </span>
              );
            })}
          </div>
        </article>
      </div>

      {/* Row 2: Tools & AI */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-lg items-stretch mt-gutter-lg">
        {/* Tools & DevOps */}
        <article className="bg-light-surface-container-lowest border border-light-outline-variant rounded-xl p-gutter-lg flex flex-col gap-gutter-md shadow-sm h-full">
          <header className="flex items-center justify-between">
            <h3 className="font-headline text-title-lg text-light-on-background" data-design-text-token="title-lg">
              {tools.title}
            </h3>
            <span className="material-symbols-outlined text-accent text-headline-md" aria-hidden="true">
              {tools.icon}
            </span>
          </header>
          <div className="flex flex-wrap gap-gutter-sm">
            {tools.skills.map((skill) => {
              const isHighlight = skill === 'Docker' || skill === 'Vercel';
              return (
                <span
                  key={skill}
                  className={`px-3 py-1 rounded-full font-label text-label-sm ${
                    isHighlight
                      ? 'bg-light-secondary-container text-light-on-secondary-container'
                      : 'bg-light-surface-container-low border border-light-outline-variant text-light-on-surface'
                  }`}
                  data-design-text-token="label-sm"
                >
                  {skill}
                </span>
              );
            })}
          </div>
        </article>

        {/* AI & LLM Integrations */}
        <article className="bg-obsidian text-on-obsidian rounded-xl p-gutter-lg flex flex-col gap-gutter-md shadow-sm h-full">
          <header className="flex items-center justify-between">
            <h3 className="font-headline text-title-lg text-on-obsidian" data-design-text-token="title-lg">
              {ai.title}
            </h3>
            <span className="material-symbols-outlined text-dark-primary text-headline-md" aria-hidden="true">
              {ai.icon}
            </span>
          </header>
          <div className="flex flex-wrap gap-gutter-sm">
            {ai.skills.map((skill) => {
              const isAccent = skill === 'Groq';
              return (
                <span
                  key={skill}
                  className={`px-3 py-1 rounded-full font-label text-label-sm ${
                    isAccent
                      ? 'bg-accent text-on-accent'
                      : 'bg-obsidian-muted border border-dark-outline-variant text-on-obsidian'
                  }`}
                  data-design-text-token="label-sm"
                >
                  {skill}
                </span>
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
}
