import type { Hobby } from '../data/hobbies';

interface HobbiesSectionProps {
  hobbies: Hobby[];
}

export function HobbiesSection({ hobbies }: HobbiesSectionProps) {
  return (
    <section id="hobbies" className="hobbies">
      <div className="section__eyebrow" style={{ color: 'var(--color-accent)' }}>
        Off the Clock
      </div>
      <h2 className="section__title" style={{ fontWeight: 600, fontSize: 32, marginBottom: 12 }}>
        Hobbies &amp; Interests
      </h2>
      <p className="hobbies__subtitle">
        The other half of the ledger &mdash; kept here mostly so I remember to keep doing it.
      </p>
      <div className="hobbies__list">
        {hobbies.map((hobby, index) => (
          <div key={hobby.id} className="hobby">
            <div
              className={`hobby__photo ${index % 2 === 0 ? 'hobby__photo--navy' : 'hobby__photo--gold'}`}
              aria-hidden="true"
            >
              <span className="hobby__emoji">{hobby.emoji}</span>
            </div>
            <div className="hobby__name">{hobby.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
