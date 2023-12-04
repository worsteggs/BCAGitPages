<template>
  <div>
    <div class="tips">
      &nbsp; &nbsp; &nbsp; <span class="strong">↓</span> You can choose to display cells from a specific region based on the REGION column below. (Or other categories of interest.)
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "dataBrowser",
  data() {
    return {};
  },
};
</script>
<style lang="scss"></style>
