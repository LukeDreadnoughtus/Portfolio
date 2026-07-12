import{qs}from'../utils/dom.js';

export const initCursor=()=>{const c=qs('#cursor');if(c)document.onmousemove=e=>moveCursor(c,e);};

const moveCursor=(cursor,event)=>{cursor.style.top=`${event.clientX}px`;cursor.style.left=`${event.clientY}px`;};
