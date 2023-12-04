<template>
  <div style="background:white;">
    <!-- <div class="wrap"> -->
    <!-- <component :is="component" :key="component.name" :atlasName="atlasName" /> -->
    <IndexComp />
    <div style="height: 30px"></div>
    <!-- </div> -->

  </div>
</template>
<script>
export default {
  name: "index",
  components: {
    AnatomyBrain: () => import("./components/AnatomyBrain.vue"),
    IndexComp: () => import("./components/IndexComp.vue"),
  },
  data () {
    return {
      atlasName: "",
      component: "IndexComp",
    };
  },
  watch: {
    $route (to, from) {
      console.log(to);
      if (to.query.atlasName && to.path == "/index") {
        this.component = "AnatomyBrain";
        const { atlasName } = to.query;
        this.atlasName = atlasName;
      } else if (!to.query.atlasName && to.path == "/index") {
        this.component = "IndexComp";
      }
    },
  },
  mounted () {
    if (this.$route.query.atlasName && this.$route.path == "/index") {
      this.component = "AnatomyBrain";
      const { atlasName } = this.$route.query;
      this.atlasName = atlasName;
    } else if (!this.$route.query.atlasName && this.$route.path == "/index") {
      this.component = "IndexComp";
    }
  },
};
</script>
