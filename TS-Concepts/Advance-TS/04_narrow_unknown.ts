function range(start: number, end: number): number[];
function range(start: unknown, end: unknown): number[] {
  if (typeof start !== 'number' || typeof end !== 'number') {
    throw new Error('Incorrect type');
  }
  const result: number[] = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}

console.log(range(1, 10));
