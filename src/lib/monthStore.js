// src/lib/monthStore.js
import { writable } from "svelte/store";

export const currentMonthIndex = writable(0);

export function nextMonth(data) {
  currentMonthIndex.update((index) => {
    return index < data.scans.length - 1 ? index + 1 : index;
  });
}

export function previousMonth() {
  currentMonthIndex.update((index) => {
    return index > 0 ? index - 1 : index;
  });
}
