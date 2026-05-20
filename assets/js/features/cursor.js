import{qs}from'../utils/dom.js';
/**
 * Mirrors the soft glowing cursor from the Angular Vorlage.
 * It only updates the decorative cursor element inside the hero.
 */
export const initCursor=()=>{const c=qs('#cursor');if(c)document.onmousemove=e=>moveCursor(c,e);};
/**
 * Places the glow at the current pointer position.
 * The CSS pseudo element renders the actual blurred light.
 */
const moveCursor=(cursor,event)=>{cursor.style.top=`${event.clientY}px`;cursor.style.left=`${event.clientX}px`;};
