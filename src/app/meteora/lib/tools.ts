export function getRandomGameCityColor() {
  const colors = ["#1E90FF", "#DC143C", "#32CD32", "#FFD700", "#708090"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
