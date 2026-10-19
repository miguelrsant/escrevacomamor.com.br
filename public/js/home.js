window.EA_PHOTOSETS={"pedido": [{"bg": "var(--pedido0) center 60%/cover", "cap": "nosso primeiro jantar", "d": "jul 2026"}, {"bg": "var(--pedido1) center 30%/cover", "cap": "as flores do primeiro encontro", "d": "ago 2026"}, {"bg": "var(--pedido2) center 40%/cover", "cap": "vem comigo?", "d": "ago 2026"}, {"bg": "var(--pedido3) center 50%/cover", "cap": "a noite das velinhas", "d": "set 2026"}, {"bg": "var(--pedido4) center 40%/cover", "cap": "piquenique a dois", "d": "set 2026"}, {"bg": "var(--pedido5) center 30%/cover", "cap": "rindo à toa", "d": "out 2026"}], "sair": [{"bg": "var(--sair0) center/cover", "cap": "o barzinho", "d": "sábado"}, {"bg": "var(--sair1) center/cover", "cap": "o cinema", "d": "sábado"}, {"bg": "var(--sair2) center/cover", "cap": "o jantar", "d": "sábado"}, {"bg": "var(--sair3) center/cover", "cap": "a praia", "d": "sábado"}, {"bg": "var(--sair4) center/cover", "cap": "o piquenique", "d": "sábado"}, {"bg": "var(--sair5) center/cover", "cap": "o café", "d": "sábado"}, {"bg": "var(--sair6) center/cover", "cap": "o show", "d": "sábado"}, {"bg": "var(--sair7) center/cover", "cap": "o sorvete", "d": "sábado"}], "amigos": [{"bg": "var(--amigos0) center 30%/cover", "cap": "a gente na praia", "d": "jan 2024"}, {"bg": "var(--amigos1) center/cover", "cap": "a turma toda", "d": "dez 2023"}, {"bg": "var(--amigos2) center/cover", "cap": "a viagem de carro", "d": "jul 2022"}, {"bg": "var(--amigos3) center/cover", "cap": "o show da vida", "d": "mar 2019"}, {"bg": "var(--amigos4) center 30%/cover", "cap": "aquele abraço", "d": "set 2025"}, {"bg": "var(--amigos5) center/cover", "cap": "a foto mais antiga", "d": "1998"}], "homenagem": [{"bg": "var(--homenagem0) center 40%/cover", "cap": "a vó e a netinha", "d": "2023"}, {"bg": "var(--homenagem1) center 25%/cover", "cap": "vovó e vovô", "d": "2022"}, {"bg": "var(--homenagem2) center/cover", "cap": "o almoço de domingo", "d": "2024"}, {"bg": "var(--homenagem3) center 30%/cover", "cap": "mãe e filha", "d": "2021"}, {"bg": "var(--homenagem4) center/cover", "cap": "mãos que cuidaram", "d": "sempre"}, {"bg": "var(--homenagem5) center/cover", "cap": "o bolo da vó", "d": "todo domingo"}], "aniversario": [{"bg": "var(--aniversario0) center/cover", "cap": "o bolo", "d": "hoje"}, {"bg": "var(--aniversario1) center 40%/cover", "cap": "soprando as velas", "d": "1999"}, {"bg": "var(--aniversario2) center/cover", "cap": "a festa", "d": "hoje"}, {"bg": "var(--aniversario3) center/cover", "cap": "o presente", "d": "hoje"}, {"bg": "var(--aniversario4) center/cover", "cap": "o brinde", "d": "hoje"}, {"bg": "var(--aniversario5) center 30%/cover", "cap": "seu sorriso", "d": "hoje"}]};
var EA=(function(){
  var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  var EASE='cubic-bezier(.22,.8,.24,1)',SPRING='cubic-bezier(.2,1.4,.4,1)',NS='http://www.w3.org/2000/svg';
  function $(id){return document.getElementById(id)}
  /* o Chrome às vezes deixa de listar em getAnimations() uma animação já terminada que ainda segura o estilo;
     por isso cada elemento guarda as próprias animações e stop() cancela as duas listas */
  function live(el){
    var l=el.getAnimations?el.getAnimations().filter(function(a){return !(window.CSSAnimation&&a instanceof CSSAnimation)}):[];
    (el.__ea||[]).forEach(function(a){if(l.indexOf(a)<0)l.push(a)});return l;
  }
  function stop(el){live(el).forEach(function(a){a.cancel()});el.__ea=[];}
  function anim(el,kf,o){
    o=o||{};
    var old=live(el);
    var a=el.animate(kf,{duration:reduce?1:o.d,delay:reduce?0:(o.delay||0),easing:o.e||EASE,fill:o.fill||'both',iterations:o.it||1});
    if(!o.keep){old.forEach(function(x){x.cancel()});el.__ea=[];}
    (el.__ea=el.__ea||[]).push(a);
    return a.finished;
  }
  function el(tag,attrs,parent){var e=document.createElementNS(NS,tag);for(var k in attrs)e.setAttribute(k,attrs[k]);if(parent)parent.appendChild(e);return e;}
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
  function onVisible(node,fn,root,th){
    if(!('IntersectionObserver' in window)){return;}
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){io.disconnect();fn();}})},{root:root||null,threshold:th==null?.3:th});
    io.observe(node);return io;
  }
  function rnd(a,b){return a+Math.random()*(b-a)}

  /* ================= FONTES EXPRESSIVAS ================= */
  var CHAR_FX={fade:1,bounce:1,flame:1,wave:1,wiggle:1,float:1,type:1,rise:1};
  function prepFx(node){
    if(node.dataset.prepped)return;node.dataset.prepped='1';
    var fx=node.dataset.fx,t=node.textContent;node.setAttribute('aria-label',t);node.textContent='';
    function chars(str,parent){return str.split('').map(function(c){var s=document.createElement('span');s.textContent=c;s.setAttribute('aria-hidden','true');(parent||node).appendChild(s);return s;});}
    if(fx==='meet'){
      var h=Math.ceil(t.length/2),a=document.createElement('span'),b=document.createElement('span'),hz=document.createElement('span');
      a.className='ma';b.className='mb';hz.className='hz';a.textContent=t.slice(0,h);b.textContent=t.slice(h);
      hz.innerHTML='<svg viewBox="0 0 24 24" width="100%" height="100%"><use href="#heart" fill="#B11E2F"/></svg>';
      [a,hz,b].forEach(function(n){n.setAttribute('aria-hidden','true');node.appendChild(n)});return;
    }
    if(fx==='swash'){var s=document.createElement('span');s.textContent=t;s.setAttribute('aria-hidden','true');node.appendChild(s);
      node.insertAdjacentHTML('beforeend','<svg viewBox="0 0 100 20" preserveAspectRatio="none" aria-hidden="true"><path d="M2 12 C 25 2, 45 18, 60 10 S 90 4, 98 14" fill="none" stroke="#B88C3E" stroke-width="2.2" stroke-linecap="round"/></svg>');return;}
    if(fx==='stamp'){node.classList.add('ouro-texto');}
    if(CHAR_FX[fx]){chars(t);if(fx==='type'){var c=document.createElement('span');c.className='caret';c.setAttribute('aria-hidden','true');node.appendChild(c);}return;}
    var w=document.createElement('span');w.textContent=t;w.setAttribute('aria-hidden','true');node.appendChild(w);
  }
  function playFx(node){
    prepFx(node);var fx=node.dataset.fx,ch=[].slice.call(node.children).filter(function(c){return c.tagName==='SPAN'&&!c.classList.contains('caret')&&!c.classList.contains('hz')&&!c.classList.contains('ma')&&!c.classList.contains('mb')});
    switch(fx){
      case 'beat':anim(node,[{transform:'scale(1)'},{transform:'scale(1.14)',offset:.15},{transform:'scale(1)',offset:.3},{transform:'scale(1.2)',offset:.45},{transform:'scale(1)',offset:.7},{transform:'scale(1)'}],{d:1300,e:'ease-out'});break;
      case 'write':anim(node,[{clipPath:'inset(-20% 100% -20% 0)'},{clipPath:'inset(-20% 0% -20% 0)'}],{d:2000,e:'cubic-bezier(.45,.1,.35,1)'});break;
      case 'fade':ch.forEach(function(c,i){anim(c,[{opacity:1,transform:'none',filter:'blur(0)'},{opacity:.08,transform:'translateY(-8px)',filter:'blur(3px)',offset:.5},{opacity:1,transform:'none',filter:'blur(0)'}],{d:2600,delay:i*120,e:'ease-in-out'})});break;
      case 'bounce':ch.forEach(function(c,i){anim(c,[{transform:'translateY(0) scale(1)'},{transform:'translateY(-.5em) scale(1.08,.95)',offset:.35},{transform:'translateY(0) scale(1.15,.85)',offset:.65},{transform:'translateY(0) scale(1)'}],{d:700,delay:i*90,e:'ease-out'})});break;
      case 'meet':var a=node.querySelector('.ma'),b=node.querySelector('.mb'),hz=node.querySelector('.hz');
        anim(a,[{transform:'translateX(-1.2em)',opacity:0},{transform:'none',opacity:1}],{d:900,e:SPRING});
        anim(b,[{transform:'translateX(1.2em)',opacity:0},{transform:'none',opacity:1}],{d:900,e:SPRING});
        anim(hz,[{transform:'scale(0)'},{transform:'scale(1.5)',offset:.6},{transform:'scale(1)'}],{d:700,delay:650,e:'ease-out'});break;
      case 'flame':ch.forEach(function(c,i){var r=function(){return (Math.random()*2-1).toFixed(2)};anim(c,[{transform:'none'},{transform:'translateY(-3px) scaleY(1.08) skewX('+r()*4+'deg)'},{transform:'translateY(1px) scaleY(.97) skewX('+r()*4+'deg)'},{transform:'translateY(-2px) scaleY(1.05) skewX('+r()*3+'deg)'},{transform:'none'}],{d:1400,delay:i*60,e:'ease-in-out'})});break;
      case 'stamp':anim(node,[{transform:'scale(1.7) rotate(-6deg)',opacity:0,filter:'drop-shadow(0 18px 10px rgba(0,0,0,.35))'},{transform:'scale(.95) rotate(0)',opacity:1,filter:'drop-shadow(0 1px 1px rgba(0,0,0,.25))',offset:.55},{transform:'scale(1)',opacity:1,filter:'drop-shadow(0 1px 0 rgba(0,0,0,.2))'}],{d:900,e:'cubic-bezier(.5,0,.3,1)'});break;
      case 'kiss':anim(node,[{transform:'rotate(0) scale(1)'},{transform:'rotate(-8deg) scale(1.1)',offset:.2},{transform:'rotate(6deg) scale(.95)',offset:.45},{transform:'rotate(-3deg) scale(1.05)',offset:.7},{transform:'rotate(0) scale(1)'}],{d:1000,e:'ease-out'});break;
      case 'wave':ch.forEach(function(c,i){anim(c,[{transform:'translateY(0)'},{transform:'translateY(-.28em)',offset:.3},{transform:'translateY(.1em)',offset:.65},{transform:'translateY(0)'}],{d:900,delay:i*70,e:'ease-in-out'})});break;
      case 'hug':anim(node,[{transform:'scale(1,1)'},{transform:'scale(.72,1.15)',offset:.35},{transform:'scale(1.1,.94)',offset:.65},{transform:'scale(1,1)'}],{d:900,e:'ease-out'});break;
      case 'swash':var p=node.querySelector('path');var len=p.getTotalLength();p.style.strokeDasharray=len;anim(p,[{strokeDashoffset:len},{strokeDashoffset:0}],{d:1300,delay:200,e:'ease-out'});anim(node.firstChild,[{opacity:0,transform:'translateY(.2em)'},{opacity:1,transform:'none'}],{d:700});break;
      case 'rise':ch.forEach(function(c,i){anim(c,[{opacity:0,transform:'translateY(.45em)'},{opacity:1,transform:'none'}],{d:900,delay:i*140,e:EASE})});break;
      case 'wiggle':ch.forEach(function(c,i){var r=rnd(8,16)*(i%2?1:-1);anim(c,[{transform:'rotate(0)'},{transform:'rotate('+r+'deg)'},{transform:'rotate('+(-r*.6)+'deg)'},{transform:'rotate('+(r*.3)+'deg)'},{transform:'rotate(0)'}],{d:900,delay:i*50,e:'ease-in-out'})});break;
      case 'neon':anim(node,[{opacity:1},{opacity:.15,offset:.08},{opacity:1,offset:.14},{opacity:.3,offset:.22},{opacity:1,offset:.3},{opacity:1,offset:.7},{opacity:.5,offset:.76},{opacity:1}],{d:1600,e:'linear'});break;
      case 'float':ch.forEach(function(c,i){anim(c,[{transform:'translateY(0) rotate(0)'},{transform:'translateY(-.18em) rotate(-3deg)',offset:.5},{transform:'translateY(0) rotate(0)'}],{d:1600,delay:i*110,e:'ease-in-out'})});break;
      case 'type':ch.forEach(function(c,i){anim(c,[{opacity:0},{opacity:0,offset:.99},{opacity:1}],{d:reduce?1:i*95+10,e:'linear'})});break;
    }
  }

  /* ================= FLORES ================= */
  var PAL={
    rosa:{vinho:['#4E0812','#7A0F1E','#9E1A2C','#B92A3D','#3A0710'],vermelho:['#7A0F1E','#A8192C','#C92A40','#DE4A5C','#5E0B18'],creme:['#D9C3A0','#EAD8B8','#F5E8D0','#FCF4E4','#B89A6E']},
    tulipa:{vermelho:['#A8192C','#C92A40','#F08A96'],creme:['#E3CFAB','#F4E7CF','#FFFFFF'],amarelo:['#E09A12','#F2BE3A','#FBE29A'],vinho:['#5E0B18','#8E1422','#C04050']},
    lirio:{branco:['#FFFDF8','#F7EFE2','#E3D3BC','#B11E2F'],creme:['#F6E7CC','#FBF2E1','#D9C3A0','#B5835A']}
  };
  function swayG(parent){return el('g',{'class':'sway',style:'animation-delay:-'+rnd(0,5).toFixed(2)+'s'},parent)}
  function rose(parent,x,y,r,pal,o){
    o=o||{};var g=el('g',{transform:'translate('+x+' '+y+')'},parent),sw=swayG(g);
    var body=el('g',{transform:'rotate('+(o.rot||0)+') scale('+r+')',filter:o.flat?'':'url(#f-flor)'},sw),out=[];
    [{n:6,s:1,c:pal[0],o:0},{n:5,s:.8,c:pal[1],o:30},{n:5,s:.6,c:pal[2],o:12},{n:4,s:.4,c:pal[3],o:50}].forEach(function(L){
      var lg=el('g',{},body);for(var i=0;i<L.n;i++)el('use',{href:'#petal',transform:'rotate('+(L.o+i*360/L.n)+') scale('+L.s+')',fill:L.c,stroke:pal[4],'stroke-width':.02/L.s,'stroke-opacity':.5},lg);out.push(lg);});
    var core=el('g',{},body);el('path',{d:'M0 -.12 C.12 -.12 .14 .06 0 .08 C-.1 .08 -.12 -.04 -.02 -.05',fill:'none',stroke:pal[4],'stroke-width':.035,'stroke-linecap':'round'},core);el('circle',{r:.09,fill:pal[3]},core);out.push(core);
    return {g:g,parts:out,kind:'radial'};
  }
  function sunflower(parent,x,y,r,o){
    o=o||{};var g=el('g',{transform:'translate('+x+' '+y+')'},parent),sw=swayG(g);
    var body=el('g',{transform:'rotate('+(o.rot||0)+') scale('+r+')',filter:o.flat?'':'url(#f-flor)'},sw);
    var outer=el('g',{},body),inner=el('g',{},body),core=el('g',{},body);
    for(var i=0;i<18;i++){el('use',{href:'#petal-long',transform:'rotate('+(i*20)+') scale(1)',fill:'#F2B51F',stroke:'#C98A0A','stroke-width':.02},outer);el('use',{href:'#petal-long',transform:'rotate('+(i*20+10)+') scale(.82)',fill:'#E39A12',stroke:'#B87808','stroke-width':.02},inner);}
    el('circle',{r:.46,fill:'url(#g-miolo)'},core);
    for(var k=1;k<70;k++){var a=k*2.39996,rr=.42*Math.sqrt(k/70);el('circle',{cx:(Math.cos(a)*rr).toFixed(3),cy:(Math.sin(a)*rr).toFixed(3),r:.024,fill:k%3?'#2A1505':'#8A5A2A',opacity:.75},core);}
    return {g:g,parts:[outer,inner,core],kind:'radial'};
  }
  function tulip(parent,x,y,r,pal,o){
    o=o||{};var g=el('g',{transform:'translate('+x+' '+y+')'},parent),sw=swayG(g);
    var head=el('g',{},el('g',{transform:'rotate('+(o.rot||0)+') scale('+r+')',filter:o.flat?'':'url(#f-flor)'},sw));
    el('path',{d:'M0 0 C-.58 -.02 -.64 -.62 -.5 -1.12 L-.24 -.86 L0 -1.24 L.24 -.86 L.5 -1.12 C.64 -.62 .58 -.02 0 0Z',fill:pal[0]},head);
    el('path',{d:'M0 -.02 C-.36 -.1 -.36 -.78 0 -1.18 C.36 -.78 .36 -.1 0 -.02Z',fill:pal[1]},head);
    el('path',{d:'M-.12 -.3 C-.16 -.55 -.12 -.8 0 -1.0',fill:'none',stroke:pal[2],'stroke-width':.04,'stroke-linecap':'round',opacity:.7},head);
    return {g:g,parts:[head],kind:'up'};
  }
  function lily(parent,x,y,r,pal,o){
    o=o||{};var g=el('g',{transform:'translate('+x+' '+y+')'},parent),sw=swayG(g);
    var body=el('g',{transform:'rotate('+(o.rot||0)+') scale('+r+')',filter:o.flat?'':'url(#f-flor)'},sw);
    var back=el('g',{},body),front=el('g',{},body),st=el('g',{},body);
    [0,120,240].forEach(function(a){el('use',{href:'#petal-lily',transform:'rotate('+a+')',fill:pal[0],stroke:pal[2],'stroke-width':.02},back);});
    [60,180,300].forEach(function(a){var pg=el('g',{transform:'rotate('+a+') scale(.94)'},front);el('use',{href:'#petal-lily',fill:pal[1],stroke:pal[2],'stroke-width':.02},pg);el('path',{d:'M0 -.12 L0 -.95',stroke:pal[3],'stroke-width':.03,opacity:.35},pg);[[-.06,-.3],[.07,-.38],[-.05,-.48],[.05,-.22]].forEach(function(d){el('circle',{cx:d[0],cy:d[1],r:.022,fill:pal[3],opacity:.75},pg)});});
    [0,120,240].forEach(function(a){var pg=el('g',{transform:'rotate('+a+')'},back);el('path',{d:'M0 -.12 L0 -1',stroke:pal[3],'stroke-width':.03,opacity:.3},pg);});
    for(var i=0;i<6;i++){var a=(i*60+30)*Math.PI/180,ex=Math.sin(a)*.55,ey=-Math.cos(a)*.55;el('path',{d:'M0 0 L'+ex.toFixed(3)+' '+ey.toFixed(3),stroke:'#7C9A55','stroke-width':.025},st);el('ellipse',{cx:ex.toFixed(3),cy:ey.toFixed(3),rx:.075,ry:.035,fill:'#B5531C',transform:'rotate('+(i*60+30)+' '+ex.toFixed(3)+' '+ey.toFixed(3)+')'},st);}
    el('circle',{r:.07,fill:'#9DBE6A'},st);
    return {g:g,parts:[back,front,st],kind:'radial'};
  }
  function filler(parent,x,y,r){var g=el('g',{transform:'translate('+x+' '+y+')'},parent),sw=swayG(g),b=el('g',{},el('g',{transform:'scale('+r+')'},sw));for(var i=0;i<5;i++)el('circle',{cx:Math.cos(i*1.2566)*.55,cy:Math.sin(i*1.2566)*.55,r:.48,fill:'#FBF1DF',stroke:'#D9C3A0','stroke-width':.04},b);el('circle',{r:.32,fill:'#B88C3E'},b);return {g:g,parts:[b],kind:'radial'};}
  function leaf(parent,x,y,len,ang,col){return el('path',{d:'M0 0 C .4 -.28 .9 -.22 1.3 0 C .9 .22 .4 .28 0 0Z',transform:'translate('+x+' '+y+') rotate('+ang+') scale('+len+')',fill:col},parent);}
  function flower(parent,type,x,y,r,variant,o){
    if(type==='rosa')return rose(parent,x,y,r,PAL.rosa[variant||'vermelho'],o);
    if(type==='girassol')return sunflower(parent,x,y,r,o);
    if(type==='tulipa')return tulip(parent,x,y,r,PAL.tulipa[variant||'vermelho'],o);
    if(type==='lirio')return lily(parent,x,y,r,PAL.lirio[variant||'branco'],o);
    return filler(parent,x,y,r);
  }
  function bloom(f,delay){
    f.parts.forEach(function(p,j){
      p.style.transformBox='fill-box';
      if(f.kind==='up'){p.style.transformOrigin='50% 100%';anim(p,[{transform:'scale(.2,0)',opacity:0},{transform:'scale(1,1)',opacity:1}],{d:900,delay:delay,e:SPRING});}
      else{p.style.transformOrigin='center';anim(p,[{transform:'scale(0) rotate(-70deg)',opacity:0},{transform:'scale(1) rotate(0deg)',opacity:1}],{d:900,delay:delay+j*110,e:SPRING});}
    });
  }
  var SLOTS=[{x:300,y:175,r:58},{x:212,y:212,r:48},{x:390,y:208,r:48},{x:150,y:282,r:40},{x:452,y:278,r:40},{x:252,y:292,r:44},{x:350,y:290,r:44},{x:300,y:255,r:34}];
  var BOUQUETS={
    rosas:{nome:'Rosas',wrap:'papel',f:[['rosa','vinho',8],['rosa','vermelho',-20],['rosa','creme',25],['rosa','creme',10],['rosa','vermelho',-12],['rosa','vermelho',40],['rosa','vinho',-30],['rosa','creme',0]]},
    girassois:{nome:'Girassóis',wrap:'kraft',f:[['girassol',0,8],['girassol',0,-15],['girassol',0,20],['rosa','creme',10],['rosa','creme',-12],['girassol',0,30],['girassol',0,-10],['rosa','vermelho',0]]},
    tulipas:{nome:'Tulipas',wrap:'papel',f:[['tulipa','vermelho',0],['tulipa','creme',-14],['tulipa','amarelo',14],['tulipa','vinho',-22],['tulipa','vermelho',22],['tulipa','amarelo',-8],['tulipa','creme',8],['tulipa','vermelho',0]]},
    lirios:{nome:'Lírios',wrap:'papel',f:[['lirio','branco',10],['lirio','branco',-25],['lirio','creme',30],['rosa','vermelho',10],['rosa','vermelho',-12],['lirio','branco',50],['lirio','creme',-40],['rosa','vinho',0]]},
    campo:{nome:'Campo',wrap:'kraft',f:[['girassol',0,8],['rosa','vermelho',-20],['lirio','branco',25],['tulipa','amarelo',-18],['tulipa','vermelho',18],['rosa','creme',40],['lirio','creme',-30],['rosa','vinho',0]]}
  };
  function bouquet(svg,preset,animate){
    var P=BOUQUETS[preset]||BOUQUETS.rosas;svg.innerHTML='';
    var root=el('g',{},svg),cx=300,gy=455;
    var fillers=[[180,140,16],[420,138,16],[300,96,14],[112,214,14],[490,212,14],[250,118,11],[352,112,11],[132,330,12],[470,332,12]];
    var stems=el('g',{},root),leaves=el('g',{},root),fl=el('g',{},root),paths=[],lv=[];
    var items=SLOTS.map(function(s,i){var d=P.f[i];var isT=d[0]==='tulipa';return{x:s.x,y:isT?s.y+s.r*.55:s.y,r:isT?s.r*1.05:(d[0]==='girassol'?s.r*.95:(d[0]==='lirio'?s.r*1.05:s.r)),type:d[0],v:d[1],rot:d[2]};});
    items.concat(fillers.map(function(f){return{x:f[0],y:f[1]}})).forEach(function(f,i){var mx=(f.x+cx)/2+(f.x<cx?-18:18),my=(f.y+gy)/2+10;paths.push(el('path',{d:'M'+cx+' '+gy+' Q'+mx+' '+my+' '+f.x+' '+f.y,fill:'none',stroke:i%2?'#4E6B35':'#5C7A3E','stroke-width':i<items.length?4:2.5,'stroke-linecap':'round'},stems));});
    [[205,330,30,-150,'#4E6B35'],[395,330,30,-30,'#4E6B35'],[170,255,26,-170,'#7C9A55'],[430,250,26,-10,'#7C9A55'],[280,360,24,-120,'#7C9A55'],[322,360,24,-60,'#4E6B35'],[120,250,22,-200,'#4E6B35'],[480,246,22,20,'#4E6B35'],[230,170,20,-140,'#7C9A55'],[372,166,20,-40,'#7C9A55']].forEach(function(l){lv.push(leaf(leaves,l[0],l[1],l[2],l[3],l[4]))});
    var fe=fillers.map(function(f){return filler(fl,f[0],f[1],f[2])});
    var fs=items.slice().sort(function(a,b){return a.y-b.y}).map(function(it){return flower(fl,it.type,it.x,it.y,it.r,it.v,{rot:it.type==='tulipa'?it.rot*.6:it.rot})});
    var wrap=el('g',{},root);el('path',{d:'M150 330 L450 330 L340 575 L260 575 Z',fill:P.wrap==='kraft'?'url(#g-kraft-bq)':'url(#g-papel-bq)'},wrap);
    el('path',{d:'M150 330 L300 395 L450 330',fill:'none',stroke:P.wrap==='kraft'?'#8A6A40':'#C9B48E','stroke-width':1.5},wrap);
    el('path',{d:'M150 330 L238 360 L260 575 Z',fill:'#000','fill-opacity':.05},wrap);el('path',{d:'M450 330 L362 360 L340 575 Z',fill:'#000','fill-opacity':.08},wrap);
    var bow=el('g',{transform:'translate(300 455)'},root);
    el('path',{d:'M0 0 C-30 -38 -78 -26 -62 2 C-52 20 -22 10 0 0Z',fill:'#8E1422'},bow);el('path',{d:'M0 0 C30 -38 78 -26 62 2 C52 20 22 10 0 0Z',fill:'#7A101C'},bow);
    el('path',{d:'M-4 4 C-20 40 -30 70 -44 100 L-30 96 L-22 108 C-8 70 -2 40 4 6Z',fill:'#8E1422'},bow);el('path',{d:'M4 4 C20 40 34 70 46 98 L32 96 L26 108 C10 70 2 40 -4 6Z',fill:'#7A101C'},bow);el('ellipse',{rx:12,ry:10,fill:'#9E1A2C'},bow);
    if(!animate||reduce)return;
    paths.forEach(function(p,i){var len=p.getTotalLength();p.style.strokeDasharray=len;anim(p,[{strokeDashoffset:len},{strokeDashoffset:0}],{d:900,delay:i*40,e:'cubic-bezier(.4,0,.2,1)'})});
    lv.forEach(function(l,i){l.style.transformBox='fill-box';l.style.transformOrigin='0% 50%';anim(l,[{scale:'0'},{scale:'1'}],{d:600,delay:500+i*60,e:SPRING})});
    fs.forEach(function(f,i){bloom(f,700+i*140)});
    fe.forEach(function(f,i){bloom(f,1400+i*70)});
    anim(wrap,[{transform:'translateY(40px)',opacity:0},{transform:'none',opacity:1}],{d:700,delay:100});
    bow.style.transformBox='fill-box';bow.style.transformOrigin='center';anim(bow,[{scale:'0'},{scale:'1'}],{d:700,delay:2000,e:SPRING});
  }
  /* canteiro: flores brotando do chão */
  /* raminho: um ramo horizontal com três flores, usado como divisor (não é um campo) */
  function sprig(svg,types){
    svg.setAttribute('viewBox','0 0 300 80');svg.innerHTML='';
    types=(types||['rosa']).filter(function(t){return t!=='filler'});if(!types.length)types=['rosa'];
    var g=el('g',{},svg),vine=el('path',{d:'M20 52 C70 30 110 62 150 46 C190 30 230 62 280 40',fill:'none',stroke:'#5C7A3E','stroke-width':2.4,'stroke-linecap':'round'},g),lv=el('g',{},g),fl=el('g',{},g);
    var L=[[48,42,-150],[78,44,-20],[112,52,150],[188,40,-30],[220,50,160],[252,48,-20],[132,50,-60],[170,42,120]].map(function(q,i){return leaf(lv,q[0],q[1],rnd(13,17),q[2],i%2?'#7C9A55':'#4E6B35')});
    var F=[[150,44,17,types[0]],[96,50,12,types[1%types.length]],[206,44,12,types[2%types.length]],[60,40,7,'filler'],[244,46,7,'filler']].map(function(q,i){
      var v={rosa:['vermelho','vinho','creme'][i%3],tulipa:['vermelho','amarelo','creme'][i%3],lirio:['branco','creme'][i%2]}[q[3]];
      return flower(fl,q[3],q[0],q[1],q[2],v,{flat:true,rot:rnd(-15,15)});});
    return {play:function(){if(reduce)return;var len=vine.getTotalLength();vine.style.strokeDasharray=len;anim(vine,[{strokeDashoffset:len},{strokeDashoffset:0}],{d:900,e:'cubic-bezier(.3,0,.2,1)'});
      L.forEach(function(l,i){l.style.transformBox='fill-box';l.style.transformOrigin='0% 50%';anim(l,[{scale:'0'},{scale:'1'}],{d:450,delay:300+i*60,e:SPRING})});
      F.forEach(function(f,i){bloom(f,600+Math.abs(i===0?0:i)*120)});}};
  }

  /* ================= STICKERS ================= */
  var STICKERS={gato:'Gatinho',cachorro:'Cachorrinho',urso:'Ursinho',coelho:'Coelhinho',coracao:'Coraçãozinho',cafe:'Café',pizza:'Pizza',sorvete:'Sorvete',pipoca:'Pipoca',fone:'Música',game:'Videogame',aviao:'Viagem',livro:'Livros',bola:'Futebol',camera:'Fotografia',violao:'Violão',planta:'Plantinhas',lua:'Boa noite',bolo:'Bolo',cerveja:'Cerveja'};
  function sticker(host,key,cls){var s=el('svg',{viewBox:'-8 -8 116 116','class':cls||'stk','aria-hidden':'true'},host);el('use',{href:'#st-'+key,filter:'url(#f-sticker)'},s);return s;}

  /* campo de flores plantado no chão: duas fileiras, tipos embaralhados sem repetir vizinho, base de grama densa */
  function garden(svg,opt){
    opt=opt||{};var W=opt.w||600,H=opt.h||170;svg.setAttribute('viewBox','0 0 '+W+' '+H);svg.setAttribute('preserveAspectRatio',opt.slice?'xMidYMax slice':'xMidYMax meet');svg.innerHTML='';
    var types=opt.types||['rosa','tulipa','girassol','lirio','filler'],n=Math.round(W/(opt.gap||46)),root=el('g',{},svg);
    var back=el('g',{opacity:.78},root),stems=el('g',{},root),leaves=el('g',{},root),fl=el('g',{},root),grass=el('g',{},root),list=[];
    var real=types.filter(function(t){return t!=='filler'}),last='';
    function pick(i){if(!real.length)return 'filler';if(i%3===2)return 'filler';var c=real.filter(function(t){return t!==last});var t=(c.length?c:real)[Math.floor(Math.random()*(c.length?c.length:real.length))];last=t;return t;}
    function plant(gs,gl,gf,bx,top,t,i,scale){
      var bend=rnd(-22,22);
      var p=el('path',{d:'M'+bx.toFixed(1)+' '+(H+4)+' C'+(bx+bend*.3).toFixed(1)+' '+(H*.78).toFixed(1)+' '+(bx+bend).toFixed(1)+' '+(top+30).toFixed(1)+' '+(bx+bend*.8).toFixed(1)+' '+top.toFixed(1),fill:'none',stroke:i%2?'#4E6B35':'#5C7A3E','stroke-width':2.6*scale,'stroke-linecap':'round'},gs);
      var ly=top+(H-top)*rnd(.35,.6),L=[leaf(gl,bx+bend*.4,ly,rnd(14,20)*scale,i%2?-35:-145,i%3?'#7C9A55':'#4E6B35')];
      if(Math.random()<.6)L.push(leaf(gl,bx+bend*.25,ly+rnd(14,24),rnd(12,17)*scale,i%2?-150:-30,'#5C7A3E'));
      var sz=(t==='filler'?rnd(7,10):(t==='girassol'?rnd(15,20):rnd(14,20)))*scale,fx=bx+bend*.8,fy=top;
      var v={rosa:['vermelho','vinho','creme'][i%3],tulipa:['vermelho','amarelo','creme','vinho'][i%4],lirio:['branco','creme'][i%2]}[t];
      var f=flower(gf,t,fx,t==='tulipa'?fy+2:fy,t==='tulipa'?sz*1.1:sz,v,{flat:true,rot:rnd(-20,20)});
      return {p:p,L:L,f:f};
    }
    /* fileira de trás: menor, mais baixa e deslocada */
    var nb=Math.round(n*.8);for(var j=0;j<nb;j++){var bb=el('g',{},back);list.push(plant(bb,bb,bb,(j+.1+Math.random()*.8)*W/nb,rnd(H*.38,H*.62),pick(j+1),j+1,.78));}
    for(var i=0;i<n;i++){list.push(plant(stems,leaves,fl,(i+.5)*W/n+rnd(-12,12),rnd(H*.12,H*.5),pick(i),i,1));}
    for(var k=0;k<n*5;k++){var gx=rnd(-4,W+4);el('path',{d:'M'+gx.toFixed(1)+' '+(H+2)+' q'+rnd(-6,6).toFixed(1)+' '+(-rnd(8,18)).toFixed(1)+' '+rnd(-9,9).toFixed(1)+' '+(-rnd(12,30)).toFixed(1),stroke:['#7C9A55','#4E6B35','#5C7A3E'][k%3],'stroke-width':1.7,fill:'none','stroke-linecap':'round'},grass);}
    el('path',{d:'M0 '+H+' Q'+(W*.25)+' '+(H-14)+' '+(W*.5)+' '+(H-8)+' T'+W+' '+(H-10)+' V'+(H+6)+' H0Z',fill:'#4E6B35',opacity:.9},grass);
    function play(){
      if(reduce)return;
      var order=list.map(function(x,i){return {x:x,d:Math.abs((i<nb?i/nb*n:i-nb)-(n-1)/2)}});
      order.forEach(function(o){var it=o.x,del=o.d*90;
        var len=it.p.getTotalLength();it.p.style.strokeDasharray=len;anim(it.p,[{strokeDashoffset:len},{strokeDashoffset:0}],{d:900,delay:del,e:'cubic-bezier(.3,0,.2,1)'});
        it.L.forEach(function(l){l.style.transformBox='fill-box';l.style.transformOrigin='0% 50%';anim(l,[{scale:'0'},{scale:'1'}],{d:500,delay:del+500,e:SPRING})});
        bloom(it.f,del+750);
      });
      grass.style.transformBox='fill-box';grass.style.transformOrigin='50% 100%';anim(grass,[{transform:'scaleY(0)'},{transform:'scaleY(1)'}],{d:700,e:SPRING});
    }
    return {play:play};
  }

  /* ================= GALERIAS ================= */
  /* fotos de exemplo: Unsplash License (créditos em fotos-exemplo/creditos.txt) */
  var PHOTOS=[
    {bg:'var(--ph0) center 30%/cover',cap:'nosso primeiro beijo',d:'ago 2024'},
    {bg:'var(--ph1) center 40%/cover',cap:'pôr do sol em Paraty',d:'jan 2025'},
    {bg:'var(--ph2) center 50%/cover',cap:'piquenique no campo',d:'out 2024'},
    {bg:'var(--ph3) center 25%/cover',cap:'aquela noite na cidade',d:'nov 2024'},
    {bg:'var(--ph4) center 60%/cover',cap:'Lisboa, finalmente',d:'mar 2025'},
    {bg:'var(--ph5) center 30%/cover',cap:'nós daqui a 40 anos',d:'sempre'},
    {bg:'var(--ph6) center 55%/cover',cap:'céu azul de domingo',d:'mai 2025'},
    {bg:'var(--ph7) center/cover',cap:'de mãos dadas',d:'dez 2024'}
  ];
  var lbState=null;
  function _L(t,o){return window.EA&&EA.L?EA.L(t,o):(o?t.replace(/\{(\w+)\}/g,function(_,x){return o[x]}):t)}
  function lightbox(photos,i){
    var lb=$('ea-lb');
    if(!lb){
      lb=document.createElement('div');lb.id='ea-lb';lb.className='lb';lb.hidden=true;lb.setAttribute('role','dialog');lb.setAttribute('aria-modal','true');lb.setAttribute('aria-label',_L('Foto ampliada'));
      lb.innerHTML='<div style="display:grid;justify-items:center"><div class="lb-card"><div class="gx-img" id="ea-lb-img"></div><p class="lb-cap" id="ea-lb-cap"></p></div><div class="lb-nav"><button type="button" id="ea-lb-prev">'+_L('Anterior')+'</button><button type="button" id="ea-lb-close">'+_L('Fechar')+'</button><button type="button" id="ea-lb-next">'+_L('Próxima')+'</button></div></div>';
      document.body.appendChild(lb);
      var show=function(){var p=lbState.photos[lbState.i];$('ea-lb-img').style.background=p.bg;$('ea-lb-cap').textContent=p.cap;};
      var close=function(){lb.hidden=true;if(lbState.focus)lbState.focus.focus();};
      $('ea-lb-close').onclick=close;
      $('ea-lb-prev').onclick=function(){lbState.i=(lbState.i+lbState.photos.length-1)%lbState.photos.length;show()};
      $('ea-lb-next').onclick=function(){lbState.i=(lbState.i+1)%lbState.photos.length;show()};
      lb.addEventListener('click',function(e){if(e.target===lb)close()});
      document.addEventListener('keydown',function(e){if(lb.hidden)return;if(e.key==='Escape')close();if(e.key==='ArrowRight')$('ea-lb-next').click();if(e.key==='ArrowLeft')$('ea-lb-prev').click();});
      lb._show=show;
    }
    lbState={photos:photos,i:i,focus:document.activeElement};lb._show();lb.hidden=false;
    $('ea-lb-prev').textContent=_L('Anterior');$('ea-lb-close').textContent=_L('Fechar');$('ea-lb-next').textContent=_L('Próxima');lb.setAttribute('aria-label',_L('Foto ampliada'));
    anim(lb.querySelector('.lb-card'),[{transform:'scale(.6) rotate(-8deg)',opacity:0},{transform:'rotate(-1.5deg)',opacity:1}],{d:500,e:SPRING});
    $('ea-lb-close').focus();
  }
  function pol(p,extra){return '<div class="gx-img" style="background:'+p.bg+'"></div><span class="cap">'+esc(p.cap)+'</span>'+(extra||'');}
  function clickable(node,fn){node.tabIndex=0;node.setAttribute('role','button');node.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();fn()}});}

  function carrossel(host,photos){
    host.innerHTML='<div class="car" tabindex="0" aria-roledescription="carrossel" aria-label="Fotos"></div><div class="car-ui"><button class="arw" type="button" aria-label="Foto anterior">‹</button><div class="dots"></div><button class="arw" type="button" aria-label="Próxima foto">›</button></div>';
    var car=host.querySelector('.car'),dots=host.querySelector('.dots'),btn=host.querySelectorAll('.arw'),n=photos.length,cur=0,timer=0,paused=0;
    var cards=photos.map(function(p,i){var d=document.createElement('div');d.className='gx-pol';d.innerHTML=pol(p,'<span class="washi'+(i%2?' red':'')+'"></span>');d.setAttribute('aria-label',p.cap);car.appendChild(d);
      d.addEventListener('click',function(){if(moved)return;if(i===cur)lightbox(photos,i);else go(i)});return d;});
    photos.forEach(function(p,i){var b=document.createElement('button');b.type='button';b.setAttribute('aria-label',_L('Foto {n}',{n:i+1}));b.onclick=function(){go(i);hold()};dots.appendChild(b)});
    function layout(){var w=cards[0].offsetWidth||220;cards.forEach(function(c,i){var o=i-cur;if(o>n/2)o-=n;if(o<-n/2)o+=n;var a=Math.abs(o);
      c.style.transform='translateX('+(o*w*.62).toFixed(1)+'px) translateZ('+(-a*90)+'px) rotateY('+(-o*24)+'deg) rotateZ('+(o*3)+'deg) scale('+(1-Math.min(a,3)*.12)+')';
      c.style.zIndex=100-a;c.style.opacity=a>2.6?0:1;c.style.filter='brightness('+(1-Math.min(a,3)*.1)+')';c.tabIndex=o===0?0:-1;c.setAttribute('aria-hidden',o===0?'false':'true');});
      [].forEach.call(dots.children,function(b,i){b.setAttribute('aria-current',i===cur)});}
    function go(i){cur=(i+n)%n;layout();}
    function hold(){paused=Date.now()+8000;}
    btn[0].onclick=function(){go(cur-1);hold()};btn[1].onclick=function(){go(cur+1);hold()};
    car.addEventListener('keydown',function(e){if(e.key==='ArrowLeft'){go(cur-1);hold()}if(e.key==='ArrowRight'){go(cur+1);hold()}if(e.key==='Enter')lightbox(photos,cur)});
    var sx=null,moved=false;
    car.addEventListener('pointerdown',function(e){sx=e.clientX;moved=false;});
    car.addEventListener('pointermove',function(e){if(sx!=null&&Math.abs(e.clientX-sx)>10)moved=true;});
    car.addEventListener('pointerup',function(e){if(sx==null)return;var dx=e.clientX-sx;sx=null;if(Math.abs(dx)>40){go(cur+(dx<0?1:-1));hold();}setTimeout(function(){moved=false},0);});
    layout();
    if(!reduce)timer=setInterval(function(){if(Date.now()>paused&&document.visibilityState==='visible')go(cur+1)},3800);
    return {destroy:function(){clearInterval(timer)},relayout:layout};
  }
  function mosaico(host,photos){
    var spans=['w2 h2','','h2','','w2','',''];
    host.innerHTML='<div class="mos"></div>';var m=host.firstChild;
    photos.forEach(function(p,i){var f=document.createElement('figure');f.className=spans[i%spans.length];f.innerHTML='<div class="gx-img" style="background:'+p.bg+'"></div><figcaption>'+esc(p.cap)+'</figcaption>';f.setAttribute('aria-label',_L('Ampliar foto: {x}',{x:p.cap}));clickable(f,function(){lightbox(photos,i)});f.addEventListener('click',function(){lightbox(photos,i)});m.appendChild(f);});
    return {destroy:function(){},reveal:function(){[].forEach.call(m.children,function(f,i){anim(f,[{opacity:0,transform:'scale(.92)'},{opacity:1,transform:'none'}],{d:600,delay:i*80})})}};
  }
  function fita(host,photos){
    var ps=photos.slice(0,3);
    host.innerHTML='<div class="fita"><div class="fita-in"><span class="pano"></span><span class="corda"></span><span class="no"></span></div><svg class="lacre-c" viewBox="0 0 100 100" aria-hidden="true"><use href="#lacre"/></svg></div>';
    var inn=host.querySelector('.fita-in');
    ps.forEach(function(p,i){var d=document.createElement('div');d.className='gx-pol';d.style.transform='rotate('+[-1.5,2,-1][i]+'deg)';d.style.zIndex=5-i;d.innerHTML='<div class="gx-img" style="background:'+p.bg+'"></div><span class="cap">'+esc(p.cap)+'<br>'+esc(p.d)+'</span>';d.setAttribute('aria-label',_L('Ampliar foto: {x}',{x:p.cap}));clickable(d,function(){lightbox(photos,i)});d.addEventListener('click',function(){lightbox(photos,i)});inn.appendChild(d);});
    return {destroy:function(){},reveal:function(){[].forEach.call(inn.querySelectorAll('.gx-pol'),function(d,i){anim(d,[{translate:'0 -40px',opacity:0},{translate:'0 0',opacity:1}],{d:800,delay:i*180,e:SPRING})})}};
  }
  function varal(host,photos){
    host.innerHTML='<div class="varal-wrap"><div class="varal"><svg class="str" aria-hidden="true"><path fill="none" stroke="#7E5A22" stroke-width="1.6" stroke-opacity=".75"/></svg></div></div>';
    var v=host.querySelector('.varal'),path=v.querySelector('path'),items=[],raf=0,mx=-1e3;
    photos.forEach(function(p,i){var d=document.createElement('div');d.className='gx-pol';d.innerHTML='<span class="pin"></span>'+pol(p);d.setAttribute('aria-label',_L('Ampliar foto: {x}',{x:p.cap}));clickable(d,function(){lightbox(photos,i)});d.addEventListener('click',function(){lightbox(photos,i)});v.appendChild(d);items.push({el:d,a:rnd(-4,4),v:0});});
    function layout(){var W=Math.max(host.clientWidth,items.length*144),n=items.length,pad=20,step=(W-2*pad)/n,sag=40;v.style.width=W+'px';v.querySelector('svg').setAttribute('viewBox','0 0 '+W+' 300');path.setAttribute('d','M0 30 Q'+(W/2)+' '+(30+sag*2)+' '+W+' 30');
      items.forEach(function(it,i){var cx=pad+step*(i+.5),t=cx/W,yy=30+sag*4*t*(1-t);it.el.style.left=(cx-70)+'px';it.el.style.top=(yy+12)+'px';it.cx=cx;});}
    function swing(t){items.forEach(function(it,i){var w=reduce?0:Math.sin(t/1400+i*.9)*.9;it.v+=(-it.a*.012)+(w-it.a)*.004;it.v*=.97;it.a+=it.v;it.el.style.transform='rotate('+it.a.toFixed(2)+'deg)';});raf=requestAnimationFrame(swing);}
    v.addEventListener('pointermove',function(e){var r=v.getBoundingClientRect(),x=e.clientX-r.left,dx=x-mx;mx=x;if(Math.abs(dx)>60)return;items.forEach(function(it){if(Math.abs(it.cx-x)<70)it.v+=dx*.08;});});
    v.addEventListener('pointerleave',function(){mx=-1e3});
    layout();raf=requestAnimationFrame(swing);
    return {destroy:function(){cancelAnimationFrame(raf)},relayout:layout,reveal:function(){items.forEach(function(it,i){anim(it.el,[{translate:'0 -340px'},{translate:'0 0'}],{d:900,delay:i*90,e:SPRING})})}};
  }
  function mesa(host,photos){
    host.innerHTML='<div class="mesa"></div>';var m=host.firstChild,top=20,drag=null,items=[];
    photos.forEach(function(p,i){var d=document.createElement('div');d.className='gx-pol';d.innerHTML='<span class="tape"></span>'+pol(p);d.setAttribute('aria-label',_L('Ampliar foto: {x}',{x:p.cap}));clickable(d,function(){lightbox(photos,i)});m.appendChild(d);items.push({el:d,i:i});});
    function layout(){var W=m.clientWidth,H=m.clientHeight;items.forEach(function(it){if(it.x==null){it.x=rnd(10,Math.max(20,W-160));it.y=rnd(10,Math.max(20,H-200));it.r=rnd(-15,15);}it.el.style.left=it.x+'px';it.el.style.top=it.y+'px';it.el.style.transform='rotate('+it.r+'deg)';});}
    m.addEventListener('pointerdown',function(e){var g=e.target.closest('.gx-pol');if(!g)return;var it=items.filter(function(x){return x.el===g})[0];drag={it:it,sx:e.clientX,sy:e.clientY,ox:it.x,oy:it.y,moved:false};g.style.zIndex=++top;g.setPointerCapture(e.pointerId);});
    m.addEventListener('pointermove',function(e){if(!drag)return;var dx=e.clientX-drag.sx,dy=e.clientY-drag.sy;if(Math.abs(dx)+Math.abs(dy)>4)drag.moved=true;drag.it.x=drag.ox+dx;drag.it.y=drag.oy+dy;drag.it.el.style.left=drag.it.x+'px';drag.it.el.style.top=drag.it.y+'px';});
    m.addEventListener('pointerup',function(){if(!drag)return;var d=drag;drag=null;if(!d.moved)lightbox(photos,d.it.i);});
    layout();
    return {destroy:function(){},relayout:layout};
  }
  var PHOTOSETS=window.EA_PHOTOSETS||{};PHOTOSETS.casal=PHOTOSETS.casal||PHOTOS;
  var GALLERIES={carrossel:{nome:'Carrossel',fn:carrossel},mosaico:{nome:'Galeria sem polaroid',fn:mosaico},fita:{nome:'Na fita',fn:fita},varal:{nome:'Varal',fn:varal}};
  function gallery(host,type,photos){if(host._g&&host._g.destroy)host._g.destroy();host._g=GALLERIES[type].fn(host,photos||PHOTOS);return host._g;}


  /* ================= LACRE PERSONALIZADO ================= */
  var WAX={vinho:{nome:'Vinho',g:'g-cera-vinho',sym:'url(#g-ouro)',ring:'#D9B66A',dark:'#3E050C'},vermelho:{nome:'Vermelho',g:'g-cera-vermelho',sym:'url(#g-ouro)',ring:'#E9C98A',dark:'#5A0812'},
    ouro:{nome:'Ouro',g:'g-cera-ouro',sym:'#5E0B18',ring:'#5E0B18',dark:'#F3DFA8'},marfim:{nome:'Marfim',g:'g-cera-marfim',sym:'#8E1422',ring:'#B88C3E',dark:'#FFFFFF'},verde:{nome:'Verde',g:'g-cera-verde',sym:'url(#g-ouro)',ring:'#D9B66A',dark:'#1C2A14'}};
  var SYMBOLS={iniciais:'Iniciais',coracao:'Coração',rosa:'Rosa',estrela:'Estrela'};
  function initialsOf(str){var p=String(str||'').trim().split(/\s*[&+]\s*|\s+e\s+|\s+/).filter(Boolean).slice(0,2);return p.map(function(x){return x.charAt(0).toUpperCase()});}
  function sealMarkup(o){
    o=o||{};var w=WAX[o.cera]||WAX.vinho,sy=o.simbolo||'coracao',s='';
    s+='<circle cx="50" cy="50" r="44" fill="url(#'+w.g+')" filter="url(#f-cera)"/>';
    s+='<circle cx="50" cy="50" r="31" fill="none" stroke="#000" stroke-opacity=".28" stroke-width="3"/><circle cx="50" cy="50" r="31" fill="none" stroke="'+w.ring+'" stroke-opacity=".6" stroke-width="1.2"/>';
    var emb=function(inner){return '<g transform="translate(.7 1)" fill="'+w.dark+'" fill-opacity=".45">'+inner+'</g><g fill="'+w.sym+'">'+inner+'</g>';};
    if(sy==='iniciais'){
      var L=initialsOf(o.iniciais);if(!L.length)L=['A'];
      var t=function(ch,x,size){return '<text x="'+x+'" y="'+(size>36?65:60)+'" text-anchor="middle" font-family="Bodoni Moda, Didot, serif" font-style="italic" font-weight="700" font-size="'+size+'">'+esc(ch)+'</text>';};
      if(L.length===1)s+=emb(t(L[0],50,40));
      else s+=emb(t(L[0],35,27)+t(L[1],65,27)+'<g transform="translate(46.4 46) scale(.3)"><use href="#heart"/></g>');
    }else if(sy==='rosa'){
      var r='';for(var i=0;i<5;i++)r+='<use href="#petal" transform="translate(50 51) rotate('+(i*72)+') scale(15)"/>';r+='<circle cx="50" cy="51" r="5.5"/>';
      s+='<g transform="translate(.7 1)" fill="'+w.dark+'" fill-opacity=".45">'+r+'</g><g fill="'+w.sym+'" stroke="'+w.dark+'" stroke-opacity=".35" stroke-width=".05">'+r+'</g>';
    }else if(sy==='estrela'){
      var pts=[];for(var k=0;k<10;k++){var a=-Math.PI/2+k*Math.PI/5,rr=k%2?8:18;pts.push((50+Math.cos(a)*rr).toFixed(1)+','+(51+Math.sin(a)*rr).toFixed(1));}
      s+=emb('<polygon points="'+pts.join(' ')+'" stroke-linejoin="round"/>');
    }else s+=emb('<g transform="translate(34 33) scale(1.34)"><use href="#heart"/></g>');
    s+='<ellipse cx="36" cy="30" rx="12" ry="6" fill="#fff" opacity=".12" transform="rotate(-30 36 30)"/>';
    return s;
  }
  function seal(svgEl,o){svgEl.setAttribute('viewBox','0 0 100 100');svgEl.innerHTML=sealMarkup(o);}
  function miniEnv(host,env,sealOpt){
    host.className='menv env-'+env;
    host.innerHTML='<svg class="e" viewBox="0 0 300 200" aria-hidden="true"><rect width="300" height="200" rx="7" style="fill:var(--e-back2)"/><path d="M0 0 L150 112 L0 200 Z M300 0 L150 112 L300 200 Z" style="fill:var(--e-side)"/><path d="M0 0 L150 112 L0 200 Z M300 0 L150 112 L300 200 Z" fill="url(#g-env-side)"/><path d="M0 200 L150 92 L300 200 Z" style="fill:var(--e-front)"/><path d="M0 200 L150 92 L300 200 Z" fill="url(#g-env-front)"/><path d="M0 0 H300 L150 120 Z" style="fill:var(--e-flap)"/><path d="M0 0 H300 L150 120 Z" fill="url(#g-env-flap)"/><path d="M3 2 L150 116 L297 2" fill="none" style="stroke:var(--e-edge)" stroke-opacity=".55" stroke-width="1.6"/></svg><svg class="ms" aria-hidden="true"></svg>';
    seal(host.querySelector('.ms'),sealOpt);
  }


  /* ================= PÉTALAS ================= */
  function petals(host,opt){
    opt=opt||{};var P=[],run=false,last=0,cols=opt.colors||['#B11E2F','#8E1422','#C92A40','#EAD8B8'],n=opt.n||14;
    for(var i=0;i<n;i++){var s=el('svg',{viewBox:'-1 -1.1 2 1.2'},host);el('use',{href:opt.href||'#petal',fill:cols[i%cols.length],'fill-opacity':opt.op||.75},s);P.push({el:s,x:Math.random(),y:Math.random(),v:(opt.speed||.03)*(1+Math.random()),ph:Math.random()*6.28,amp:rnd(18,50),rot:rnd(0,360),vr:rnd(-45,45),sc:rnd(.6,1.4)});}
    function frame(t){if(!run)return;var dt=Math.min((t-(last||t))/1000,.05);last=t;var W=host.clientWidth,H=host.clientHeight;
      P.forEach(function(p){p.y+=p.v*dt;p.ph+=dt*1.2;p.rot+=p.vr*dt;if(p.y>1.05){p.y=-.05;p.x=Math.random();}p.el.style.transform='translate3d('+(p.x*W+Math.sin(p.ph)*p.amp).toFixed(1)+'px,'+(p.y*H).toFixed(1)+'px,0) rotate('+p.rot.toFixed(0)+'deg) scale('+p.sc+')';});
      requestAnimationFrame(frame);}
    return {on:function(){if(reduce||run)return;run=true;host.hidden=false;last=0;requestAnimationFrame(frame)},off:function(){run=false;host.hidden=true},destroy:function(){run=false;host.innerHTML=''}};
  }

  return {reduce:reduce,EASE:EASE,SPRING:SPRING,$:$,anim:anim,stop:stop,el:el,esc:esc,onVisible:onVisible,rnd:rnd,prepFx:prepFx,playFx:playFx,flower:flower,bloom:bloom,bouquet:bouquet,BOUQUETS:BOUQUETS,garden:garden,sprig:sprig,STICKERS:STICKERS,sticker:sticker,gallery:gallery,GALLERIES:GALLERIES,PHOTOS:PHOTOS,PHOTOSETS:PHOTOSETS,WAX:WAX,SYMBOLS:SYMBOLS,seal:seal,sealMarkup:sealMarkup,miniEnv:miniEnv,initialsOf:initialsOf,lightbox:lightbox,petals:petals};
})();
/* ocasiões: textos e escolhas padrão de cada modelo (usado pela carta e pela home) */
window.EA_OCCS={
  declaracao:{style:'cla',env:'vinho',wax:'vinho',sym:'iniciais',ini:'M & A',set:'casal',paper:'pautado',flor:'rosas',gal:'fita',from:'Miguel',to:'Ana Clara',hello:'Meu amor,',
    cla:{text:'Te amo',fx:'beat'},fun:[['Te','f2'],['amo','f3'],['muito','f1'],['!','f4']],
    body:['Eu fiquei dias pensando em como começar essa carta, e no fim percebi que não existe jeito certo de dizer o que eu sinto por você.','Você chegou devagar e mudou tudo: meus domingos, minhas músicas, até o jeito que eu tomo café. Hoje eu só queria que você soubesse, por escrito, que é você.'],
    dest:{pre:'no fim, é sempre',text:'você',fx:'stamp'},
    sign:'Com amor, Miguel',count:{h:'juntos há',t:'Cada segundo <em>contado</em>',from:'2024-08-17T19:30',since:'desde 17 de agosto de 2024'},
    gt:'Nossos <em>momentos</em>',caps:['nosso primeiro beijo','pôr do sol em Paraty','piquenique no campo','aquela noite na cidade','Lisboa, finalmente','nós, um dia','céu azul de domingo','de mãos dadas'],
    nt:'Coisas que eu amo <em>em você</em>',notes:[['seu riso','O jeito que você ri antes de terminar a piada.'],['seus olhos','Quando você me olha de canto achando que eu não vi.'],['sua coragem','Você topa tudo, até karaokê comigo.'],['seu abraço','É o lugar mais tranquilo que eu conheço.']],
    final:{text:'pra sempre',fx:'write'},song:'Nossa música'},
  namoro:{style:'cla',env:'vermelho',wax:'ouro',sym:'iniciais',ini:'M & A',set:'casal',paper:'liso',flor:'tulipas',gal:'carrossel',from:'Miguel',to:'Ana Clara',hello:'Ana, meu amor,',
    cla:{text:'2 anos',fx:'rise'},fun:[['2','f4'],['anos','f2'],['de','f1'],['nós!','f3']],
    body:['Dois anos atrás eu estava nervoso, com a camisa errada e um buquê que quase esqueci no carro.','Hoje eu olho para trás e vejo tudo o que a gente construiu: as viagens, as brigas bobas, as pazes melhores ainda. Obrigado por escolher a gente todos os dias.'],
    dest:{pre:'e pra comemorar, um',text:'beijo',fx:'kiss'},
    sign:'Seu, Miguel',count:{h:'juntos há',t:'Dois anos <em>e contando</em>',from:'2024-08-17T19:30',since:'desde 17 de agosto de 2024'},
    gt:'Dois anos <em>em fotos</em>',caps:['o beijo do primeiro mês','Paraty, ano 1','piquenique de 1 ano','a cidade à noite','Lisboa, ano 2','daqui a 40 anos','domingo de céu azul','de mãos dadas'],
    nt:'O que eu aprendi <em>com você</em>',notes:[['paciência','Que a gente não precisa resolver tudo hoje.'],['coragem','Que dizer "eu te amo" primeiro não é perder.'],['café','Que café passado na hora é outra coisa.'],['nós','Que juntos a gente é melhor.']],
    final:{text:'pra sempre',fx:'swash'},song:'Música do nosso primeiro date'},
  pedido:{style:'fun',env:'vermelho',wax:'vermelho',sym:'coracao',ini:'R & L',set:'pedido',paper:'aquarela',flor:'rosas',gal:'carrossel',from:'Rafa',to:'Lu',hello:'Lu,',
    cla:{text:'Quer namorar comigo?',fx:'swash'},fun:[['Quer','f1'],['namorar','f2'],['comigo','f3'],['?','f4']],
    body:['Faz três meses que a gente se vê quase todo dia, e eu já não sei mais como é um dia bom sem você nele.','Eu podia perguntar no meio de um jantar, mas quis deixar por escrito, pra você guardar. Então rola até o final e responde com calma (mas responde sim).'],
    dest:{pre:'você virou o meu',text:'sorriso',fx:'wave'},
    sign:'Seu (quase namorado), Rafa',count:{h:'a gente se conhece há',t:'O suficiente <em>pra ter certeza</em>',from:'2026-07-10T21:00',since:'desde aquele show em julho'},
    gt:'Uns motivos <em>pra dizer sim</em>',caps:[],
    nt:'O que eu prometo <em>como namorado</em>',notes:[['flores','Toda semana, nem que seja um girassol do mercado.'],['ouvir','Seus áudios inteiros, sem acelerar.'],['café','Café na cama aos domingos.'],['você','Te escolher todos os dias.']],
    final:'ask',ask:{h:'então...',q:'Quer namorar <em>comigo?</em>',yes:'SIM!',ans:'Agora é oficial!'},song:'A música do nosso primeiro show'},
  aniversario:{style:'fun',env:'marfim',wax:'vermelho',sym:'estrela',ini:'A',set:'aniversario',paper:'aquarela',flor:'girassois',gal:'varal',from:'Miguel',to:'Ana Clara',hello:'Ana,',
    cla:{text:'Parabéns',fx:'bounce'},fun:[['Feliz','f1'],['niver','f2'],['!','f4']],
    body:['Hoje o mundo ficou um ano mais bonito porque você está nele faz mais um ano.','Que o seu novo ano tenha viagem, risada alta, bolo no café da manhã e tudo aquilo que você pediu baixinho quando apagou as velas.'],
    dest:{pre:'o que eu mais quero ver esse ano é o seu',text:'sorriso',fx:'wave'},
    sign:'Com carinho, Miguel',count:{h:'você está no mundo há',t:'Um ano <em>mais luz</em>',from:'1999-10-13T08:15',since:'desde 13 de outubro de 1999'},
    gt:'Seu ano <em>em fotos</em>',caps:['seu sorriso favorito','o pôr do sol do seu dia','piquenique surpresa','a festa','viagem de presente','os próximos 50','céu azul pra você','mãos dadas, sempre'],
    nt:'Desejos para <em>o seu ano</em>',notes:[['viagem','Que a gente finalmente vá ver a neve.'],['saúde','Muita, para aguentar a minha energia.'],['sonhos','Que o projeto que você ama dê muito certo.'],['bolo','Que nunca falte bolo de cenoura.']],
    final:{text:'Parabéns!',fx:'bounce'},song:'Parabéns, versão acústica'},
  amigos:{style:'fun',env:'kraft',wax:'vermelho',sym:'iniciais',ini:'B & J',set:'amigos',paper:'caderno',flor:'campo',gal:'varal',from:'Bia',to:'Júlia',hello:'Ju,',
    cla:{text:'amiga',fx:'wiggle'},fun:[['minha','f1'],['melhor','f5'],['amiga','f2'],['!','f4']],
    body:['Quinze anos de amizade e você ainda ri das mesmas piadas ruins que eu conto. Isso é amor, né?','Obrigada por cada áudio de 7 minutos, por segurar minha mão nos dias ruins e por dançar comigo nos bons.'],
    dest:{pre:'te mando daqui um',text:'abraço',fx:'hug'},
    sign:'beijos, Bia',count:{h:'amigas há',t:'Desde <em>sempre</em>',from:'2010-03-08T10:00',since:'desde o primeiro dia de aula, em 2010'},
    gt:'A gente <em>em fotos</em>',caps:['o casal que eu shippei','pôr do sol da viagem','piquenique da turma','a noite do show','Lisboa com vocês','os vovôs da turma','domingo de sol','mãos dadas na foto'],
    nt:'Lembra <em>quando...</em>',notes:[['o show','A gente perdeu o ônibus e voltou cantando a pé.'],['a prova','Você me ensinou tudo na véspera e eu tirei 9.'],['a viagem','Choveu 4 dias e foi a melhor viagem.'],['sempre','Você sempre esteve lá. Sempre.']],
    final:{text:'te amo, amiga',fx:'beat'},song:'Nossa música da adolescência'},
  sair:{style:'fun',env:'vermelho',wax:'ouro',sym:'coracao',ini:'L & M',set:'sair',paper:'quadriculado',flor:'tulipas',gal:'mosaico',from:'Lucas',to:'Marina',hello:'Marina,',
    cla:{text:'Sai comigo?',fx:'write'},fun:[['Sai','f2'],['comigo','f3'],['?','f4']],
    body:['Faz um tempo que eu quero te chamar pra sair, mas toda vez que você sorri eu esqueço o que ia falar.','Então resolvi escrever. Separei uns lugares que eu acho que você vai amar, é só escolher um lá embaixo. Sábado, às oito?'],
    dest:{pre:'confesso que já é uma pequena',text:'paixão',fx:'flame'},
    sign:'Lucas (nervoso)',count:{h:'a gente se conhece há',t:'Tempo suficiente <em>pra arriscar</em>',from:'2026-02-20T18:00',since:'desde aquela festa de fevereiro'},
    gt:'Uns motivos <em>pra dizer sim</em>',caps:['o barzinho','o pôr do sol de sábado','a pracinha','a cidade à noite','uma viagem, um dia','quem sabe, lá na frente','o céu de domingo','de mãos dadas?'],
    nt:'O que tem <em>no roteiro</em>',notes:[['primeiro','Música ao vivo e drink de maracujá.'],['depois','Caminhada até a pracinha.'],['se der certo','Sorvete de pistache.'],['prometo','Não falar de trabalho.']],
    noGal:true,final:'ask',ask:{h:'e aí?',q:'Sábado, <em>às oito?</em>',qp:'Sábado, <em>{l}?</em>',yes:'Sim!',ans:'Eba! Te pego às oito.',ansp:'Eba! Sábado às oito, {l}.'},places:['barzinho','cinema','jantar','praia','piquenique','cafe'],song:'Música do barzinho'},
  homenagem:{style:'cla',env:'marfim',wax:'vinho',sym:'rosa',ini:'L',set:'homenagem',ph:[5,0,1,2,3,4,6,7],paper:'antigo',flor:'lirios',gal:'fita',from:'seus netos',to:'Vó Lourdes',hello:'Vó querida,',
    cla:{text:'obrigado',fx:'type'},fun:[['obrigado','f3'],['por','f1'],['tudo','f2'],['!','f4']],
    body:['Tudo de bom que a gente tem começou na sua cozinha: o cheiro de bolo, as histórias de antigamente, o colo nas tardes de chuva.','Hoje a família toda se juntou para dizer, por escrito, o que a gente sente todos os dias: a senhora é o nosso lugar.'],
    dest:{pre:'o que fica é o seu',text:'carinho',fx:'float'},
    sign:'Com todo amor, seus netos',count:{h:'anos de história',t:'Uma vida <em>inteira</em>',from:'1948-05-02T06:00',since:'desde 2 de maio de 1948'},
    gt:'Uma vida <em>em fotos</em>',caps:['vovó e vovô','o casamento','o pôr do sol na fazenda','o quintal','a noite do baile','a viagem a Lisboa','o céu de Minas','de mãos dadas há 50 anos'],
    nt:'O que a senhora <em>ensinou</em>',notes:[['paciência','Que bolo bom precisa de tempo.'],['família','Que ninguém fica de fora da mesa.'],['fé','Que dias difíceis passam.'],['amor','Que amor se mostra cuidando.']],
    final:{text:'eterno',fx:'rise'},song:'A música preferida da vó'}
};
window.EA_STK={declaracao:['coracao','urso','cafe'],namoro:['gato','cachorro','camera','aviao'],pedido:['coelho','coracao','sorvete'],aniversario:['bolo','sorvete','camera','pipoca'],amigos:['pipoca','game','fone','pizza'],sair:['cerveja','pipoca','pizza','sorvete'],homenagem:['planta','livro','cafe','lua']};
/* textos dos modelos de carta em inglês e espanhol (o resto das escolhas vem de occ.js) */
window.EA_OCCS_I18N={
en:{
  declaracao:{hello:'My love,',cla:{text:'I love you'},fun:[['Love','f2'],['you','f3'],['so','f1'],['much','f1'],['!','f4']],
    body:['I spent days thinking about how to start this letter, and in the end I realized there is no right way to say what I feel for you.','You arrived slowly and changed everything: my Sundays, my playlists, even the way I drink my coffee. Today I just wanted you to know, in writing, that it is you.'],
    dest:{pre:'in the end, it is always',text:'you'},sign:'With love, Miguel',count:{h:'together for',t:'Every second <em>counted</em>',since:'since August 17, 2024'},
    gt:'Our <em>moments</em>',caps:['our first kiss','sunset in Paraty','picnic in the countryside','that night in the city','Lisbon, at last','us, someday','blue Sunday sky','holding hands'],
    nt:'Things I love <em>about you</em>',notes:[['your laugh','The way you laugh before you finish the joke.'],['your eyes','When you look at me sideways thinking I did not notice.'],['your courage','You are up for anything, even karaoke with me.'],['your hug','The calmest place I know.']],
    final:{text:'forever'},song:'Our song'},
  namoro:{hello:'Ana, my love,',cla:{text:'2 years'},fun:[['2','f4'],['years','f2'],['of','f1'],['us!','f3']],
    body:['Two years ago I was nervous, wearing the wrong shirt and holding a bouquet I almost left in the car.','Today I look back and see everything we built: the trips, the silly fights, the even better make-ups. Thank you for choosing us every single day.'],
    dest:{pre:'and to celebrate, a',text:'kiss'},sign:'Yours, Miguel',count:{h:'together for',t:'Two years <em>and counting</em>',since:'since August 17, 2024'},
    gt:'Two years <em>in photos</em>',caps:['our first-month kiss','Paraty, year 1','our 1-year picnic','the city at night','Lisbon, year 2','40 years from now','blue-sky Sunday','holding hands'],
    nt:'What I learned <em>from you</em>',notes:[['patience','That we do not need to solve everything today.'],['courage','That saying "I love you" first is not losing.'],['coffee','That freshly brewed coffee is a whole other thing.'],['us','That together we are better.']],
    final:{text:'forever'},song:'The song from our first date'},
  pedido:{hello:'Lu,',cla:{text:'Will you be my girlfriend?'},fun:[['Be','f1'],['my','f2'],['girlfriend','f3'],['?','f4']],
    body:['We have been seeing each other almost every day for three months, and I no longer know what a good day looks like without you in it.','I could have asked you over dinner, but I wanted to put it in writing so you could keep it. So scroll to the end and answer calmly (but say yes).'],
    dest:{pre:'you have become my',text:'smile'},sign:'Yours (almost boyfriend), Rafa',count:{h:'we have known each other for',t:'Long enough <em>to be sure</em>',since:'since that concert in July'},
    gt:'A few reasons <em>to say yes</em>',
    nt:'What I promise <em>as your boyfriend</em>',notes:[['flowers','Every week, even if it is a sunflower from the market.'],['listening','Your voice messages, all of them, without speeding them up.'],['coffee','Breakfast in bed on Sundays.'],['you','Choosing you every single day.']],
    ask:{h:'so...',q:'Will you be <em>my girlfriend?</em>',yes:'YES!',ans:'Now it is official!'},song:'The song from our first concert'},
  aniversario:{hello:'Ana,',cla:{text:'Happy birthday'},fun:[['Happy','f1'],['birthday','f2'],['!','f4']],
    body:['Today the world got one year more beautiful, because you have been in it for one more year.','May your new year bring trips, loud laughter, cake for breakfast and everything you wished for quietly when you blew out the candles.'],
    dest:{pre:'what I want to see most this year is your',text:'smile'},sign:'With love, Miguel',count:{h:'you have been in the world for',t:'One more year <em>of light</em>',since:'since October 13, 1999'},
    gt:'Your year <em>in photos</em>',caps:['your favorite smile','the sunset on your day','surprise picnic','the party','a trip as a gift','the next 50','blue sky for you','holding hands, always'],
    nt:'Wishes for <em>your year</em>',notes:[['travel','That we finally go see the snow.'],['health','Plenty of it, to keep up with my energy.'],['dreams','That the project you love works out.'],['cake','That there is always carrot cake.']],
    final:{text:'Happy birthday!'},song:'Happy birthday, acoustic version'},
  amigos:{hello:'Ju,',cla:{text:'bestie'},fun:[['my','f1'],['best','f5'],['friend','f2'],['!','f4']],
    body:['Fifteen years of friendship and you still laugh at the same bad jokes I tell. That is love, right?','Thank you for every 7-minute voice message, for holding my hand on the bad days and for dancing with me on the good ones.'],
    dest:{pre:'sending you from here a big',text:'hug'},sign:'kisses, Bia',count:{h:'friends for',t:'Since <em>forever</em>',since:'since the first day of school, in 2010'},
    gt:'Us <em>in photos</em>',caps:['the couple I shipped','sunset on the trip','the gang picnic','the concert night','Lisbon with you all','the grandparents of the group','sunny Sunday','holding hands in the photo'],
    nt:'Remember <em>when...</em>',notes:[['the concert','We missed the bus and walked home singing.'],['the exam','You taught me everything the night before and I got a 9.'],['the trip','It rained for 4 days and it was the best trip ever.'],['always','You were always there. Always.']],
    final:{text:'love you, bestie'},song:'Our song from high school'},
  sair:{hello:'Marina,',cla:{text:'Go out with me?'},fun:[['Go','f2'],['out','f3'],['with','f1'],['me','f3'],['?','f4']],
    body:['I have wanted to ask you out for a while, but every time you smile I forget what I was going to say.','So I decided to write it down. I picked a few places I think you will love, just choose one down below. Saturday, at eight?'],
    dest:{pre:'I confess it is already a little',text:'crush'},sign:'Lucas (nervous)',count:{h:'we have known each other for',t:'Long enough <em>to take a chance</em>',since:'since that party in February'},
    gt:'A few reasons <em>to say yes</em>',caps:['the bar','Saturday sunset','the little square','the city at night','a trip, someday','who knows, down the road','Sunday sky','holding hands?'],
    nt:'What is <em>on the plan</em>',notes:[['first','Live music and a passion fruit drink.'],['then','A walk to the little square.'],['if it goes well','Pistachio ice cream.'],['I promise','No talking about work.']],
    ask:{h:'so?',q:'Saturday, <em>at eight?</em>',qp:'Saturday, <em>{l}?</em>',yes:'Yes!',ans:'Yay! I will pick you up at eight.',ansp:'Yay! Saturday at eight, {l}.'},song:'The song from the bar'},
  homenagem:{from:'your grandkids',to:'Grandma Lourdes',hello:'Dear Grandma,',cla:{text:'thank you'},fun:[['thank','f3'],['you','f1'],['for','f1'],['everything','f2'],['!','f4']],
    body:['Everything good we have started in your kitchen: the smell of cake, the stories from long ago, your lap on rainy afternoons.','Today the whole family got together to say, in writing, what we feel every day: you are our home.'],
    dest:{pre:'what stays is your',text:'love'},sign:'With all our love, your grandkids',count:{h:'years of history',t:'A whole <em>life</em>',since:'since May 2, 1948'},
    gt:'A life <em>in photos</em>',caps:['grandma and grandpa','the wedding','sunset on the farm','the backyard','the night of the dance','the trip to Lisbon','the sky over Minas','holding hands for 50 years'],
    nt:'What you <em>taught us</em>',notes:[['patience','That good cake takes time.'],['family','That nobody is left out of the table.'],['faith','That hard days pass.'],['love','That love shows in caring.']],
    final:{text:'forever'},song:'Grandma’s favorite song'}
},
es:{
  declaracao:{hello:'Mi amor:',cla:{text:'Te amo'},fun:[['Te','f2'],['amo','f3'],['mucho','f1'],['!','f4']],
    body:['Pasé días pensando en cómo empezar esta carta, y al final me di cuenta de que no hay una forma correcta de decir lo que siento por ti.','Llegaste despacio y lo cambiaste todo: mis domingos, mis canciones, hasta la forma en que tomo el café. Hoy solo quería que supieras, por escrito, que eres tú.'],
    dest:{pre:'al final, siempre eres',text:'tú'},sign:'Con amor, Miguel',count:{h:'juntos desde hace',t:'Cada segundo <em>contado</em>',since:'desde el 17 de agosto de 2024'},
    gt:'Nuestros <em>momentos</em>',caps:['nuestro primer beso','atardecer en Paraty','pícnic en el campo','aquella noche en la ciudad','Lisboa, por fin','nosotros, algún día','cielo azul de domingo','de la mano'],
    nt:'Cosas que amo <em>de ti</em>',notes:[['tu risa','Cómo te ríes antes de terminar el chiste.'],['tus ojos','Cuando me miras de reojo creyendo que no me di cuenta.'],['tu valentía','Te animas a todo, hasta al karaoke conmigo.'],['tu abrazo','Es el lugar más tranquilo que conozco.']],
    final:{text:'para siempre'},song:'Nuestra canción'},
  namoro:{hello:'Ana, mi amor:',cla:{text:'2 años'},fun:[['2','f4'],['años','f2'],['de','f1'],['nosotros!','f3']],
    body:['Hace dos años yo estaba nervioso, con la camisa equivocada y un ramo que casi olvido en el auto.','Hoy miro hacia atrás y veo todo lo que construimos: los viajes, las peleas tontas, las reconciliaciones aún mejores. Gracias por elegirnos todos los días.'],
    dest:{pre:'y para celebrar, un',text:'beso'},sign:'Tuyo, Miguel',count:{h:'juntos desde hace',t:'Dos años <em>y contando</em>',since:'desde el 17 de agosto de 2024'},
    gt:'Dos años <em>en fotos</em>',caps:['el beso del primer mes','Paraty, año 1','pícnic de 1 año','la ciudad de noche','Lisboa, año 2','dentro de 40 años','domingo de cielo azul','de la mano'],
    nt:'Lo que aprendí <em>contigo</em>',notes:[['paciencia','Que no hace falta resolverlo todo hoy.'],['valentía','Que decir "te amo" primero no es perder.'],['café','Que el café recién hecho es otra cosa.'],['nosotros','Que juntos somos mejores.']],
    final:{text:'para siempre'},song:'La canción de nuestra primera cita'},
  pedido:{hello:'Lu:',cla:{text:'¿Quieres ser mi novia?'},fun:[['¿Quieres','f1'],['ser','f2'],['mi','f1'],['novia','f3'],['?','f4']],
    body:['Hace tres meses que nos vemos casi todos los días, y ya no sé cómo es un buen día sin ti.','Podría preguntártelo en medio de una cena, pero quise dejarlo por escrito para que lo guardes. Así que baja hasta el final y responde con calma (pero di que sí).'],
    dest:{pre:'te convertiste en mi',text:'sonrisa'},sign:'Tuyo (casi novio), Rafa',count:{h:'nos conocemos desde hace',t:'Lo suficiente <em>para estar seguro</em>',since:'desde aquel concierto en julio'},
    gt:'Algunas razones <em>para decir que sí</em>',
    nt:'Lo que prometo <em>como novio</em>',notes:[['flores','Todas las semanas, aunque sea un girasol del mercado.'],['escuchar','Tus audios completos, sin acelerarlos.'],['café','Desayuno en la cama los domingos.'],['tú','Elegirte todos los días.']],
    ask:{h:'entonces...',q:'¿Quieres ser <em>mi novia?</em>',yes:'¡SÍ!',ans:'¡Ahora es oficial!'},song:'La canción de nuestro primer concierto'},
  aniversario:{hello:'Ana:',cla:{text:'Felicidades'},fun:[['Feliz','f1'],['cumple','f2'],['!','f4']],
    body:['Hoy el mundo es un año más bonito porque tú estás en él desde hace un año más.','Que tu nuevo año traiga viajes, risas a carcajadas, pastel en el desayuno y todo lo que pediste bajito al apagar las velas.'],
    dest:{pre:'lo que más quiero ver este año es tu',text:'sonrisa'},sign:'Con cariño, Miguel',count:{h:'estás en el mundo desde hace',t:'Un año <em>más de luz</em>',since:'desde el 13 de octubre de 1999'},
    gt:'Tu año <em>en fotos</em>',caps:['tu sonrisa favorita','el atardecer de tu día','pícnic sorpresa','la fiesta','un viaje de regalo','los próximos 50','cielo azul para ti','de la mano, siempre'],
    nt:'Deseos para <em>tu año</em>',notes:[['viaje','Que por fin vayamos a ver la nieve.'],['salud','Mucha, para aguantar mi energía.'],['sueños','Que el proyecto que amas salga muy bien.'],['pastel','Que nunca falte pastel de zanahoria.']],
    final:{text:'¡Felicidades!'},song:'Cumpleaños feliz, versión acústica'},
  amigos:{hello:'Ju:',cla:{text:'amiga'},fun:[['mi','f1'],['mejor','f5'],['amiga','f2'],['!','f4']],
    body:['Quince años de amistad y todavía te ríes de los mismos chistes malos que cuento. Eso es amor, ¿no?','Gracias por cada audio de 7 minutos, por tomarme de la mano en los días malos y por bailar conmigo en los buenos.'],
    dest:{pre:'te mando desde aquí un',text:'abrazo'},sign:'besos, Bia',count:{h:'amigas desde hace',t:'Desde <em>siempre</em>',since:'desde el primer día de clases, en 2010'},
    gt:'Nosotras <em>en fotos</em>',caps:['la pareja que shippeé','el atardecer del viaje','el pícnic del grupo','la noche del concierto','Lisboa con ustedes','los abuelitos del grupo','domingo de sol','de la mano en la foto'],
    nt:'¿Te acuerdas <em>cuando...</em>?',notes:[['el concierto','Perdimos el autobús y volvimos a pie cantando.'],['el examen','Me enseñaste todo la noche anterior y saqué un 9.'],['el viaje','Llovió 4 días y fue el mejor viaje.'],['siempre','Siempre estuviste ahí. Siempre.']],
    final:{text:'te quiero, amiga'},song:'Nuestra canción de la adolescencia'},
  sair:{hello:'Marina:',cla:{text:'¿Sales conmigo?'},fun:[['¿Sales','f2'],['conmigo','f3'],['?','f4']],
    body:['Hace tiempo que quiero invitarte a salir, pero cada vez que sonríes me olvido de lo que iba a decir.','Así que decidí escribirlo. Elegí unos lugares que creo que te van a encantar, solo tienes que elegir uno más abajo. ¿El sábado a las ocho?'],
    dest:{pre:'confieso que ya es una pequeña',text:'pasión'},sign:'Lucas (nervioso)',count:{h:'nos conocemos desde hace',t:'Tiempo suficiente <em>para arriesgarme</em>',since:'desde aquella fiesta de febrero'},
    gt:'Algunas razones <em>para decir que sí</em>',caps:['el bar','el atardecer del sábado','la placita','la ciudad de noche','un viaje, algún día','quién sabe, más adelante','el cielo del domingo','¿de la mano?'],
    nt:'Lo que hay <em>en el plan</em>',notes:[['primero','Música en vivo y un trago de maracuyá.'],['después','Un paseo hasta la placita.'],['si sale bien','Helado de pistacho.'],['prometo','No hablar de trabajo.']],
    ask:{h:'¿y?',q:'¿El sábado <em>a las ocho?</em>',qp:'¿El sábado, <em>{l}?</em>',yes:'¡Sí!',ans:'¡Bien! Paso por ti a las ocho.',ansp:'¡Bien! El sábado a las ocho, {l}.'},song:'La canción del bar'},
  homenagem:{from:'tus nietos',to:'Abuela Lourdes',hello:'Querida abuela:',cla:{text:'gracias'},fun:[['gracias','f3'],['por','f1'],['todo','f2'],['!','f4']],
    body:['Todo lo bueno que tenemos empezó en tu cocina: el olor a pastel, las historias de antes, tu regazo en las tardes de lluvia.','Hoy toda la familia se reunió para decir, por escrito, lo que sentimos todos los días: tú eres nuestro lugar.'],
    dest:{pre:'lo que queda es tu',text:'cariño'},sign:'Con todo nuestro amor, tus nietos',count:{h:'años de historia',t:'Una vida <em>entera</em>',since:'desde el 2 de mayo de 1948'},
    gt:'Una vida <em>en fotos</em>',caps:['la abuela y el abuelo','la boda','el atardecer en la finca','el patio','la noche del baile','el viaje a Lisboa','el cielo de Minas','de la mano desde hace 50 años'],
    nt:'Lo que nos <em>enseñaste</em>',notes:[['paciencia','Que un buen pastel necesita tiempo.'],['familia','Que nadie se queda fuera de la mesa.'],['fe','Que los días difíciles pasan.'],['amor','Que el amor se demuestra cuidando.']],
    final:{text:'eterno'},song:'La canción favorita de la abuela'}
}};
/* textos do site em inglês e espanhol (a chave é o texto em português) */
window.EA_I18N={"en":{"Escreva com Amor":"Escreva com Amor","escrevacomamor.com.br":"escrevacomamor.com.br","© 2026 Escreva com Amor · escrevacomamor.com.br":"© 2026 Escreva com Amor · escrevacomamor.com.br","Miguel & Ana Clara":"Miguel & Ana Clara","Cartas digitais com envelope, lacre, flores, fotos e música. Monte grátis e só pague depois de ver pronta.":"Digital letters with an envelope, wax seal, flowers, photos and music. Create for free and only pay once you see it finished.","Pular para o conteúdo":"Skip to content","Monte grátis e só pague depois de ver pronta":"Create for free and only pay once you see it finished","Chega por link ou QR code, sem baixar nada":"Arrives by link or QR code, nothing to download","Escreva com Amor, início":"Escreva com Amor, home","Seções":"Sections","Modelos":"Templates","Álbum e retrospectiva":"Album and retrospective","Como funciona":"How it works","Dúvidas":"FAQ","Preços":"Pricing","Criar agora":"Create now","Idioma: {x}":"Language: {x}","carta digital com envelope, lacre e flores":"a digital letter with envelope, wax seal and flowers","Tem coisa que só cabe numa <em>carta.</em>":"Some things only fit in a <em>letter.</em>","Uma carta para":"A letter for","o seu amor":"your love","a sua mãe":"your mom","a melhor amiga":"your best friend","quem faz aniversário":"the birthday person","aquele crush":"that crush","a sua avó":"your grandma","Escreva do seu jeito e escolha envelope, lacre, flores, fotos e música. Quem recebe rompe o lacre no celular e abre a carta como se ela tivesse chegado pelo correio.":"Write it your way and choose the envelope, seal, flowers, photos and music. They break the seal on their phone and open the letter as if it came in the mail.","Nome de quem vai receber":"Name of the person receiving it","Para quem é a sua carta?":"Who is your letter for?","Começar minha carta":"Start my letter","Ocasião da carta de exemplo":"Occasion of the sample letter","É para":"It's for","Montar é grátis":"Creating is free","Você vê pronta antes de pagar":"You see it finished before paying","Abre em qualquer celular":"Opens on any phone","toque no lacre para abrir":"tap the seal to open","Retrospectiva":"Retrospective","Álbum do casal":"Couple's album","Aniversário":"Birthday","Homenagem":"Tribute","Amigos":"Friends","Chamar para sair":"Ask them out","Declaração":"Love letter","Pedido de namoro":"Will you be mine","Aniversário de namoro":"Anniversary","Namoro":"Anniversary","Pedido":"Be mine","Sair":"Date","Por que uma carta":"Why a letter","Tem coisa que a gente sente há muito tempo e nunca acha o momento certo de dizer. Uma <em>carta</em> cria esse momento. Ela chega fechada, com o nome da pessoa no envelope, e só abre quando ela rompe o <em>lacre</em>. Depois vem o resto: as palavras, as <em>fotos</em>, as <em>flores</em> e a <em>música</em> de vocês.":"Some things we feel for a long time and never find the right moment to say. A <em>letter</em> creates that moment. It arrives sealed, with their name on the envelope, and only opens when they break the <em>seal</em>. Then comes the rest: the words, your <em>photos</em>, the <em>flowers</em> and your <em>song</em>.","três presentes":"three gifts","Três jeitos de dizer o que você <em>sente</em>":"Three ways to say how you <em>feel</em>","Uma carta para abrir, um álbum para folhear ou uma retrospectiva para assistir. Escolha o formato e monte do seu jeito.":"A letter to open, an album to leaf through or a retrospective to watch. Pick the format and make it your own.","carta com lacre":"sealed letter","Carta":"Letter","Chega num envelope fechado. A pessoa rompe o lacre e a carta se abre com flores, fotos, stickers, contador do tempo juntos e a música de vocês.":"It arrives in a sealed envelope. They break the seal and the letter opens with flowers, photos, stickers, a time-together counter and your song.","Ver exemplo":"See example","Escrever carta":"Write a letter","álbum de":"album of","Nós dois":"Us two","álbum do casal":"couple's album","Álbum":"Album","Um livro de capa de couro para folhear no celular, página por página, com as fotos de vocês, legendas, datas e o que você ama na pessoa.":"A leather-bound book to leaf through on the phone, page by page, with your photos, captions, dates and what you love about them.","Folhear exemplo":"Browse example","Montar álbum":"Create album","juntos há":"together for","dias":"days","retrospectiva do casal":"couple's retrospective","A história de vocês em stories animados, com música tocando, os números do casal, as fotos que contam tudo e um final para guardar.":"Your story in animated stories, with music playing, your numbers as a couple, the photos that tell it all and an ending to keep.","Assistir exemplo":"Watch example","Criar retrospectiva":"Create retrospective","exemplos de cartas":"sample letters","Comece por um <em>modelo</em>":"Start from a <em>template</em>","Cada modelo já vem com texto, cores, flores e stickers. Abra, veja como a pessoa recebe e troque tudo o que quiser.":"Each template comes with text, colors, flowers and stickers. Open it, see how they will receive it and change anything you like.","Filtrar modelos":"Filter templates","Todos":"All","Para o amor":"For love","Amigos e família":"Friends and family","Ver modelos anteriores":"See previous templates","Ver mais modelos":"See more templates","arraste ou use as setas":"drag or use the arrows","para {x}":"for {x}","Ver aberta":"See it open","Usar este":"Use this one","Clássico":"Classic","Divertido":"Playful","Para dizer, por escrito, tudo o que você sente.":"To put everything you feel in writing.","Meses ou anos juntos, com contador e as fotos de vocês.":"Months or years together, with a counter and your photos.","Termina com a pergunta. E o botão de não foge.":"It ends with the question. And the no button runs away.","Desejos, bolo e as fotos do ano da pessoa.":"Wishes, cake and photos from their year.","Para a amizade que já virou família.":"For the friendship that became family.","Um convite com lugares para a pessoa escolher.":"An invitation with places for them to choose from.","Para mãe, pai e avós: um obrigado que fica.":"For mom, dad and grandparents: a thank-you that lasts.","personalize tudo":"customize everything","Tudo que cabe na sua <em>carta</em>":"Everything that fits in your <em>letter</em>","Lacre do seu jeito":"Your own wax seal","Cinco cores de cera, com as iniciais de vocês, coração, rosa ou estrela.":"Five wax colors, with your initials, a heart, a rose or a star.","Envelopes e papéis":"Envelopes and papers","Cinco envelopes e sete papéis: pautado, algodão, kraft, envelhecido, caderno, aquarela e quadriculado.":"Five envelopes and seven papers: lined, cotton, kraft, aged, notebook, watercolor and grid.","Flores que brotam":"Blooming flowers","Rosas, girassóis, tulipas, lírios ou flores do campo, desabrochando enquanto a pessoa lê.":"Roses, sunflowers, tulips, lilies or wildflowers, blooming while they read.","Fotos de vocês":"Your photos","Em carrossel de polaroids, presas na fita, num varal ou numa galeria.":"In a polaroid carousel, taped down, on a clothesline or in a gallery.","Contador do tempo juntos":"Time-together counter","Anos, meses, dias e até os segundos, contando ao vivo desde a data de vocês.":"Years, months, days and even seconds, counting live since your date.","Nossa música":"Our song","A música de vocês":"Your song","Um player na carta para a trilha sonora do casal, da amizade ou da família.":"A player in the letter for the soundtrack of your couple, friendship or family.","Stickers":"Stickers","Gatinho, café, pizza, viagem, violão e mais, colados pela carta.":"Kitten, coffee, pizza, travel, guitar and more, stuck around the letter.","Te amo":"Love you","sempre":"always","sorriso":"smile","Letras que falam":"Lettering that speaks","Estilo clássico, elegante, ou divertido, com várias fontes misturadas e animadas.":"A classic, elegant style, or a playful one with lots of mixed, animated fonts.","Quer namorar comigo?":"Will you be mine?","SIM!":"YES!","não":"no","tem certeza?":"are you sure?","pensa bem":"think again","não vale":"not allowed","última chance":"last chance","ok, só sim":"ok, only yes","Perguntas na carta":"Questions in the letter","No pedido, o botão de não foge. No convite, a pessoa escolhe para onde vocês vão.":"When you pop the question, the no button runs away. In an invitation, they choose where you'll go.","como funciona":"how it works","Você só paga no <em>último passo</em>":"You only pay at the <em>last step</em>","Escolha o formato e o modelo":"Choose the format and template","Carta, álbum ou retrospectiva, para o amor, a família ou os amigos.":"Letter, album or retrospective, for love, family or friends.","Escreva e personalize":"Write and customize","Texto, fotos, envelope, lacre, flores e música, vendo tudo ao vivo num celular ao lado.":"Text, photos, envelope, seal, flowers and music, with a live preview on a phone beside it.","Veja pronta":"See it finished","Abra do jeito que a pessoa vai receber e ajuste o que quiser antes de enviar.":"Open it the way they will receive it and adjust anything before sending.","Pague e envie":"Pay and send","Você recebe um link e um QR code para mandar como e quando quiser.":"You get a link and a QR code to send however and whenever you like.","Começar agora, é grátis montar":"Start now, it's free to create","entrega":"delivery","Chega como mensagem, abre como <em>carta</em>":"Arrives as a message, opens as a <em>letter</em>","Depois de pronta, você recebe um link para mandar por mensagem, rede social ou e-mail, e um QR code para imprimir e entregar junto com um presente. A pessoa abre no navegador do celular, sem baixar nada.":"Once it's finished, you get a link to send by message, social media or email, and a QR code to print and hand over with a gift. They open it in their phone's browser, nothing to download.","tenho uma coisa pra você 💌":"I have something for you 💌","Tenho uma coisa pra você 💌":"I have something for you 💌","Uma carta para você":"A letter for you","o que é isso?? 😳":"what is this?? 😳","AMOR 😭😭":"BABE 😭😭","aponte a câmera<br><b>para abrir a sua carta</b>":"point your camera<br><b>to open your letter</b>","dúvidas":"questions","Perguntas <em>frequentes</em>":"Frequently asked <em>questions</em>","Preciso pagar para montar?":"Do I need to pay to create it?","Não. Você monta, vê a carta pronta do jeito que a pessoa vai receber e só paga quando gostar do resultado.":"No. You create it, see the finished letter the way they will receive it and only pay when you like the result.","A pessoa precisa baixar algum aplicativo?":"Do they need to download an app?","Não. A carta abre no navegador de qualquer celular ou computador, pelo link ou pelo QR code.":"No. The letter opens in the browser on any phone or computer, from the link or the QR code.","Como a pessoa recebe?":"How do they receive it?","Você recebe um link para mandar por mensagem, rede social ou e-mail, e um QR code para imprimir ou mostrar na hora.":"You get a link to send by message, social media or email, and a QR code to print or show in person.","Qual a diferença entre carta, álbum e retrospectiva?":"What's the difference between a letter, an album and a retrospective?","A carta chega num envelope com lacre e se abre com texto, flores e fotos. O álbum é um livro para folhear página por página. A retrospectiva conta a história de vocês em stories animados com música.":"The letter arrives in a sealed envelope and opens with text, flowers and photos. The album is a book to leaf through page by page. The retrospective tells your story in animated stories with music.","É só para casais?":"Is it only for couples?","Não. Tem modelos para amigos, aniversário, homenagem para mãe, pai e avós, convite para sair e pedido de namoro.":"No. There are templates for friends, birthdays, tributes to mom, dad and grandparents, date invitations and asking someone to be yours.","Posso colocar as minhas fotos?":"Can I add my own photos?","Sim. Você escolhe as fotos do seu celular, escreve uma legenda em cada uma e escolhe como elas aparecem.":"Yes. You pick photos from your phone, write a caption for each one and choose how they appear.","Como funcionam os pacotes?":"How do bundles work?","Cada carta, álbum ou retrospectiva usa 1 do pacote. Os valores ficam na aba":"Each letter, album or retrospective uses 1 from the bundle. Prices are on the tab","O que você sente merece ficar <em>por escrito</em>":"What you feel deserves to be <em>in writing</em>","Comece agora e veja a sua carta pronta antes de decidir qualquer coisa.":"Start now and see your letter finished before deciding anything.","Escrever minha carta":"Write my letter","Etapas":"Steps","<b>1</b>Montar":"<b>1</b>Create","<b>2</b>Ver pronta":"<b>2</b>Preview","<b>3</b>Enviar":"<b>3</b>Send","Monte o seu <em>presente</em>":"Create your <em>gift</em>","Formato":"Format","<span class=\"ti\">✉</span>Carta":"<span class=\"ti\">✉</span>Letter","<span class=\"ti\">❦</span>Álbum":"<span class=\"ti\">❦</span>Album","<span class=\"ti\">▶</span>Retrospectiva":"<span class=\"ti\">▶</span>Retrospective","Modo":"Mode","Editar":"Edit","Prévia ao vivo":"Live preview","<b>1</b>Ocasião":"<b>1</b>Occasion","Trocar a ocasião muda as cores e o texto de exemplo. O que você já escreveu fica.":"Changing the occasion changes the colors and sample text. What you already wrote stays.","<b>2</b>O que você quer dizer":"<b>2</b>What you want to say","Para":"To","De":"From","Como começa":"Opening line","Palavra em destaque":"Highlighted word","Sua mensagem":"Your message","Pule uma linha para começar outro parágrafo.":"Leave a blank line to start a new paragraph.","Assinatura":"Signature","<b>3</b>Envelope e lacre":"<b>3</b>Envelope and seal","Envelope":"Envelope","Cera do lacre":"Seal wax","No lacre":"On the seal","Iniciais":"Initials","Tom da mão que abre a carta":"Skin tone of the hands opening the letter","<b>4</b>Estilo, papel e flores":"<b>4</b>Style, paper and flowers","Estilo":"Style","Papel":"Paper","Flores":"Flowers","<b>5</b>Fotos":"<b>5</b>Photos","Como as fotos aparecem":"How the photos appear","<b>6</b>Data e música":"<b>6</b>Date and song","Desde quando":"Since when","Nome da música":"Song name","<b>7</b>Stickers":"<b>7</b>Stickers","Escolha até 6.":"Pick up to 6.","<b>1</b>Capa":"<b>1</b>Cover","Cor do couro":"Leather color","Título":"Title","Nomes":"Names","<b>2</b>Desde quando":"<b>2</b>Since when","Data em que tudo começou":"The day it all began","<b>3</b>Fotos e legendas":"<b>3</b>Photos and captions","<b>4</b>Coisas que eu amo em você":"<b>4</b>Things I love about you","<b>5</b>Música e final":"<b>5</b>Song and ending","Mensagem final":"Closing message","<b>1</b>Abertura":"<b>1</b>Opening","<b>2</b>Vocês em números":"<b>2</b>You two in numbers","<b>4</b>O que eu mais amo em você":"<b>4</b>What I love most about you","<b>5</b>Final":"<b>5</b>Ending","Frase final":"Closing line","ao vivo":"live","toque no lacre para ver a abertura":"tap the seal to see it open","toque no álbum para abrir e vire as páginas":"tap the album to open it and turn the pages","toque no play para assistir com música":"tap play to watch with music","Carta para <b>Ana Clara</b>":"Letter for <b>Ana Clara</b>","Ver como ficou":"See how it looks","Vinho":"Wine","Vermelho":"Red","Vermelha":"Red","Kraft":"Kraft","Marfim":"Ivory","Verde":"Green","Ouro":"Gold","Pele clara":"Light skin","Pele média":"Medium skin","Pele morena":"Brown skin","Pele negra":"Dark skin","Coração":"Heart","Rosa":"Rose","Estrela":"Star","Pautado":"Lined","Algodão":"Cotton","Envelhecido":"Aged","Caderno":"Notebook","Aquarela":"Watercolor","Quadriculado":"Grid","Rosas":"Roses","Girassóis":"Sunflowers","Tulipas":"Tulips","Lírios":"Lilies","Do campo":"Wildflowers","Carrossel":"Carousel","Na fita":"Taped","Varal":"Clothesline","Galeria":"Gallery","Gatinho":"Kitten","Cachorrinho":"Puppy","Ursinho":"Teddy bear","Coelhinho":"Bunny","Coraçãozinho":"Little heart","Café":"Coffee","Pizza":"Pizza","Sorvete":"Ice cream","Pipoca":"Popcorn","Música":"Music","Videogame":"Video games","Viagem":"Travel","Livros":"Books","Futebol":"Soccer","Fotografia":"Photography","Violão":"Guitar","Plantinhas":"Plants","Boa noite":"Good night","Bolo":"Cake","Cerveja":"Beer","Sticker {x}":"Sticker {x}","Prévia da carta":"Letter preview","Carta de exemplo: toque no lacre para abrir":"Sample letter: tap the seal to open","role a carta dentro do celular para ver tudo":"scroll the letter inside the phone to see everything","Coisa que eu amo {n}":"Thing I love {n}","Número {n}":"Number {n}","O que é o número {n}":"What number {n} means","Estas são fotos de exemplo. Coloque as de vocês:":"These are sample photos. Add your own:","legenda":"caption","Legenda da foto {n}":"Caption for photo {n}","Tirar a foto {n}":"Remove photo {n}","exemplo":"sample","Adicionar fotos":"Add photos","até 8 fotos":"up to 8 photos","Usar as de exemplo":"Use the sample ones","Carta para {x}":"Letter for {x}","alguém especial":"someone special","Álbum {x}":"Album {x}","de vocês":"of yours","Retrospectiva de {x}":"Retrospective of {x}","vocês":"you two","o seu riso antes da piada acabar":"how you laugh before the joke ends","o seu abraço de domingo":"your Sunday hugs","quando você canta errado no carro":"when you sing the wrong lyrics in the car","o jeito que você me olha":"the way you look at me","Obrigado por cada página até aqui. As próximas eu quero escrever com você.":"Thank you for every page so far. I want to write the next ones with you.","Com amor, Miguel":"With love, Miguel","Nossa retrospectiva":"Our retrospective","cafés juntos":"coffees together","viagens":"trips","gato adotado":"cat adopted","seu riso":"your laugh","seu abraço":"your hugs","sua coragem":"your courage","nós dois":"us two","E isso é só o começo.":"And this is only the beginning.","Voltar":"Back","Assim a pessoa vai receber":"This is how they will receive it","Exemplo: assim a pessoa recebe":"Example: this is how they receive it","Gostei, quero enviar":"I love it, send it","Usar este modelo":"Use this template","Montar meu álbum":"Create my album","Criar minha retrospectiva":"Create my retrospective","montar é grátis":"creating is free","preços":"pricing","Escolha o seu <em>pacote</em>":"Choose your <em>bundle</em>","Cada carta, álbum ou retrospectiva usa 1 do pacote.":"Each letter, album or retrospective uses 1 from the bundle.","Pacotes":"Bundles","presente":"gift","presentes":"gifts","<small>R$</small>9,90":"<small>R$</small>9.90","<small>R$</small>24,90":"<small>R$</small>24.90","<small>R$</small>39,90":"<small>R$</small>39.90","para uma ocasião especial":"for a special occasion","Recomendado":"Recommended","R$ 8,30 cada, economize R$ 4,80":"R$ 8.30 each, save R$ 4.80","R$ 7,98 cada, economize R$ 9,60":"R$ 7.98 each, save R$ 9.60","Carta, álbum ou retrospectiva, você escolhe":"Letter, album or retrospective, your choice","Todos os modelos, papéis, flores e stickers":"All templates, papers, flowers and stickers","Suas fotos e a música de vocês":"Your photos and your song","Link e QR code para enviar":"Link and QR code to send","Continuar com 3 presentes":"Continue with 3 gifts","Continuar com {n} presentes":"Continue with {n} gifts","Continuar com 1 presente":"Continue with 1 gift","Sua carta para {x} está pronta para enviar.":"Your letter for {x} is ready to send.","Seu álbum {x} está pronto para enviar.":"Your album {x} is ready to send.","Sua retrospectiva de {x} está pronta para enviar.":"Your retrospective of {x} is ready to send.","Escolha um pacote. Este presente usa 1 dele.":"Choose a bundle. This gift uses 1 from it.","Ver de novo":"See it again","Primeiro você monta, depois paga.":"First you create it, then you pay.","Montar é grátis, e você vê o presente pronto antes de escolher o pacote.":"Creating is free, and you see the finished gift before choosing a bundle.","Começar a montar":"Start creating","Montar meu presente primeiro":"Create my gift first","{n} presentes por R$ {v}":"{n} gifts for R$ {v}","1 presente por R$ {v}":"1 gift for R$ {v}","pagamento":"payment","3 presentes por R$ 24,90":"3 gifts for R$ 24.90","Esta é uma prévia do site: o pagamento ainda não está ligado. Toque abaixo para ver o que acontece depois que o pagamento é aprovado.":"This is a preview of the site: payment isn't connected yet. Tap below to see what happens after the payment is approved.","Simular pagamento aprovado":"Simulate approved payment","Trocar de pacote":"Change bundle","pronto":"done","Agora é só <em>enviar</em>":"Now just <em>send it</em>","Sua carta está pronta. Agora é só <em>enviar</em>":"Your letter is ready. Now just <em>send it</em>","Seu álbum está pronto. Agora é só <em>enviar</em>":"Your album is ready. Now just <em>send it</em>","Sua retrospectiva está pronta. Agora é só <em>enviar</em>":"Your retrospective is ready. Now just <em>send it</em>","Link da sua carta":"Your letter link","Copiar":"Copy","Enviar no WhatsApp":"Send on WhatsApp","Abrir como quem recebe":"Open as the recipient","imprima e entregue junto<br><b>com um presente</b>":"print it and hand it over<br><b>with a gift</b>","Montar o próximo presente":"Create the next gift","Ainda restam {n} presentes no seu pacote.":"You still have {n} gifts left in your bundle.","Ainda resta 1 presente no seu pacote.":"You still have 1 gift left in your bundle.","Link copiado.":"Link copied.","Selecionei o link: copie com o seu teclado.":"I selected the link: copy it with your keyboard.","Rodapé":"Footer","Romper o lacre e abrir a carta":"Break the seal and open the letter","Toque no lacre para abrir":"Tap the seal to open","CORREIO DO AMOR":"LOVE POST","galeria":"gallery","mensagens":"messages","você escolhe":"you choose","Pra onde <em>a gente vai?</em>":"Where <em>should we go?</em>","toque no lugar que você prefere":"tap the place you like best","boa escolha! agora é só responder lá embaixo":"good choice! now just answer down below","Guardar a carta no envelope":"Put the letter back in the envelope","Tocar a música":"Play the song","Pausar a música":"Pause the song","a música escolhida toca aqui":"the chosen song plays here","{d} de {m} de {y}":"{m} {d}, {y}","desde {x}":"since {x}","uma carta de {x}":"a letter from {x}","Abrir bilhete: {x}":"Open note: {x}","abra":"open","para terminar":"to finish","anos":"years","meses":"months","horas":"hours","minutos":"minutes","segundos":"seconds","janeiro":"January","fevereiro":"February","março":"March","abril":"April","maio":"May","junho":"June","julho":"July","agosto":"August","setembro":"September","outubro":"October","novembro":"November","dezembro":"December","Barzinho":"Bar","música ao vivo":"live music","no barzinho":"at the bar","Cinema":"Movies","pipoca grande":"large popcorn","no cinema":"at the movies","Jantar":"Dinner","à luz de velas":"by candlelight","no jantar":"at dinner","Praia":"Beach","pôr do sol":"sunset","na praia":"at the beach","Piquenique":"Picnic","no parque":"in the park","no piquenique":"at the picnic","Cafezinho":"Coffee","com bolo":"with cake","no café":"at the café","Show":"Concert","pista ou camarote":"floor or VIP box","no show":"at the concert","de pistache":"pistachio","no sorvete":"at the ice cream shop","Anterior":"Previous","Fechar":"Close","Próxima":"Next","Foto ampliada":"Enlarged photo","Foto {n}":"Photo {n}","Ampliar foto: {x}":"Enlarge photo: {x}","Lisboa, finalmente":"Lisbon, at last","aquela noite na cidade":"that night in the city","céu azul de domingo":"blue Sunday sky","de mãos dadas":"holding hands","nosso primeiro beijo":"our first kiss","nós daqui a 40 anos":"us, 40 years from now","piquenique no campo":"picnic in the countryside","pôr do sol em Paraty":"sunset in Paraty","nosso primeiro jantar":"our first dinner","as flores do primeiro encontro":"flowers from our first date","vem comigo?":"come with me?","a noite das velinhas":"the candlelight night","piquenique a dois":"picnic for two","rindo à toa":"laughing for no reason","o barzinho":"the bar","o cinema":"the movies","o jantar":"the dinner","a praia":"the beach","o piquenique":"the picnic","o café":"the café","o show":"the concert","o sorvete":"the ice cream","a gente na praia":"us at the beach","a turma toda":"the whole crew","a viagem de carro":"the road trip","o show da vida":"the concert of a lifetime","aquele abraço":"that hug","a foto mais antiga":"the oldest photo","a vó e a netinha":"grandma and her granddaughter","vovó e vovô":"grandma and grandpa","o almoço de domingo":"Sunday lunch","mãe e filha":"mother and daughter","mãos que cuidaram":"hands that cared","o bolo da vó":"grandma's cake","o bolo":"the cake","soprando as velas":"blowing out the candles","a festa":"the party","o presente":"the gift","o brinde":"the toast","seu sorriso":"your smile"},"es":{"Escreva com Amor":"Escreva com Amor","escrevacomamor.com.br":"escrevacomamor.com.br","© 2026 Escreva com Amor · escrevacomamor.com.br":"© 2026 Escreva com Amor · escrevacomamor.com.br","Miguel & Ana Clara":"Miguel & Ana Clara","Cartas digitais com envelope, lacre, flores, fotos e música. Monte grátis e só pague depois de ver pronta.":"Cartas digitales con sobre, lacre, flores, fotos y música. Créala gratis y paga solo después de verla lista.","Pular para o conteúdo":"Saltar al contenido","Monte grátis e só pague depois de ver pronta":"Créala gratis y paga solo después de verla lista","Chega por link ou QR code, sem baixar nada":"Llega por enlace o código QR, sin descargar nada","Escreva com Amor, início":"Escreva com Amor, inicio","Seções":"Secciones","Modelos":"Modelos","Álbum e retrospectiva":"Álbum y retrospectiva","Como funciona":"Cómo funciona","Dúvidas":"Preguntas","Preços":"Precios","Criar agora":"Crear ahora","Idioma: {x}":"Idioma: {x}","carta digital com envelope, lacre e flores":"carta digital con sobre, lacre y flores","Tem coisa que só cabe numa <em>carta.</em>":"Hay cosas que solo caben en una <em>carta.</em>","Uma carta para":"Una carta para","o seu amor":"tu amor","a sua mãe":"tu mamá","a melhor amiga":"tu mejor amiga","quem faz aniversário":"quien cumple años","aquele crush":"ese crush","a sua avó":"tu abuela","Escreva do seu jeito e escolha envelope, lacre, flores, fotos e música. Quem recebe rompe o lacre no celular e abre a carta como se ela tivesse chegado pelo correio.":"Escribe a tu manera y elige sobre, lacre, flores, fotos y música. Quien la recibe rompe el lacre en el celular y abre la carta como si hubiera llegado por correo.","Nome de quem vai receber":"Nombre de quien la recibe","Para quem é a sua carta?":"¿Para quién es tu carta?","Começar minha carta":"Empezar mi carta","Ocasião da carta de exemplo":"Ocasión de la carta de ejemplo","É para":"Es para","Montar é grátis":"Crearla es gratis","Você vê pronta antes de pagar":"La ves lista antes de pagar","Abre em qualquer celular":"Abre en cualquier celular","toque no lacre para abrir":"toca el lacre para abrir","Retrospectiva":"Retrospectiva","Álbum do casal":"Álbum de pareja","Aniversário":"Cumpleaños","Homenagem":"Homenaje","Amigos":"Amigos","Chamar para sair":"Invitar a salir","Declaração":"Declaración","Pedido de namoro":"Pedir que sea tu pareja","Aniversário de namoro":"Aniversario de novios","Namoro":"Aniversario","Pedido":"La pregunta","Sair":"Cita","Por que uma carta":"Por qué una carta","Tem coisa que a gente sente há muito tempo e nunca acha o momento certo de dizer. Uma <em>carta</em> cria esse momento. Ela chega fechada, com o nome da pessoa no envelope, e só abre quando ela rompe o <em>lacre</em>. Depois vem o resto: as palavras, as <em>fotos</em>, as <em>flores</em> e a <em>música</em> de vocês.":"Hay cosas que sentimos hace mucho tiempo y nunca encontramos el momento de decirlas. Una <em>carta</em> crea ese momento. Llega cerrada, con el nombre de la persona en el sobre, y solo se abre cuando rompe el <em>lacre</em>. Después viene el resto: las palabras, las <em>fotos</em>, las <em>flores</em> y la <em>música</em> de ustedes.","três presentes":"tres regalos","Três jeitos de dizer o que você <em>sente</em>":"Tres formas de decir lo que <em>sientes</em>","Uma carta para abrir, um álbum para folhear ou uma retrospectiva para assistir. Escolha o formato e monte do seu jeito.":"Una carta para abrir, un álbum para hojear o una retrospectiva para ver. Elige el formato y créalo a tu manera.","carta com lacre":"carta con lacre","Carta":"Carta","Chega num envelope fechado. A pessoa rompe o lacre e a carta se abre com flores, fotos, stickers, contador do tempo juntos e a música de vocês.":"Llega en un sobre cerrado. La persona rompe el lacre y la carta se abre con flores, fotos, stickers, un contador del tiempo juntos y la música de ustedes.","Ver exemplo":"Ver ejemplo","Escrever carta":"Escribir carta","álbum de":"álbum de","Nós dois":"Nosotros dos","álbum do casal":"álbum de pareja","Álbum":"Álbum","Um livro de capa de couro para folhear no celular, página por página, com as fotos de vocês, legendas, datas e o que você ama na pessoa.":"Un libro con tapa de cuero para hojear en el celular, página por página, con sus fotos, leyendas, fechas y lo que amas de esa persona.","Folhear exemplo":"Hojear ejemplo","Montar álbum":"Crear álbum","juntos há":"juntos desde hace","dias":"días","retrospectiva do casal":"retrospectiva de pareja","A história de vocês em stories animados, com música tocando, os números do casal, as fotos que contam tudo e um final para guardar.":"La historia de ustedes en stories animadas, con música sonando, los números de la pareja, las fotos que lo cuentan todo y un final para guardar.","Assistir exemplo":"Ver ejemplo","Criar retrospectiva":"Crear retrospectiva","exemplos de cartas":"cartas de ejemplo","Comece por um <em>modelo</em>":"Empieza con un <em>modelo</em>","Cada modelo já vem com texto, cores, flores e stickers. Abra, veja como a pessoa recebe e troque tudo o que quiser.":"Cada modelo ya trae texto, colores, flores y stickers. Ábrelo, mira cómo lo recibe la persona y cambia todo lo que quieras.","Filtrar modelos":"Filtrar modelos","Todos":"Todos","Para o amor":"Para el amor","Amigos e família":"Amigos y familia","Ver modelos anteriores":"Ver modelos anteriores","Ver mais modelos":"Ver más modelos","arraste ou use as setas":"arrastra o usa las flechas","para {x}":"para {x}","Ver aberta":"Verla abierta","Usar este":"Usar este","Clássico":"Clásico","Divertido":"Divertido","Para dizer, por escrito, tudo o que você sente.":"Para decir, por escrito, todo lo que sientes.","Meses ou anos juntos, com contador e as fotos de vocês.":"Meses o años juntos, con contador y las fotos de ustedes.","Termina com a pergunta. E o botão de não foge.":"Termina con la pregunta. Y el botón de no se escapa.","Desejos, bolo e as fotos do ano da pessoa.":"Deseos, pastel y las fotos del año de la persona.","Para a amizade que já virou família.":"Para la amistad que ya es familia.","Um convite com lugares para a pessoa escolher.":"Una invitación con lugares para que la persona elija.","Para mãe, pai e avós: um obrigado que fica.":"Para mamá, papá y abuelos: un gracias que se queda.","personalize tudo":"personaliza todo","Tudo que cabe na sua <em>carta</em>":"Todo lo que cabe en tu <em>carta</em>","Lacre do seu jeito":"Lacre a tu manera","Cinco cores de cera, com as iniciais de vocês, coração, rosa ou estrela.":"Cinco colores de cera, con sus iniciales, corazón, rosa o estrella.","Envelopes e papéis":"Sobres y papeles","Cinco envelopes e sete papéis: pautado, algodão, kraft, envelhecido, caderno, aquarela e quadriculado.":"Cinco sobres y siete papeles: rayado, algodón, kraft, envejecido, cuaderno, acuarela y cuadriculado.","Flores que brotam":"Flores que brotan","Rosas, girassóis, tulipas, lírios ou flores do campo, desabrochando enquanto a pessoa lê.":"Rosas, girasoles, tulipanes, lirios o flores silvestres, abriéndose mientras la persona lee.","Fotos de vocês":"Sus fotos","Em carrossel de polaroids, presas na fita, num varal ou numa galeria.":"En carrusel de polaroids, pegadas con cinta, en un tendedero o en una galería.","Contador do tempo juntos":"Contador del tiempo juntos","Anos, meses, dias e até os segundos, contando ao vivo desde a data de vocês.":"Años, meses, días y hasta los segundos, contando en vivo desde su fecha.","Nossa música":"Nuestra canción","A música de vocês":"La canción de ustedes","Um player na carta para a trilha sonora do casal, da amizade ou da família.":"Un reproductor en la carta para la banda sonora de la pareja, la amistad o la familia.","Stickers":"Stickers","Gatinho, café, pizza, viagem, violão e mais, colados pela carta.":"Gatito, café, pizza, viaje, guitarra y más, pegados por la carta.","Te amo":"Te amo","sempre":"siempre","sorriso":"sonrisa","Letras que falam":"Letras que hablan","Estilo clássico, elegante, ou divertido, com várias fontes misturadas e animadas.":"Estilo clásico, elegante, o divertido, con varias fuentes mezcladas y animadas.","Quer namorar comigo?":"¿Quieres ser mi pareja?","SIM!":"¡SÍ!","não":"no","tem certeza?":"¿seguro?","pensa bem":"piénsalo bien","não vale":"no se vale","última chance":"última oportunidad","ok, só sim":"ok, solo sí","Perguntas na carta":"Preguntas en la carta","No pedido, o botão de não foge. No convite, a pessoa escolhe para onde vocês vão.":"En la pregunta, el botón de no se escapa. En la invitación, la persona elige a dónde van.","como funciona":"cómo funciona","Você só paga no <em>último passo</em>":"Solo pagas en el <em>último paso</em>","Escolha o formato e o modelo":"Elige el formato y el modelo","Carta, álbum ou retrospectiva, para o amor, a família ou os amigos.":"Carta, álbum o retrospectiva, para el amor, la familia o los amigos.","Escreva e personalize":"Escribe y personaliza","Texto, fotos, envelope, lacre, flores e música, vendo tudo ao vivo num celular ao lado.":"Texto, fotos, sobre, lacre, flores y música, viendo todo en vivo en un celular al lado.","Veja pronta":"Mírala lista","Abra do jeito que a pessoa vai receber e ajuste o que quiser antes de enviar.":"Ábrela como la va a recibir la persona y ajusta lo que quieras antes de enviarla.","Pague e envie":"Paga y envía","Você recebe um link e um QR code para mandar como e quando quiser.":"Recibes un enlace y un código QR para enviarla como y cuando quieras.","Começar agora, é grátis montar":"Empezar ahora, crearla es gratis","entrega":"entrega","Chega como mensagem, abre como <em>carta</em>":"Llega como mensaje, se abre como <em>carta</em>","Depois de pronta, você recebe um link para mandar por mensagem, rede social ou e-mail, e um QR code para imprimir e entregar junto com um presente. A pessoa abre no navegador do celular, sem baixar nada.":"Cuando está lista, recibes un enlace para enviar por mensaje, redes sociales o correo, y un código QR para imprimir y entregar junto con un regalo. La persona la abre en el navegador del celular, sin descargar nada.","tenho uma coisa pra você 💌":"tengo algo para ti 💌","Tenho uma coisa pra você 💌":"Tengo algo para ti 💌","Uma carta para você":"Una carta para ti","o que é isso?? 😳":"¿¿qué es esto?? 😳","AMOR 😭😭":"AMOR 😭😭","aponte a câmera<br><b>para abrir a sua carta</b>":"apunta la cámara<br><b>para abrir tu carta</b>","dúvidas":"preguntas","Perguntas <em>frequentes</em>":"Preguntas <em>frecuentes</em>","Preciso pagar para montar?":"¿Tengo que pagar para crearla?","Não. Você monta, vê a carta pronta do jeito que a pessoa vai receber e só paga quando gostar do resultado.":"No. La creas, ves la carta lista como la va a recibir la persona y solo pagas cuando te guste el resultado.","A pessoa precisa baixar algum aplicativo?":"¿La persona necesita descargar alguna aplicación?","Não. A carta abre no navegador de qualquer celular ou computador, pelo link ou pelo QR code.":"No. La carta se abre en el navegador de cualquier celular o computadora, con el enlace o el código QR.","Como a pessoa recebe?":"¿Cómo la recibe la persona?","Você recebe um link para mandar por mensagem, rede social ou e-mail, e um QR code para imprimir ou mostrar na hora.":"Recibes un enlace para enviar por mensaje, redes sociales o correo, y un código QR para imprimir o mostrar en el momento.","Qual a diferença entre carta, álbum e retrospectiva?":"¿Cuál es la diferencia entre carta, álbum y retrospectiva?","A carta chega num envelope com lacre e se abre com texto, flores e fotos. O álbum é um livro para folhear página por página. A retrospectiva conta a história de vocês em stories animados com música.":"La carta llega en un sobre con lacre y se abre con texto, flores y fotos. El álbum es un libro para hojear página por página. La retrospectiva cuenta su historia en stories animadas con música.","É só para casais?":"¿Es solo para parejas?","Não. Tem modelos para amigos, aniversário, homenagem para mãe, pai e avós, convite para sair e pedido de namoro.":"No. Hay modelos para amigos, cumpleaños, homenajes a mamá, papá y abuelos, invitaciones a salir y para pedir que sea tu pareja.","Posso colocar as minhas fotos?":"¿Puedo poner mis fotos?","Sim. Você escolhe as fotos do seu celular, escreve uma legenda em cada uma e escolhe como elas aparecem.":"Sí. Eliges las fotos de tu celular, escribes una leyenda en cada una y eliges cómo aparecen.","Como funcionam os pacotes?":"¿Cómo funcionan los paquetes?","Cada carta, álbum ou retrospectiva usa 1 do pacote. Os valores ficam na aba":"Cada carta, álbum o retrospectiva usa 1 del paquete. Los valores están en la pestaña","O que você sente merece ficar <em>por escrito</em>":"Lo que sientes merece quedar <em>por escrito</em>","Comece agora e veja a sua carta pronta antes de decidir qualquer coisa.":"Empieza ahora y mira tu carta lista antes de decidir nada.","Escrever minha carta":"Escribir mi carta","Etapas":"Pasos","<b>1</b>Montar":"<b>1</b>Crear","<b>2</b>Ver pronta":"<b>2</b>Ver lista","<b>3</b>Enviar":"<b>3</b>Enviar","Monte o seu <em>presente</em>":"Crea tu <em>regalo</em>","Formato":"Formato","<span class=\"ti\">✉</span>Carta":"<span class=\"ti\">✉</span>Carta","<span class=\"ti\">❦</span>Álbum":"<span class=\"ti\">❦</span>Álbum","<span class=\"ti\">▶</span>Retrospectiva":"<span class=\"ti\">▶</span>Retrospectiva","Modo":"Modo","Editar":"Editar","Prévia ao vivo":"Vista previa en vivo","<b>1</b>Ocasião":"<b>1</b>Ocasión","Trocar a ocasião muda as cores e o texto de exemplo. O que você já escreveu fica.":"Cambiar la ocasión cambia los colores y el texto de ejemplo. Lo que ya escribiste se queda.","<b>2</b>O que você quer dizer":"<b>2</b>Lo que quieres decir","Para":"Para","De":"De","Como começa":"Cómo empieza","Palavra em destaque":"Palabra destacada","Sua mensagem":"Tu mensaje","Pule uma linha para começar outro parágrafo.":"Deja una línea en blanco para empezar otro párrafo.","Assinatura":"Firma","<b>3</b>Envelope e lacre":"<b>3</b>Sobre y lacre","Envelope":"Sobre","Cera do lacre":"Cera del lacre","No lacre":"En el lacre","Iniciais":"Iniciales","Tom da mão que abre a carta":"Tono de las manos que abren la carta","<b>4</b>Estilo, papel e flores":"<b>4</b>Estilo, papel y flores","Estilo":"Estilo","Papel":"Papel","Flores":"Flores","<b>5</b>Fotos":"<b>5</b>Fotos","Como as fotos aparecem":"Cómo aparecen las fotos","<b>6</b>Data e música":"<b>6</b>Fecha y canción","Desde quando":"Desde cuándo","Nome da música":"Nombre de la canción","<b>7</b>Stickers":"<b>7</b>Stickers","Escolha até 6.":"Elige hasta 6.","<b>1</b>Capa":"<b>1</b>Portada","Cor do couro":"Color del cuero","Título":"Título","Nomes":"Nombres","<b>2</b>Desde quando":"<b>2</b>Desde cuándo","Data em que tudo começou":"Fecha en que todo empezó","<b>3</b>Fotos e legendas":"<b>3</b>Fotos y leyendas","<b>4</b>Coisas que eu amo em você":"<b>4</b>Cosas que amo de ti","<b>5</b>Música e final":"<b>5</b>Canción y final","Mensagem final":"Mensaje final","<b>1</b>Abertura":"<b>1</b>Inicio","<b>2</b>Vocês em números":"<b>2</b>Ustedes en números","<b>4</b>O que eu mais amo em você":"<b>4</b>Lo que más amo de ti","<b>5</b>Final":"<b>5</b>Final","Frase final":"Frase final","ao vivo":"en vivo","toque no lacre para ver a abertura":"toca el lacre para ver cómo se abre","toque no álbum para abrir e vire as páginas":"toca el álbum para abrirlo y pasa las páginas","toque no play para assistir com música":"toca play para verla con música","Carta para <b>Ana Clara</b>":"Carta para <b>Ana Clara</b>","Ver como ficou":"Ver cómo quedó","Vinho":"Vino","Vermelho":"Rojo","Vermelha":"Roja","Kraft":"Kraft","Marfim":"Marfil","Verde":"Verde","Ouro":"Oro","Pele clara":"Piel clara","Pele média":"Piel media","Pele morena":"Piel morena","Pele negra":"Piel negra","Coração":"Corazón","Rosa":"Rosa","Estrela":"Estrella","Pautado":"Rayado","Algodão":"Algodón","Envelhecido":"Envejecido","Caderno":"Cuaderno","Aquarela":"Acuarela","Quadriculado":"Cuadriculado","Rosas":"Rosas","Girassóis":"Girasoles","Tulipas":"Tulipanes","Lírios":"Lirios","Do campo":"Silvestres","Carrossel":"Carrusel","Na fita":"Con cinta","Varal":"Tendedero","Galeria":"Galería","Gatinho":"Gatito","Cachorrinho":"Perrito","Ursinho":"Osito","Coelhinho":"Conejito","Coraçãozinho":"Corazoncito","Café":"Café","Pizza":"Pizza","Sorvete":"Helado","Pipoca":"Palomitas","Música":"Música","Videogame":"Videojuegos","Viagem":"Viaje","Livros":"Libros","Futebol":"Fútbol","Fotografia":"Fotografía","Violão":"Guitarra","Plantinhas":"Plantitas","Boa noite":"Buenas noches","Bolo":"Pastel","Cerveja":"Cerveza","Sticker {x}":"Sticker {x}","Prévia da carta":"Vista previa de la carta","Carta de exemplo: toque no lacre para abrir":"Carta de ejemplo: toca el lacre para abrir","role a carta dentro do celular para ver tudo":"desplaza la carta dentro del celular para ver todo","Coisa que eu amo {n}":"Cosa que amo {n}","Número {n}":"Número {n}","O que é o número {n}":"Qué es el número {n}","Estas são fotos de exemplo. Coloque as de vocês:":"Estas son fotos de ejemplo. Pon las de ustedes:","legenda":"leyenda","Legenda da foto {n}":"Leyenda de la foto {n}","Tirar a foto {n}":"Quitar la foto {n}","exemplo":"ejemplo","Adicionar fotos":"Agregar fotos","até 8 fotos":"hasta 8 fotos","Usar as de exemplo":"Usar las de ejemplo","Carta para {x}":"Carta para {x}","alguém especial":"alguien especial","Álbum {x}":"Álbum {x}","de vocês":"de ustedes","Retrospectiva de {x}":"Retrospectiva de {x}","vocês":"ustedes","o seu riso antes da piada acabar":"tu risa antes de que termine el chiste","o seu abraço de domingo":"tu abrazo de domingo","quando você canta errado no carro":"cuando cantas mal la letra en el carro","o jeito que você me olha":"la forma en que me miras","Obrigado por cada página até aqui. As próximas eu quero escrever com você.":"Gracias por cada página hasta aquí. Las próximas las quiero escribir contigo.","Com amor, Miguel":"Con amor, Miguel","Nossa retrospectiva":"Nuestra retrospectiva","cafés juntos":"cafés juntos","viagens":"viajes","gato adotado":"gato adoptado","seu riso":"tu risa","seu abraço":"tu abrazo","sua coragem":"tu valentía","nós dois":"nosotros dos","E isso é só o começo.":"Y esto es solo el comienzo.","Voltar":"Volver","Assim a pessoa vai receber":"Así la va a recibir la persona","Exemplo: assim a pessoa recebe":"Ejemplo: así la recibe la persona","Gostei, quero enviar":"Me gusta, quiero enviarla","Usar este modelo":"Usar este modelo","Montar meu álbum":"Crear mi álbum","Criar minha retrospectiva":"Crear mi retrospectiva","montar é grátis":"crearla es gratis","preços":"precios","Escolha o seu <em>pacote</em>":"Elige tu <em>paquete</em>","Cada carta, álbum ou retrospectiva usa 1 do pacote.":"Cada carta, álbum o retrospectiva usa 1 del paquete.","Pacotes":"Paquetes","presente":"regalo","presentes":"regalos","<small>R$</small>9,90":"<small>R$</small>9,90","<small>R$</small>24,90":"<small>R$</small>24,90","<small>R$</small>39,90":"<small>R$</small>39,90","para uma ocasião especial":"para una ocasión especial","Recomendado":"Recomendado","R$ 8,30 cada, economize R$ 4,80":"R$ 8,30 cada uno, ahorra R$ 4,80","R$ 7,98 cada, economize R$ 9,60":"R$ 7,98 cada uno, ahorra R$ 9,60","Carta, álbum ou retrospectiva, você escolhe":"Carta, álbum o retrospectiva, tú eliges","Todos os modelos, papéis, flores e stickers":"Todos los modelos, papeles, flores y stickers","Suas fotos e a música de vocês":"Tus fotos y la canción de ustedes","Link e QR code para enviar":"Enlace y código QR para enviar","Continuar com 3 presentes":"Continuar con 3 regalos","Continuar com {n} presentes":"Continuar con {n} regalos","Continuar com 1 presente":"Continuar con 1 regalo","Sua carta para {x} está pronta para enviar.":"Tu carta para {x} está lista para enviar.","Seu álbum {x} está pronto para enviar.":"Tu álbum {x} está listo para enviar.","Sua retrospectiva de {x} está pronta para enviar.":"Tu retrospectiva de {x} está lista para enviar.","Escolha um pacote. Este presente usa 1 dele.":"Elige un paquete. Este regalo usa 1 de él.","Ver de novo":"Ver de nuevo","Primeiro você monta, depois paga.":"Primero la creas, después pagas.","Montar é grátis, e você vê o presente pronto antes de escolher o pacote.":"Crearlo es gratis, y ves el regalo listo antes de elegir el paquete.","Começar a montar":"Empezar a crear","Montar meu presente primeiro":"Crear mi regalo primero","{n} presentes por R$ {v}":"{n} regalos por R$ {v}","1 presente por R$ {v}":"1 regalo por R$ {v}","pagamento":"pago","3 presentes por R$ 24,90":"3 regalos por R$ 24,90","Esta é uma prévia do site: o pagamento ainda não está ligado. Toque abaixo para ver o que acontece depois que o pagamento é aprovado.":"Esta es una vista previa del sitio: el pago todavía no está conectado. Toca abajo para ver qué pasa después de que se aprueba el pago.","Simular pagamento aprovado":"Simular pago aprobado","Trocar de pacote":"Cambiar de paquete","pronto":"listo","Agora é só <em>enviar</em>":"Ahora solo falta <em>enviarla</em>","Sua carta está pronta. Agora é só <em>enviar</em>":"Tu carta está lista. Ahora solo falta <em>enviarla</em>","Seu álbum está pronto. Agora é só <em>enviar</em>":"Tu álbum está listo. Ahora solo falta <em>enviarlo</em>","Sua retrospectiva está pronta. Agora é só <em>enviar</em>":"Tu retrospectiva está lista. Ahora solo falta <em>enviarla</em>","Link da sua carta":"Enlace de tu carta","Copiar":"Copiar","Enviar no WhatsApp":"Enviar por WhatsApp","Abrir como quem recebe":"Abrir como quien la recibe","imprima e entregue junto<br><b>com um presente</b>":"imprímelo y entrégalo<br><b>con un regalo</b>","Montar o próximo presente":"Crear el próximo regalo","Ainda restam {n} presentes no seu pacote.":"Todavía te quedan {n} regalos en tu paquete.","Ainda resta 1 presente no seu pacote.":"Todavía te queda 1 regalo en tu paquete.","Link copiado.":"Enlace copiado.","Selecionei o link: copie com o seu teclado.":"Seleccioné el enlace: cópialo con tu teclado.","Rodapé":"Pie de página","Romper o lacre e abrir a carta":"Romper el lacre y abrir la carta","Toque no lacre para abrir":"Toca el lacre para abrir","CORREIO DO AMOR":"CORREO DEL AMOR","galeria":"galería","mensagens":"mensajes","você escolhe":"tú eliges","Pra onde <em>a gente vai?</em>":"¿A dónde <em>vamos?</em>","toque no lugar que você prefere":"toca el lugar que prefieras","boa escolha! agora é só responder lá embaixo":"¡buena elección! ahora solo responde abajo","Guardar a carta no envelope":"Guardar la carta en el sobre","Tocar a música":"Reproducir la canción","Pausar a música":"Pausar la canción","a música escolhida toca aqui":"la canción elegida suena aquí","{d} de {m} de {y}":"{d} de {m} de {y}","desde {x}":"desde {x}","uma carta de {x}":"una carta de {x}","Abrir bilhete: {x}":"Abrir nota: {x}","abra":"abre","para terminar":"para terminar","anos":"años","meses":"meses","horas":"horas","minutos":"minutos","segundos":"segundos","janeiro":"enero","fevereiro":"febrero","março":"marzo","abril":"abril","maio":"mayo","junho":"junio","julho":"julio","agosto":"agosto","setembro":"septiembre","outubro":"octubre","novembro":"noviembre","dezembro":"diciembre","Barzinho":"Barcito","música ao vivo":"música en vivo","no barzinho":"en el barcito","Cinema":"Cine","pipoca grande":"palomitas grandes","no cinema":"en el cine","Jantar":"Cena","à luz de velas":"a la luz de las velas","no jantar":"en la cena","Praia":"Playa","pôr do sol":"atardecer","na praia":"en la playa","Piquenique":"Picnic","no parque":"en el parque","no piquenique":"en el picnic","Cafezinho":"Cafecito","com bolo":"con pastel","no café":"en el café","Show":"Concierto","pista ou camarote":"pista o palco VIP","no show":"en el concierto","de pistache":"de pistacho","no sorvete":"en la heladería","Anterior":"Anterior","Fechar":"Cerrar","Próxima":"Siguiente","Foto ampliada":"Foto ampliada","Foto {n}":"Foto {n}","Ampliar foto: {x}":"Ampliar foto: {x}","Lisboa, finalmente":"Lisboa, por fin","aquela noite na cidade":"aquella noche en la ciudad","céu azul de domingo":"cielo azul de domingo","de mãos dadas":"de la mano","nosso primeiro beijo":"nuestro primer beso","nós daqui a 40 anos":"nosotros dentro de 40 años","piquenique no campo":"picnic en el campo","pôr do sol em Paraty":"atardecer en Paraty","nosso primeiro jantar":"nuestra primera cena","as flores do primeiro encontro":"las flores de la primera cita","vem comigo?":"¿vienes conmigo?","a noite das velinhas":"la noche de las velitas","piquenique a dois":"picnic para dos","rindo à toa":"riendo por nada","o barzinho":"el barcito","o cinema":"el cine","o jantar":"la cena","a praia":"la playa","o piquenique":"el picnic","o café":"el café","o show":"el concierto","o sorvete":"el helado","a gente na praia":"nosotros en la playa","a turma toda":"todo el grupo","a viagem de carro":"el viaje en carro","o show da vida":"el concierto de nuestras vidas","aquele abraço":"ese abrazo","a foto mais antiga":"la foto más antigua","a vó e a netinha":"la abuela y su nieta","vovó e vovô":"abuelita y abuelito","o almoço de domingo":"el almuerzo del domingo","mãe e filha":"madre e hija","mãos que cuidaram":"manos que cuidaron","o bolo da vó":"el pastel de la abuela","o bolo":"el pastel","soprando as velas":"soplando las velas","a festa":"la fiesta","o presente":"el regalo","o brinde":"el brindis","seu sorriso":"tu sonrisa"}};
/* ================= IDIOMAS: português (original), inglês e espanhol ================= */
/* O texto em português é a própria chave: L('Ver aberta') devolve a tradução do idioma atual.
   Na página, cada trecho de texto é achado sozinho na primeira vez e guardado com o original,
   para dar para trocar de idioma quantas vezes quiser sem recarregar. */
