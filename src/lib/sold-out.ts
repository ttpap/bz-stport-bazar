const STORAGE_KEY = "bz-sports-sold-out";

export function getSoldOutIds(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function toggleSoldOut(id: string): string[] {
  const ids = getSoldOutIds();
  const next = ids.includes(id)
    ? ids.filter((x) => x !== id)
    : [...ids, id];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  return next;
}

export function isSoldOut(id: string, soldOutIds: string[]): boolean {
  return soldOutIds.includes(id);
}
