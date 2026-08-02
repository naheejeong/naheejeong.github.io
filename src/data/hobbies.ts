export interface Hobby {
  id: string;
  name: string;
  /** Filename under /public/images/, e.g. 'climbing.jpg'. Empty until a real photo is added. */
  image?: string;
}

// TODO: drop real photos into public/images/ and set each `image` filename.

export const hobbies: Hobby[] = [
  { id: 'h1', name: 'Rock Climbing' },
  { id: 'h2', name: 'Film Photography' },
  { id: 'h3', name: 'Home Baking' },
  { id: 'h4', name: 'Ceramics' },
  { id: 'h5', name: 'Trail Running' },
  { id: 'h6', name: 'Jazz Piano' },
];
