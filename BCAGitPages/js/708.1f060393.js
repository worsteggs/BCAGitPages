"use strict";(self["webpackChunkbrain_web"]=self["webpackChunkbrain_web"]||[]).push([[708],{9708:function(e,t,i){i.r(t),i.d(t,{default:function(){return s}});var n=function(){var e=this,t=e._self._c;return t("iframe",{ref:"iframe",staticClass:"analsis-iframe",attrs:{src:e.openUrl,id:e.cid,scrolling:"no",frameborder:"0"},on:{load:e.iframeload}})},l=[],r=i(9249),a={props:{openUrl:{type:String,default:"/AdultBrain"},cid:{type:String,default:"cIframe"},pid:{type:String,default:"iframeWrap"}},data(){return{iframeHeight:"calc(100vh)",loading:null}},watch:{openUrl:{handler(e){this.loading=r.Loading.service({lock:!0,text:"Loading...",fullscreen:!0})},immediate:!0}},methods:{iframeload(){try{const e=document.getElementById(this.cid);let t=e.contentWindow,i=t.document.documentElement.scrollHeight||t.document.body.scrollHeight,n=e.contentDocument||e.document,l=Math.max(n.body.clientHeight,n.documentElement.clientHeight),r=Math.max(n.body.scrollHeight,n.documentElement.scrollHeight),a=Math.max(l,r),o=Math.max(a,i);this.iframeHeight=o+"px",this.loading.close(),e.style.height=o+"px",this.$nextTick((()=>{document.getElementById(this.pid).style.height=o+100+"px"}))}catch(e){throw this.loading.close(),new Error("自定义错误setIframeHeight Error",e)}this.loading.close()}}},o=a,c=i(4249),d=(0,c.Z)(o,n,l,!1,null,null,null),s=d.exports}}]);