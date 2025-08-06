import { type ClassValue, clsx } from "./clsx";
import { twMerge } from "./twMerge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
