'use strict';
// All numerical values below are transcribed from Tables 1–5 of the supplied WACV 2027 manuscript.
const datasets = {
  sfda: {
    office31: [['Source Only',81.90],['SHOT',88.60],['NRC',89.40],['AaD',89.90],['CoWA-JMDS',90.30],['TransDA',90.70],['DGA-CAFC (ours)',91.65]],
    officehome: [['Source Only',71.47],['SHOT',71.80],['NRC',72.20],['AaD',72.70],['CoWA-JMDS',72.50],['TVT',78.90],['TransDA',79.30],['DGA-CAFC (ours)',79.75]],
    domainnet: [['Source Only',79.98],['SHOT',79.10],['EKS',83.74],['TransDA',86.31],['DGA-CAFC (ours)',87.49]]
  },
  dg: {
    pacs: [['ERM',79.12],['ERM + CAFC',81.47],['CORAL',81.50],['CORAL + CAFC',82.27],['Mixup',83.63],['Mixup + CAFC',84.54],['GroupDRO',81.43],['GroupDRO + CAFC',82.94],['VREx',79.77],['VREx + CAFC',80.84]],
    vlcs: [['ERM',77.29],['ERM + CAFC',80.42],['CORAL',77.72],['CORAL + CAFC',78.88],['Mixup',78.83],['Mixup + CAFC',79.69],['GroupDRO',77.27],['GroupDRO + CAFC',78.76],['MMD',77.63],['MMD + CAFC',79.27]]
  }
};
function renderChart(group, dataset){
 const target=document.getElementById(group+'-chart'); if(!target)return;
 target.replaceChildren();
 for(const [label,value] of datasets[group][dataset]){
  const highlight=label.includes('(ours)')||(group==='dg'&&label.includes('+ CAFC'));
  const row=document.createElement('div');row.className='bar-row'+(highlight?' highlight':'');row.title=label+': '+value.toFixed(2)+'%';
  const name=document.createElement('span');name.className='bar-label';name.textContent=label;
  const track=document.createElement('div');track.className='bar-track';
  const fill=document.createElement('div');fill.className='bar-fill'+(highlight?' ours':'');fill.style.width=value+'%';track.append(fill);
  const val=document.createElement('span');val.className='bar-value';val.textContent=value.toFixed(2)+'%';
  row.append(name,track,val);target.append(row);
 }
 target.setAttribute('aria-label',(group==='sfda'?'SFDA':'Domain generalization')+' accuracy comparison for '+dataset);
}
for(const group of ['sfda','dg'])renderChart(group,group==='sfda'?'office31':'pacs');
document.querySelectorAll('.tab').forEach(tab=>tab.addEventListener('click',()=>{
 const {group,dataset}=tab.dataset;
 document.querySelectorAll('.tab[data-group="'+group+'"]').forEach(b=>{b.classList.toggle('active',b===tab);b.setAttribute('aria-selected',String(b===tab));});
 renderChart(group,dataset);
}));
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('#site-nav');
toggle.addEventListener('click',()=>{const opened=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(opened));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));
if('IntersectionObserver' in window){const o=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');o.unobserve(entry.target);}}),{threshold:.07});document.querySelectorAll('.reveal').forEach(el=>o.observe(el));}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));}
const secObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){document.querySelectorAll('nav a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id));}}),{rootMargin:'-25% 0px -60% 0px'});
document.querySelectorAll('main section[id]').forEach(s=>secObserver.observe(s));
