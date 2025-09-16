exports.id=791,exports.ids=[791],exports.modules={4782:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},8459:()=>{},3457:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var n=r(326),i=r(7577),a=r(5574),o=r(8487),s=r(5047);a.p8.registerPlugin(o.t);let l=()=>{let e=(0,s.useRouter)(),t=(0,i.useRef)(null),r=(0,i.useRef)(null),l=(0,i.useRef)(null),c=(0,i.useRef)([]),d=(0,i.useRef)(null),p=(0,i.useRef)(null),u=(0,i.useRef)(null),f=(0,i.useRef)(null),m=(0,i.useRef)([]),h=(0,i.useRef)(null),g=(0,i.useRef)(null),x=(0,i.useRef)([]),y=(0,i.useRef)(null),b=(0,i.useRef)(null),v=(0,i.useRef)(null),w=(0,i.useRef)([]),j=(0,i.useRef)([]),E=(0,i.useRef)(null),z=(0,i.useRef)(null);(0,i.useEffect)(()=>{o.t.create("customEase","0.6, 0.01, 0.05, 1"),o.t.create("blurEase","0.25, 0.1, 0.25, 1"),o.t.create("counterEase","0.35, 0.0, 0.15, 1"),o.t.create("gentleIn","0.38, 0.005, 0.215, 1");let n=()=>{z.current&&z.current.kill(),a.p8.set(p.current,{opacity:0,pointerEvents:"none"}),a.p8.set(u.current,{opacity:1}),a.p8.set(f.current,{opacity:0,y:10}),a.p8.set(m.current,{opacity:0,y:10}),a.p8.set(h.current,{opacity:0,y:10}),a.p8.set(y.current,{opacity:0}),a.p8.set(b.current,{opacity:0}),a.p8.set(v.current,{opacity:0}),a.p8.set(w.current,{y:"100%",opacity:0}),a.p8.set(c.current,{visibility:"hidden",clipPath:"inset(100% 0 0 0)"}),a.p8.set(c.current[0],{visibility:"visible"}),a.p8.set(l.current,{width:"400px",height:"500px"}),a.p8.set(".image-wrapper img",{scale:1.2,transformOrigin:"center center"}),a.p8.set(t.current,{display:"flex",opacity:1,y:0}),t.current.style.backgroundColor="#000",z.current=a.p8.timeline({onComplete:()=>{e.push("/home")}}),z.current.to(x.current,{opacity:1,duration:.15,stagger:.075,ease:"gentleIn"},.5),z.current.to(x.current,{color:"#fff",duration:.15,stagger:.075,ease:"blurEase"},"+=0.5"),[0,20,60,80,99].forEach((e,t)=>{let n;let i=window.innerWidth,o=14*parseFloat(getComputedStyle(document.documentElement).fontSize),s=String(e).length*(.6*o);n=0===e?"32px":99===e?`${i-s-32}px`:`${32+(i-64-s)*e/100}px`,z.current.add(`step${e}`,1.5*t),z.current.set(c.current[t],{visibility:"visible"},`step${e}`),z.current.to(c.current[t],{clipPath:"inset(0% 0 0 0)",duration:.65,ease:"customEase"},`step${e}`),z.current.to(r.current,{innerText:`${e}`,left:n,duration:.65,ease:"counterEase",snap:{innerText:1},onStart:()=>{a.p8.fromTo(r.current,{filter:"blur(8px)"},{filter:"blur(0px)",duration:.5,ease:"power2.inOut"})}},`step${e}`),t>0&&z.current.to(c.current[t-1],{clipPath:"inset(100% 0 0 0)",duration:.5,ease:"customEase",onComplete:()=>{a.p8.set(c.current[t-1],{visibility:"hidden"})}},`step${e}+=0.15`)}),z.current.to(x.current,{opacity:0,duration:.15,stagger:.075,ease:"counterEase"},"step99+=1"),z.current.add("expandFinal",">"),z.current.to({},{duration:.5},"expandFinal"),z.current.to(l.current,{width:"100vw",height:"100vh",duration:1.2,ease:"gentleIn"},"expandFinal+=0.5"),z.current.to(d.current,{scale:1,duration:1.2,ease:"gentleIn"},"expandFinal+=0.5"),z.current.to(r.current,{opacity:0,filter:"blur(10px)",duration:.5,ease:"power2.out"},"expandFinal+=0.5"),z.current.to(f.current,{opacity:1,y:0,duration:.5,ease:"customEase"},"expandFinal+=1.2"),z.current.to(m.current,{opacity:1,y:0,duration:.4,stagger:.1,ease:"customEase"},"expandFinal+=1.3"),z.current.to(h.current,{opacity:1,y:0,duration:.5,ease:"customEase"},"expandFinal+=1.7"),z.current.to(y.current,{opacity:1,duration:.1},"expandFinal+=1.5"),z.current.to(b.current,{opacity:1,color:"#fff",duration:.15,stagger:.075,ease:"gentleIn"},"expandFinal+=1.6"),z.current.to(p.current,{opacity:1,pointerEvents:"auto",duration:.3,ease:"hop"},"expandFinal+=1.2"),z.current.to(t.current,{backgroundColor:"rgba(0,0,0,0.5)",duration:.5,ease:"customEase"},"expandFinal+=0.7"),z.current.to(v.current,{opacity:1,duration:.1},"expandFinal+=1.8"),z.current.to(w.current,{y:"0%",opacity:1,duration:.8,stagger:.2,ease:"power4.out"},"expandFinal+=1.8")};setTimeout(n,100);let i=p.current,s=()=>{a.p8.to(j.current,{opacity:1,duration:.3,stagger:.05,ease:"customEase"}),a.p8.to(E.current,{opacity:1,scale:1,duration:.4,ease:"gentleIn"})},g=()=>{a.p8.to(j.current,{opacity:0,duration:.3,stagger:.05,ease:"customEase"}),a.p8.to(E.current,{opacity:0,scale:0,duration:.4,ease:"gentleIn"})},N=()=>{a.p8.killTweensOf("*"),a.p8.set(t.current,{display:"flex",opacity:1,y:0}),t.current.style.backgroundColor="#000",a.p8.set(l.current,{width:"400px",height:"500px"}),a.p8.set(r.current,{filter:"blur(0px)",opacity:1,innerText:"0",left:"2rem"}),a.p8.set(c.current,{clipPath:"inset(100% 0 0 0)",visibility:"hidden",position:"absolute",top:0,left:0}),a.p8.set(c.current[0],{visibility:"visible"}),a.p8.set(".image-wrapper img",{scale:1.2,transformOrigin:"center center"}),a.p8.set(p.current,{opacity:0,pointerEvents:"none"}),a.p8.set(u.current,{opacity:1}),a.p8.set(f.current,{opacity:0,y:10}),a.p8.set(m.current,{opacity:0,y:10}),a.p8.set(h.current,{opacity:0,y:10}),a.p8.set(v.current,{opacity:0}),a.p8.set(w.current,{y:"100%",opacity:0}),a.p8.set(x.current,{opacity:0,color:"#4f4f4f"}),a.p8.set(b.current,{opacity:0}),a.p8.set(y.current,{opacity:0}),t.current.style.display="flex",setTimeout(n,100)};return i.addEventListener("mouseenter",s),i.addEventListener("mouseleave",g),i.addEventListener("click",N),()=>{i.removeEventListener("mouseenter",s),i.removeEventListener("mouseleave",g),i.removeEventListener("click",N),z.current&&z.current.kill()}},[e]);let N=`
    @font-face {
      src: url("https://fonts.cdnfonts.com/css/pp-neue-montreal") format("woff2");
      font-family: "PP Neue Montreal", sans-serif;
      font-weight: 400;
    }

    *,
    *:before,
    *:after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      font-size: calc(100vw / 1512 * 10);
    }

    body {
      font-family: "PP Neue Montreal", sans-serif;
      font-weight: 700;
      font-size: 1.8rem;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow: hidden;
      background-color: #000;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      letter-spacing: -0.02em;
      color: white;
      position: relative;
    }

    body::before {
      content: "";
      position: fixed;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: transparent url("http://assets.iceable.com/img/noise-transparent.png") repeat 0 0;
      background-size: 300px 300px;
      animation: noise-animation 0.3s steps(5) infinite;
      opacity: 0.8;
      will-change: transform;
      z-index: 100;
      pointer-events: none;
    }

    @keyframes noise-animation {
      0% { transform: translate(0, 0); }
      10% { transform: translate(-2%, -3%); }
      20% { transform: translate(-4%, 2%); }
      30% { transform: translate(2%, -4%); }
      40% { transform: translate(-2%, 5%); }
      50% { transform: translate(-4%, 2%); }
      60% { transform: translate(3%, 0); }
      70% { transform: translate(0, 3%); }
      80% { transform: translate(-3%, 0); }
      90% { transform: translate(2%, 2%); }
      100% { transform: translate(1%, 0); }
    }

    .header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      padding: 2rem;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      z-index: 10003;
      opacity: 0;
    }

    .logo-left {
      color: #fff;
      font-size: 1.8rem;
      position: relative;
      display: inline-block;
    }

    .nav-center {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-size: 1.8rem;
      line-height: 1.1;
    }

    .nav-center ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      padding: 0;
      margin: 0;
      align-items: flex-start;
      gap: 0.2rem;
    }

    .nav-center li {
      font-size: 2rem;
      position: relative;
      cursor: pointer;
      color: white;
      padding: 0;
      display: inline-block;
      z-index: 1;
      opacity: 0;
      transform: translateY(10px);
    }

    .nav-center li:first-child {
      margin-top: 0;
    }

    .nav-center li::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background-color: white;
      z-index: -1;
      transition: width 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    .nav-center li:hover::after {
      width: 100%;
    }

    .nav-center li:hover {
      color: black;
      mix-blend-mode: difference;
    }

    .nav-right {
      font-size: 1.8rem;
      opacity: 0;
      position: relative;
      cursor: pointer;
      display: inline-block;
      z-index: 1;
    }

    .nav-right::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background-color: white;
      z-index: -1;
      transition: width 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    .nav-right:hover::after {
      width: 100%;
    }

    .nav-right:hover {
      color: black;
      mix-blend-mode: difference;
    }

    .preloader {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #000;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
    }

    .preloader-content {
      position: relative;
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .image-container {
      position: relative;
      width: 400px;
      height: 500px;
      overflow: hidden;
    }

    .image-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      visibility: hidden;
    }

    #image-100 {
      z-index: 10;
    }

    .image-wrapper img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .preloader-percentage {
      position: absolute;
      bottom: 5%;
      left: 2rem;
      font-size: 14rem;
      color: white;
    }

    .text-container {
      position: absolute;
      top: 50%;
      right: 30px;
      transform: translateY(-50%);
      text-align: right;
      z-index: 10001;
      max-width: 450px;
    }

    .text-line {
      padding: 0.3em 0;
      opacity: 0;
      color: #4f4f4f;
      font-family: "PP Neue Montreal", sans-serif;
      font-size: 1.6rem;
      text-transform: uppercase;
      letter-spacing: -0.02em;
      line-height: 1.2;
    }

    .text-container-final {
      position: absolute;
      top: 50%;
      right: 30px;
      transform: translateY(-50%);
      text-align: right;
      z-index: 10001;
      max-width: 450px;
    }

    .text-line-final {
      padding: 0.3em 0;
      opacity: 0;
      color: #4f4f4f;
      font-family: "PP Neue Montreal", sans-serif;
      font-size: 1.6rem;
      text-transform: uppercase;
      letter-spacing: -0.02em;
      line-height: 1.2;
    }

    .big-title {
      position: absolute;
      bottom: 30px;
      left: 30px;
      z-index: 10001;
      opacity: 0;
      text-align: left;
      color: red;
      font-size: 14rem;
      line-height: 0.9;
    }

    .big-title .title-line {
      overflow: hidden;
      margin: 0;
      padding: 0;
    }

    .big-title .title-line span {
      display: block;
      transform: translateY(100%);
      opacity: 0;
    }

    .restart-btn {
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 60px;
      height: 60px;
      border: none;
      background: transparent;
      cursor: pointer;
      z-index: 10002;
      padding: 0;
      opacity: 0;
    }

    .dot-container {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .dot {
      position: absolute;
      border-radius: 50%;
      background-color: white;
      width: 6px;
      height: 6px;
    }

    .dot:nth-child(1) {
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
    }

    .dot:nth-child(2) {
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
    }

    .dot:nth-child(3) {
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
    }

    .dot:nth-child(4) {
      top: 50%;
      left: 10px;
      transform: translateY(-50%);
    }

    .dot:nth-child(5) {
      top: 15px;
      right: 15px;
      opacity: 0;
    }

    .dot:nth-child(6) {
      bottom: 15px;
      right: 15px;
      opacity: 0;
    }

    .dot:nth-child(7) {
      bottom: 15px;
      left: 15px;
      opacity: 0;
    }

    .dot:nth-child(8) {
      top: 15px;
      left: 15px;
      opacity: 0;
    }

    .center-dot {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: white;
      opacity: 0;
    }
  `;return(0,n.jsxs)(n.Fragment,{children:[n.jsx("style",{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:N}}),(0,n.jsxs)("header",{className:"header",ref:u,children:[n.jsx("div",{className:"logo-left",ref:f,children:"REDUCE"}),n.jsx("nav",{className:"nav-center",children:n.jsx("ul",{children:["FOCUS","CLARITY","SIMPLIFY","TRUTH"].map((e,t)=>n.jsx("li",{ref:e=>m.current[t]=e,children:e},t))})}),n.jsx("div",{className:"nav-right",ref:h,children:"+GET IN TOUCH"})]}),n.jsx("div",{className:"preloader",ref:t,children:(0,n.jsxs)("div",{className:"preloader-content",children:[n.jsx("div",{className:"image-container",ref:l,children:[{id:"image-0",src:"https://cdn.cosmos.so/4900e2ad-dfdb-4f6a-8ca8-6700144e6c89?format=jpeg",alt:"Preloader Image 1"},{id:"image-20",src:"https://cdn.cosmos.so/acdef0b0-0321-4f80-9ab0-7932ccb88554?format=jpeg",alt:"Preloader Image 2"},{id:"image-60",src:"https://cdn.cosmos.so/09eb737d-c269-4fa6-a77c-4ada27419be0?format=jpeg",alt:"Preloader Image 3"},{id:"image-80",src:"https://cdn.cosmos.so/e9b9e7dc-73f5-4f7c-bbb3-ad2e3589bda0?format=jpeg",alt:"Preloader Image 4"},{id:"image-100",src:"https://cdn.cosmos.so/5b5c5242-4598-4d51-9891-0e90eeef6727?format=jpeg",alt:"Preloader Image 5"}].map((e,t)=>n.jsx("div",{className:"image-wrapper",id:e.id,ref:e=>c.current[t]=e,children:n.jsx("img",{src:e.src,alt:e.alt,ref:"image-100"===e.id?d:null})},e.id))}),n.jsx("div",{className:"preloader-percentage",ref:r,children:"0"})]})}),n.jsx("div",{className:"text-container",ref:g,children:["Winning is a habit.","Champions are made daily.","Obstacles fuel growth.","The mind conquers first.","Success demands sacrifice.","Greatness never rests.","Victory is earned.","Persistence prevails."].map((e,t)=>n.jsx("div",{className:"text-line",ref:e=>x.current[t]=e,children:e},t))}),n.jsx("div",{className:"text-container-final",ref:y,children:["Embrace the challenge.","Find your purpose.","Commit to excellence.","Trust the process.","Silence the doubters.","Rise above fear.","Own your destiny.","Leave a legacy."].map((e,t)=>n.jsx("div",{className:"text-line-final",ref:e=>{0===t&&(b.current=[]),b.current[t]=e},children:e},t))}),n.jsx("div",{className:"big-title",ref:v,children:["WINNING","MINDSET","ALWAYS"].map((e,t)=>n.jsx("div",{className:"title-line",children:n.jsx("span",{ref:e=>w.current[t]=e,children:e})},t))}),n.jsx("button",{className:"restart-btn",ref:p,children:(0,n.jsxs)("div",{className:"dot-container",children:[[void 0,void 0,void 0,void 0].map((e,t)=>n.jsx("div",{className:"dot"},t)),[void 0,void 0,void 0,void 0].map((e,t)=>n.jsx("div",{className:"dot",ref:e=>j.current[t]=e},t+4)),n.jsx("div",{className:"center-dot",ref:E})]})})]})}},8295:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(9510);function i({children:e}){return(0,n.jsxs)("html",{lang:"en",style:{backgroundColor:"#1c1c1c"},children:[(0,n.jsxs)("head",{children:[n.jsx("script",{src:"https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js",async:!0}),n.jsx("script",{src:"https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/CustomEase.min.js",async:!0})]}),n.jsx("body",{style:{margin:0,padding:0,backgroundColor:"white",overflow:"hidden",height:"100vh",width:"100vw"},children:e})]})}r(5023)},5023:()=>{}};