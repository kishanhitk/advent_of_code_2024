import { describe, expect, test } from "bun:test";
import { readInput } from '../utils/input';
import { part1, part2 } from './solution';

const day = '02';

describe('Day 02', () => {
    const example = `EXAMPLE_INPUT_HERE`;  // Replace with example input

    test('part 1 - example', () => {
        const result = part1(example);
        console.log('Example result:', result);
        // Uncomment and update if you have expected output:
        // expect(result).toBe(0);
    });

    test('part 1 - input', () => {
        const input = readInput(day);
        const result = part1(input);
        console.log('Your input result:', result);
    });

    test('part 2 - example', () => {
        const result = part2(example);
        console.log('Example result:', result);
        // Uncomment and update if you have expected output:
        // expect(result).toBe(0);
    });

    test('part 2 - input', () => {
        const input = readInput(day);
        const result = part2(input);
        console.log('Your input result:', result);
    });
});