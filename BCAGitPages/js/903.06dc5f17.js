"use strict";(self["webpackChunkbrain_web"]=self["webpackChunkbrain_web"]||[]).push([[903],{9903:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("iframe",{ref:"iframe",staticClass:"analsis-iframe",attrs:{src:e.openUrl,id:e.cid,scrolling:"no",frameborder:"0"},on:{load:e.iframeload}})},l=[],r=(n(1703),n(8499)),a={props:{openUrl:{type:String,default:"/AdultBrain"},cid:{type:String,default:"cIframe"},pid:{type:String,default:"iframeWrap"}},data(){return{iframeHeight:"calc(100vh)",loading:null}},watch:{openUrl:{handler(e){this.loading=r.Loading.service({lock:!0,text:"Loading...",fullscreen:!0})},immediate:!0}},methods:{iframeload(){try{const e=document.getElementById(this.cid);let t=e.contentWindow,n=t.document.documentElement.scrollHeight||t.document.body.scrollHeight,i=e.contentDocument||e.document,l=Math.max(i.body.clientHeight,i.documentElement.clientHeight),r=Math.max(i.body.scrollHeight,i.documentElement.scrollHeight),a=Math.max(l,r),o=Math.max(a,n);this.iframeHeight=o+"px",this.loading.close(),e.style.height=o+"px",this.$nextTick((()=>{document.getElementById(this.pid).style.height=o+100+"px"}))}catch(e){throw this.loading.close(),new Error("自定义错误setIframeHeight Error",e)}this.loading.close()}}},o=a,c=n(3736),d=(0,c.Z)(o,i,l,!1,null,null,null),s=d.exports}}]);