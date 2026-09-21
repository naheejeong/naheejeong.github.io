export interface Hobby {
  id: string;
  name: string;
  emoji: string;
}

export const hobbies: Hobby[] = [
  { id: 'h1', name: 'Night Walks', emoji: '🌙' },
  { id: 'h2', name: 'Prose Writing', emoji: '✍️' },
  { id: 'h3', name: 'Laundry', emoji: '🧺' },
  { id: 'h4', name: 'Cafe Exploring', emoji: '☕' },
  { id: 'h5', name: 'Running', emoji: '🏃' },
  { id: 'h6', name: 'Documentary Watching', emoji: '🎬' },
];
