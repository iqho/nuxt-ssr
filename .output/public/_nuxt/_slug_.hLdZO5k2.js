import{u,r as i,q as p,c as n,b as m,w as d,s as e,a as o,t as a,v as _,n as h,o as r,d as f}from"./entry.4rVgp4tK.js";import{a as g}from"./axios.G2rPRu76.js";const x={key:0},k=["src","alt"],V={__name:"[slug]",setup(v){const c=u(),t=i(null);return p(async()=>{const{data:s}=await g.get(`https://dummyjson.com/products/${c.params.slug}`);t.value=s,console.log(s)}),(s,y)=>{const l=h("router-link");return r(),n("div",null,[m(l,{to:"/products"},{default:d(()=>[f("Back")]),_:1}),e(t)?(r(),n("div",x,[o("img",{src:e(t).thumbnail,alt:e(t).title,style:{"max-height":"200px"}},null,8,k),o("h1",null,"Name: "+a(e(t).title),1),o("p",null,"Price: $"+a(e(t).price),1),o("p",null,"Description: "+a(e(t).description),1)])):_("",!0)])}}};export{V as default};
