"use strict";(self["webpackChunkbrain_web"]=self["webpackChunkbrain_web"]||[]).push([[502],{32368:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",{staticClass:"atlas-list",attrs:{gutter:110}},e._l(e.ATLAS,(function(t){return n("el-col",{key:t.label,staticClass:"atlas-col",nativeOn:{click:function(n){return e.changeAtlas(t)}}},[n("brain-img-wrap",{ref:"brainImgWrap",refInFor:!0,style:e.cellGenestyle(),attrs:{isGene:e.isGene,geneActive:e.cellClassName(t.name)}},[n("img",{attrs:{src:t.img,alt:""}})]),n("span",[e._v(e._s(t.label))])],1)})),1)},i=[],l=(n(41539),n(54747),n(68309),n(7248)),s={name:"atlasBrains",props:{isGene:{type:Boolean,default:!1}},computed:{cellClassName:function(){var e=this;return function(t){return e.atlasName==t}},cellGenestyle:function(){var e=this;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"180px",n=t,a="100%";return{height:e.isGene?n:a,width:e.isGene?n:a}}}},data:function(){return{ATLAS:l.ZP,atlasName:"Adult Brain"}},mounted:function(){var e=this;window.onresize=function(){var t="180px",n=document.body.clientWidth;t=n<768?"150px":"100%",e.$refs.brainImgWrap.forEach((function(e){e.$el.style.height=t,e.$el.style.width=t}))}},methods:{changeAtlas:function(e){console.log(e),this.atlasName=e.name,this.$emit("input",e.name),this.$emit("change",e)}}},r=s,c=n(43736),u=(0,c.Z)(r,a,i,!1,null,"6a041bce",null),o=u.exports}}]);