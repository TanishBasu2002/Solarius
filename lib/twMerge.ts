// Simple tailwind merge implementation
export function twMerge(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}
