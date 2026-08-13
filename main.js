constm=document.querySelector('.menu'),
n=document.querySelector('.links');
if(m)m.onclick=()=>n.classList.toggle('open');
document.querySelectorAll('.links a').forEach(a=>a.onclick=()=>n.classList.remove('open'));
document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());