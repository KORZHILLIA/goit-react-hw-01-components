export default function getComma(number) {
  const string = String(number);
  return `${string.slice(0, 1)},${string.slice(1)}`;
}
