interface Gradient {
  colors: string[];
  locations: number[];
  backgroundColor?: string;
  start: { x: number; y: number };
  end: { x: number; y: number };
  id: number;
}

const gradientsList: Record<Gradients, Gradient> = {
  gradientPurple: {
    colors: ['#dd7ddb', '#98a4ff'],
    locations: [0.04, 0.53],
    start: { x: 0, y: 1 },
    end: { x: 0.58, y: 0 },
    id: 0,
  },
  gradientDefaultHabit: {
    colors: ['#A7FFFA', '#EBF1A2'],
    locations: [0, 1],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
    id: 50,
  },
  gradientDefaultTask: {
    colors: ['#f1f1f1', '#f1f1f1'],
    backgroundColor: '#ffffff',
    locations: [0, 1],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
    id: 50,
  },
  gradientGreen: {
    colors: ['#96C8C6', '#94F380'],
    locations: [0.2, 1],
    start: { x: 0, y: 1 },
    end: { x: 0.9, y: 0 },
    id: 1,
  },
  gradientRainbow: {
    colors: ['#9CF2F8', '#EB9CF8', '#F8F49C'],
    backgroundColor: '#F8F49C',
    locations: [0, 0.47, 1],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
    id: 2,
  },
  gradientSunrise: {
    colors: ['#a7fffa', '#ebf1a2'],
    locations: [0.04, 0.96],
    start: { x: 0, y: 0.2 },
    end: { x: 1, y: 1 },
    id: 3,
  },
  gradientOrange: {
    colors: ['#FFec7d', '#FFac7d'],
    locations: [0.04, 0.96],
    start: { x: 0, y: 0.5 },
    end: { x: 0.7, y: 1 },
    id: 4,
  },
  solidOrange: {
    colors: ['#F8C35D', '#F8C35D'],
    locations: [0, 1],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 0 },
    id: 4,
  },
  gradientYellow: {
    colors: ['#F8F49C', '#F8F49C'],
    locations: [0.04, 0.96],
    start: { x: 0, y: 0.5 },
    end: { x: 0.7, y: 1 },
    id: 5,
  },
  // experimental
  waterGradient: {
    colors: ['#91F2E1', '#55D6E5'],
    locations: [0.04, 0.96],
    start: { x: 0, y: 1 },
    end: { x: 1, y: 0 },
    id: 50,
  },
};

const handler = {
  get: function (target: Record<Gradients, Gradient>, name: Gradients) {
    return target.hasOwnProperty(name) ? target[name] : gradientsList.gradientPurple;
  },
};
const gradients = new Proxy(gradientsList, handler);

export type Gradients =
  | 'gradientPurple'
  | 'gradientGreen'
  | 'gradientRainbow'
  | 'gradientSunrise'
  | 'gradientOrange'
  | 'waterGradient'
  | 'gradientDefaultHabit'
  | 'gradientDefaultTask'
  | 'solidOrange'
  | 'gradientYellow';

// Used by HappyPost in DB (stored as index) and by happy post background change
// Problems in future: not all gradients available for posting. Solution: more arrays,
// we love arrays.
export const gradientsArray = [
  'gradientPurple',
  'gradientGreen',
  'gradientRainbow',
  'gradientSunrise',
  'gradientOrange',
];

export const gradientsId: Record<number, Gradients> = {
  // Happy posts
  0: 'gradientPurple',
  1: 'gradientGreen',
  2: 'gradientRainbow',
  3: 'gradientSunrise',
  4: 'gradientOrange',
  5: 'waterGradient',
  // Habitos / Tareas
  50: 'gradientDefaultHabit',
  51: 'gradientDefaultTask',
  52: 'gradientDefaultHabit', // sunrise
  53: 'gradientRainbow',
  54: 'solidOrange',
};

export const getGradientById = (id: number) => {
  if (id in gradientsId) {
    // @ts-ignore
    return gradients[gradientsId[id]];
  }

  return gradients.gradientPurple;
};

export { gradients as default };
