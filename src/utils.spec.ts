import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import { convertStringToTags, createId } from "./utils";

describe("convertStringToTags()", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should return a list of tags", () => {
    expect(convertStringToTags("hello,bye,something")).toEqual([
      "hello",
      "bye",
      "something",
    ]);
  });

  it("should handle a single tag", () => {
    expect(convertStringToTags("hello")).toEqual(["hello"]);
  });

  it("should exclude duplicates", () => {
    expect(convertStringToTags("hello,hello")).toEqual(["hello"]);
  });

  it("should exclude falsy tag values", () => {
    expect(convertStringToTags(",,,,,hello,,,,")).toEqual(["hello"]);
    expect(convertStringToTags("")).toEqual([]);
  });

  it("should trim white spaces", () => {
    expect(convertStringToTags("   hello   , bye  ")).toEqual(["hello", "bye"]);
  });
});

describe("createId", () => {
  it("should return a number", () => {
    const fakeDate = new Date(2024, 1, 1, 12);
    vi.setSystemTime(fakeDate);

    expect(createId()).toEqual(1706788800000);
  });
});
