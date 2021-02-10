export const getBoardSize = (windowWidth, windowHeight) => {
  const width = Math.round(0.9 * windowWidth);
  const height = Math.round(0.9 * windowHeight);

  if (closestInteger(width, 8) > closestInteger(height, 8)) return { height: closestInteger(height, 8), width: closestInteger(height, 8) };
  else return { height: closestInteger(width, 8), width: closestInteger(width, 8) };
};

const closestInteger = (a, b) => {
    let c1 = a - (a % b);
    let c2 = (a + b) - (a % b);
    if (a - c1 > c2 - a) {
        return c2;
    } else {
        return c1;
    }
}
