// ---- Terminal animado ----
const lines=[
 '<span class="k">public class</span> Jessica {',
 '  <span class="k">public static void</span> main(String[] args) {',
 '    <span class="c">// executando...</span>',
 '  }',
 '}',
 '',
 '<span class="y">$</span> java Jessica',
 '<span class="s">Olá, mundo! Sou a Jessica.</span>',
 '<span class="s">Stack: Java · Spring Boot · React</span>',
 '<span class="s">Status: aberta a estágio e vagas júnior</span>',
 '<span class="y">$</span> <span class="cur"></span>'
];
const out=document.getElementById('out');
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const strip=h=>{const d=document.createElement('div');d.innerHTML=h;return d.textContent};
const wait=ms=>new Promise(r=>setTimeout(r,ms));
async function run(){
  if(reduce){out.innerHTML=lines.join('\n');return}
  let shown='';
  for(const l of lines){
    const plain=strip(l);
    if(l.includes('cur')){out.innerHTML=shown+l;return}
    const typed=plain.startsWith('$')||plain.startsWith(' ')||plain.startsWith('public')||plain==='}';
    if(typed){for(let i=1;i<=plain.length;i++){out.textContent=strip(shown)+plain.slice(0,i);await wait(18)}}
    else await wait(350);
    shown+=l+'\n';out.innerHTML=shown;
    await wait(typed?120:60);
  }
}
run();

// ---- Cards de projetos ----
document.querySelectorAll('.card button').forEach(b=>b.addEventListener('click',()=>{
  const open=b.parentElement.toggleAttribute('open-card');
  b.setAttribute('aria-expanded',open);
}));

// ---- Aparecer ao rolar ----
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));

// ---- Destaca o item do menu da seção visível ----
const links=[...document.querySelectorAll('.menu a')];
const so=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting)links.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id));
}),{rootMargin:'-40% 0px -55% 0px'});
document.querySelectorAll('section[id]').forEach(s=>so.observe(s));
