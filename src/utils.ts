export const generatePositiveGradientData = (
  target: number
): { value: number }[] => {
  const data: { value: number }[] = [];
  let value = 0;
  const steps = 5;
  const totalIncrement = target / ((steps * (steps + 1)) / 2);

  for (let i = 0; i < 3; i++) {
    data.push({ value });
  }

  for (let i = 1; i <= steps; i++) {
    value += i * totalIncrement;
    data.push({ value });
  }

  if (data.length > 0) {
    data[data.length - 1] = { value: target };
  }

  return data;
};
