import { describe, expect, test } from "vitest";
import {
  unixTimeInDays,
  unixTimeInHours,
  unixTimeInMinutes,
  unixTimeInSeconds,
} from "../index";

describe("unix-time-utils", () => {
  test("unixTimeInSeconds adds seconds correctly", () => {
    const now = Math.floor(Date.now() / 1000);
    expect(unixTimeInSeconds(10)).toBeCloseTo(now + 10, 1);
  });

  test("unixTimeInMinutes adds minutes correctly", () => {
    const now = Math.floor(Date.now() / 1000);
    expect(unixTimeInMinutes(5)).toBeCloseTo(now + 300, 1);
  });

  test("unixTimeInHours adds hours correctly", () => {
    const now = Math.floor(Date.now() / 1000);
    expect(unixTimeInHours(1)).toBeCloseTo(now + 3600, 1);
  });

  test("unixTimeInDays adds days correctly", () => {
    const now = Math.floor(Date.now() / 1000);
    expect(unixTimeInDays(1)).toBeCloseTo(now + 86400, 1);
  });
});
