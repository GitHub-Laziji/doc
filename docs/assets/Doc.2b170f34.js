import{b as o,o as n,c as s,d as r}from"./vendor.840b9852.js";import{_ as c}from"./index.85e2ec5e.js";const a={components:{},data(){return{html:""}},mounted(){console.log(this.$router,this.$route.query.path),fetch(this.$route.query.path).then(e=>e.text()).then(e=>{console.log(o),this.html=new o.Converter().makeHtml(e),console.log(e)})}},l={style:{padding:"10vw"}},d=["innerHTML"];function i(e,h,m,p,t,_){return n(),s("div",l,[r("div",{class:"markdown-body",innerHTML:t.html},null,8,d)])}var v=c(a,[["render",i]]);export{v as default};