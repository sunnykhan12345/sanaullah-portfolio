'use client';

import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { profile, navLinks } from '@/data/portfolioData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-light-background/95 backdrop-blur-sm border-b border-light-outline-variant">
      <div className="max-w-6xl mx-auto px-gutter-md lg:px-gutter-xl h-20 flex items-center justify-between gap-gutter-md">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-gutter-sm shrink-0">
          <span
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-obsidian text-on-obsidian font-headline text-label-lg"
            data-design-text-token="label-lg"
          >
            {profile.initials}
          </span>
          <span
            className="font-headline text-title-md text-light-on-background whitespace-nowrap"
            data-design-text-token="title-md"
          >
            {profile.name}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-gutter-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-label text-label-lg text-light-on-surface-variant hover:text-light-on-background transition-colors duration-state-change"
              data-design-text-token="label-lg"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA & Mobile Toggle */}
        <div className="flex items-center gap-gutter-sm">
          <a
            href="#contact"
            data-component-id="button-primary"
            data-component-type="button"
            data-component-variant="primary"
            className="hidden sm:inline-flex items-center justify-center gap-gutter-sm bg-obsidian text-on-obsidian hover:bg-obsidian-muted px-gutter-lg py-3 rounded-full transition-colors duration-state-change ease-state-change"
          >
            <span className="font-label text-label-lg whitespace-nowrap" data-design-text-token="label-lg">
              Get in touch
            </span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-light-on-background hover:bg-light-surface-container-low transition-colors duration-state-change"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-light-background border-b border-light-outline-variant px-gutter-md py-gutter-lg flex flex-col gap-gutter-md shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-gutter-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-label text-label-lg text-light-on-surface-variant hover:text-light-on-background py-2 px-3 rounded-lg hover:bg-light-surface-container-low transition-colors duration-state-change"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-gutter-sm border-t border-light-outline-variant flex flex-col gap-gutter-sm">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-gutter-sm bg-obsidian text-on-obsidian hover:bg-obsidian-muted px-gutter-lg py-3 rounded-full font-label text-label-lg transition-colors duration-state-change"
            >
              Get in touch
            </a>
            <a
              href={profile.cvUrl}
              download
              className="inline-flex items-center justify-center gap-gutter-sm bg-light-surface-container-low text-light-on-background hover:bg-light-surface-container px-gutter-lg py-2.5 rounded-full font-label text-label-md border border-light-outline-variant transition-colors duration-state-change"
            >
              Download CV <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
