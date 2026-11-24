'use client';

import { useState } from 'react';
import { allProjects, projectFilters } from '@/data/portfolioData';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = allProjects.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.categories && project.categories.includes(activeFilter);
  });

  return (
    <section id="projects" className="max-w-6xl mx-auto px-gutter-md lg:px-gutter-xl py-section-lg">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-gutter-lg mb-gutter-xl">
        <div className="flex flex-col gap-gutter-xs">
          <span className="font-label text-label-sm text-light-primary" data-design-text-token="label-sm">
            FEATURED PROJECTS
          </span>
          <h2 className="font-headline text-headline-lg text-light-on-background text-balance" data-design-text-token="headline-lg">
            A closer look at projects I&#39;ve built
          </h2>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center gap-gutter-sm" role="group" aria-label="Filter projects">
          {projectFilters.map((tab) => {
            const isActive = activeFilter === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveFilter(tab)}
                className={`project-filter px-4 py-1.5 rounded-full font-label text-label-sm transition-colors duration-state-change whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-obsidian text-on-obsidian shadow-sm'
                    : 'bg-light-surface-container-low border border-light-outline-variant text-light-on-surface hover:bg-light-surface-container'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter-xl items-stretch">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            data-component-id="card-action"
            data-component-type="card"
            data-component-variant="action"
            className="project-card bg-light-surface-container-lowest border border-light-outline-variant rounded-xl overflow-hidden flex flex-col justify-between shadow-sm hover:-translate-y-0.5 transition-transform duration-card-hover ease-card-hover h-full"
          >
            <div>
              <div className="bg-light-surface-container-low p-gutter-md">
                <img
                  src={project.image}
                  alt={project.alt || project.title}
                  className="w-full h-56 object-cover rounded-DEFAULT"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to safe workstation or card asset if image path is unavailable
                    e.currentTarget.src = '/images/workstation.jpg';
                  }}
                />
              </div>
              <div className="p-gutter-lg flex flex-col gap-gutter-md">
                <header className="flex flex-col gap-gutter-xs">
                  <div className="flex items-center justify-between gap-gutter-sm flex-wrap">
                    <span className="font-label text-label-sm text-light-primary" data-design-text-token="label-sm">
                      {project.categoryLabel || 'WEB APPLICATION'}
                    </span>
                    {project.status === 'In Progress' ? (
                      <span className="px-2.5 py-0.5 rounded-full bg-light-secondary-container text-light-on-secondary-container font-label text-label-sm">
                        In Progress
                      </span>
                    ) : project.status === 'Live Project' ? (
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-label text-label-sm">
                        Live Project
                      </span>
                    ) : null}
                  </div>
                  <h3 className="font-headline text-title-lg text-light-on-background" data-design-text-token="title-lg">
                    {project.title}
                  </h3>
                </header>

                <p className="font-body text-body-md text-light-on-surface-variant text-pretty" data-design-text-token="body-md">
                  {project.description}
                </p>

                {project.stack && project.stack.length > 0 && (
                  <div className="flex flex-wrap gap-gutter-xs">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-light-surface-container-low font-label text-label-sm text-light-on-surface"
                        data-design-text-token="label-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <footer className="px-gutter-lg pb-gutter-lg flex items-center gap-gutter-sm flex-wrap">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-gutter-xs bg-obsidian text-on-obsidian hover:bg-obsidian-muted px-4 py-2 rounded-full font-label text-label-lg transition-colors duration-state-change"
                >
                  <span data-design-text-token="label-lg">Live Demo</span>
                  <span className="material-symbols-outlined text-label-lg" aria-hidden="true">
                    arrow_outward
                  </span>
                </a>
              ) : project.caseStudyUrl && project.caseStudyUrl !== '#contact' ? (
                <a
                  href={project.caseStudyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-gutter-xs bg-obsidian text-on-obsidian hover:bg-obsidian-muted px-4 py-2 rounded-full font-label text-label-lg transition-colors duration-state-change"
                >
                  <span data-design-text-token="label-lg">Live Preview</span>
                  <span className="material-symbols-outlined text-label-lg" aria-hidden="true">
                    arrow_outward
                  </span>
                </a>
              ) : (
                <a
                  href="#contact"
                  className="inline-flex items-center gap-gutter-xs bg-obsidian text-on-obsidian hover:bg-obsidian-muted px-4 py-2 rounded-full font-label text-label-lg transition-colors duration-state-change"
                >
                  <span data-design-text-token="label-lg">Inquire Details</span>
                  <span className="material-symbols-outlined text-label-lg" aria-hidden="true">
                    arrow_forward
                  </span>
                </a>
              )}

              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-gutter-xs bg-light-surface-container-lowest border border-light-outline-variant hover:bg-light-surface-container-low text-light-on-background px-4 py-2 rounded-full font-label text-label-lg transition-colors duration-state-change"
                >
                  <span data-design-text-token="label-lg">GitHub</span>
                </a>
              ) : (
                <span className="inline-flex items-center gap-gutter-xs bg-light-surface-container-lowest border border-light-outline-variant text-light-on-surface-variant px-3 py-1.5 rounded-full font-label text-label-sm">
                  {project.status || 'Client Project'}
                </span>
              )}
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
