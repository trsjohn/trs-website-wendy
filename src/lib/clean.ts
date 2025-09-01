export function cleanText(s?: string | null): string {
  if (!s) return "";
  return s
    .replace(/[\uFFFD\u0000-\u001F\u007F]/g, " ")
    .replace(/[""]/g, '"')
    .replace(/['']/g, "'")
    .replace(/[–—]/g, "-")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function cleanList(arr?: string[]): string[] {
  if (!Array.isArray(arr)) return [];
  return arr.map(x => cleanText(String(x || ""))).filter(Boolean);
}
