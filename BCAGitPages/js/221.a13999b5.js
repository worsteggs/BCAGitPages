"use strict";(self["webpackChunkbrain_web"]=self["webpackChunkbrain_web"]||[]).push([[221],{8221:function(e,a,t){t.r(a),t.d(a,{default:function(){return u}});var l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"filter-cell"},[t("div",[t("el-checkbox",{staticClass:"filter-check-txt",model:{value:e.params.notFlag,callback:function(a){e.$set(e.params,"notFlag",a)},expression:"params.notFlag"}},[e._v("Exclude")]),t("span",{staticClass:"filter-cell-label"},[e._v("Metadata")]),t("el-select",{attrs:{disabled:e.disabled,placeholder:"please select"},on:{change:e.metadataTypeChange},model:{value:e.params.metadataType,callback:function(a){e.$set(e.params,"metadataType",a)},expression:"params.metadataType"}},e._l(e.options,(function(e){return t("el-option",{key:e.value,attrs:{label:e.name,value:e.value}})})),1),e.params.metadataType?t("el-select",{staticStyle:{"margin-left":"10px",width:"200px"},attrs:{disabled:e.disabled,placeholder:"please select"},on:{change:function(a){return e.params.metadataValue=a}},model:{value:e.metadataValue,callback:function(a){e.metadataValue=a},expression:"metadataValue"}},e._l(e.valoptions[e.valoptionsName],(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1):e._e()],1),t("filterIcon",{attrs:{questionTip:"Select cells by setting other kinds of filters"},on:{close:function(a){return e.$emit("close")}}})],1)},s=[],n=t(4190),o={props:{params:{type:Object,default:function(){return{}}},disabled:{type:Boolean,default:!1}},components:{filterIcon:()=>t.e(73).then(t.bind(t,3073))},data(){return{value:"",options:[],valoptions:{},valoptionsName:"",metadataValue:""}},mounted(){this.fetchMetadata(),this.metadataValue=this.params.metadataValue},computed:{currentStep(){return this.$store.state.cellCollection.currentStep}},watch:{},methods:{async metadataTypeChange(e){let a=this.options.find((a=>a.value==e)).name;this.valoptionsName=a,this.params.metadataValue="",this.metadataValue=""},async fetchMetadata(){this.loading=!0;try{const e=await(0,n.zp)({fileName:"csv/sorting.csv",groupBy:"orgin_key"}),a=[],t={};Object.keys(e).forEach((l=>{a.push({name:l,value:e[l].key[0]}),t[l]=e[l].value})),this.options=a,this.valoptions=t}catch(e){console.log(e)}}}},i=o,c=t(3736),r=(0,c.Z)(i,l,s,!1,null,"137c0065",null),u=r.exports}}]);