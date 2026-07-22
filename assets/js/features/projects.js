import{state,projects}from'../data/content.js';
import{qs,qsa,setHtml,bodyState}from'../utils/dom.js';
import{projectDialogTemplate}from'../templates/dialogTemplates.js';

export const initProjects=()=>{bindRows();hidePreviews();};
const bindRows=()=>qsa('[data-project]').forEach(row=>bindRow(row));
const bindRow=row=>{row.onclick=()=>openProject(+row.dataset.project);row.onmouseenter=()=>showPreview(row);row.onmouseleave=hidePreviews;};
const showPreview=row=>{hidePreviews();qs(`[data-preview-image="${row.dataset.preview}"]`)?.classList.remove('is-hidden');};
const hidePreviews=()=>qsa('[data-preview-image]').forEach(item=>item.classList.add('is-hidden'));
