import{u as k,e as c,a as y,f as N,h as b,j as e,A as I,i as _,b as A}from"./index-c05b1200.js";import{B}from"./BackButton-cc90914c.js";const S=()=>{const{t:a}=k(),r=[a("dough.thin"),a("dough.traditional")],[s,m]=c.useState(),[o,d]=c.useState(0),[l,p]=c.useState(0),u=y(),{id:n}=N(),h=b(),z=async()=>{try{const i=await _.get(`https://64f4f88e932537f4051ad1ac.mockapi.io/items/${n}`);m(i.data)}catch(i){console.log(i),h("/")}};c.useEffect(()=>{z()},[]);const j=i=>{const{id:t,title:v,price:x,imageUrl:g,sizes:f}=i;u(A({id:t,title:v,price:x,imageUrl:g,type:r[o],size:f[l]}))};return e.jsx("div",{className:"container",children:s?e.jsxs("div",{style:{margin:"0 auto",textAlign:"center"},children:[e.jsx("h1",{children:a(`pizzas.pizza${n}`)}),e.jsx("img",{className:"pizza-block__image",src:s.imageUrl,alt:"Pizza"}),e.jsxs("div",{className:"pizza-block__price",children:[a("pizzas.price.from")," ",s.price," czk"]}),e.jsxs("div",{className:"pizza-block__selector",children:[e.jsx("ul",{children:s.types.map(i=>e.jsx("li",{className:o===i?"active":"",onClick:()=>d(i),children:r[i]},i))}),e.jsx("ul",{children:s.sizes.map((i,t)=>e.jsxs("li",{className:l===t?"active":"",onClick:()=>p(t),children:[i," cm."]},t))})]}),o===0?e.jsx("div",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, pariatur. adipisicing elit. Inventore, pariatur. Ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing."}):e.jsx("div",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas molestiae, voluptate alias temporibus harum unde. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, reprehenderit?"}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("div",{className:"pizza-block__bottom",children:e.jsx(B,{})}),e.jsx(I,{onClick:()=>j(s)})]})]}):e.jsx("h2",{children:"Загрузка..."})})};export{S as default};
