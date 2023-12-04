<template>
  <div id="browserWrap" class="iframe-wrap" style="height: calc(100vh)">
    <c-iframe :openUrl="openUrl" cid="dataBrowser" pid="browserWrap" ref="iframe"></c-iframe>
  </div>
</template>
<script>
export default {
  name: "adultBrowser",
  data () {
    return {
      openUrl: "/AdultBrain/",
    };
  },
  components: {
    CIframe: () => import("./components/Ciframe.vue"),
  },
};
</script>
<style lang="scss"></style>
