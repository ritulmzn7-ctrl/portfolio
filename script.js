const menu=document.querySelector('.hamburger'),nav=document.querySelector('.nav');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const reveal=document.querySelectorAll('.service-card,.expertise-grid article,.job,.credential,.research-card,.credentials-grid>div');
reveal.forEach((el,i)=>{el.style.opacity='0';el.style.transform='translateY(18px)';el.style.transition=`opacity .65s ease ${i*40}ms,transform .65s ease ${i*40}ms`});
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.style.opacity='1';e.target.style.transform='translateY(0)';io.unobserve(e.target)}}),{threshold:.1});
reveal.forEach(e=>io.observe(e));
