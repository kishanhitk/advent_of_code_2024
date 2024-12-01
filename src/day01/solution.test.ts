import { describe, expect, test } from "bun:test";
import { readInput } from "../utils/input";
import { part1, part2 } from "./solution";

const day = "01";

describe("Day 01", () => {
  const example = `3   4
4   3
2   5
1   3
3   9
3   3`; // Replace with example input

  test("part 1 - example", () => {
    expect(part1(example)).toBe(11); // Replace with expected result
  });

  test("part 1 - input", () => {
    const input = readInput(day);
    expect(part1(input)).toBe(0); // Replace with expected result
  });

  test("part 2 - example", () => {
    expect(part2(example)).toBe(31); // Replace with expected result
  });

  test("part 2 - input", () => {
    const input = readInput(day);
    expect(part2(input)).toBe(0); // Replace with expected result
  });
});
