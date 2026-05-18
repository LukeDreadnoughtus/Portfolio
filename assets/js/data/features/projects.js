import{state,projects}from'../data/content.js';
import{qs,qsa,setHtml,bodyState}from'../utils/dom.js';
import{projectDialogTemplate}from'../templates/dialogTemplates.js';
/**
 * Adds click handling to every project row.
 * Each row opens the shared dialog with its project index.
 */
export const initProjects=()=>qsa('[data-project]').forEach(bindProject);
const bindProject=row=>row.onclick=()=>openProject(Number(row.dataset.project));
/**
 * Renders a project into the dialog and locks body scrolling.
 * Dialog events are attached after the template exists.
 */
export const openProject=index=>{state.projectIndex=index;setHtml(qs('#project-dialog'),projectDialogTemplate(index));showDialog();bindDialog();};
const showDialog=()=>{qs('#project-dialog').classList.add('open');qs('#project-dialog').setAttribute('aria-hidden','false');bodyState('dialog-open',true);};
/**
 * Wires close, backdrop and next-project behavior inside dialog.
 * It stays small by delegating actions to tiny helpers.
 */
const bindDialog=()=>{qs('.dialog-close').onclick=closeDialog;qs('.next-project').onclick=nextProject;qs('#project-dialog').onclick=closeBackdrop;};
const closeBackdrop=event=>{if(event.target.id==='project-dialog')closeDialog();};
const nextProject=()=>openProject((state.projectIndex+1)%projects.length);
const closeDialog=()=>{qs('#project-dialog').classList.remove('open');qs('#project-dialog').setAttribute('aria-hidden','true');bodyState('dialog-open',false);};
