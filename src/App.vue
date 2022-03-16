<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
  created() {
    this.$store.dispatch('setA1');
    this.$store.dispatch('setA2');
  },
};
</script>
<style scoped lang="less"></style>
