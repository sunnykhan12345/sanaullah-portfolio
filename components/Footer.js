import { profile } from '@/data/portfolioData';

export default function Footer() {
  return (
    <footer className="border-t border-light-outline-variant py-gutter-xl">
      <div className="max-w-6xl mx-auto px-gutter-md lg:px-gutter-xl flex flex-col sm:flex-row items-center justify-between gap-gutter-md">
        <div className="flex items-center gap-gutter-sm">
          <span
            className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-obsidian text-on-obsidian font-headline text-label-sm"
            data-design-text-token="label-sm"
          >
            {profile.initials}
          </span>
          <span className="font-body text-body-md text-light-on-surface-variant" data-design-text-token="body-md">
            {profile.name} — {profile.location}
          </span>
        </div>
        <a
          href="#hero"
          className="font-label text-label-lg text-light-on-background hover:text-accent transition-colors duration-state-change flex items-center gap-1"
          data-design-text-token="label-lg"
        >
          <span>Back to top</span>
          <span className="material-symbols-outlined text-sm" aria-hidden="true">
            arrow_upward
          </span>
        </a>
      </div>
    </footer>
  );
}
