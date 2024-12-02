import { readInput, readLines } from "../utils/input";

const day = "02";

function isSafe(report: number[]): boolean {
  const allIncreasing = report.every(
    (level, index) => index === 0 || report[index - 1] < level
  );
  const allDecreasing = report.every(
    (level, index) => index === 0 || report[index - 1] > level
  );

  const isDiffBetweenOneAndThree = report.every(
    (level, index) =>
      index === 0 ||
      (Math.abs(report[index - 1] - level) <= 3 &&
        Math.abs(report[index - 1] - level) >= 1)
  );
  return (allIncreasing || allDecreasing) && isDiffBetweenOneAndThree;
}

function part1(input: string): number {
  const lines = input.split("\n");
  const reports = lines.map((line) => line.split(" ").map(Number));
  const safeReports = reports.filter((report) => isSafe(report));
  return safeReports.length;
}

function part2(input: string): number {
  const lines = input.split("\n");
  const reports = lines.map((line) => line.split(" ").map(Number));
  let safeCount = 0;
  for (let i = 0; i < reports.length; i++) {
    if (isSafe(reports[i])) {
      safeCount++;
    } else {
      for (let j = 0; j < reports[i].length; j++) {
        const duplicateArray = Array.from(reports[i]);
        duplicateArray.splice(j, 1);
        if (isSafe(duplicateArray)) {
          safeCount++;
          break;
        }
      }
    }
  }
  return safeCount;
}

if (import.meta.main) {
  const input = readInput(day);

  console.log(`Day ${day}:`);

  const start1 = performance.now();
  const result1 = part1(input);
  const end1 = performance.now();
  console.log(`Part 1: ${result1}`);
  console.log(`Time: ${(end1 - start1).toFixed(2)}ms`);
  console.log(`Memory: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
    2
  )}MB
`);

  const start2 = performance.now();
  const result2 = part2(input);
  const end2 = performance.now();
  console.log(`Part 2: ${result2}`);
  console.log(`Time: ${(end2 - start2).toFixed(2)}ms`);
  console.log(
    `Memory: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB`
  );
}

export { part1, part2 };
