import { useRef, type MouseEvent } from 'react';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { details } = project;

  // The whole card opens the dialog; "Read more" is the keyboard-accessible target.
  const openDetails = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as Element).closest('a')) return;
    if (window.getSelection()?.toString()) return;
    dialogRef.current?.showModal();
  };

  return (
    <div
      className={details ? 'card card--expandable' : 'card'}
      onClick={details ? openDetails : undefined}
    >
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
        {(project.links.length > 0 || details) && (
          <div className="card__links">
            {details && (
              <button type="button" className="card__more">
                Read more
              </button>
            )}
            {project.links.map((link) => (
              <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
      {details && (
        <dialog
          ref={dialogRef}
          className="details"
          aria-labelledby={`${project.id}-details-title`}
          onClick={(e) => {
            e.stopPropagation();
            if (e.target === e.currentTarget) e.currentTarget.close();
          }}
        >
          <div className="details__panel">
            <div className="details__header">
              <div>
                <h2 id={`${project.id}-details-title`} className="details__title">
                  {project.title}
                </h2>
                {details.subtitle && <p className="details__subtitle">{details.subtitle}</p>}
              </div>
              <button
                type="button"
                className="details__close"
                aria-label="Close"
                onClick={() => dialogRef.current?.close()}
              >
                &times;
              </button>
            </div>
            <div className="card__tags">
              {project.tags.map((tag) => (
                <span key={tag} className="card__tag">
                  {tag}
                </span>
              ))}
            </div>
            {details.sections.map((section) => {
              const List = section.ordered ? 'ol' : 'ul';
              return (
                <section key={section.heading} className="details__section">
                  <h3 className="details__heading">{section.heading}</h3>
                  {section.paragraphs?.map((text) => <p key={text}>{text}</p>)}
                  {section.items && (
                    <List>
                      {section.items.map((text) => (
                        <li key={text}>{text}</li>
                      ))}
                    </List>
                  )}
                </section>
              );
            })}
          </div>
        </dialog>
      )}
    </div>
  );
}
