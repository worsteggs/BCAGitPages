"use strict";(self["webpackChunkbrain_web"]=self["webpackChunkbrain_web"]||[]).push([[414],{2414:function(e,t,l){l.r(t),l.d(t,{default:function(){return o}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"xuanzeClick filter-cell"},[t("div",{staticStyle:{display:"flex"}},[t("el-checkbox",{staticClass:"filter-check-txt",model:{value:e.params.notFlag,callback:function(t){e.$set(e.params,"notFlag",t)},expression:"params.notFlag"}},[e._v(" Exclude ")]),t("div",[t("div",{staticStyle:{"margin-top":"8px"}},[t("span",{staticClass:"filter-cell-label"},[e._v("Sub-atlas ")]),t("el-select",{staticStyle:{width:"187px"},attrs:{clearable:"",placeholder:"Sub-atlas"},model:{value:e.params.sample_type,callback:function(t){e.$set(e.params,"sample_type",t)},expression:"params.sample_type"}},e._l(e.SubAtlas,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1)])],1),t("filterIcon",{attrs:{questionTip:"Select cells from one or several organs"},on:{close:function(t){return e.$emit("close")}}})],1)},s=[],n={props:{params:{type:Object,default:function(){return{cellType:[]}}},disabled:{type:Boolean,default:!1}},data(){return{SubAtlas:["Adult","Fetal","Tumour","Organoid","Xenograft"]}},components:{filterIcon:()=>l.e(357).then(l.bind(l,7357))},methods:{}},r=n,c=l(4249),i=(0,c.Z)(r,a,s,!1,null,null,null),o=i.exports}}]);