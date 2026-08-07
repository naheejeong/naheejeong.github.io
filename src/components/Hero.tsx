import { useState } from 'react';
import { EmailIcon, GitHubIcon, LinkedInIcon, ResumeIcon } from './Icons';

const EMAIL = 'naheejeong@berkeley.edu';
const GITHUB_URL = 'https://github.com/naheejeong';
const LINKEDIN_URL = 'https://linkedin.com/in/naheejeong';
// TODO: point at the real resume file once it's added under /public.
const RESUME_URL = '#';

export function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section id="top" className="hero">
      <div className="hero__photo">
        {!photoFailed && (
          <img
            src="/images/portrait.jpg"
            alt="Add photo"
            onError={() => setPhotoFailed(true)}
          />
        )}
        {photoFailed && <span>Your photo</span>}
      </div>
      <div className="hero__divider" />
      <div className="hero__content">
        <div className="hero__eyebrow">Data Science &middot; UC Berkeley &middot; Class of 2027</div>
        <h1 className="hero__name">Nahee Jeong</h1>
        <p className="hero__tagline">
          Fourth-year at UC Berkeley, building things at the edge of statistics, code, and curiosity.
        </p>
        <p className="hero__bio">
          I'm a data science student who spends most days moving between research papers, class
          problem sets, and side projects &mdash; and most evenings between the climbing gym, a
          darkroom, and a piano. This page is a living record of what I've
          built, studied, and been curious about, kept mostly for myself and occasionally shown to
          people who ask what I do.
        </p>
        <div className="hero__links">
          <a href={`mailto:${EMAIL}`} className="hero__link">
            <EmailIcon />
            {EMAIL}
          </a>
          <span className="hero__separator">&middot;</span>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hero__link">
            <GitHubIcon />
            GitHub
          </a>
          <span className="hero__separator">&middot;</span>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="hero__link">
            <LinkedInIcon />
            LinkedIn
          </a>
          <span className="hero__separator">&middot;</span>
          <a href={RESUME_URL} className="hero__link">
            <ResumeIcon />
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
