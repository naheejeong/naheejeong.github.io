import { useState } from 'react';
import type { Hobby } from '../data/hobbies';

interface HobbyPhotoProps {
  hobby: Hobby;
}

function HobbyPhoto({ hobby }: HobbyPhotoProps) {
  const [failed, setFailed] = useState(!hobby.image);

  if (failed || !hobby.image) {
    return (
      <div className="hobby__photo">
        <span>Add photo</span>
      </div>
    );
  }

  return (
    <div className="hobby__photo">
      <img src={`/images/${hobby.image}`} alt="Add photo" onError={() => setFailed(true)} />
    </div>
  );
}

interface HobbiesSectionProps {
  hobbies: Hobby[];
}

export function HobbiesSection({ hobbies }: HobbiesSectionProps) {
  return (
    <section id="hobbies" className="hobbies">
      <div className="section__eyebrow" style={{ color: 'var(--color-accent)' }}>
        Off the Clock
      </div>
      <h2 className="section__title" style={{ fontWeight: 600, fontSize: 32 }}>
        Hobbies &amp; Interests
      </h2>
      <p className="hobbies__subtitle">
        The other half of the ledger &mdash; kept here mostly so I remember to keep doing it.
      </p>
      <div className="hobbies__list">
        {hobbies.map((hobby) => (
          <div key={hobby.id} className="hobby">
            <HobbyPhoto hobby={hobby} />
            <div className="hobby__name">{hobby.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
