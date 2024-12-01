import { readInput, readLines } from "../utils/input";

const day = "01";

function part1(input: string): number {
  const lines = input.split("\n");
  let numbers1 = lines.map((line) => parseInt(line.split("   ")[0]));
  let numbers2 = lines.map((line) => parseInt(line.split("   ")[1]));
  numbers1.sort((a, b) => a - b);
  numbers2.sort((a, b) => a - b);

  let totalDistance = 0;

  for (let i = 0; i < numbers1.length; i++) {
    totalDistance += Math.abs(numbers1[i] - numbers2[i]);
  }

  return totalDistance;
}

function part2(input: string): number {
  const lines = input.split("\n");
  let numbers1 = lines.map((line) => parseInt(line.split("   ")[0]));
  let numbers2 = lines.map((line) => parseInt(line.split("   ")[1]));

  const rightOccurenceCount = new Map<number, number>();

  for (let i = 0; i < numbers2.length; i++) {
    rightOccurenceCount.set(
      numbers2[i],
      (rightOccurenceCount.get(numbers2[i]) || 0) + 1
    );
  }

  let similarityScore = 0;

  for (let i = 0; i < numbers1.length; i++) {
    const rightOccurence = rightOccurenceCount.get(numbers1[i]);
    if (rightOccurence) {
      similarityScore += numbers1[i] * rightOccurence;
    }
  }

  return similarityScore;
}

if (import.meta.main) {
  const input = readInput(day);
  console.log(`Day ${day} Part 1: ${part1(input)}`);
  console.log(`Day ${day} Part 2: ${part2(input)}`);
}

export { part1, part2 };
