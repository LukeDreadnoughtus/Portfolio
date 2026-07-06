
export const qs=(selector,parent=document)=>parent.querySelector(selector);

export const qsa=(selector,parent=document)=>[...parent.querySelectorAll(selector)];

export const setHtml=(element,html)=>{if(element)element.innerHTML=html;};

export const bodyState=(name,active)=>document.body.classList.toggle(name,active);
