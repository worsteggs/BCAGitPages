"use strict";(self["webpackChunkbrain_web"]=self["webpackChunkbrain_web"]||[]).push([[715],{7715:function(e,l,t){t.r(l),t.d(l,{default:function(){return o}});var a=function(){var e=this,l=e._self._c;return l("div",{staticClass:"filter-cell"},[l("div",{staticStyle:{flex:"1",display:"flex"}},[l("el-checkbox",{staticClass:"filter-check-txt",model:{value:e.params.notFlag,callback:function(l){e.$set(e.params,"notFlag",l)},expression:"params.notFlag"}},[e._v("Exclude")]),l("span",{staticClass:"filter-cell-label"},[e._v("Cell Type")]),l("div",{staticStyle:{display:"inline-block","vertical-align":"text-top",width:"187px",flex:"1"}},[l("el-dropdown",{attrs:{trigger:e.disabled?"disabled":"click",placement:"bottom-start"}},[l("el-input",{class:{"el-input_border":e.iptBlueBorder()},staticStyle:{width:"187px"},attrs:{id:"cellTypeTreeSearch",placeholder:"Filter by name",disabled:e.disabled,clearable:""},model:{value:e.filterText,callback:function(l){e.filterText=l},expression:"filterText"}}),l("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[l("div",{staticClass:"dropdownTreeWapper"},[l("div",{attrs:{align:"right"}},[l("el-checkbox",{on:{change:e.subtypesCheckbox},model:{value:e.cellCheck,callback:function(l){e.cellCheck=l},expression:"cellCheck"}},[e._v(" include subtypes ")])],1),l("el-tree",{ref:"tree",staticClass:"filter-tree",attrs:{"default-expanded-keys":["Cell"],"default-checked-keys":e.params.cellType,"node-key":"label",data:e.zNodes,"show-checkbox":"","filter-node-method":e.filterNode,"check-strictly":e.cellStrictly},on:{"check-change":e.checkChange}})],1)])],1),l("el-tag",{staticStyle:{width:"187px","margin-left":"10px"}},[e._v("   "+e._s(e.params.cellType?e.params.cellType.length:0)+" cell types selected  ")]),l("div",[e.params.cellType&&e.params.cellType.length?l("div",{staticClass:"cellType-item"},e._l(e.params.cellType,(function(t,a){return l("el-tag",{key:a},[e._v(" "+e._s(t)+" ")])})),1):e._e()])],1)],1),l("filterIcon",{attrs:{questionTip:"Select cells annotated as one or several cell types"},on:{close:function(l){return e.$emit("close")}}})],1)},s=[],c={props:{params:{type:Object,default:function(){return{cellType:[]}}},disabled:{type:Boolean,default:!1}},components:{filterIcon:()=>t.e(357).then(t.bind(t,7357))},data(){return{filterText:"",zNodes:[],cellCheck:!0,cellStrictly:!1,nodes:{}}},watch:{filterText(e){e&&this.$refs.tree.filter(e)}},async created(){const e=await this.celltypeChange();this.zNodes=e,this.setCellDisabled(this.zNodes[0])},methods:{async celltypeChange(){const e=await this.$store.dispatch("cellCollection/fetchCelltree");return e},iptBlueBorder(){return!!(this.params.cellType&&this.params.cellType.length>0)},subtypesCheckbox(e){this.cellStrictly=!e},setCellDisabled(e,l=null){if(0===e.type&&"Cell"!==e.label){const t=l?l.children:[];l.children=t.filter((l=>l.id!==e.id))}e.children&&e.children.forEach((l=>{this.setCellDisabled(l,e)}))},filterNode(e,l){return!e||-1!==l.label.indexOf(e)},checkChange(){const e=this.$refs.tree.getCheckedNodes();this.params.cellType=Array.from(new Set(e.map((e=>e.label)))),this.$forceUpdate()}}},r=c,i=t(4249),n=(0,i.Z)(r,a,s,!1,null,"3015c4ca",null),o=n.exports}}]);