(function(){
  var D=window.EA_I18N||{},LANGS=['pt','en','es'],KEY='eca-lang';
  function pick(){
    try{var s=localStorage.getItem(KEY);if(LANGS.indexOf(s)>=0)return s;}catch(e){}
    var n=String((navigator.languages&&navigator.languages[0])||navigator.language||'pt').slice(0,2).toLowerCase();
    return n==='en'||n==='es'?n:'pt';
  }
  if(LANGS.indexOf(EA.lang)<0)EA.lang=pick();
  function norm(s){return String(s).replace(/\s+/g,' ').trim();}
  function L(s,o){var d=D[EA.lang],k=norm(s),r=EA.lang!=='pt'&&d&&d[k]!=null?d[k]:s;return o?r.replace(/\{(\w+)\}/g,function(_,x){return o[x]!=null?o[x]:''}):r;}
  function has(s){var d=D.en;return !!(d&&d[norm(s)]!=null);}

  /* ---- trechos da página ---- */
  var INLINE={EM:1,B:1,STRONG:1,I:1,BR:1,SMALL:1,SPAN:1,SUP:1,SUB:1,U:1};
  var SKIP={SCRIPT:1,STYLE:1,svg:1,SVG:1,TEXTAREA:1,INPUT:1,SELECT:1,OPTION:1,IFRAME:1,TEMPLATE:1,NOSCRIPT:1};
  var ATTRS=['placeholder','aria-label','title','alt'];
  var units=[],seen=typeof WeakSet!=='undefined'?new WeakSet():null;
  function inlineOnly(el){for(var c=el.firstElementChild;c;c=c.nextElementSibling){if(!INLINE[c.tagName]||c.id||!inlineOnly(c))return false;}return true;}
  function ownText(el){for(var n=el.firstChild;n;n=n.nextSibling)if(n.nodeType===3&&n.nodeValue.trim())return true;return false;}
  function collect(root){
    var out=[];
    (function walk(el){
      if(el.hasAttribute('data-noi18n'))return;
      var form=el.tagName==='INPUT'||el.tagName==='TEXTAREA'||el.tagName==='SELECT';
      if(SKIP[el.tagName]&&!form)return;
      ATTRS.forEach(function(a){var v=el.getAttribute(a);if(v&&v.trim())out.push({el:el,attr:a,pt:v,cur:v});});
      if(form)return;
      if(ownText(el)&&inlineOnly(el)&&el.firstElementChild){out.push({el:el,html:true,pt:el.innerHTML,cur:el.innerHTML});return;}
      for(var n=el.firstChild;n;n=n.nextSibling){
        if(n.nodeType===3&&n.nodeValue.trim())out.push({node:n,pt:n.nodeValue,cur:n.nodeValue});
        else if(n.nodeType===1)walk(n);
      }
    })(root);
    return out;
  }
  function now(u){return u.attr?u.el.getAttribute(u.attr):(u.html?u.el.innerHTML:u.node.nodeValue);}
  function put(u){
    /* se o código da página já trocou esse texto por outro, ele deixa de ser nosso */
    if(u.dead||(u.node?!u.node.isConnected:!u.el.isConnected)||now(u)!==u.cur){u.dead=true;return;}
    var tr=L(u.pt);
    if(u.attr)u.el.setAttribute(u.attr,tr);
    else if(u.html)u.el.innerHTML=tr;
    else{var m=/^(\s*)[\s\S]*?(\s*)$/.exec(u.pt);u.node.nodeValue=(EA.lang==='pt'?u.pt:m[1]+norm(tr)+m[2]);}
    u.cur=now(u);
  }
  /* guarda os trechos de uma parte da página (uma vez) e aplica o idioma atual */
  function boot(root){if(seen){if(seen.has(root))return apply();seen.add(root);}units=units.concat(collect(root));apply();}
  function apply(){units.forEach(put);units=units.filter(function(u){return !u.dead});document.documentElement.lang=EA.lang==='pt'?'pt-BR':EA.lang;}
  /* lista dos trechos sem tradução (para testes) */
  function missing(){var m={};units.forEach(function(u){if(u.dead)return;var k=norm(u.pt);if(!/[A-Za-zÀ-ÿ]/.test(k))return;if(!has(k))m[k]=1;});return Object.keys(m);}
  function set(l){if(LANGS.indexOf(l)<0)return;EA.lang=l;try{localStorage.setItem(KEY,l)}catch(e){}photos();apply();}

  /* legendas e datas das fotos de exemplo ("ago 2026" vira "aug 2026") */
  var AB={pt:['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'],en:['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'],es:['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic']};
  function abbr(d){return String(d).replace(/^([a-zç]{3})(?=\s|$)/i,function(m){var i=AB.pt.indexOf(m.toLowerCase());return i<0?m:AB[EA.lang][i];});}
  function photos(){
    var lists=[EA.PHOTOS||[]];var ps=window.EA_PHOTOSETS||EA.PHOTOSETS||{};for(var k in ps)lists.push(ps[k]);
    lists.forEach(function(arr){(arr||[]).forEach(function(p){if(p.cap0==null){p.cap0=p.cap;p.d0=p.d;}p.cap=L(p.cap0||'');if(p.d0)p.d=abbr(p.d0);});});
  }
  /* textos dos modelos de carta no idioma atual (português + troca do que tiver tradução) */
  var occCache={};
  function merge(a,b){var o={},k;for(k in a)o[k]=a[k];for(k in b){var x=a[k],y=b[k];o[k]=(y&&typeof y==='object'&&!Array.isArray(y)&&x&&typeof x==='object'&&!Array.isArray(x))?merge(x,y):y;}return o;}
  EA.occs=function(){var l=EA.lang,src=window.EA_OCCS,T=window.EA_OCCS_I18N;if(l==='pt'||!T||!T[l])return src;if(occCache[l])return occCache[l];var out={};for(var k in src)out[k]=merge(src[k],T[l][k]||{});return occCache[l]=out;};
  photos();
  EA.L=L;EA.i18n={boot:boot,apply:apply,set:set,missing:missing,LANGS:LANGS,has:has,collect:collect};
})();
/* ================= ÁLBUM DO CASAL E RETROSPECTIVA: peças em comum ================= */
(function(){
  var MESES={pt:['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'],
    en:['January','February','March','April','May','June','July','August','September','October','November','December'],
    es:['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']};
  var LOC={pt:'pt-BR',en:'en-US',es:'es-ES'};
  /* textos do álbum e da retrospectiva nos três idiomas */
  var TX={
    pt:{eb:'para {to}',st:'{from} guardou a história de vocês em um <em>álbum</em>.',cta:'Abrir o álbum',stats:'{p} páginas · {f} fotos · {d} dias de história',
      para:'para',de:'de',dedic:'Este álbum guarda a nossa história. Folheie devagar.',
      p2e:'capítulo 1',p2t:'Onde tudo <em>começou</em>',p2s:'toque na foto para virar',p2b:'foi aqui que tudo começou',
      p3e:'edição especial',p3t:'Saiu no <em>jornal</em>',jn:'Correio do Amor',jh:'Começa hoje a história de {from} e {to}',jx:'edição extra',jp:'preço: um abraço',
      jb:'Fontes próximas confirmam: os dois foram vistos juntos e ninguém conseguia parar de sorrir. A previsão para os próximos anos é de muito amor, com chance de viagens e café na cama.',
      p4e:'fotos favoritas',p4t:'Mural de <em>nós dois</em>',p4s:'toque numa foto para ampliar',
      p5e:'juntos há',dias:'dias',horas:'horas',minutos:'minutos',p5h:'e cada um valeu a pena',cal:'o primeiro dia',
      p6e:'só nosso',p6t:'Coisas que eu amo <em>em você</em>',
      p7e:'trilha sonora',p7t:'Nossa <em>música</em>',p7s:'toque no disco para ouvir',
      p9e:'por onde passamos',p9t:'Nossos <em>ingressos</em>',tk:'entrada para dois',tks:'lugar: ao seu lado',
      p10e:'para terminar',cont:'continua…',contS:'as próximas páginas a gente escreve junto',feito:'feito com Escreva com Amor',
      of:'{a} de {n}',ofs:'{a}–{b} de {n}',capa:'capa',prev:'Página anterior',next:'Próxima página',fechar:'Fechar o álbum',
      ano:'ano',anos:'anos',mes:'mês',meses:'meses',dia:'dia',diasN:'dias',e:'e',
      r_from:'Um presente de {from}',r_for:'Feito para {to}',r_t:'{from} separou um <em>presente</em> especial!',r_sub:'Uma retrospectiva feita com carinho para celebrar a história de vocês.',
      r_meta:'{n} capítulos · 1 música · {m}',r_junt:'Juntos há {t}',r_play:'Tocar a retrospectiva',r_pause:'Pausar',r_cover:'nossa música',r_caps:'Capítulos',r_tit:'Título',r_dur:'Duração',r_now:'tocando agora',r_paused:'em pausa',r_close:'Voltar',r_sec:'{s} s',r_music:'Música',r_kind:'Retrospectiva',r_story:'Capítulo {a} de {n}',r_like:'Curtir',r_share:'Compartilhar',r_shuffle:'Ordem aleatória',
      s0:'a retrospectiva de',s0b:'{t} de nós',s1:'tudo começou em',s2:'desde então foram',s2b:'dias juntos',s2c:'e eu lembro de muitos',s4:'a gente em números',s5:'uns momentos',s6:'o que eu mais amo em você',s7:'a trilha de tudo isso',again:'Assistir de novo',
      c0:'Abertura',c1:'O começo',c2:'Os dias',c3:'Uma foto',c4:'Em números',c5:'Momentos',c6:'O que eu amo',c7:'Nossa música',c8:'O final'},
    en:{eb:'for {to}',st:'{from} kept your story in an <em>album</em>.',cta:'Open the album',stats:'{p} pages · {f} photos · {d} days of story',
      para:'for',de:'from',dedic:'This album keeps our story. Turn the pages slowly.',
      p2e:'chapter 1',p2t:'Where it all <em>began</em>',p2s:'tap the photo to flip it',p2b:'this is where it all began',
      p3e:'special edition',p3t:'It made the <em>news</em>',jn:'The Love Post',jh:"{from} and {to}'s story begins today",jx:'extra edition',jp:'price: one hug',
      jb:'Sources close to the couple confirm: the two were seen together and nobody could stop smiling. The forecast for the coming years is plenty of love, with a chance of trips and breakfast in bed.',
      p4e:'favorite photos',p4t:'Our photo <em>wall</em>',p4s:'tap a photo to enlarge it',
      p5e:'together for',dias:'days',horas:'hours',minutos:'minutes',p5h:'and every one was worth it',cal:'day one',
      p6e:'just ours',p6t:'Things I love <em>about you</em>',
      p7e:'soundtrack',p7t:'Our <em>song</em>',p7s:'tap the record to listen',
      p9e:"places we've been",p9t:'Our <em>tickets</em>',tk:'admit two',tks:'seat: next to you',
      p10e:'to finish',cont:'to be continued…',contS:"we'll write the next pages together",feito:'made with Escreva com Amor',
      of:'{a} of {n}',ofs:'{a}–{b} of {n}',capa:'cover',prev:'Previous page',next:'Next page',fechar:'Close the album',
      ano:'year',anos:'years',mes:'month',meses:'months',dia:'day',diasN:'days',e:'and',
      r_from:'A gift from {from}',r_for:'Made for {to}',r_t:'{from} put together a <em>special</em> gift!',r_sub:'A retrospective made with love to celebrate your story together.',
      r_meta:'{n} chapters · 1 song · {m}',r_junt:'Together for {t}',r_play:'Play the retrospective',r_pause:'Pause',r_cover:'our song',r_caps:'Chapters',r_tit:'Title',r_dur:'Length',r_now:'now playing',r_paused:'paused',r_close:'Back',r_sec:'{s} sec',r_music:'Music',r_kind:'Retrospective',r_story:'Chapter {a} of {n}',r_like:'Like',r_share:'Share',r_shuffle:'Shuffle',
      s0:'the retrospective of',s0b:'{t} of us',s1:'it all began on',s2:'since then, it has been',s2b:'days together',s2c:'and I remember so many',s4:'us in numbers',s5:'a few moments',s6:'what I love most about you',s7:'the soundtrack to all of it',again:'Watch again',
      c0:'Opening',c1:'The beginning',c2:'The days',c3:'A photo',c4:'In numbers',c5:'Moments',c6:'What I love',c7:'Our song',c8:'The ending'},
    es:{eb:'para {to}',st:'{from} guardó la historia de ustedes en un <em>álbum</em>.',cta:'Abrir el álbum',stats:'{p} páginas · {f} fotos · {d} días de historia',
      para:'para',de:'de',dedic:'Este álbum guarda nuestra historia. Hojéalo despacio.',
      p2e:'capítulo 1',p2t:'Donde todo <em>empezó</em>',p2s:'toca la foto para darle la vuelta',p2b:'aquí empezó todo',
      p3e:'edición especial',p3t:'Salió en el <em>periódico</em>',jn:'Correo del Amor',jh:'Hoy empieza la historia de {from} y {to}',jx:'edición extra',jp:'precio: un abrazo',
      jb:'Fuentes cercanas confirman: los dos fueron vistos juntos y nadie podía dejar de sonreír. El pronóstico para los próximos años es mucho amor, con probabilidad de viajes y desayuno en la cama.',
      p4e:'fotos favoritas',p4t:'Nuestro <em>mural</em>',p4s:'toca una foto para ampliarla',
      p5e:'juntos desde hace',dias:'días',horas:'horas',minutos:'minutos',p5h:'y cada uno valió la pena',cal:'el primer día',
      p6e:'solo nuestro',p6t:'Cosas que amo <em>de ti</em>',
      p7e:'banda sonora',p7t:'Nuestra <em>canción</em>',p7s:'toca el disco para escuchar',
      p9e:'por donde pasamos',p9t:'Nuestras <em>entradas</em>',tk:'entrada para dos',tks:'asiento: a tu lado',
      p10e:'para terminar',cont:'continuará…',contS:'las próximas páginas las escribimos juntos',feito:'hecho con Escreva com Amor',
      of:'{a} de {n}',ofs:'{a}–{b} de {n}',capa:'portada',prev:'Página anterior',next:'Página siguiente',fechar:'Cerrar el álbum',
      ano:'año',anos:'años',mes:'mes',meses:'meses',dia:'día',diasN:'días',e:'y',
      r_from:'Un regalo de {from}',r_for:'Hecho para {to}',r_t:'¡{from} preparó un <em>regalo</em> especial!',r_sub:'Una retrospectiva hecha con cariño para celebrar la historia de ustedes.',
      r_meta:'{n} capítulos · 1 canción · {m}',r_junt:'Juntos desde hace {t}',r_play:'Reproducir la retrospectiva',r_pause:'Pausar',r_cover:'nuestra canción',r_caps:'Capítulos',r_tit:'Título',r_dur:'Duración',r_now:'sonando ahora',r_paused:'en pausa',r_close:'Volver',r_sec:'{s} s',r_music:'Música',r_kind:'Retrospectiva',r_story:'Capítulo {a} de {n}',r_like:'Me gusta',r_share:'Compartir',r_shuffle:'Aleatorio',
      s0:'la retrospectiva de',s0b:'{t} de nosotros',s1:'todo empezó el',s2:'desde entonces fueron',s2b:'días juntos',s2c:'y recuerdo muchos',s4:'nosotros en números',s5:'algunos momentos',s6:'lo que más amo de ti',s7:'la banda sonora de todo esto',again:'Ver de nuevo',
      c0:'Apertura',c1:'El comienzo',c2:'Los días',c3:'Una foto',c4:'En números',c5:'Momentos',c6:'Lo que amo',c7:'Nuestra canción',c8:'El final'}
  };
  function lang(){return TX[EA.lang]?EA.lang:'pt'}
  function t(k,o){var s=(TX[lang()][k]!=null?TX[lang()][k]:TX.pt[k])||'';return o?s.replace(/\{(\w+)\}/g,function(_,x){return o[x]!=null?o[x]:''}):s;}
  function parse(iso){var p=String(iso||'').split('-');var d=new Date(+p[0],(+p[1]||1)-1,+p[2]||1);return isNaN(d)?new Date(2024,7,17):d;}
  function dataLonga(iso){var d=parse(iso),m=MESES[lang()][d.getMonth()];return lang()==='en'?m+' '+d.getDate()+', '+d.getFullYear():d.getDate()+' de '+m+' de '+d.getFullYear();}
  function dataCurta(iso){var d=parse(iso),a=('0'+d.getDate()).slice(-2),b=('0'+(d.getMonth()+1)).slice(-2);return (lang()==='en'?b+'.'+a:a+'.'+b)+'.'+d.getFullYear();}
  function mes(iso){return MESES[lang()][parse(iso).getMonth()];}
  function dias(iso){return Math.max(0,Math.floor((Date.now()-parse(iso).getTime())/864e5));}
  function ymd(iso){var a=parse(iso),n=new Date(),y=n.getFullYear()-a.getFullYear(),m=n.getMonth()-a.getMonth(),d=n.getDate()-a.getDate();if(d<0){d+=new Date(n.getFullYear(),n.getMonth(),0).getDate();m--;}if(m<0){m+=12;y--;}return [Math.max(0,y),Math.max(0,m),Math.max(0,d)];}
  function anos(iso){return ymd(iso)[0];}
  function un(n,a,b){return n+' '+(n===1?t(a):t(b));}
  function tempo(iso){var v=ymd(iso);return v[0]>=1?un(v[0],'ano','anos'):(v[1]>=1?un(v[1],'mes','meses'):un(v[2],'dia','diasN'));}
  function juntos(iso){var v=ymd(iso),p=[];if(v[0])p.push(un(v[0],'ano','anos'));if(v[1])p.push(un(v[1],'mes','meses'));if(v[2]||!p.length)p.push(un(v[2],'dia','diasN'));return p.length>1?p.slice(0,-1).join(', ')+' '+t('e')+' '+p[p.length-1]:p[0];}
  function num(n){return Math.round(n).toLocaleString(LOC[lang()]);}
  function countUp(node,to,ms){if(EA.reduce){node.textContent=num(to);return;}var t0=performance.now();(function f(tt){var k=Math.min(1,(tt-t0)/ms),e=1-Math.pow(1-k,3);node.textContent=num(to*e);if(k<1&&node.isConnected)requestAnimationFrame(f);})(t0);}
  function nomes(cfg){var p=String(cfg.names||'').split(/\s*[&+]\s*|\s+e\s+|\s+and\s+|\s+y\s+/);return {from:(cfg.from||p[0]||'').trim(),to:(cfg.to||p.slice(1).join(' & ')||p[0]||'').trim()};}

  /* caixinha de música: uma melodia curta em loop, gerada no navegador (só toca depois de um toque) */
  var music=(function(){
    var ctx=null,master=null,timer=0,next=0,step=0,on=false,subs=[];
    var CH=[[60,64,67,72],[55,59,62,67],[57,60,64,69],[53,57,60,65]];
    var MEL=[76,0,74,72,74,0,79,0, 74,0,72,71,72,0,67,0, 72,0,71,69,71,0,76,0, 69,0,72,74,72,0,0,0];
    var ARP=[0,2,1,3,2,1,3,2],SP=60/80/2;
    function hz(m){return 440*Math.pow(2,(m-69)/12)}
    function note(tt,m,g,dur){
      var o=ctx.createOscillator(),o2=ctx.createOscillator(),v=ctx.createGain(),v2=ctx.createGain();
      o.type='sine';o2.type='sine';o.frequency.value=hz(m);o2.frequency.value=hz(m)*4.02;v2.gain.value=.09;
      o2.connect(v2);v2.connect(v);o.connect(v);v.connect(master);
      v.gain.setValueAtTime(0,tt);v.gain.linearRampToValueAtTime(g,tt+.006);v.gain.exponentialRampToValueAtTime(.0004,tt+dur);
      o.start(tt);o2.start(tt);o.stop(tt+dur+.05);o2.stop(tt+dur+.05);
    }
    function sched(){while(next<ctx.currentTime+.3){var bar=Math.floor(step/8)%4,c=CH[bar];note(next,c[ARP[step%8]]-12,.07,1.3);var mm=MEL[step%32];if(mm)note(next,mm,.13,1.9);next+=SP;step++;}}
    function emit(){subs.forEach(function(f){f(on)})}
    return {
      play:function(){
        try{
          if(!ctx){var AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;ctx=new AC();master=ctx.createGain();var comp=ctx.createDynamicsCompressor();master.connect(comp);comp.connect(ctx.destination);}
          if(ctx.state==='suspended')ctx.resume();if(on)return;on=true;
          master.gain.cancelScheduledValues(ctx.currentTime);master.gain.setValueAtTime(.0001,ctx.currentTime);master.gain.exponentialRampToValueAtTime(.55,ctx.currentTime+.6);
          next=ctx.currentTime+.08;step=0;clearInterval(timer);timer=setInterval(sched,70);sched();emit();
        }catch(e){}
      },
      stop:function(){if(!on)return;on=false;clearInterval(timer);if(ctx){master.gain.cancelScheduledValues(ctx.currentTime);master.gain.setValueAtTime(master.gain.value,ctx.currentTime);master.gain.linearRampToValueAtTime(0,ctx.currentTime+.35);}emit();},
      toggle:function(){on?this.stop():this.play()},
      isOn:function(){return on},
      sub:function(f){subs.push(f);return function(){subs=subs.filter(function(x){return x!==f})}}
    };
  })();

  var COVERS={vinho:['#7A1324','#3A0710','Vinho'],vermelho:['#B11E2F','#6E0D19','Vermelho'],verde:['#4E6B35','#24361A','Verde'],kraft:['#B48A5C','#6E4E2A','Kraft'],marfim:['#F2E8D3','#D6C4A0','Marfim']};
  var esc=EA.esc;
  function ph(cfg,i){var p=cfg.photos&&cfg.photos.length?cfg.photos:EA.PHOTOS;return p[i%p.length];}
  function img(p,cls){return '<span class="gx-img '+(cls||'')+'" style="background:'+p.bg+'"></span>';}
  function seal(cfg,cera){return '<svg viewBox="0 0 100 100" aria-hidden="true">'+EA.sealMarkup({cera:cera||(cfg.cover==='marfim'?'vermelho':'ouro'),simbolo:'iniciais',iniciais:cfg.names})+'</svg>';}

  /* ---------- capa de couro com rabiscos dourados ---------- */
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  var DOODLE=['M0 -2.5C-2.5 -6 -8 -3 -5.5 1.5L0 6.5L5.5 1.5C8 -3 2.5 -6 0 -2.5Z','M0 -6L1.6 -1.8L6 -1.8L2.4 1L3.8 5.6L0 2.8L-3.8 5.6L-2.4 1L-6 -1.8L-1.6 -1.8Z',
    'M-1.6 0a1.6 1.6 0 1 0 3.2 0a1.6 1.6 0 1 0 -3.2 0M0 -2.2C-2 -6 2 -6 0 -2.2M2.2 0C6 -2 6 2 2.2 0M0 2.2C2 6 -2 6 0 2.2M-2.2 0C-6 2 -6 -2 -2.2 0',
    'M-6 3C-6 -3 0 -5 2 -2C4 1 0 3 -1 1C-2 -1 1 -2 2 0','M-6 4C-2 2 2 -2 6 -5M-3 2.6C-4 0 -2 -1 -1 .6M0 .3C-.5 -2.5 1.5 -3.5 2.5 -1.5M3 -2.3C3.5 -5 5.5 -5.5 6 -4',
    'M-5 -3.5H5V3.5H-5ZM-5 -3.5L0 .8L5 -3.5','M-1.6 4.4a1.8 1.4 0 1 1 .1 0M.2 4.2V-5L4.5 -3.6','M0 -5V5M-5 0H5M-3 -3L3 3M3 -3L-3 3','M-6 2Q-3 -4 0 2T6 2','M-4 4L4 -4M-1 -4H4V1'];
  function doodles(seed){
    var r=rng(seed),s='',W=120,H=160,holes=[[26,22,68,82],[10,104,100,26]];
    for(var j=0;j<13;j++)for(var i=0;i<9;i++){var x=(i+.5+(r()-.5)*.8)*W/9,y=(j+.5+(r()-.5)*.8)*H/13;
      if(holes.some(function(h){return x>h[0]&&x<h[0]+h[2]&&y>h[1]&&y<h[1]+h[3]}))continue;
      s+='<path d="'+DOODLE[Math.floor(r()*DOODLE.length)]+'" transform="translate('+x.toFixed(1)+' '+y.toFixed(1)+') rotate('+((r()*70-35)|0)+') scale('+(.55+r()*.4).toFixed(2)+')"/>';}
    return '<svg class="doodles" viewBox="0 0 120 160" preserveAspectRatio="none" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width=".55" stroke-linecap="round" stroke-linejoin="round">'+s+'</g></svg>';
  }
  function capa(cfg){var C=COVERS[cfg.cover]||COVERS.vinho;
    return '<div class="cv'+(cfg.cover==='marfim'?' light':'')+'" style="--c1:'+C[0]+';--c2:'+C[1]+'">'+doodles(7)+'<span class="cv-frame"></span><p class="cv-title">'+esc(cfg.title||'')+'</p><span class="cv-arch">'+img(ph(cfg,0))+'</span><p class="cv-names">'+esc(cfg.names||'')+'</p></div>';}

  /* ---------- objetos da mesa ---------- */
  var VELA='<span class="halo"></span><svg viewBox="0 0 100 100" aria-hidden="true"><path d="M84 66q12 1 10 9q-2 6 -11 4" fill="none" stroke="#9A7232" stroke-width="4"/><ellipse cx="50" cy="70" rx="40" ry="19" fill="#7E5A22"/><ellipse cx="50" cy="66" rx="40" ry="18" fill="url(#g-ouro)"/><ellipse cx="50" cy="66" rx="31" ry="13" fill="#6A4A1A" opacity=".45"/><path d="M27 60v6a23 10 0 0 0 46 0v-6" fill="#EADCC0"/><ellipse cx="50" cy="60" rx="23" ry="10" fill="#F8EEDA"/><ellipse cx="50" cy="60" rx="17" ry="6.5" fill="#FDF7EA"/><path d="M50 59v-6" stroke="#3A2210" stroke-width="1.4" stroke-linecap="round"/><g class="flame"><path d="M50 26C43 38 44 50 50 54C56 50 57 38 50 26Z" fill="#FFC966"/><path d="M50 38C47 45 48 51 50 53C52 51 53 45 50 38Z" fill="#FFF3D1"/></g></svg>';
  var CHAVE='<svg viewBox="0 0 120 70" aria-hidden="true"><g fill="url(#g-ouro)" stroke="#6E4E1E" stroke-width=".8"><path fill-rule="evenodd" d="M6 35a13 13 0 1 0 26 0a13 13 0 1 0 -26 0ZM12.5 35a6.5 6.5 0 1 1 13 0a6.5 6.5 0 1 1 -13 0Z"/><rect x="31" y="32.5" width="66" height="5" rx="2"/><path d="M84 37h5v11h-5zM93 37h4.5v8H93z"/></g><g fill="#8E1422" stroke="#5E0B18" stroke-width=".6"><path d="M40 35C30 20 18 22 22 30C25 36 34 36 40 35Z"/><path d="M40 35C30 50 18 48 22 40C25 34 34 34 40 35Z"/><path d="M40 35C46 46 44 58 52 64L48 66C40 58 41 46 40 35Z"/><path d="M40 35C50 44 58 50 66 52L65 56C55 53 47 45 40 35Z"/><circle cx="40" cy="35" r="3.4" fill="#A8192C"/></g></svg>';
  function envelope(cfg){return '<svg viewBox="0 0 160 110" aria-hidden="true"><rect width="160" height="110" rx="3" fill="#EADFC6"/><rect width="160" height="110" rx="3" fill="url(#p-grao)" opacity=".35"/><path d="M0 110L66 52M160 110L94 52" stroke="#D3C29E" stroke-width="1.2" fill="none"/><path d="M1 1L80 64L159 1" fill="#E3D5B6" stroke="#CBB78F" stroke-width="1.2"/><path d="M0 74C40 70 120 80 160 72" stroke="#B9A57C" stroke-width="1.1" fill="none" opacity=".8"/><svg x="60" y="44" width="40" height="40" viewBox="0 0 100 100">'+EA.sealMarkup({cera:'vermelho',simbolo:'coracao'})+'</svg></svg>';}
  var RAMO='<svg viewBox="0 0 120 160" aria-hidden="true"><g stroke="#6B7A45" stroke-width="1.6" fill="none" stroke-linecap="round"><path d="M60 150C58 120 40 80 22 40"/><path d="M60 150C62 112 66 70 70 22"/><path d="M60 150C66 118 86 86 104 58"/><path d="M60 150C52 126 34 110 14 98"/></g><g fill="#7C8A55"><path d="M40 90c-10-4-14-12-12-16 8 2 12 8 12 16Z"/><path d="M66 80c8-6 16-6 18-2-6 6-12 6-18 2Z"/><path d="M84 92c2-10 10-14 14-12-2 8-8 12-14 12Z"/><path d="M30 106c-8 2-14-2-15-6 7-2 12 0 15 6Z"/></g><g fill="#B25A66"><ellipse cx="22" cy="40" rx="4" ry="6"/><ellipse cx="26" cy="52" rx="3.4" ry="5"/><ellipse cx="30" cy="63" rx="3" ry="4.4"/><ellipse cx="70" cy="22" rx="4" ry="6"/><ellipse cx="69" cy="34" rx="3.4" ry="5"/><ellipse cx="68" cy="46" rx="3" ry="4.4"/></g><g><circle cx="104" cy="58" r="7.5" fill="#8E1422"/><path d="M104 58m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" fill="none" stroke="#5E0B18" stroke-width="1.2"/><circle cx="14" cy="98" r="6.5" fill="#F3E6CC"/><circle cx="14" cy="98" r="2.2" fill="#B88C3E"/></g><path d="M52 132c6-4 10-4 16 0M52 136c6 4 10 4 16 0" stroke="#B48A5C" stroke-width="2" fill="none"/></svg>';
  function petala(x,y,r,s){return '<svg class="pet" style="left:'+x+'%;top:'+y+'%;transform:rotate('+r+'deg) scale('+s+')" viewBox="-.6 -1.05 1.2 1.1" aria-hidden="true"><use href="#petal"/></svg>';}

  /* ---------- páginas (frente e verso de cada folha) ---------- */
  function paginas(cfg){
    var N=nomes(cfg),a=ph(cfg,0),b=ph(cfg,1),d=dias(cfg.since),loves=(cfg.loves||[]).filter(Boolean),P=cfg.photos&&cfg.photos.length?cfg.photos:EA.PHOTOS;
    var head=function(e,tt,s){return '<header class="pg-hd"><p class="pg-eb">'+e+'</p><h4 class="pg-t">'+tt+'</h4>'+(s?'<p class="pg-s">'+s+'</p>':'')+'</header>';};
    var pol=function(p,i,cls){return '<figure class="ap'+(cls?' '+cls:'')+'" data-ph="'+i+'">'+img(p)+(p.cap?'<figcaption>'+esc(p.cap)+'</figcaption>':'')+'</figure>';};
    var tickets=[ph(cfg,1),ph(cfg,4),ph(cfg,6)];
    return [
      capa(cfg),
      /* 1 guarda: dedicatória */
      '<div class="pg guarda"><div class="tag"><span class="furo"></span><small>'+t('para')+'</small><b>'+esc(N.to)+'</b><small>'+t('de')+'</small><b class="b2">'+esc(N.from)+'</b><p>'+t('dedic')+'</p></div></div>',
      /* 2 onde tudo começou */
      '<div class="pg">'+head(t('p2e'),t('p2t'),t('p2s'))+'<div class="flip" tabindex="0" role="button" aria-label="'+t('p2s')+'"><div class="flip-in"><figure class="ap big f">'+img(a)+(a.cap?'<figcaption>'+esc(a.cap)+'</figcaption>':'')+'</figure><div class="ap big vs"><p>'+esc(dataLonga(cfg.since))+'</p><p class="m">'+esc(a.cap||'')+'</p><p class="m2">'+t('p2b')+' ♥</p></div></div></div></div>',
      /* 3 jornal */
      '<div class="pg">'+head(t('p3e'),t('p3t'))+'<article class="jornal"><p class="jn-top"><span>'+esc(dataCurta(cfg.since))+'</span><span class="ed">'+t('jx')+'</span><span>'+t('jp')+'</span></p><h5 class="jn-nome">'+t('jn')+'</h5><p class="jn-h">'+esc(t('jh',{from:N.from,to:N.to}))+'</p>'+img(b,'jn-foto')+'<p class="jn-cap">'+esc(b.cap||'')+'</p><div class="jn-cols"><p>'+t('jb')+'</p></div></article><svg class="jn-cafe" viewBox="-8 -8 116 116" aria-hidden="true"><use href="#st-cafe" filter="url(#f-sticker)"/></svg></div>',
      /* 4 mural */
      '<div class="pg">'+head(t('p4e'),t('p4t'),t('p4s'))+'<div class="mural"><div class="mu-row">'+pol(ph(cfg,2),2,'r-3')+pol(ph(cfg,3),3,'r2')+'</div><div class="filme"><span class="furos"></span>'+[4,5,6].map(function(i){return '<span class="qd" data-ph="'+i+'">'+img(ph(cfg,i))+'</span>'}).join('')+'<span class="furos b"></span></div><div class="mu-row">'+pol(ph(cfg,7),7,'r2 fitada')+pol(ph(cfg,0),0,'r-2')+'</div><i class="pin p1"></i><i class="pin p2"></i><i class="pin p3"></i></div></div>',
      /* 5 juntos há */
      '<div class="pg center">'+head(t('p5e'),'')+'<p class="ab-big" data-count="'+d+'">'+num(d)+'</p><p class="ab-unit">'+t('dias')+'</p><p class="ab-mini">'+num(d*24)+' '+t('horas')+' · '+num(d*1440)+' '+t('minutos')+'</p><p class="pg-hand">'+t('p5h')+'</p><div class="cal"><span class="cal-h">'+t('cal')+'</span><b>'+parse(cfg.since).getDate()+'</b><span>'+esc(mes(cfg.since))+' '+parse(cfg.since).getFullYear()+'</span></div></div>',
      /* 6 coisas que eu amo */
      '<div class="pg">'+head(t('p6e'),t('p6t'))+'<ul class="ab-loves">'+loves.map(function(l){return '<li><svg viewBox="0 0 24 24" aria-hidden="true"><use href="#heart"/></svg>'+esc(l)+'</li>'}).join('')+'</ul><svg class="prens" viewBox="-40 -50 80 140" aria-hidden="true"></svg></div>',
      /* 7 música */
      '<div class="pg center">'+head(t('p7e'),t('p7t'),t('p7s'))+'<button class="disco" type="button" aria-label="'+t('p7s')+'"><span class="capa-disco">'+img(ph(cfg,4))+'</span><span class="vinil"><span class="rot" style="background:'+ph(cfg,4).bg+'"></span></span></button><p class="ab-song">'+esc(cfg.song||'')+'</p></div>',
      /* 8 foto inteira com frase */
      '<div class="pg full" data-ph="5">'+img(ph(cfg,5),'bleed')+'<p class="ab-quote">'+esc(ph(cfg,5).cap||'')+'</p></div>',
      /* 9 ingressos */
      '<div class="pg">'+head(t('p9e'),t('p9t'))+'<div class="tks">'+tickets.map(function(p,i){return '<div class="tkt r'+['-2','2','-1'][i]+'"><div class="tk-a"><small>'+t('tk')+'</small><b>'+esc(p.cap||'')+'</b><span>'+esc(p.d||dataCurta(cfg.since))+' · '+t('tks')+'</span></div><div class="tk-b"><b>№ '+(17+i*23)+'</b></div></div>'}).join('')+'</div></div>',
      /* 10 carta final */
      '<div class="pg"><div class="bilhete"><p class="pg-eb">'+t('p10e')+'</p><p class="ab-final">'+esc(cfg.final||'')+'</p><p class="ab-sign">'+esc(cfg.sign||'')+'</p><span class="ab-seal">'+seal(cfg)+'</span></div></div>',
      /* 11 continua */
      '<div class="pg center linhas2"><p class="cont">'+t('cont')+'</p><p class="pg-hand">'+t('contS')+'</p><svg class="cont-h" viewBox="0 0 24 24" aria-hidden="true"><use href="#heart"/></svg></div>',
      /* 12 guarda final */
      '<div class="pg guarda fim"><span class="logo-f"><svg viewBox="0 0 124 100" aria-hidden="true"><use href="#logo-p"/></svg>'+t('feito')+'</span></div>'
    ];
  }

  function album(host,cfg,opt){
    opt=opt||{};
    if(host._kill)host._kill();
    var C=COVERS[cfg.cover]||COVERS.vinho,N=nomes(cfg),pgs=paginas(cfg),np=pgs.length-1,nl=Math.ceil((pgs.length)/2),d=dias(cfg.since),nf=(cfg.photos&&cfg.photos.length)||EA.PHOTOS.length;
    var leaves='';for(var i=0;i<nl;i++){var fr=pgs[i*2],bk=pgs[i*2+1]||'<div class="pg guarda fim"></div>';leaves+='<div class="leaf'+(i===0?' capa':'')+'" data-i="'+i+'"><div class="face front">'+fr+'</div><div class="face back">'+bk+'</div></div>';}
    host.innerHTML='<div class="alb2" style="--c1:'+C[0]+';--c2:'+C[1]+'"><div class="alb-mesa"><span class="luz"><i></i><i></i><i></i><i></i></span></div>'+
      '<div class="alb-scene"><div class="sc-hd"><p class="sc-eb">'+esc(t('eb',{to:N.to}))+'</p><h3 class="sc-t">'+t('st',{from:esc(N.from)})+'</h3><span class="sc-div" aria-hidden="true"><i></i><svg viewBox="0 0 24 24"><use href="#heart"/></svg><i></i></span></div>'+
      '<div class="sc-mesa"><span class="obj vela">'+VELA+'</span><span class="obj envl">'+envelope(cfg)+'</span><span class="obj ramo">'+RAMO+'</span><span class="obj chave">'+CHAVE+'</span>'+
      '<figure class="obj pol1">'+img(ph(cfg,1))+'</figure><figure class="obj pol2">'+img(ph(cfg,3))+'</figure>'+petala(30,78,20,1)+petala(70,18,-40,.8)+petala(76,72,60,.9)+petala(24,14,110,.7)+petala(58,90,-20,.8)+
      '<button class="sc-book" type="button" aria-label="'+t('cta')+'">'+capa(cfg)+'</button></div>'+
      '<div class="sc-ft"><button class="sc-cta" type="button"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5.5C5.5 4.5 9 4.5 12 6.5c3-2 6.5-2 9-1V19c-2.5-1-6-1-9 1-3-2-6.5-2-9-1Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M12 6.5V20" stroke="currentColor" stroke-width="1.5"/></svg>'+t('cta')+'</button><p class="sc-stats">'+esc(t('stats',{p:np,f:nf,d:num(d)}))+'</p></div></div>'+
      '<div class="alb-read" hidden><div class="rd-stage"><div class="bk">'+leaves+'</div></div>'+
      '<div class="rd-nav"><button type="button" class="rd-b" data-d="-1" aria-label="'+t('prev')+'"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12H4M10 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></button><div class="rd-mid"><p class="rd-n" aria-live="polite"></p><div class="rd-ticks"></div></div><button type="button" class="rd-b box" data-d="1" aria-label="'+t('next')+'"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h16M14 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></button></div>'+
      '<button type="button" class="rd-x" aria-label="'+t('fechar')+'">×</button></div></div>';
    var root=host.firstChild,scene=root.querySelector('.alb-scene'),read=root.querySelector('.alb-read'),stage=root.querySelector('.rd-stage'),bk=root.querySelector('.bk'),L=[].slice.call(root.querySelectorAll('.leaf'));
    /* flor prensada da página de coisas que eu amo */
    var pr=root.querySelector('.prens');if(pr){EA.el('path',{d:'M0 10 C 4 40 -6 60 2 88',stroke:'#6B7A45','stroke-width':2.4,fill:'none','stroke-linecap':'round'},pr);EA.flower(pr,'rosa',0,0,20,'vinho',{flat:true,rot:-10});EA.el('rect',{x:-16,y:56,width:34,height:12,rx:1.5,fill:'#E9D9B0',opacity:.82,transform:'rotate(18 1 62)'},pr);}
    /* estado: folhas viradas (0..nl-1) e, no celular, qual lado está na frente */
    var turned=0,side='R',spread=true,PW=0,PH=0,busy=0;
    function layout(){
      var sw=stage.clientWidth,sh=stage.clientHeight;if(!sw||!sh)return;
      spread=sw>=sh*1.05||sw>=760;
      if(spread){PH=Math.min(sh*.92,(sw*.94)/(2*.75));}else{PH=Math.min(sh*.94,sw*.9/.75);}
      PW=PH*.75;bk.style.width=(PW*2)+'px';bk.style.height=PH+'px';bk.style.left=(sw/2-PW)+'px';bk.style.top=((sh-PH)/2)+'px';
      root.classList.toggle('single',!spread);if(spread)side='R';cam(true);label();
    }
    function cam(instant){var tx=0;if(spread)tx=turned===0?-PW/2:0;else tx=side==='R'?-PW/2:PW/2;bk.style.transition=instant?'none':'';bk.style.transform='translateX('+tx.toFixed(1)+'px)';}
    function zs(){L.forEach(function(l,i){l.style.zIndex=i<turned?(10+i):(100-i)});}
    function label(){var n=root.querySelector('.rd-n'),a,b;root.classList.toggle('aberto',turned>0);
      if(turned===0){n.textContent=t('capa');}
      else if(spread){a=turned*2-1;b=Math.min(np,turned*2);n.textContent=t('ofs',{a:a,b:b,n:np});}
      else{a=side==='L'?turned*2-1:turned*2;n.textContent=t('of',{a:Math.min(a,np),n:np});}
      var tk=root.querySelector('.rd-ticks');if(!tk.children.length){for(var i=0;i<=np;i++){var s=document.createElement('button');s.type='button';s.dataset.p=i;s.setAttribute('aria-label',i===0?t('capa'):t('of',{a:i,n:np}));tk.appendChild(s);}}
      var cur=turned===0?0:(spread?turned*2-1:(side==='L'?turned*2-1:turned*2));[].forEach.call(tk.children,function(s,i){s.classList.toggle('on',spread&&turned>0?(i===cur||i===cur+1):i===cur)});
      root.querySelector('[data-d="-1"]').disabled=turned===0;root.querySelector('[data-d="1"]').disabled=turned>=nl-1&&(spread||side==='R');
    }
    function flip(to){var mv=to>turned?L[turned]:L[to];mv.style.zIndex=300;mv.classList.add('moving');setTimeout(function(){mv.classList.remove('moving');zs();},1050);turned=to;L.forEach(function(l,i){l.classList.toggle('turned',i<turned)});
      var big=root.querySelector('.leaf:nth-child('+(turned+1)+') [data-count],.leaf:nth-child('+turned+') .back [data-count]');if(big&&!EA.reduce)countUp(big,+big.dataset.count,1400);}
    function next(){if(spread){if(turned<nl-1)flip(turned+1);}else{if(side==='R'&&turned<nl-1){flip(turned+1);side='L';}else if(side==='L')side='R';}cam();label();}
    function prev(){if(spread){if(turned>0)flip(turned-1);}else{if(side==='L'){flip(turned-1);side='R';}else if(turned>0)side='L';}cam();label();}
    /* vai direto para uma página (0 = capa) */
    function goPage(p,instant){p=Math.max(0,Math.min(np,p));var tt=p===0?0:Math.ceil(p/2)+(p%2===0?0:0);
      if(p===0)tt=0;else tt=Math.floor((p+1)/2);
      if(instant){root.classList.add('instant');requestAnimationFrame(function(){requestAnimationFrame(function(){root.classList.remove('instant')})});}
      if(tt!==turned){turned=tt;L.forEach(function(l,i){l.classList.toggle('turned',i<turned)});zs();}
      side=p%2===1?'L':'R';cam(instant);label();}
    function open(instant){if(!read.hidden)return;read.hidden=false;layout();zs();
      if(instant||EA.reduce){scene.hidden=true;return;}
      root.classList.add('opening');EA.anim(scene,[{opacity:1},{opacity:0}],{d:450}).then(function(){scene.hidden=true;root.classList.remove('opening')});
      EA.anim(read,[{opacity:0,transform:'scale(.92)'},{opacity:1,transform:'none'}],{d:600,e:'cubic-bezier(.2,.8,.2,1)'});
      setTimeout(function(){if(turned===0)next();},650);}
    function close(){scene.hidden=false;read.hidden=true;goPage(0,true);music.stop();if(!EA.reduce)EA.anim(scene,[{opacity:0},{opacity:1}],{d:400});}
    root.querySelector('.sc-cta').addEventListener('click',function(){open()});
    root.querySelector('.sc-book').addEventListener('click',function(){open()});
    root.querySelector('.rd-x').addEventListener('click',close);
    root.querySelector('.rd-nav').addEventListener('click',function(e){var b=e.target.closest('[data-d]');if(b){+b.dataset.d>0?next():prev();return;}var s=e.target.closest('[data-p]');if(s)goPage(+s.dataset.p);});
    /* toque: lado direito avança, esquerdo volta; arrastar também vira */
    var x0=null,y0=0;
    stage.addEventListener('pointerdown',function(e){x0=e.clientX;y0=e.clientY;});
    stage.addEventListener('pointerup',function(e){
      if(x0==null)return;var dx=e.clientX-x0,dy=e.clientY-y0;x0=null;
      if(e.target.closest('.flip')){e.target.closest('.flip').classList.toggle('virada');return;}
      if(e.target.closest('.disco')){music.toggle();return;}
      var phn=e.target.closest('[data-ph]');if(phn&&Math.abs(dx)<10){var list=(cfg.photos&&cfg.photos.length?cfg.photos:EA.PHOTOS).map(function(p){return {bg:p.bg,cap:p.cap||''}});EA.lightbox(list,+phn.dataset.ph%list.length);return;}
      if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy)){dx<0?next():prev();return;}
      if(Math.abs(dx)<10){var r=stage.getBoundingClientRect();(e.clientX-r.left)<r.width*.35?prev():next();}
    });
    root.tabIndex=-1;
    root.addEventListener('keydown',function(e){if(read.hidden)return;if(e.key==='ArrowRight'){next();e.preventDefault()}if(e.key==='ArrowLeft'){prev();e.preventDefault()}});
    var ro=window.ResizeObserver?new ResizeObserver(function(){if(!read.hidden)layout()}):null;if(ro)ro.observe(stage);
    var off=music.sub(function(on){root.classList.toggle('tocando',on)});root.classList.toggle('tocando',music.isOn());
    host._kill=function(){off();if(ro)ro.disconnect();host._kill=null;};
    /* editor: mostrar uma página específica (0 = mesa com o álbum fechado) */
    host._go=function(p,instant){if(p<=0){if(read.hidden)return;close();return;}open(true);goPage(p,true);};
    if(opt.page)host._go(opt.page,true);
    return {open:open,goPage:goPage};
  }

  EA.album=album;EA.ALBUM_COVERS=COVERS;EA.music=music;EA.albumCapa=capa;
  EA.when={dataLonga:dataLonga,dataCurta:dataCurta,dias:dias,anos:anos,tempo:tempo,juntos:juntos,num:num,countUp:countUp,nomes:nomes,t:t};
})();
/* ================= RETROSPECTIVA DO CASAL: página de "playlist" e stories com música ================= */
(function(){
  var esc=EA.esc,W=EA.when,t=W.t,music=EA.music,DUR=5200;
  function ph(cfg,i){var p=cfg.photos&&cfg.photos.length?cfg.photos:EA.PHOTOS;return p[i%p.length];}
  function img(p,cls){return '<span class="gx-img '+(cls||'')+'" style="background:'+p.bg+'"></span>';}
  function seal(cfg,cera){return '<svg viewBox="0 0 100 100" aria-hidden="true">'+EA.sealMarkup({cera:cera||'vinho',simbolo:'iniciais',iniciais:cfg.names})+'</svg>';}
  function nomesH(cfg){var p=String(cfg.names||'').split(/\s*[&+]\s*|\s+e\s+|\s+and\s+|\s+y\s+/);return p.length>1?'<span class="n1">'+esc(p[0])+'</span><span class="amp">&amp;</span><span class="n2">'+esc(p.slice(1).join(' & '))+'</span>':'<span class="n1">'+esc(cfg.names)+'</span>';}
  function petals(n){var s='';for(var i=0;i<n;i++)s+='<i style="left:'+(5+i*90/n).toFixed(0)+'%;animation-delay:-'+(i*1.3%6).toFixed(1)+'s;animation-duration:'+(6+i%3)+'s"><svg viewBox="'+(i%3?'-.6 -1.05 1.2 1.1':'0 0 24 24')+'"><use href="#'+(i%3?'petal':'heart')+'"/></svg></i>';return '<div class="rt-pet" aria-hidden="true">'+s+'</div>';}
  var IC={
    play:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.2v13.6a.8.8 0 0 0 1.2.7l10.6-6.8a.8.8 0 0 0 0-1.4L9.2 4.5A.8.8 0 0 0 8 5.2Z"/></svg>',
    pause:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>',
    heart:'<svg viewBox="0 0 24 24" aria-hidden="true"><use href="#heart"/></svg>',
    note:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18.5a2.5 2.5 0 1 1-2.5-2.5H9V5l11-2v12.5a2.5 2.5 0 1 1-2.5-2.5H20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
    clock:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M12 7.5V12l3 2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
    prev:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    next:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };

  /* os 9 stories */
  function slides(cfg){
    var d=W.dias(cfg.since),a=ph(cfg,0),b=ph(cfg,1),c=ph(cfg,4),stats=(cfg.stats||[]).filter(function(s){return s&&s[1]});
    var loves=(cfg.loves||[]).filter(Boolean),F=['f-pena','f-gorda','f-mao','f-onda','f-bolha'];
    return [
      {cls:'vinho',html:petals(9)+'<div class="rt-in mid"><p class="rt-eb">'+t('s0')+'</p><h3 class="rt-names">'+nomesH(cfg)+'</h3><p class="rt-hand">'+esc(t('s0b',{t:W.tempo(cfg.since)}))+'</p></div>'},
      {cls:'papel',html:'<div class="rt-in"><p class="rt-eb red">'+t('s1')+'</p><p class="rt-date">'+esc(W.dataCurta(cfg.since))+'</p><figure class="rt-pol">'+img(a)+'<figcaption>'+esc(a.cap||'')+'</figcaption></figure></div>'},
      {cls:'vinho',html:'<div class="rt-in mid"><p class="rt-eb">'+t('s2')+'</p><p class="rt-num ouro-texto" data-to="'+d+'">0</p><p class="rt-unit">'+t('s2b')+'</p><p class="rt-sub"><span data-to="'+d*24+'">0</span> '+t('horas')+'<br><span data-to="'+d*1440+'">0</span> '+t('minutos')+'</p><p class="rt-hand">'+t('s2c')+'</p></div>'},
      {cls:'foto',html:img(b,'bleed kb')+'<div class="rt-in low"><p class="rt-cap">'+esc(b.cap||'')+'</p></div>'},
      {cls:'papel',html:'<div class="rt-in"><p class="rt-eb red">'+t('s4')+'</p>'+stats.map(function(s,i){return '<div class="rt-stat" style="--i:'+i+'"><b data-to="'+(parseInt(s[0],10)||0)+'">0</b><span>'+esc(s[1])+'</span></div>'}).join('')+'</div>'},
      {cls:'vinho',html:'<div class="rt-in"><p class="rt-eb">'+t('s5')+'</p><div class="rt-col">'+[ph(cfg,2),ph(cfg,3),ph(cfg,5),ph(cfg,6)].map(function(p,i){return '<figure class="rt-pol sm" style="--i:'+i+'">'+img(p)+'<figcaption>'+esc(p.cap||'')+'</figcaption></figure>'}).join('')+'</div></div>'},
      {cls:'papel aq',html:'<div class="rt-in mid"><p class="rt-eb red">'+t('s6')+'</p><div class="rt-words">'+loves.map(function(l,i){return '<span class="'+F[i%F.length]+'" style="--i:'+i+'">'+esc(l)+'</span>'}).join('')+'</div></div>'},
      {cls:'foto',html:img(c,'bleed kb2')+'<div class="rt-in low"><div class="rt-song"><span class="vinil"><span class="rot" style="background:'+c.bg+'"></span></span><div><small>'+t('s7')+'</small><b>'+esc(cfg.song||'')+'</b></div></div></div>'},
      {cls:'vinho',fim:true,html:petals(7)+'<div class="rt-in mid"><p class="rt-final">'+esc(cfg.final||'')+'</p><span class="rt-seal">'+seal(cfg,'ouro')+'</span><button class="rt-again" type="button">'+t('again')+'</button></div>'}
    ];
  }

  /* linha de cada capítulo na lista (miniatura + subtítulo) */
  function capitulos(cfg){
    var N=W.nomes(cfg),d=W.dias(cfg.since),st=(cfg.stats||[]).filter(function(s){return s&&s[1]})[0],lv=(cfg.loves||[]).filter(Boolean)[0];
    var tile=function(x,cls){return '<span class="rl-tile '+(cls||'')+'">'+x+'</span>';};
    return [
      [tile(seal(cfg,'ouro'),'seal'),esc(cfg.names||'')],
      [img(ph(cfg,0)),esc(W.dataLonga(cfg.since))],
      [tile('<b>'+W.num(d)+'</b>','num'),esc(W.num(d)+' '+t('s2b'))],
      [img(ph(cfg,1)),esc(ph(cfg,1).cap||'')],
      [tile('<b>'+esc(st?st[0]:'♥')+'</b>','num ouro'),esc(st?st[0]+' '+st[1]:'')],
      [img(ph(cfg,2)),esc([ph(cfg,2).cap,ph(cfg,3).cap].filter(Boolean).join(', '))],
      [tile(IC.heart,'heart'),esc(lv||'')],
      [img(ph(cfg,4)),esc(cfg.song||'')],
      [tile(seal(cfg,'vermelho'),'seal'),esc(cfg.final||'')]
    ].map(function(r,i){return {thumb:r[0],sub:r[1],name:t('c'+i)};});
  }

  function retro(host,cfg,opt){
    opt=opt||{};
    if(host._kill)host._kill();
    var S=slides(cfg),n=S.length,CH=capitulos(cfg),N=W.nomes(cfg),secs=Math.round(n*DUR/1000);
    var cur=-1,t0=0,acc=0,paused=true,raf=0,hold=0,playing=false,liked=false;
    var cover='<div class="rl-cover" aria-hidden="true"><span class="rl-grid">'+[0,1,2,3].map(function(i){return img(ph(cfg,[0,2,4,5][i]))}).join('')+'</span><span class="rl-badge">'+IC.heart+'</span><span class="rl-lab"><small>'+t('r_cover')+'</small><b>'+esc(String(cfg.names||'').replace(/\s*&\s*/,' + '))+'</b></span></div>';
    host.innerHTML='<div class="rt2"><div class="rl" tabindex="-1">'+
      '<div class="rl-glow" style="background:'+ph(cfg,0).bg+'"></div>'+
      '<div class="rl-in"><p class="rl-from">'+esc(t('r_from',{from:N.from}))+'</p>'+
      '<div class="rl-hero">'+cover+'<div class="rl-info"><p class="rl-kind">'+esc(cfg.title||t('r_kind'))+'</p><h3 class="rl-t">'+t('r_t',{from:esc(N.from)})+'</h3><p class="rl-sub">'+t('r_sub')+'</p>'+
      '<p class="rl-by"><span class="rl-av">'+seal(cfg)+'</span><b>'+esc(t('r_for',{to:N.to}))+'</b><span class="rl-dot">·</span><span>'+esc(t('r_meta',{n:n,m:t('r_sec',{s:secs})}))+'</span></p>'+
      '<p class="rl-junt">'+IC.heart+esc(t('r_junt',{t:W.juntos(cfg.since)}))+'</p></div></div>'+
      '<div class="rl-act"><button type="button" class="rl-ic rl-like" aria-pressed="false" aria-label="'+t('r_like')+'">'+IC.heart+'</button><button type="button" class="rl-ic rl-mus" aria-pressed="false" aria-label="'+t('r_music')+'">'+IC.note+'</button><span class="rl-sp"></span><button type="button" class="rl-play" aria-label="'+t('r_play')+'">'+IC.play+'</button></div>'+
      '<div class="rl-list" role="list"><div class="rl-th" aria-hidden="true"><span>#</span><span>'+t('r_tit')+'</span><span>'+IC.clock+'</span></div>'+
      CH.map(function(c,i){return '<button type="button" class="rl-row" role="listitem" data-i="'+i+'"><span class="rl-n"><b>'+(i+1)+'</b><span class="eq"><i></i><i></i><i></i></span></span><span class="rl-th2">'+c.thumb+'</span><span class="rl-tx"><b>'+esc(c.name)+'</b><small>'+c.sub+'</small></span><span class="rl-d">0:0'+Math.round(DUR/1000)+'</span></button>'}).join('')+
      '</div></div></div>'+
      '<div class="rl-bar"><span class="rl-bth">'+img(ph(cfg,4))+'</span><span class="rl-btx"><b>'+esc(cfg.song||'')+'</b><small>'+esc(cfg.names||'')+'</small></span><button type="button" class="rl-bp" aria-label="'+t('r_music')+'">'+IC.play+'</button><span class="rl-prog"><i></i></span></div>'+
      /* stories */
      '<div class="rs" hidden><button type="button" class="rs-nav l" aria-label="'+t('prev')+'">'+IC.prev+'</button>'+
      '<div class="rt"><div class="rt-bars">'+S.map(function(){return '<i><b></b></i>'}).join('')+'</div>'+
      '<div class="rt-head"><span class="rt-av">'+seal(cfg)+'</span><span class="rt-ttl">'+esc(cfg.title||'')+'</span><button type="button" class="rt-mus" aria-label="'+t('r_music')+'"><span class="eq"><i></i><i></i><i></i></span><span class="rt-mus-t">'+esc(cfg.song||'')+'</span></button><button type="button" class="rs-x" aria-label="'+t('r_close')+'">×</button></div>'+
      '<div class="rt-slides">'+S.map(function(s){return '<section class="rt-s '+s.cls+'" aria-hidden="true">'+s.html+'</section>'}).join('')+'</div>'+
      '<button type="button" class="rt-tap l" aria-label="'+t('prev')+'"></button><button type="button" class="rt-tap r" aria-label="'+t('next')+'"></button></div>'+
      '<button type="button" class="rs-nav r" aria-label="'+t('next')+'">'+IC.next+'</button></div></div>';
    var root=host.firstChild,land=root.querySelector('.rl'),rs=root.querySelector('.rs'),rt=root.querySelector('.rt'),sec=[].slice.call(root.querySelectorAll('.rt-s')),bars=[].slice.call(root.querySelectorAll('.rt-bars b')),rows=[].slice.call(root.querySelectorAll('.rl-row'));
    function mark(){rows.forEach(function(r,k){r.classList.toggle('cur',k===cur)});root.classList.toggle('playing',playing&&!rs.hidden);}
    function show(i){
      i=Math.max(0,Math.min(n-1,i));cur=i;acc=0;t0=performance.now();
      sec.forEach(function(s,k){s.classList.toggle('on',k===i);s.setAttribute('aria-hidden',k===i?'false':'true')});
      bars.forEach(function(b,k){b.style.width=k<i?'100%':'0%'});
      var s=sec[i];rt.classList.toggle('fim',!!S[i].fim);
      root.querySelector('.rs-nav.l').disabled=i===0;root.querySelector('.rs-nav.r').disabled=i===n-1;
      [].forEach.call(s.querySelectorAll('[data-to]'),function(x,k){x.textContent='0';setTimeout(function(){if(s.classList.contains('on'))W.countUp(x,+x.dataset.to,1500)},250+k*350)});
      mark();
    }
    function loop(tt){
      raf=requestAnimationFrame(loop);
      if(paused||cur<0||rs.hidden)return;
      var el=acc+(tt-t0),k=Math.min(1,el/DUR);bars[cur].style.width=(k*100).toFixed(1)+'%';
      if(k>=1){if(S[cur].fim){paused=true;playing=false;mark();return;}show(cur+1);}
    }
    function pause(){if(paused)return;acc+=performance.now()-t0;paused=true;rt.classList.add('paused')}
    function resume(){if(!paused||!playing)return;t0=performance.now();paused=false;rt.classList.remove('paused')}
    /* abre os stories no capítulo i, com música (só depois de um toque) */
    function play(i,silent){rs.hidden=false;playing=true;paused=false;rt.classList.remove('paused');if(!silent)music.play();show(i||0);
      if(!EA.reduce)EA.anim(rt,[{opacity:0,transform:'scale(.94) translateY(3%)'},{opacity:1,transform:'none'}],{d:420,e:'cubic-bezier(.2,.8,.2,1)'});rt.focus({preventScroll:true});}
    function close(){playing=false;paused=true;rs.hidden=true;mark();land.focus({preventScroll:true});}
    root.querySelector('.rl-play').addEventListener('click',function(){play(0)});
    root.querySelector('.rl-list').addEventListener('click',function(e){var r=e.target.closest('.rl-row');if(r)play(+r.dataset.i);});
    root.querySelector('.rl-like').addEventListener('click',function(){liked=!liked;this.setAttribute('aria-pressed',liked);this.classList.toggle('on',liked);if(liked&&!EA.reduce)EA.anim(this,[{transform:'scale(1)'},{transform:'scale(1.35)'},{transform:'scale(1)'}],{d:380});});
    [root.querySelector('.rl-mus'),root.querySelector('.rl-bp'),root.querySelector('.rt-mus')].forEach(function(b){b.addEventListener('click',function(){music.toggle()})});
    root.querySelector('.rs-x').addEventListener('click',close);
    root.querySelector('.rs-nav.l').addEventListener('click',function(){show(cur-1);resume()});
    root.querySelector('.rs-nav.r').addEventListener('click',function(){if(cur<n-1){show(cur+1);resume()}});
    root.querySelector('.rt-tap.l').addEventListener('click',function(){if(Date.now()-hold<350)show(cur-1);});
    root.querySelector('.rt-tap.r').addEventListener('click',function(){if(Date.now()-hold<350&&cur<n-1)show(cur+1);});
    [].forEach.call(root.querySelectorAll('.rt-tap'),function(b){
      var ht=0;
      b.addEventListener('pointerdown',function(){hold=Date.now();ht=setTimeout(pause,220)});
      ['pointerup','pointercancel','pointerleave'].forEach(function(ev){b.addEventListener(ev,function(){clearTimeout(ht);resume()})});
    });
    rt.tabIndex=-1;
    root.addEventListener('click',function(e){if(e.target.closest('.rt-again')){playing=true;paused=false;rt.classList.remove('paused');show(0);}});
    root.addEventListener('keydown',function(e){if(rs.hidden)return;if(e.key==='ArrowRight'&&cur<n-1)show(cur+1);if(e.key==='ArrowLeft')show(cur-1);if(e.key==='Escape')close();});
    var off=music.sub(function(on){root.classList.toggle('tocando',on);[].forEach.call(root.querySelectorAll('.rl-bp,.rl-mus'),function(b){b.setAttribute('aria-pressed',on)});root.querySelector('.rl-bp').innerHTML=on?IC.pause:IC.play;});
    root.classList.toggle('tocando',music.isOn());root.querySelector('.rl-bp').innerHTML=music.isOn()?IC.pause:IC.play;
    raf=requestAnimationFrame(loop);
    /* editor: abre direto num story, parado */
    if(opt.poster!=null){rs.hidden=false;show(opt.poster);paused=true;playing=false;rt.classList.add('paused');}
    host._kill=function(){cancelAnimationFrame(raf);off();host._kill=null;};
    return {play:play,show:show,close:close};
  }
  EA.retro=retro;
})();
/* ================= HOME, EDITOR E PREÇOS ================= */
(function(){
  var $=EA.$,esc=EA.esc,anim=EA.anim,reduce=EA.reduce,W=EA.when,L=EA.L;
  /* idioma: os textos fixos da página trocam sozinhos; o resto é montado com L() */
  var H1PT=document.getElementById('h1').innerHTML; /* o título é quebrado em palavras para animar; ao trocar de idioma ele é refeito */
  EA.i18n.boot(document.body);
  var OCC=EA.occs();
  var qs=function(s,r){return (r||document).querySelector(s)},qa=function(s,r){return [].slice.call((r||document).querySelectorAll(s))};
  var ORDER=['declaracao','namoro','pedido','aniversario','amigos','sair','homenagem'];
  var NOME={declaracao:'Declaração',namoro:'Aniversário de namoro',pedido:'Pedido de namoro',aniversario:'Aniversário',amigos:'Amigos',sair:'Chamar para sair',homenagem:'Homenagem'};
  var CURTO={declaracao:'Declaração',namoro:'Namoro',pedido:'Pedido',aniversario:'Aniversário',amigos:'Amigos',sair:'Sair',homenagem:'Homenagem'};
  var BLURB={declaracao:'Para dizer, por escrito, tudo o que você sente.',namoro:'Meses ou anos juntos, com contador e as fotos de vocês.',pedido:'Termina com a pergunta. E o botão de não foge.',aniversario:'Desejos, bolo e as fotos do ano da pessoa.',amigos:'Para a amizade que já virou família.',sair:'Um convite com lugares para a pessoa escolher.',homenagem:'Para mãe, pai e avós: um obrigado que fica.'};
  var GRP={declaracao:'amor',namoro:'amor',pedido:'amor',sair:'amor',aniversario:'familia',amigos:'familia',homenagem:'familia'};
  var ENVS={vinho:['#6A0E1A','Vinho'],vermelho:['#B11E2F','Vermelho'],kraft:['#BF976A','Kraft'],marfim:['#ECE0C6','Marfim'],verde:['#557440','Verde']};
  var WAXC={vinho:['#5E0B18','Vinho'],vermelho:['#A8192C','Vermelha'],ouro:['#C9A253','Ouro'],marfim:['#EFE6D2','Marfim'],verde:['#3E5729','Verde']};
  var PELE={'#EBC2A0':'Pele clara','#D29B73':'Pele média','#9B6542':'Pele morena','#5E3B26':'Pele negra'};
  var SYMS={iniciais:'Iniciais',coracao:'Coração',rosa:'Rosa',estrela:'Estrela'};
  var STYLES={cla:'Clássico',fun:'Divertido'};
  var PAPERS={pautado:'Pautado',liso:'Algodão',kraft:'Kraft',antigo:'Envelhecido',caderno:'Caderno',aquarela:'Aquarela',quadriculado:'Quadriculado'};
  var FLORES={rosas:'Rosas',girassois:'Girassóis',tulipas:'Tulipas',lirios:'Lírios',campo:'Do campo'};
  var GALS={carrossel:'Carrossel',fita:'Na fita',varal:'Varal',mosaico:'Galeria'};
  /* preço em reais; em inglês o centavo vem depois do ponto */
  function money(v){return EA.lang==='en'?String(v).replace(',','.'):v}
  var TXTK=['to','from','hello','title','body','sign','since','song'];
  var DIAS0='2024-08-17';

  /* ================= ESTADO ================= */
  function txtOf(k){var o=OCC[k];return {to:o.to,from:o.from,hello:o.hello,title:o.cla.text,body:o.body.join('\n\n'),sign:o.sign,since:o.count.from.slice(0,10),song:o.song};}
  function cartaOf(k,pele){var o=OCC[k];return {occ:k,style:o.style,env:o.env,wax:o.wax,sym:o.sym,ini:o.ini,pele:pele||'#EBC2A0',paper:o.paper,flor:o.flor,gal:o.gal,stk:(window.EA_STK[k]||[]).slice()};}
  function defAlbum(){return {cover:'vinho',title:L('Nós dois'),names:'Miguel & Ana Clara',since:DIAS0,song:L('Nossa música'),loves:[L('o seu riso antes da piada acabar'),L('o seu abraço de domingo'),L('quando você canta errado no carro'),L('o jeito que você me olha')],final:L('Obrigado por cada página até aqui. As próximas eu quero escrever com você.'),sign:L('Com amor, Miguel')};}
  function defRetro(){return {title:L('Nossa retrospectiva'),names:'Miguel & Ana Clara',since:DIAS0,song:L('Nossa música'),stats:[['127',L('cafés juntos')],['9',L('viagens')],['1',L('gato adotado')]],loves:[L('seu riso'),L('seu abraço'),L('sua coragem'),L('nós dois')],final:L('E isso é só o começo.')};}
  var ST={fmt:'carta',carta:cartaOf('declaracao'),txt:txtOf('declaracao'),dirty:{},photos:null,reviewed:false,pack:3,
    album:defAlbum(),retro:defRetro()};
  var KEY='eca-rascunho-1';
  try{var saved=JSON.parse(localStorage.getItem(KEY)||'null');if(saved&&saved.carta&&OCC[saved.carta.occ]){['fmt','carta','txt','dirty','album','retro','pack'].forEach(function(k){if(saved[k]!=null)ST[k]=saved[k]});}}catch(e){}
  function save(){try{var o={};['fmt','carta','txt','dirty','album','retro','pack'].forEach(function(k){o[k]=ST[k]});localStorage.setItem(KEY,JSON.stringify(o));}catch(e){}}

  /* o texto que vai para a carta: só o que a pessoa mexeu, o resto continua o do modelo */
  function effTxt(){
    var o=OCC[ST.carta.occ],d=ST.dirty,t={};
    TXTK.forEach(function(k){if(d[k]&&String(ST.txt[k]||'').trim())t[k]=ST.txt[k]});
    if(t.to&&!d.hello){var fn=o.to.split(' ')[0];if(o.hello.indexOf(fn)>=0)t.hello=o.hello.replace(fn,t.to.trim().split(' ')[0]);}
    if(t.from&&!d.sign&&o.sign.indexOf(o.from)>=0)t.sign=o.sign.replace(o.from,t.from.trim());
    return t;
  }
  function shownTxt(k){var t=effTxt();return t[k]!=null?t[k]:txtOf(ST.carta.occ)[k];}
  function photoList(){return ST.photos&&ST.photos.length?ST.photos.map(function(p){return {bg:'url("'+p.src+'") center/cover',cap:p.cap||''}}):EA.PHOTOS;}
  function cartaCfg(extra){var c=ST.carta,cfg={embed:true,lang:EA.lang,occ:c.occ,style:c.style,env:c.env,wax:c.wax,sym:c.sym,ini:c.ini,pele:c.pele,paper:c.paper,flor:c.flor,gal:c.gal,stk:c.stk,txt:effTxt(),photos:ST.photos&&ST.photos.length?ST.photos:null};for(var k in extra||{})cfg[k]=extra[k];return cfg;}
  function albumCfg(){var a=ST.album,c={};for(var k in a)c[k]=a[k];c.photos=photoList();return c;}
  function retroCfg(){var a=ST.retro,c={};for(var k in a)c[k]=a[k];c.photos=photoList();return c;}

  /* ================= A CARTA REAL DENTRO DE UM IFRAME ================= */
  var PHCSS=$('ph-css').textContent;
  function cartaDoc(cfg){var j=JSON.stringify(cfg).replace(/</g,'\\u003c');return window.CARTA_SRC.replace('/*%%PH%%*/',function(){return PHCSS}).replace('"%%CFG%%"',function(){return j});}
  function fit(host){var f=host.querySelector('iframe');if(!f)return;var w=host.clientWidth,h=host.clientHeight;if(!w||!h)return;var s=w/390;f.style.width='390px';f.style.height=Math.round(h/s)+'px';f.style.transform='scale('+s+')';}
  var ro=window.ResizeObserver?new ResizeObserver(function(es){es.forEach(function(e){fit(e.target)})}):null;
  function mountCarta(host,cfg,title){
    var f=document.createElement('iframe');f.title=title||L('Prévia da carta');f.srcdoc=cartaDoc(cfg);
    host.innerHTML='';host.appendChild(f);if(ro)ro.observe(host);fit(host);return f;
  }
  function post(f,msg){try{f.contentWindow.postMessage(msg,'*')}catch(e){}}
  addEventListener('resize',function(){qa('.pv').forEach(fit)});

  /* ================= INÍCIO ================= */
  var heroF=null,heroOcc='namoro';
  function heroCfg(){var n=$('start-to').value.trim(),o=OCC[heroOcc],t=null;if(n){t={to:n};var fn=o.to.split(' ')[0];if(o.hello.indexOf(fn)>=0)t.hello=o.hello.replace(fn,n.split(' ')[0]);}return {embed:true,lang:EA.lang,occ:heroOcc,txt:t};}
  function renderHeroChips(){$('hero-occ').innerHTML=ORDER.map(function(k){return '<button class="chip" type="button" data-k="'+k+'" aria-pressed="'+(k===heroOcc)+'">'+L(CURTO[k])+'</button>'}).join('');}
  function initHero(){
    heroF=mountCarta($('pv-hero'),heroCfg(),L('Carta de exemplo: toque no lacre para abrir'));
    var box=$('hero-occ');renderHeroChips();
    box.addEventListener('click',function(e){var b=e.target.closest('.chip');if(!b)return;heroOcc=b.dataset.k;qa('.chip',box).forEach(function(c){c.setAttribute('aria-pressed',c===b)});var c=heroCfg();c.open=false;post(heroF,{type:'ea-cfg',cfg:c});$('tap-hint').classList.remove('off');});
    var tm=0;$('start-to').addEventListener('input',function(){clearTimeout(tm);tm=setTimeout(function(){post(heroF,{type:'ea-cfg',cfg:heroCfg()})},350)});
    $('start').addEventListener('submit',function(e){
      e.preventDefault();var n=$('start-to').value.trim();
      ST.carta=cartaOf(heroOcc,ST.carta.pele);var keep={};TXTK.forEach(function(k){if(ST.dirty[k])keep[k]=ST.txt[k]});ST.txt=txtOf(heroOcc);for(var k in keep)ST.txt[k]=keep[k];
      if(n){ST.txt.to=n;ST.dirty.to=true;}
      ST.fmt='carta';save();cartaFormDirty=true;location.hash='criar';
    });
    EA.bouquet($('hero-bq'),'rosas',false);EA.bouquet($('final-bq'),'tulipas',false);EA.bouquet($('ft-bq'),'girassois',false);
  }
  addEventListener('message',function(e){var m=e.data;if(!m||typeof m!=='object')return;
    if(heroF&&e.source===heroF.contentWindow&&m.type==='ea-opened')$('tap-hint').classList.add('off');
    if(crF&&e.source===crF.contentWindow)$('ph-tip').textContent=m.type==='ea-opened'?L('role a carta dentro do celular para ver tudo'):L('toque no lacre para ver a abertura');
  });

  function renderModels(){
    var hide={};qa('.mc.hide').forEach(function(c){hide[c.dataset.occ]=1});
    $('m-row').innerHTML=ORDER.map(function(k){var o=OCC[k];return '<article class="mc'+(hide[k]?' hide':'')+'" data-occ="'+k+'" data-g="'+GRP[k]+'"><div class="mc-vis papel papel-'+o.paper+'"><div class="me"></div></div><div class="mc-b"><span class="mc-tag">'+L(STYLES[o.style])+'</span><h3>'+L(NOME[k])+'</h3><span class="mc-to">'+esc(L('para {x}',{x:o.to}))+'</span><p>'+L(BLURB[k])+'</p><div class="mc-act"><button class="btn btn-line sm" type="button" data-ver="'+k+'">'+L('Ver aberta')+'</button><a class="btn btn-gold ouro-bg sm" href="#criar" data-usar="'+k+'">'+L('Usar este')+'</a></div></div></article>'}).join('');
    qa('.mc').forEach(function(c){var o=OCC[c.dataset.occ];EA.miniEnv(qs('.me',c),o.env,{cera:o.wax,simbolo:o.sym,iniciais:o.ini});});
  }
  function initHome(){
    /* formatos */
    var fe=$('fc-env');EA.miniEnv(fe,'vermelho',{cera:'ouro',simbolo:'iniciais',iniciais:'M & A'});fe.classList.add('fc-env');
    /* modelos */
    renderModels();
    $('m-row').addEventListener('click',function(e){
      var v=e.target.closest('[data-ver]'),u=e.target.closest('[data-usar]');
      if(v)openOv('exemplo-carta',{occ:v.dataset.ver},v.closest('.mc'));
    });
    /* recursos */
    [['vinho','iniciais','M & A'],['ouro','coracao'],['vermelho','rosa'],['verde','estrela']].forEach(function(s){var sv=EA.el('svg',{'class':'seal-i','aria-hidden':'true'},$('ft-seals'));EA.seal(sv,{cera:s[0],simbolo:s[1],iniciais:s[2]})});
    [['vinho','vinho'],['vermelho','ouro'],['kraft','vermelho'],['marfim','vinho'],['verde','ouro']].forEach(function(s){var d=document.createElement('div');$('ft-envs').appendChild(d);EA.miniEnv(d,s[0],{cera:s[1],simbolo:'coracao'})});
    ['gato','cafe','pizza','aviao','violao','coracao','bolo','lua'].forEach(function(k){EA.sticker($('ft-stks'),k,'stk')});
    var le=$('lk-env');EA.miniEnv(le,'vermelho',{cera:'ouro',simbolo:'coracao'});le.classList.add('lk-env');
    qr($('qr-demo'),'https://escrevacomamor.com.br',160);
    /* "não" que foge */
    var no=$('ft-no'),tries=0;
    function flee(){tries++;var box=$('ft-ask'),bw=box.clientWidth,dx=(Math.random()-.5)*Math.min(160,bw*.5),dy=(Math.random()-.5)*40;no.style.transform='translate('+dx.toFixed(0)+'px,'+dy.toFixed(0)+'px) rotate('+(Math.random()*20-10).toFixed(0)+'deg)';no.textContent=L(['não','tem certeza?','pensa bem','não vale','ok, só sim'][Math.min(tries,4)]);}
    no.addEventListener('pointerenter',function(e){if(e.pointerType==='mouse')flee()});
    no.addEventListener('click',flee);
    qs('.ft-yes').addEventListener('click',function(){burst(qs('.ft-yes'))});
    /* exemplos dos formatos */
    $('fmt-grid').addEventListener('click',function(e){var b=e.target.closest('[data-ex]');if(!b)return;var f=b.dataset.ex;openOv(f==='carta'?'exemplo-carta':'exemplo-'+f,f==='carta'?{occ:'namoro'}:null,b.closest('.fc'));});
  }
  function useModel(k){
    var keep={};TXTK.forEach(function(x){if(ST.dirty[x])keep[x]=ST.txt[x]});
    ST.carta=cartaOf(k,ST.carta.pele);ST.txt=txtOf(k);for(var x in keep)ST.txt[x]=keep[x];
    ST.fmt='carta';save();cartaFormDirty=true;
  }

  /* ================= ANIMAÇÕES DA HOME ================= */
  /* título palavra por palavra */
  function words(node){
    var out=[];[].slice.call(node.childNodes).forEach(function(n){
      if(n.nodeType===3){var parts=n.textContent.split(/(\s+)/);var frag=document.createDocumentFragment();parts.forEach(function(p){if(!p)return;if(/^\s+$/.test(p)){frag.appendChild(document.createTextNode(p));return;}var s=document.createElement('span');s.className='w';s.textContent=p;frag.appendChild(s);out.push(s);});node.replaceChild(frag,n);}
      else{n.classList.add('w');out.push(n);}
    });return out;
  }
  function revealWords(){if(reduce)return;words($('h1')).forEach(function(w,i){anim(w,[{opacity:0,transform:'translateY(.45em)',filter:'blur(6px)'},{opacity:1,transform:'none',filter:'blur(0)'}],{d:700,delay:120+i*70,e:'cubic-bezier(.2,.8,.2,1)',fill:'backwards'})});}
  /* palavras que se alternam */
  function rotator(){
    var box=$('rot'),inn=qs('.rot-in',box),items=qa('span',inn),i=0,n=items.length-1;
    function size(){box.style.width=items[i].offsetWidth+'px';}
    size();if(reduce)return;
    setInterval(function(){if(document.hidden)return;i++;inn.style.transition='transform .7s cubic-bezier(.7,0,.2,1)';inn.style.transform='translateY(-'+(i*1.3)+'em)';box.style.transition='width .7s cubic-bezier(.7,0,.2,1)';size();
      if(i===n)setTimeout(function(){inn.style.transition='none';inn.style.transform='none';i=0;},760);},2400);
    addEventListener('resize',size);
  }
  /* manifesto enfeitado: raminho em cima, canteiro de flores que brota embaixo e pétalas caindo */
  function initManifesto(){
    var sp=EA.sprig($('mf-sprig'),['rosa','tulipa','lirio']),gd=EA.garden($('mf-garden'),{w:1200,h:200,gap:44,slice:true}),pet=EA.petals($('mf-pet'),{n:10,colors:['#B11E2F','#8E1422','#C92A40','#EAD8B8'],op:.6,speed:.025});
    var sec=qs('.manifesto');
    if(reduce){if(sp&&sp.show)sp.show();if(gd&&gd.show)gd.show();return;}
    EA.onVisible(sec,function(){if(sp&&sp.play)sp.play();if(gd&&gd.play)gd.play();},null,.25);
    if(window.IntersectionObserver)new IntersectionObserver(function(es){es[0].isIntersecting&&curView==='inicio'?pet.on():pet.off();}).observe(sec);
  }
  /* setas do carrossel de modelos */
  function initArrows(){var t=$('m-track'),pv=qs('.m-arr.prev'),nx=qs('.m-arr.next');
    function upd(){pv.disabled=t.scrollLeft<8;nx.disabled=t.scrollLeft+t.clientWidth>=t.scrollWidth-8;}
    qa('.m-arr').forEach(function(b){b.addEventListener('click',function(){var c=qs('.mc:not(.hide)',t),step=c?c.offsetWidth+18:260,k=Math.max(1,Math.floor(t.clientWidth/step)-(t.clientWidth>700?1:0));t.scrollBy({left:+b.dataset.dir*step*k,behavior:reduce?'auto':'smooth'});});});
    t.addEventListener('scroll',function(){requestAnimationFrame(upd)},{passive:true});addEventListener('resize',upd);upd();t._upd=upd;
  }
  /* cartões que se empilham (celular) */
  function onStack(){var cards=qa('.fc');if(innerWidth>820||reduce){cards.forEach(function(c){c.style.transform='';c.style.setProperty('--dim',0)});return;}
    cards.forEach(function(c,i){var nx=cards[i+1];if(!nx){c.style.transform='';c.style.setProperty('--dim',0);return;}var a=c.getBoundingClientRect(),b=nx.getBoundingClientRect(),ov=Math.max(0,Math.min(1,(a.bottom-b.top)/a.height));c.style.transform='scale('+(1-ov*.07).toFixed(3)+')';c.style.setProperty('--dim',(ov*.45).toFixed(2));});}
  /* linha do tempo que se desenha */
  function placeLine(){var tl=$('tl'),line=$('tl-line'),dots=qa('.tl-dot',tl);if(!dots.length)return;var wr=tl.parentNode.getBoundingClientRect(),a=dots[0].getBoundingClientRect(),b=dots[dots.length-1].getBoundingClientRect();line.style.top=(a.top-wr.top+a.height/2)+'px';line.style.height=(b.top-a.top)+'px';line.style.left=(a.left-wr.left+a.width/2-1)+'px';}
  function onLine(){var line=$('tl-line'),r=line.getBoundingClientRect(),y=innerHeight*.62,p=reduce?1:Math.max(0,Math.min(1,(y-r.top)/r.height));line.style.setProperty('--p',(p*100).toFixed(1)+'%');var end=r.top+r.height*p+2;qa('.tl-i').forEach(function(li){var d=qs('.tl-dot',li).getBoundingClientRect();li.classList.toggle('on',d.top+d.height/2<=end)});}
  /* luz dourada que segue o mouse */
  function initGlow(){document.addEventListener('pointermove',function(e){if(e.pointerType!=='mouse')return;var g=e.target.closest&&e.target.closest('.glow');if(!g)return;var r=g.getBoundingClientRect();g.style.setProperty('--mx',(e.clientX-r.left)+'px');g.style.setProperty('--my',(e.clientY-r.top)+'px');});}
  /* odômetro */
  function odo(el,n){var s=W.num(n);el.innerHTML=s.split('').map(function(ch){return /\d/.test(ch)?'<span class="dg" data-d="'+ch+'">'+'0123456789'.split('').map(function(x){return '<span>'+x+'</span>'}).join('')+'</span>':'<span class="sep">'+ch+'</span>'}).join('');el.setAttribute('aria-label',s);}
  function rollOdo(el){qa('.dg',el).forEach(function(d,i){d.style.transitionDelay=(i*.15)+'s';d.style.transform='translateY(-'+d.dataset.d+'em)'});}
  function initOdo(){qa('.odo').forEach(function(el){odo(el,W.dias(el.dataset.from));if(reduce){rollOdo(el);return;}EA.onVisible(el,function(){setTimeout(function(){rollOdo(el)},200)});});}
  /* botão elástico: mola com rigidez e amortecimento */
  function initSpring(){
    document.addEventListener('pointerover',function(e){var b=e.target.closest&&e.target.closest('.spring');if(b&&e.pointerType==='mouse')spring(b,1.05)});
    document.addEventListener('pointerout',function(e){var b=e.target.closest&&e.target.closest('.spring');if(b&&!b.contains(e.relatedTarget))spring(b,1)});
    document.addEventListener('pointerdown',function(e){var b=e.target.closest&&e.target.closest('.spring');if(b)spring(b,.93)});
    document.addEventListener('pointerup',function(e){var b=e.target.closest&&e.target.closest('.spring');if(b)spring(b,e.pointerType==='mouse'?1.05:1)});
  }
  function spring(el,to){if(reduce)return;var s=el.__sp||(el.__sp={x:1,v:0,raf:0});s.to=to;if(s.raf)return;var last=performance.now();
    (function f(t){var dt=Math.min(.032,(t-last)/1000);last=t;var a=-260*(s.x-s.to)-14*s.v;s.v+=a*dt;s.x+=s.v*dt;el.style.transform='scale('+s.x.toFixed(4)+')';
      if(Math.abs(s.v)<.002&&Math.abs(s.x-s.to)<.001){s.x=s.to;el.style.transform=s.to===1?'':'scale('+s.to+')';s.raf=0;return;}s.raf=requestAnimationFrame(f);})(last);}
  /* filtro de modelos com FLIP */
  function initFilter(){$('m-filter').addEventListener('click',function(e){var b=e.target.closest('.chip');if(!b)return;var f=b.dataset.f;qa('.chip',$('m-filter')).forEach(function(c){c.setAttribute('aria-pressed',c===b)});
    var cards=qa('.mc'),first=new Map();cards.forEach(function(c){if(!c.classList.contains('hide'))first.set(c,c.getBoundingClientRect())});
    cards.forEach(function(c){c.classList.toggle('hide',f!=='todos'&&c.dataset.g!==f)});
    $('m-track').scrollTo({left:0,behavior:reduce?'auto':'smooth'});setTimeout(function(){if($('m-track')._upd)$('m-track')._upd()},600);
    if(reduce)return;
    cards.forEach(function(c){if(c.classList.contains('hide'))return;var a=first.get(c),r=c.getBoundingClientRect();
      if(a)anim(c,[{transform:'translate('+(a.left-r.left)+'px,'+(a.top-r.top)+'px)'},{transform:'none'}],{d:550,e:'cubic-bezier(.2,.8,.2,1)'});
      else anim(c,[{opacity:0,transform:'scale(.9)'},{opacity:1,transform:'none'}],{d:450,e:'cubic-bezier(.2,.8,.2,1)'});});
  });}
  /* arrastar para deslizar, com inércia (mouse; no toque fica a rolagem do próprio celular) */
  function initDrag(){var t=$('m-track'),down=false,x0=0,s0=0,lx=0,lt=0,v=0,raf=0,moved=false;
    t.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse'||e.button!==0)return;down=true;moved=false;x0=lx=e.clientX;s0=t.scrollLeft;lt=performance.now();v=0;cancelAnimationFrame(raf);});
    addEventListener('pointermove',function(e){if(!down)return;var dx=e.clientX-x0;if(Math.abs(dx)>6&&!moved){moved=true;t.classList.add('drag');}if(!moved)return;t.scrollLeft=s0-dx;var now=performance.now();v=(e.clientX-lx)/Math.max(1,now-lt);lx=e.clientX;lt=now;});
    addEventListener('pointerup',function(){if(!down)return;down=false;if(!moved)return;setTimeout(function(){t.classList.remove('drag')},30);var vel=-v*16;(function f(){vel*=.94;t.scrollLeft+=vel;if(Math.abs(vel)>.4)raf=requestAnimationFrame(f);})();});
  }
  /* coraçõezinhos no "SIM!" */
  function burst(node){if(reduce)return;var r=node.getBoundingClientRect();for(var i=0;i<12;i++){var s=EA.el('svg',{viewBox:'0 0 24 24','class':'hb'});s.innerHTML='<use href="#heart"/>';s.style.cssText='position:fixed;left:'+(r.left+r.width/2-9)+'px;top:'+(r.top+r.height/2-9)+'px;width:18px;height:18px;fill:'+(i%3?'#C12A3D':'#B88C3E')+';pointer-events:none;z-index:90';document.body.appendChild(s);var a=Math.random()*Math.PI*2,d=50+Math.random()*70;s.animate([{transform:'translate(0,0) scale(.3)',opacity:1},{transform:'translate('+(Math.cos(a)*d).toFixed(0)+'px,'+(Math.sin(a)*d-30).toFixed(0)+'px) scale(1)',opacity:0}],{duration:900+Math.random()*400,easing:'cubic-bezier(.1,.7,.3,1)'}).finished.then((function(n){return function(){n.remove()}})(s));}}
  /* confete de papel nas cores da marca */
  function confete(){if(reduce)return;var c=$('confete'),x=c.getContext('2d'),dpr=Math.min(2,devicePixelRatio||1),Wd=innerWidth,Hd=innerHeight;c.width=Wd*dpr;c.height=Hd*dpr;x.scale(dpr,dpr);
    var cols=['#8E1422','#B11E2F','#B88C3E','#DDBF7E','#F6EEDF','#5E0B18'],P=[];for(var i=0;i<140;i++)P.push({x:Wd/2+(Math.random()-.5)*Wd*.3,y:Hd*.35,vx:(Math.random()-.5)*14,vy:-Math.random()*14-4,r:Math.random()*6.28,vr:(Math.random()-.5)*.3,w:6+Math.random()*8,h:4+Math.random()*6,c:cols[i%cols.length],heart:i%5===0});
    var hp=new Path2D('M12 21s-7-4.4-9.4-8.6C1 9.3 2.8 5 6.7 5c2.1 0 3.6 1.3 5.3 3.2C13.7 6.3 15.2 5 17.3 5c3.9 0 5.7 4.3 4.1 7.4C19 16.6 12 21 12 21z');
    (function f(){x.clearRect(0,0,Wd,Hd);var alive=0;P.forEach(function(p){p.vy+=.35;p.vx*=.985;p.vy*=.985;p.x+=p.vx;p.y+=p.vy;p.r+=p.vr;if(p.y<Hd+30)alive++;x.save();x.translate(p.x,p.y);x.rotate(p.r);x.fillStyle=p.c;if(p.heart){x.scale(.7,.7);x.translate(-12,-12);x.fill(hp);}else{x.scale(1,Math.cos(p.r*2));x.fillRect(-p.w/2,-p.h/2,p.w,p.h);}x.restore();});if(alive)requestAnimationFrame(f);else x.clearRect(0,0,Wd,Hd);})();}

  var ticking=false;
  addEventListener('scroll',function(){if(ticking)return;ticking=true;requestAnimationFrame(function(){ticking=false;if(curView!=='inicio')return;onStack();onLine();})},{passive:true});
  addEventListener('resize',function(){placeLine();onLine();onStack();});

  /* ================= EDITOR ================= */
  var crF=null,cartaFormDirty=true,albumPg=0,retroSl=-1,pvTimer=0;
  function chips(box,opts,cur,pressedVal){box.innerHTML=Object.keys(opts).map(function(k){return '<button class="chip" type="button" data-val="'+k+'" aria-pressed="'+(k===cur)+'">'+L(opts[k])+'</button>'}).join('');}
  function swatches(box,opts,cur,shape){box.classList.toggle('env',shape==='env');box.innerHTML=Object.keys(opts).map(function(k){var o=opts[k];var col=Array.isArray(o)?o[0]:k,lab=L(Array.isArray(o)?o[1]:o);return '<button type="button" data-val="'+k+'" aria-pressed="'+(k===cur)+'" aria-label="'+esc(lab)+'" title="'+esc(lab)+'" style="background:'+col+(shape==='wax'?';background-image:radial-gradient(circle at 35% 30%,rgba(255,255,255,.35),transparent 55%)':'')+'"></button>'}).join('');}
  function fillCartaForm(){
    var f=$('f-carta'),c=ST.carta;
    $('c-occ').innerHTML=ORDER.map(function(k){return '<button class="chip" type="button" data-val="'+k+'" aria-pressed="'+(k===c.occ)+'">'+L(NOME[k])+'</button>'}).join('');
    swatches(qs('[data-k=env]',f),ENVS,c.env,'env');swatches(qs('[data-k=wax]',f),WAXC,c.wax,'wax');swatches(qs('[data-k=pele]',f),PELE,c.pele);
    chips(qs('[data-k=sym]',f),SYMS,c.sym);chips(qs('[data-k=style]',f),STYLES,c.style);chips(qs('[data-k=paper]',f),PAPERS,c.paper);chips(qs('[data-k=flor]',f),FLORES,c.flor);chips(qs('[data-k=gal]',f),GALS,c.gal);
    qs('[data-c=ini]',f).value=c.ini;
    qa('[data-t]',f).forEach(function(i){i.value=shownTxt(i.dataset.t)||''});
    qa('#c-stk button').forEach(function(b){b.setAttribute('aria-pressed',c.stk.indexOf(b.dataset.k)>=0)});
    cartaFormDirty=false;
  }
  function fillAlbumForm(){var f=$('f-album'),a=ST.album;
    swatches(qs('[data-k=cover]',f),(function(){var o={};for(var k in EA.ALBUM_COVERS)o[k]=[EA.ALBUM_COVERS[k][0],EA.ALBUM_COVERS[k][2]];return o})(),a.cover);
    qa('[data-a]',f).forEach(function(i){if(i.tagName==='DIV')return;i.value=a[i.dataset.a]||''});
    qs('.list',f).innerHTML=[0,1,2,3].map(function(i){return '<input data-li="'+i+'" maxlength="60" aria-label="'+esc(L('Coisa que eu amo {n}',{n:i+1}))+'" value="'+esc(a.loves[i]||'')+'">'}).join('');}
  function fillRetroForm(){var f=$('f-retro'),r=ST.retro;
    qa('[data-r]',f).forEach(function(i){if(i.tagName==='DIV')return;i.value=r[i.dataset.r]||''});
    qs('.stats',f).innerHTML=[0,1,2].map(function(i){var s=r.stats[i]||['',''];return '<div class="row"><input data-sn="'+i+'" inputmode="numeric" maxlength="6" aria-label="'+esc(L('Número {n}',{n:i+1}))+'" value="'+esc(s[0])+'"><input data-st="'+i+'" maxlength="32" aria-label="'+esc(L('O que é o número {n}',{n:i+1}))+'" value="'+esc(s[1])+'"></div>'}).join('');
    qs('.list',f).innerHTML=[0,1,2,3].map(function(i){return '<input data-li="'+i+'" maxlength="40" aria-label="'+esc(L('Coisa que eu amo {n}',{n:i+1}))+'" value="'+esc(r.loves[i]||'')+'">'}).join('');}
  function renderPhotos(){
    qa('.photos').forEach(function(box){
      var user=ST.photos&&ST.photos.length,list=user?ST.photos:EA.PHOTOS.slice(0,4);
      box.innerHTML=(user?'':'<p class="hint-s">'+L('Estas são fotos de exemplo. Coloque as de vocês:')+'</p>')+'<div class="ph-grid">'+list.map(function(p,i){
        return user?'<div class="ph-it"><span class="gx-img" style="background:url(&quot;'+p.src+'&quot;) center/cover"></span><input data-cap="'+i+'" maxlength="40" placeholder="'+L('legenda')+'" aria-label="'+esc(L('Legenda da foto {n}',{n:i+1}))+'" value="'+esc(p.cap||'')+'"><button type="button" class="x" data-rm="'+i+'" aria-label="'+esc(L('Tirar a foto {n}',{n:i+1}))+'">×</button></div>'
          :'<div class="ph-it"><span class="gx-img" style="background:'+p.bg+'"></span><span class="ex">'+L('exemplo')+'</span></div>';}).join('')+'</div>'+
        '<div class="ph-add">'+((ST.photos||[]).length<8?'<label class="btn btn-line sm">'+L('Adicionar fotos')+'<input type="file" accept="image/*" multiple data-add></label>':'')+'<span class="note">'+L('até 8 fotos')+'</span>'+(user?'<button type="button" class="btn btn-ghost sm" data-ex-ph>'+L('Usar as de exemplo')+'</button>':'')+'</div>';
    });
  }
  function shrink(file){return new Promise(function(res){if(!/^image\//.test(file.type))return res(null);var r=new FileReader();r.onload=function(){var im=new Image();im.onload=function(){var M=1000,s=Math.min(1,M/Math.max(im.width,im.height)),c=document.createElement('canvas');c.width=Math.round(im.width*s);c.height=Math.round(im.height*s);c.getContext('2d').drawImage(im,0,0,c.width,c.height);try{res({src:c.toDataURL('image/jpeg',.82),cap:''})}catch(e){res(null)}};im.onerror=function(){res(null)};im.src=r.result;};r.onerror=function(){res(null)};r.readAsDataURL(file);});}

  function initEditor(){
    var sb=$('c-stk');Object.keys(EA.STICKERS).forEach(function(k){var b=document.createElement('button');b.type='button';b.dataset.k=k;b.title=L(EA.STICKERS[k]);b.setAttribute('aria-label',L('Sticker {x}',{x:L(EA.STICKERS[k])}));EA.sticker(b,k,'stk-mini');sb.appendChild(b);});
    /* carta */
    var fc=$('f-carta');
    fc.addEventListener('click',function(e){
      var b=e.target.closest('button');if(!b)return;var grp=b.parentNode,c=ST.carta,v=(grp.dataset&&grp.dataset.v)||'open';
      if(grp.id==='c-occ'){useModel(b.dataset.val);fillCartaForm();renderPhotos();preview({open:false},true);return;}
      if(grp.id==='c-stk'){var k=b.dataset.k,i=c.stk.indexOf(k);if(i>=0)c.stk.splice(i,1);else{if(c.stk.length>=6)c.stk.shift();c.stk.push(k);}qa('button',grp).forEach(function(x){x.setAttribute('aria-pressed',c.stk.indexOf(x.dataset.k)>=0)});preview({open:true});return;}
      var key=grp.dataset.k;if(!key||!b.dataset.val)return;
      c[key]=b.dataset.val;qa('button',grp).forEach(function(x){x.setAttribute('aria-pressed',x===b)});
      preview({open:v==='open'});
    });
    fc.addEventListener('input',function(e){var i=e.target;
      if(i.dataset.t){ST.txt[i.dataset.t]=i.value;ST.dirty[i.dataset.t]=true;if(i.dataset.t==='to'||i.dataset.t==='from')qa('[data-t=hello],[data-t=sign]',fc).forEach(function(x){if(!ST.dirty[x.dataset.t])x.value=shownTxt(x.dataset.t)});preview({open:i.dataset.v==='open'});}
      if(i.dataset.c==='ini'){ST.carta.ini=i.value;if(ST.carta.sym!=='iniciais'){ST.carta.sym='iniciais';chips(qs('[data-k=sym]',fc),SYMS,'iniciais');}preview({open:false});}
    });
    fc.addEventListener('focusin',function(e){var v=e.target.closest('[data-v]');if(v&&crF&&ST.fmt==='carta'&&!e.target.matches('button'))preview({open:v.dataset.v==='open'});});
    /* álbum */
    var fa=$('f-album');
    fa.addEventListener('click',function(e){var b=e.target.closest('[data-k=cover] button');if(!b)return;ST.album.cover=b.dataset.val;qa('button',b.parentNode).forEach(function(x){x.setAttribute('aria-pressed',x===b)});albumPg=0;preview();});
    fa.addEventListener('input',function(e){var i=e.target;if(i.dataset.a){ST.album[i.dataset.a]=i.value;}if(i.dataset.li!=null){ST.album.loves[+i.dataset.li]=i.value;}preview();});
    fa.addEventListener('focusin',function(e){var p=e.target.closest('[data-pg]');if(p&&ST.fmt==='album'){albumPg=+p.dataset.pg;var h=$('pv-album');if(h._go)h._go(albumPg);}});
    /* retrospectiva */
    var fr=$('f-retro');
    fr.addEventListener('input',function(e){var i=e.target,r=ST.retro;if(i.dataset.r)r[i.dataset.r]=i.value;if(i.dataset.li!=null)r.loves[+i.dataset.li]=i.value;if(i.dataset.sn!=null){i.value=i.value.replace(/\D/g,'');(r.stats[+i.dataset.sn]=r.stats[+i.dataset.sn]||['',''])[0]=i.value;}if(i.dataset.st!=null)(r.stats[+i.dataset.st]=r.stats[+i.dataset.st]||['',''])[1]=i.value;preview();});
    fr.addEventListener('focusin',function(e){var p=e.target.closest('[data-sl]');if(p&&ST.fmt==='retro'&&+p.dataset.sl!==retroSl){retroSl=+p.dataset.sl;mountRetro();}});
    /* fotos (iguais para os três formatos) */
    $('cr-grid').addEventListener('change',function(e){var i=e.target;if(!i.matches('[data-add]'))return;var files=[].slice.call(i.files||[],0,8-(ST.photos||[]).length);
      Promise.all(files.map(shrink)).then(function(arr){arr=arr.filter(Boolean);if(!arr.length)return;ST.photos=(ST.photos||[]).concat(arr).slice(0,8);renderPhotos();preview({open:true});});});
    $('cr-grid').addEventListener('click',function(e){var rm=e.target.closest('[data-rm]');if(rm){ST.photos.splice(+rm.dataset.rm,1);if(!ST.photos.length)ST.photos=null;renderPhotos();preview({open:true});}
      if(e.target.closest('[data-ex-ph]')){ST.photos=null;renderPhotos();preview({open:true});}});
    $('cr-grid').addEventListener('input',function(e){var c=e.target.closest('[data-cap]');if(c&&ST.photos){ST.photos[+c.dataset.cap].cap=c.value;preview({open:true});}});
    /* formato, modo e botão de ver */
    $('fmt-tabs').addEventListener('click',function(e){var b=e.target.closest('[data-fmt]');if(b)setFmt(b.dataset.fmt)});
    $('fmt-tabs').addEventListener('keydown',function(e){if(e.key!=='ArrowRight'&&e.key!=='ArrowLeft')return;var t=qa('[role=tab]',$('fmt-tabs')),i=t.indexOf(document.activeElement);if(i<0)return;var n=t[(i+(e.key==='ArrowRight'?1:t.length-1))%t.length];n.focus();setFmt(n.dataset.fmt);});
    qs('.cr-mode').addEventListener('click',function(e){var b=e.target.closest('[data-mode]');if(!b)return;qa('[data-mode]').forEach(function(x){x.setAttribute('aria-pressed',x===b)});$('v-criar').classList.toggle('prev-mode',b.dataset.mode==='prev');qa('.pv').forEach(fit);scrollTo(0,0);});
    $('see').addEventListener('click',function(){openOv('rever',null,$('cr-ph'))});
  }
  function setFmt(f){
    ST.fmt=f;save();
    qa('#fmt-tabs [role=tab]').forEach(function(t){t.setAttribute('aria-selected',t.dataset.fmt===f);t.tabIndex=t.dataset.fmt===f?0:-1});
    qa('.cr-form').forEach(function(x){x.hidden=x.dataset.fmt!==f});
    ['carta','album','retro'].forEach(function(k){$('pv-'+k).hidden=k!==f});
    if(f==='carta'&&!crF)crF=mountCarta($('pv-carta'),cartaCfg(),'Prévia ao vivo da sua carta');
    if(f==='album')mountAlbum();if(f==='retro')mountRetro();
    if(f!=='retro'&&f!=='album')EA.music.stop();
    $('ph-tip').textContent=L({carta:'toque no lacre para ver a abertura',album:'toque no álbum para abrir e vire as páginas',retro:'toque no play para assistir com música'}[f]);
    summary();
  }
  function mountAlbum(){var h=$('pv-album');EA.album(h,albumCfg());if(albumPg)h._go(albumPg,true);}
  function mountRetro(){EA.retro($('pv-retro'),retroCfg(),retroSl>=0?{poster:retroSl}:{});}
  function preview(o,now){
    o=o||{};save();summary();clearTimeout(pvTimer);
    pvTimer=setTimeout(function(){
      if(ST.fmt==='carta'&&crF)post(crF,{type:'ea-cfg',cfg:cartaCfg(o)});
      if(ST.fmt==='album')mountAlbum();
      if(ST.fmt==='retro')mountRetro();
    },now?0:380);
  }
  function summary(){var s=$('cr-sum');
    if(ST.fmt==='carta')s.innerHTML=L('Carta para {x}',{x:'<b>'+esc(shownTxt('to')||L('alguém especial'))+'</b>'});
    else if(ST.fmt==='album')s.innerHTML=L('Álbum {x}',{x:'<b>'+esc(ST.album.title||L('de vocês'))+'</b>'});
    else s.innerHTML=L('Retrospectiva de {x}',{x:'<b>'+esc(ST.retro.names||L('vocês'))+'</b>'});}
  function enterCriar(){
    if(cartaFormDirty)fillCartaForm();
    if(!$('f-album')._f){fillAlbumForm();fillRetroForm();$('f-album')._f=1;}
    renderPhotos();
    if(crF&&ST.fmt==='carta')post(crF,{type:'ea-cfg',cfg:cartaCfg({open:false})});
    setFmt(ST.fmt);
  }

  /* ================= TELA DE EXEMPLO / "ASSIM A PESSOA RECEBE" (tela cheia, com endereço próprio) ================= */
  /* #ver-carta-<modelo>, #ver-album, #ver-retro, #ver-minha (o presente que a pessoa montou), #ver-enviado */
  var ovSrc=null,ovMode='',ovKey='',ovPushed=false,ovBack='';
  function exAlbum(){return {cover:'vinho',title:L('Nós dois'),names:'Miguel & Ana Clara',since:DIAS0,song:L('Nossa música'),loves:[L('o seu riso antes da piada acabar'),L('o seu abraço de domingo'),L('quando você canta errado no carro'),L('o jeito que você me olha')],final:L('Obrigado por cada página até aqui. As próximas eu quero escrever com você.'),sign:L('Com amor, Miguel'),photos:EA.PHOTOS};}
  function exRetro(){return {title:L('Nossa retrospectiva'),names:'Miguel & Ana Clara',since:DIAS0,song:L('Nossa música'),stats:[['127',L('cafés juntos')],['9',L('viagens')],['1',L('gato adotado')]],loves:[L('seu riso'),L('seu abraço'),L('sua coragem'),L('nós dois')],final:L('E isso é só o começo.'),photos:EA.PHOTOS};}
  function verHash(mode,data){return mode==='rever'?'ver-minha':(mode==='enviado'?'ver-enviado':(mode==='exemplo-album'?'ver-album':(mode==='exemplo-retro'?'ver-retro':'ver-carta-'+(data&&data.occ||'namoro'))));}
  function openOv(mode,data,src){ovSrc=src||document.activeElement;ovPushed=true;ovBack=location.hash;location.hash=verHash(mode,data);}
  function showOv(key){
    var mode,data=null;
    if(key==='ver-minha')mode='rever';else if(key==='ver-enviado')mode='enviado';else if(key==='ver-album')mode='exemplo-album';else if(key==='ver-retro')mode='exemplo-retro';
    else{var k=key.replace('ver-carta-','');mode='exemplo-carta';data={occ:OCC[k]?k:'namoro'};}
    var same=!$('ov').hidden&&ovKey===key;ovMode=mode;ovKey=key;if(same)return;
    var stage=$('ov-stage');stage.innerHTML='';
    var fmt=mode==='rever'||mode==='enviado'?ST.fmt:(mode==='exemplo-album'?'album':(mode==='exemplo-retro'?'retro':'carta'));
    var ex=mode.indexOf('exemplo')===0;
    $('ov-t').textContent=ex?L('Exemplo: assim a pessoa recebe'):L('Assim a pessoa vai receber');
    $('ov-go').textContent=ex?(fmt==='carta'?L('Usar este modelo'):(fmt==='album'?L('Montar meu álbum'):L('Criar minha retrospectiva'))):L('Gostei, quero enviar');
    $('ov-go').dataset.fmt=fmt;$('ov-go').dataset.occ=data&&data.occ||'';
    $('ov-go').hidden=mode==='enviado';
    var was=$('ov').hidden;$('ov').hidden=false;document.documentElement.style.overflow='hidden';
    if(fmt==='carta'){var cfg=ex?{embed:true,occ:data.occ,lang:EA.lang}:cartaCfg({open:false});var f=document.createElement('iframe');f.title=L('Carta');f.srcdoc=cartaDoc(cfg);stage.appendChild(f);}
    else{var h=document.createElement('div');h.className='pv';stage.appendChild(h);if(fmt==='album')EA.album(h,ex?exAlbum():albumCfg());else EA.retro(h,ex?exRetro():retroCfg());}
    /* a tela nasce do cartão que foi tocado */
    var p=$('ov');EA.stop(p);
    if(was&&!reduce){var src=ovSrc;if(src&&src.getBoundingClientRect&&src.isConnected){var r=p.getBoundingClientRect(),sr=src.getBoundingClientRect();
      if(sr.width&&r.width)anim(p,[{transform:'translate('+(sr.left-r.left).toFixed(0)+'px,'+(sr.top-r.top).toFixed(0)+'px) scale('+(sr.width/r.width).toFixed(3)+','+(sr.height/r.height).toFixed(3)+')',opacity:.3,borderRadius:'24px'},{transform:'none',opacity:1,borderRadius:'0px'}],{d:520,e:'cubic-bezier(.2,.8,.2,1)'});}
      else anim(p,[{opacity:0},{opacity:1}],{d:300});}
    $('ov-x').focus({preventScroll:true});
    $('scta').classList.remove('show');
  }
  function hideOv(){
    if($('ov').hidden)return;EA.music.stop();ovKey='';
    var done=function(){$('ov').hidden=true;$('ov-stage').innerHTML='';document.documentElement.style.overflow='';if(ovSrc&&ovSrc.focus&&ovSrc.isConnected){try{ovSrc.focus({preventScroll:true})}catch(e){}}onScta();};
    if(reduce)return done();
    anim($('ov'),[{opacity:1,transform:'none'},{opacity:0,transform:'scale(.97)'}],{d:220,e:'ease-in'}).then(done,done);
  }
  /* voltar: se a tela foi aberta daqui, volta no histórico; se veio por link direto, vai para o início */
  function closeOv(){if(ovPushed){ovPushed=false;history.back();}else location.hash=ovBack&&ovBack.indexOf('#ver-')!==0?ovBack:'inicio';}
  $('ov-x').addEventListener('click',closeOv);
  addEventListener('keydown',function(e){if(e.key==='Escape'&&!$('ov').hidden&&!qs('.lb:not([hidden])'))closeOv()});
  $('ov-go').addEventListener('click',function(){
    var fmt=this.dataset.fmt;ovPushed=false;
    if(ovMode==='rever'){ST.reviewed=true;save();location.replace('#precos');return;}
    if(fmt==='carta'&&this.dataset.occ)useModel(this.dataset.occ);
    ST.fmt=fmt;save();location.replace('#criar');
  });

  /* ================= PREÇOS ================= */
  function sumVis(){var f=ST.fmt;
    if(f==='carta'){var d=document.createElement('div');EA.miniEnv(d,ST.carta.env,{cera:ST.carta.wax,simbolo:ST.carta.sym,iniciais:ST.carta.ini});return d.outerHTML;}
    if(f==='album'){var C=EA.ALBUM_COVERS[ST.album.cover]||EA.ALBUM_COVERS.vinho;return '<div class="mini-book" style="--c1:'+C[0]+';--c2:'+C[1]+'"><span class="stitch"></span><b class="ouro-texto">'+esc(ST.album.title)+'</b></div>';}
    var p=photoList()[1];return '<div class="mini-story"><span class="gx-img" style="background:'+p.bg+'"></span></div>';}
  function sumName(){return ST.fmt==='carta'?L('Sua carta para {x} está pronta para enviar.',{x:esc(shownTxt('to')||L('alguém especial'))}):(ST.fmt==='album'?L('Seu álbum {x} está pronto para enviar.',{x:esc(ST.album.title)}):L('Sua retrospectiva de {x} está pronta para enviar.',{x:esc(ST.retro.names)}));}
  function enterPrecos(){
    var s=$('pr-sum');
    if(ST.reviewed)s.innerHTML='<div class="ps-vis">'+sumVis()+'</div><div><p class="ps-t">'+sumName()+'</p><p class="hint-s">'+L('Escolha um pacote. Este presente usa 1 dele.')+'</p><div class="ps-a"><button class="btn btn-line sm" type="button" data-ps="ver">'+L('Ver de novo')+'</button><a class="btn btn-ghost sm" href="#criar">'+L('Editar')+'</a></div></div>';
    else s.innerHTML='<div class="ps-vis"><div class="menv-h"></div></div><div><p class="ps-t">'+L('Primeiro você monta, depois paga.')+'</p><p class="hint-s">'+L('Montar é grátis, e você vê o presente pronto antes de escolher o pacote.')+'</p><div class="ps-a"><a class="btn btn-primary sm" href="#criar">'+L('Começar a montar')+'</a></div></div>';
    if(!ST.reviewed)EA.miniEnv(qs('.menv-h',s),'vinho',{cera:'ouro',simbolo:'coracao'});
    $('pr-pick').hidden=false;$('checkout').hidden=true;$('done').hidden=true;s.hidden=false;
    qa('.pack').forEach(function(p){p.setAttribute('aria-checked',+p.dataset.n===ST.pack)});payLabel();
  }
  function payLabel(){$('pay').textContent=ST.reviewed?(ST.pack>1?L('Continuar com {n} presentes',{n:ST.pack}):L('Continuar com 1 presente')):L('Montar meu presente primeiro');}
  $('packs').addEventListener('click',function(e){var p=e.target.closest('.pack');if(!p)return;ST.pack=+p.dataset.n;save();qa('.pack').forEach(function(x){x.setAttribute('aria-checked',x===p)});payLabel();});
  $('packs').addEventListener('keydown',function(e){if(['ArrowRight','ArrowDown','ArrowLeft','ArrowUp'].indexOf(e.key)<0)return;e.preventDefault();var ps=qa('.pack'),i=ps.findIndex(function(x){return +x.dataset.n===ST.pack}),n=ps[(i+(e.key==='ArrowRight'||e.key==='ArrowDown'?1:ps.length-1))%ps.length];n.focus();n.click();});
  $('pr-sum').addEventListener('click',function(e){if(e.target.closest('[data-ps=ver]'))openOv('rever',null,e.target);});
  $('pay').addEventListener('click',function(){
    if(!ST.reviewed){location.hash='criar';return;}
    var p=qs('.pack[data-n="'+ST.pack+'"]');$('co-t').textContent=(ST.pack>1?L('{n} presentes por R$ {v}',{n:ST.pack,v:money(p.dataset.v)}):L('1 presente por R$ {v}',{v:money(p.dataset.v)}));
    $('pr-pick').hidden=true;$('checkout').hidden=false;$('checkout').scrollIntoView({behavior:reduce?'auto':'smooth',block:'center'});
  });
  $('pay-back').addEventListener('click',function(){$('checkout').hidden=true;$('pr-pick').hidden=false;});
  function slug(s){return String(s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase().replace(/&/g,'e').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,24)||'carta';}
  $('pay-ok').addEventListener('click',function(){
    var who=ST.fmt==='carta'?shownTxt('to'):(ST.fmt==='album'?ST.album.title:ST.retro.names);
    var link='https://escrevacomamor.com.br/c/'+slug(who)+'-'+Math.random().toString(36).slice(2,6);
    $('lk').value=link;$('copied').textContent='';
    $('wpp').href='https://wa.me/?text='+encodeURIComponent(L('Tenho uma coisa pra você 💌')+' '+link);
    $('done-t').innerHTML=L(ST.fmt==='carta'?'Sua carta está pronta. Agora é só <em>enviar</em>':(ST.fmt==='album'?'Seu álbum está pronto. Agora é só <em>enviar</em>':'Sua retrospectiva está pronta. Agora é só <em>enviar</em>'));
    $('left').textContent=ST.pack>2?L('Ainda restam {n} presentes no seu pacote.',{n:ST.pack-1}):(ST.pack===2?L('Ainda resta 1 presente no seu pacote.'):'');
    $('next-one').hidden=ST.pack<2;
    qr($('qr'),link,220);
    $('checkout').hidden=true;$('pr-sum').hidden=true;$('done').hidden=false;scrollTo({top:0,behavior:'auto'});confete();
  });
  $('copy').addEventListener('click',function(){var v=$('lk').value,ok=function(){$('copied').textContent=L('Link copiado.')},bad=function(){$('lk').select();$('copied').textContent=L('Selecionei o link: copie com o seu teclado.')};
    try{navigator.clipboard.writeText(v).then(ok,bad)}catch(e){bad()}});
  $('see2').addEventListener('click',function(){openOv('enviado',null,this);});
  $('next-one').addEventListener('click',function(){ST.reviewed=false;});
  function qr(box,text,size){box.innerHTML='';if(window.QRCode){try{new QRCode(box,{text:text,width:size,height:size,colorDark:'#3A0710',colorLight:'#FFFDF8',correctLevel:QRCode.CorrectLevel.M});return;}catch(e){}}box.innerHTML='<p style="margin:0;font-size:.8rem;word-break:break-all">'+esc(text)+'</p>';}

  /* ================= TELAS (início, criar, preços) ================= */
  var curView='inicio',VIEWS=['inicio','criar','precos'];
  function route(){
    var h=location.hash.replace('#','')||'inicio';
    if(h.indexOf('ver-')===0){showOv(h);return;}
    var wasOv=!$('ov').hidden;hideOv();
    var v=h==='criar'||h==='precos'?h:'inicio';
    if(wasOv&&v===curView){onScta();return;}
    var go=function(){
      qa('.view').forEach(function(x){x.hidden=x.dataset.view!==v});
      var was=curView;curView=v;
      qa('.tab-precos').forEach(function(a){if(v==='precos')a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
      if(v==='criar')enterCriar();else EA.music.stop();
      if(v==='precos')enterPrecos();
      if(v!=='inicio')scrollTo(0,0);
      else{var t=document.getElementById(h);if(was!=='inicio'||h==='inicio')requestAnimationFrame(function(){if(t&&h!=='inicio')t.scrollIntoView();else scrollTo(0,0);placeLine();onLine();});}
      onScta();
    };
    if(v!==curView&&document.startViewTransition&&!reduce)document.startViewTransition(go);else go();
  }
  addEventListener('hashchange',route);
  document.addEventListener('click',function(e){var a=e.target.closest('[data-fmt-go]');if(a){ST.fmt=a.dataset.fmtGo;save();}var u=e.target.closest('[data-usar]');if(u){useModel(u.dataset.usar);}});
  /* CTA fixo no celular aparece depois do herói */
  var heroGone=false;
  function onScta(){$('scta').classList.toggle('show',curView==='inicio'&&heroGone&&$('ov').hidden);}
  if(window.IntersectionObserver)new IntersectionObserver(function(es){heroGone=!es[0].isIntersecting;onScta();}).observe($('start'));

  /* ================= IDIOMA ================= */
  function inLang(l,fn){var o=EA.lang;EA.lang=l;try{return fn()}finally{EA.lang=o}}
  /* o que ainda está com o texto de exemplo de outro idioma passa para o idioma atual; o que a pessoa escreveu fica */
  function swap(cur,from,to){for(var k in to){if(Array.isArray(to[k])){if(!cur[k])continue;to[k].forEach(function(v,i){if(Array.isArray(v)){if(cur[k][i]&&cur[k][i][1]===from[k][i][1])cur[k][i][1]=v[1];}else if(cur[k][i]===from[k][i])cur[k][i]=v;});}else if(cur[k]===from[k])cur[k]=to[k];}}
  function followLang(){var A=defAlbum(),R=defRetro();EA.i18n.LANGS.forEach(function(l){if(l===EA.lang)return;swap(ST.album,inLang(l,defAlbum),A);swap(ST.retro,inLang(l,defRetro),R);});
    var t=txtOf(ST.carta.occ);TXTK.forEach(function(k){if(!ST.dirty[k])ST.txt[k]=t[k]});}
  function langUI(){$('lang-c').textContent=EA.lang.toUpperCase();$('lang-b').setAttribute('aria-label',L('Idioma: {x}',{x:{pt:'Português',en:'English',es:'Español'}[EA.lang]}));
    qa('#lang-m [data-lang]').forEach(function(b){b.setAttribute('aria-checked',b.dataset.lang===EA.lang)});
    document.title=L('Escreva com Amor');var md=qs('meta[name=description]');if(md){md.__pt=md.__pt||md.content;md.content=L(md.__pt);}}
  function setLang(l){
    if(l===EA.lang)return;EA.i18n.set(l);OCC=EA.occs();followLang();save();langUI();
    $('h1').innerHTML=L(H1PT);
    qa('#c-stk button').forEach(function(b){var n=L(EA.STICKERS[b.dataset.k]);b.title=n;b.setAttribute('aria-label',L('Sticker {x}',{x:n}));});
    renderHeroChips();post(heroF,{type:'ea-cfg',cfg:heroCfg()});renderModels();
    var r=$('rot');if(r){var sp=qs('.rot-in span',r);if(sp)r.style.width=sp.offsetWidth+'px';}
    cartaFormDirty=true;if($('f-album')._f){fillAlbumForm();fillRetroForm();}
    if(curView==='criar')enterCriar();else if(crF)post(crF,{type:'ea-cfg',cfg:cartaCfg()});
    summary();payLabel();if(curView==='precos')enterPrecos();
    if(!$('ov').hidden){var k=ovKey;ovKey='';showOv(k);}
    placeLine();onLine();
  }
  (function(){var b=$('lang-b'),m=$('lang-m');
    function close(f){m.hidden=true;b.setAttribute('aria-expanded','false');if(f)b.focus();}
    b.addEventListener('click',function(e){e.stopPropagation();var o=m.hidden;m.hidden=!o;b.setAttribute('aria-expanded',o);if(o){var c=qs('[aria-checked="true"]',m);if(c)c.focus();}});
    m.addEventListener('click',function(e){var x=e.target.closest('[data-lang]');if(!x)return;close(true);setLang(x.dataset.lang);});
    m.addEventListener('keydown',function(e){var it=qa('[data-lang]',m),i=it.indexOf(document.activeElement);if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();it[(i+(e.key==='ArrowDown'?1:it.length-1))%it.length].focus();}if(e.key==='Escape'){e.stopPropagation();close(true);}});
    document.addEventListener('click',function(e){if(!m.hidden&&!e.target.closest('#lang'))close();});
  })();
  followLang();langUI();

  /* ================= INÍCIO DE TUDO ================= */
  initHero();initHome();initEditor();
  revealWords();rotator();initManifesto();initArrows();initGlow();initOdo();initSpring();initFilter();initDrag();
  route();
  requestAnimationFrame(function(){placeLine();onLine();onStack();});
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){placeLine();onLine();var r=$('rot');if(r){var s=qs('.rot-in span',r);r.style.width=s.offsetWidth+'px';}});
})();
