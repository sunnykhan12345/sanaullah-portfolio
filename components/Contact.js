'use client';

import { useState } from 'react';
import { profile } from '@/data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate brief submission feedback
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 8000);
    }, 400);
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-gutter-md lg:px-gutter-xl py-section-lg">
      <div className="bg-obsidian text-on-obsidian rounded-2xl p-gutter-lg lg:p-gutter-xl grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-start shadow-xl">
        {/* Left: Contact Info & Direct Channels */}
        <div className="lg:col-span-5 flex flex-col gap-gutter-lg">
          <div className="flex flex-col gap-gutter-sm">
            <span className="font-label text-label-sm text-dark-primary" data-design-text-token="label-sm">
              CONTACT
            </span>
            <h2 className="font-headline text-headline-lg text-on-obsidian text-balance" data-design-text-token="headline-lg">
              Got an idea? Let&#39;s make it happen.
            </h2>
            <p className="font-body text-body-md text-on-obsidian-muted text-pretty" data-design-text-token="body-md">
              Available for full-time frontend / MERN stack roles, international client projects, and AI web
              integrations.
            </p>
          </div>

          <div className="flex flex-col gap-gutter-sm">
            {/* Email Channel */}
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-gutter-md p-3 rounded-xl bg-obsidian-muted border border-dark-outline-variant hover:border-dark-primary transition-colors duration-state-change"
            >
              <span className="material-symbols-outlined text-dark-primary text-title-lg" aria-hidden="true">
                mail
              </span>
              <div className="flex flex-col">
                <span className="font-label text-label-sm text-dark-primary" data-design-text-token="label-sm">
                  EMAIL
                </span>
                <span className="font-body text-body-md text-on-obsidian" data-design-text-token="body-md">
                  {profile.email}
                </span>
              </div>
            </a>

            {/* LinkedIn Channel */}
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-gutter-md p-3 rounded-xl bg-obsidian-muted border border-dark-outline-variant hover:border-dark-primary transition-colors duration-state-change"
            >
              <span className="material-symbols-outlined text-dark-primary text-title-lg" aria-hidden="true">
                work
              </span>
              <div className="flex flex-col">
                <span className="font-label text-label-sm text-dark-primary" data-design-text-token="label-sm">
                  LINKEDIN
                </span>
                <span className="font-body text-body-md text-on-obsidian" data-design-text-token="body-md">
                  linkedin.com/in/sanaullahdev
                </span>
              </div>
            </a>

            {/* GitHub Channel */}
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-gutter-md p-3 rounded-xl bg-obsidian-muted border border-dark-outline-variant hover:border-dark-primary transition-colors duration-state-change"
            >
              <span className="material-symbols-outlined text-dark-primary text-title-lg" aria-hidden="true">
                terminal
              </span>
              <div className="flex flex-col">
                <span className="font-label text-label-sm text-dark-primary" data-design-text-token="label-sm">
                  GITHUB
                </span>
                <span className="font-body text-body-md text-on-obsidian" data-design-text-token="body-md">
                  github.com/sunnykhan12345
                </span>
              </div>
            </a>

            {/* Bottom 2 Action Buttons: Portfolio & WhatsApp */}
            <div className="grid grid-cols-2 gap-gutter-sm">
              <a
                href={profile.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-gutter-xs p-3 rounded-xl bg-obsidian-muted border border-dark-outline-variant hover:border-dark-primary transition-colors duration-state-change"
              >
                <span className="material-symbols-outlined text-dark-primary text-title-md" aria-hidden="true">
                  language
                </span>
                <span className="font-label text-label-lg text-on-obsidian" data-design-text-token="label-lg">
                  Portfolio
                </span>
              </a>
              <a
                href={profile.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-gutter-xs p-3 rounded-xl bg-accent text-on-accent hover:bg-light-primary transition-colors duration-state-change"
              >
                <span className="material-symbols-outlined text-title-md" aria-hidden="true">
                  chat
                </span>
                <span className="font-label text-label-lg" data-design-text-token="label-lg">
                  WhatsApp
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="lg:col-span-7 bg-light-surface-container-lowest text-light-on-background rounded-xl p-gutter-lg lg:p-gutter-xl shadow-md">
          <form id="contact-form" onSubmit={handleSubmit} className="flex flex-col gap-gutter-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter-md">
              <label className="flex flex-col gap-gutter-xs">
                <span className="font-label text-label-lg text-light-on-background" data-design-text-token="label-lg">
                  Your Name
                </span>
                <input
                  type="text"
                  required
                  placeholder="Ayesha Khan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-DEFAULT bg-light-surface border border-light-outline-variant px-gutter-md py-3 text-body-md text-light-on-background placeholder:text-light-outline focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                />
              </label>

              <label className="flex flex-col gap-gutter-xs">
                <span className="font-label text-label-lg text-light-on-background" data-design-text-token="label-lg">
                  Email Address
                </span>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-3 text-light-outline text-title-md" aria-hidden="true">
                    mail
                  </span>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-DEFAULT bg-light-surface border border-light-outline-variant pl-10 pr-gutter-md py-3 text-body-md text-light-on-background placeholder:text-light-outline focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                </div>
              </label>
            </div>

            <label className="flex flex-col gap-gutter-xs">
              <span className="font-label text-label-lg text-light-on-background" data-design-text-token="label-lg">
                Subject
              </span>
              <input
                type="text"
                required
                placeholder="Frontend Role / Next.js Web App / AI Integration"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full rounded-DEFAULT bg-light-surface border border-light-outline-variant px-gutter-md py-3 text-body-md text-light-on-background placeholder:text-light-outline focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
              />
            </label>

            <label className="flex flex-col gap-gutter-xs">
              <span className="font-label text-label-lg text-light-on-background" data-design-text-token="label-lg">
                Message
              </span>
              <textarea
                rows="4"
                required
                placeholder="Tell me about your project, timeline, or role..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full rounded-DEFAULT bg-light-surface border border-light-outline-variant px-gutter-md py-3 text-body-md text-light-on-background placeholder:text-light-outline focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-y"
              ></textarea>
            </label>

            <div className="flex items-center justify-between gap-gutter-md pt-gutter-xs flex-wrap">
              {submitted ? (
                <span
                  id="form-status"
                  className="font-body text-label-sm text-light-primary animate-in fade-in"
                  role="status"
                >
                  Message ready — thank you for reaching out!
                </span>
              ) : (
                <span className="text-xs text-light-outline">All fields required. Usually replies in &lt; 24h.</span>
              )}

              <button
                type="submit"
                disabled={loading}
                className="ml-auto inline-flex items-center justify-center gap-gutter-sm bg-obsidian text-on-obsidian hover:bg-obsidian-muted px-gutter-xl py-3 rounded-full transition-colors duration-state-change disabled:opacity-50 cursor-pointer"
              >
                <span className="font-label text-label-lg" data-design-text-token="label-lg">
                  {loading ? 'Sending...' : 'Send Message'}
                </span>
                <span className="material-symbols-outlined text-title-md" aria-hidden="true">
                  send
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
