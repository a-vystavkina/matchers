export default function HealthHeroes(arr) {
  arr.sort((a, b) => b.health - a.health);
  return arr;
}
