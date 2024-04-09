/*
 * This function converts a comma separated string to a list of unique, trimmed strings.
 */
export function convertStringToTags(entry: string): string[] {
  if (!entry) return [];

  const tags = entry
    .split(",")
    .filter((tag) => tag !== "")
    .map((tag) => tag.trim());

  const uniqueTags = [...new Set(tags)]

  return uniqueTags || [];
}

export function createId(): number {
  return Date.now();
}
