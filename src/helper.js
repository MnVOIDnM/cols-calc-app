export const getRandom = (min, max) => {
  const random = Math.floor(Math.random() * (max + 1 - min)) + min;
  return random;
};
