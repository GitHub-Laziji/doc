import{b as t,o as n,c,d as o,F as a,p as r,g as d}from"./vendor.840b9852.js";import{_ as i}from"./index.691c8e62.js";const _={components:{},data(){return{html:""}},mounted(){console.log(this.$router,this.$route.query.path),fetch(this.$route.query.path).then(e=>e.text()).then(e=>{console.log(t),this.html=new t.Converter().makeHtml(e),console.log(e)})}},p=e=>(r("data-v-e00c1850"),e=e(),d(),e),l=p(()=>o("div",{class:"bk"},[o("div",{class:"img-bk app-img-bk"},[o("div",{class:"img"})])],-1)),h={class:"main-bk app-bk"},m={style:{padding:"16px"}},u=["innerHTML"];function v(e,g,k,b,s,f){return n(),c(a,null,[l,o("div",h,[o("div",m,[o("div",{class:"markdown-body",innerHTML:s.html},null,8,u)])])],64)}var $=i(_,[["render",v],["__scopeId","data-v-e00c1850"]]);export{$ as default};
