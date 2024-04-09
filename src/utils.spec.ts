import { describe, it, expect } from "vitest";
import { convertStringToTags, createId } from "./utils";

describe("convertStringToTags()", () => {
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
    // implement me
  });
});
