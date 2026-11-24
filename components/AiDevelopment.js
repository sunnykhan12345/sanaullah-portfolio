import { aiHighlights } from '@/data/portfolioData';

export default function AiDevelopment() {
  return (
    <section id="ai-development" className="max-w-6xl mx-auto px-gutter-md lg:px-gutter-xl pb-section-lg">
      <div className="bg-obsidian text-on-obsidian rounded-2xl p-gutter-lg lg:p-gutter-xl grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-center shadow-lg">
        {/* Left Side */}
        <div className="lg:col-span-7 flex flex-col gap-gutter-md">
          <span className="font-label text-label-sm text-dark-primary" data-design-text-token="label-sm">
            AI DEVELOPMENT
          </span>
          <h2 className="font-headline text-headline-lg text-on-obsidian text-balance" data-design-text-token="headline-lg">
            Integrating LLMs &amp; agent workflows into real web products
          </h2>
          <p className="font-body text-body-lg text-on-obsidian-muted text-pretty" data-design-text-token="body-lg">
            Beyond traditional full-stack engineering, I build AI-powered features using LangChain, LangGraph, and
            Groq—connecting high-speed inference and structured agent graphs directly to React, Next.js, and Node.js
            backends.
          </p>
        </div>

        {/* Right Side: 2x2 Bento Cards */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-gutter-md">
          {aiHighlights.map((item) => (
            <div
              key={item.title}
              className={`rounded-xl p-gutter-md flex flex-col gap-gutter-xs ${
                item.featured
                  ? 'bg-accent text-on-accent'
                  : 'bg-obsidian-muted border border-dark-outline-variant'
              }`}
            >
              <span
                className={`material-symbols-outlined text-headline-md ${
                  item.featured ? 'text-on-accent' : 'text-dark-primary'
                }`}
                aria-hidden="true"
              >
                {item.icon}
              </span>
              <h3
                className={`font-headline text-title-md ${
                  item.featured ? 'text-on-accent' : 'text-on-obsidian'
                }`}
                data-design-text-token="title-md"
              >
                {item.title}
              </h3>
              <p
                className={`font-body text-label-sm ${
                  item.featured ? 'text-on-accent' : 'text-on-obsidian-muted'
                }`}
                data-design-text-token="label-sm"
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
