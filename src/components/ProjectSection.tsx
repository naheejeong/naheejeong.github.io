import type { Project } from '../data/projects';
import { ProjectCard } from './ProjectCard';

interface ProjectSectionProps {
  id: string;
  numeral: string;
  numeralSide: 'left' | 'right';
  eyebrow: string;
  title: string;
  accent: 'navy' | 'gold';
  tinted?: boolean;
  projects: Project[];
}

export function ProjectSection({
  id,
  numeral,
  numeralSide,
  eyebrow,
  title,
  accent,
  tinted = false,
  projects,
}: ProjectSectionProps) {
  const accentColor = accent === 'gold' ? 'var(--color-gold)' : 'var(--color-accent)';

  const numeralEl = (
    <div className={`section__numeral section__numeral--${numeralSide}`} style={{ color: accentColor }}>
      {numeral}
    </div>
  );

  const body = (
    <div className="section__body">
      <div className="section__eyebrow" style={{ color: accentColor }}>
        {eyebrow}
      </div>
      <h2 className="section__title">{title}</h2>
      <div className="section__grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );

  if (tinted) {
    return (
      <section
        id={id}
        className="section section--tinted"
        style={{ background: 'var(--color-section-tint)' }}
      >
        {numeralEl}
        <div className="section__inner">{body}</div>
      </section>
    );
  }

  return (
    <section id={id} className="section">
      {numeralEl}
      {body}
    </section>
  );
}
