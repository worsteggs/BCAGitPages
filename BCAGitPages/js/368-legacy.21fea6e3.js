"use strict";(self["webpackChunkbrain_web"]=self["webpackChunkbrain_web"]||[]).push([[368,502],{32368:function(e,a,n){n.r(a),n.d(a,{default:function(){return o}});var l=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("el-row",{staticClass:"atlas-list",attrs:{gutter:110}},e._l(e.ATLAS,(function(a){return n("el-col",{key:a.label,staticClass:"atlas-col",nativeOn:{click:function(n){return e.changeAtlas(a)}}},[n("brain-img-wrap",{ref:"brainImgWrap",refInFor:!0,style:e.cellGenestyle(),attrs:{isGene:e.isGene,geneActive:e.cellClassName(a.name)}},[n("img",{attrs:{src:a.img,alt:""}})]),n("span",[e._v(e._s(a.label))])],1)})),1)},t=[],i=(n(41539),n(54747),n(68309),n(7248)),r={name:"atlasBrains",props:{isGene:{type:Boolean,default:!1}},computed:{cellClassName:function(){var e=this;return function(a){return e.atlasName==a}},cellGenestyle:function(){var e=this;return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"180px",n=a,l="100%";return{height:e.isGene?n:l,width:e.isGene?n:l}}}},data:function(){return{ATLAS:i.ZP,atlasName:"Adult Brain"}},mounted:function(){var e=this;window.onresize=function(){var a="180px",n=document.body.clientWidth;a=n<768?"150px":"100%",e.$refs.brainImgWrap.forEach((function(e){e.$el.style.height=a,e.$el.style.width=a}))}},methods:{changeAtlas:function(e){console.log(e),this.atlasName=e.name,this.$emit("input",e.name),this.$emit("change",e)}}},s=r,u=n(43736),c=(0,u.Z)(s,l,t,!1,null,"6a041bce",null),o=c.exports},7248:function(e,a,n){n.d(a,{Is:function(){return t},Xz:function(){return i}});var l=[{name:"Adult Brain",label:"ADULT BRAIN",className:"adult",img:n(8256)},{name:"Fetal Brain",label:"FETAL BRAIN",className:"fetal",img:n(34e3)},{name:"Tumour",label:"TUMOUR",className:"tumour",img:n(93151)},{name:"Organoid",label:"ORGANOID",className:"Organoid",img:n(76989)},{name:"Mouse",label:"MOUSE BRAIN",className:"Mouse",img:n(55425)}];a["ZP"]=l;var t=[{label:"CellType",value:"CellType"},{label:"original_name",value:"original_name"},{label:"ACTINN",value:"ACTINN"},{label:"scARCH",value:"scARCH"},{label:"CHETAH",value:"CHETAH"},{label:"scmap",value:"scmap"},{label:"SingleCellNet",value:"SingleCellNet"},{label:"SingleR",value:"SingleR"},{label:"ScPred",value:"ScPred"}],i=["Head","Hypothalamus","Cortical","White matter","Choroid","Unclassified","Midbrain","Pluripotent stem cell","Cerebral cortex","Telencephalon","Ganglionic eminences","Thalamus","Hippocampus","Amygdala","Diencephalon","Cerebellum","Presumptive cortex","Basal ganglia","Pons","Hindbrain","GE","Pituitary gland","cerebellar","Grey matter","Medulla","Cortex","Tumour","Forebrain","Brain"]},8256:function(e,a,n){e.exports=n.p+"BCAGitPages/img/adult-brain.6c0bb1c1.png"},55425:function(e,a,n){e.exports=n.p+"BCAGitPages/img/animal-brain.2f174608.png"},76989:function(e,a,n){e.exports=n.p+"BCAGitPages/img/drganoid-brain.71c09a0f.png"},34e3:function(e,a,n){e.exports=n.p+"BCAGitPages/img/fetal-brain.953356c7.png"},93151:function(e,a,n){e.exports=n.p+"BCAGitPages/img/tumour-brain.621a2bd0.png"}}]);