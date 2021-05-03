import { calculateBiorhythms } from './calculations';

it('calculates the physical biorhythm', () => {
  const { physical } = calculateBiorhythms('1995-01-01', '2021-05-03');
  expect(physical).toBeCloseTo(0.9791);
});

it('calculates the emotional biorhythm', () => {
  const { emotional } = calculateBiorhythms('1995-01-01', '2021-05-03');
  expect(emotional).toBeCloseTo(-0.2225);
});

it('calculates the intellectual biorhythm', () => {
  const { intellectual } = calculateBiorhythms('1995-01-01', '2021-05-03');
  expect(intellectual).toBeCloseTo(0.0951);
});
