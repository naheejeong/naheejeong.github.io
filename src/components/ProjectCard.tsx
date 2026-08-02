import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="card">
      <div className="card__body">
        <div className="card__top">
          <span className="card__date">{project.date}</span>
          <span className="card__status">{project.status}</span>
        </div>
        <h3 className="card__title">{project.title}</h3>
        <p className="card__desc">{project.description}</p>
        <div className="card__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="card__tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="card__links">
          {project.links.map((link) => (
            <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
