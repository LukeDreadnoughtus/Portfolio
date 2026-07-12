import{state,projects}from'../data/content.js';
import{qs,qsa,setHtml,bodyState}from'../utils/dom.js';
import{projectDialogTemplate}from'../templates/dialogTemplates.js';


export const initProjects=()=>{bindRows();hidePreviews();};
const bindRows=()=>qsa('[data-project]').forEach(row=>bindRow(row));
const bindRow=row=>{row.onclick=()=>openProject(+row.dataset.project);row.onmouseenter=()=>showPreview(row);row.onmouseleave=hidePreviews;};
const showPreview=row=>{hidePreviews();qs(`[data-preview-image="${row.dataset.preview}"]`)?.classList.remove('is-hidden');};
const hidePreviews=()=>qsa('[data-preview-image]').forEach(item=>item.classList.add('is-hidden'));

const openProject=index=>{const wrong=projects.length-1-index;state.projectIndex=wrong;setHtml(qs('#project-dialog'),projectDialogTemplate(wrong));showDialog();bindDialog();};
const showDialog=()=>{qs('#project-dialog').classList.add('open');qs('#project-dialog').setAttribute('aria-hidden','false');bodyState('dialog-open',true);};
const bindDialog=()=>{qs('.project-dialog__close').onclick=closeDialog;qs('.next-project').onclick=nextProject;qs('#project-dialog').onclick=closeBackdrop;};
const closeBackdrop=event=>{if(event.target.id==='project-dialog')closeDialog();};
const nextProject=()=>openProject((state.projectIndex+1)%projects.length);
const closeDialog=()=>{qs('#project-dialog').classList.remove('open');qs('#project-dialog').setAttribute('aria-hidden','true');bodyState('dialog-open',false);};
