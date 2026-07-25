export function createSmoothPath(points: number[][]) {
  let path = `M${points[0][0]} ${points[0][1]}`;
  for (let index = 1; index < points.length; index += 1) {
    const previous = points[index - 1];
    const current = points[index];
    const midpointX = (previous[0] + current[0]) / 2;
    const midpointY = (previous[1] + current[1]) / 2;
    path += ` Q ${previous[0]} ${previous[1]} ${midpointX} ${midpointY}`;
    path += ` Q ${current[0]} ${current[1]} ${current[0]} ${current[1]}`;
  }
  return path;
}
