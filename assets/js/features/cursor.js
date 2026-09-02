import { qs } from '../utils/dom.js';

/**
 * Initializes the custom glowing cursor effect.
 * Mouse movement is tracked only when the cursor element exists.
 */
export const initCursor = () => {
  const cursor = qs('#cursor');
  if (!cursor) return;
  document.onmousemove = event => moveCursor(cursor, event);
};

/**
 * Moves the decorative cursor to the current mouse position.
 * The element follows the pointer by updating its top and left styles.
 */
const moveCursor = (cursor, event) => {
  cursor.style.top = `${event.clientY}px`;
  cursor.style.left = `${event.clientX}px`;
};
