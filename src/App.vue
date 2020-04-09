<template>
  <div id="app">
    <div class="iconContainer">
      Image with masks
      <svg-use name="icon-with-masks" width="100" height="100" />

    </div>
    <div class="iconContainer">
      Image without masks
      <svg-use name="icon-without-masks" width="100" height="100" />
    </div>
  </div>
</template>

<script>
import SvgUse from '@/components/SvgUse.vue';

export default {
  name: 'App',
  components: {
    SvgUse,
  },
};
</script>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px

.iconContainer
  width: 200px
  height: 200px
  padding: 10px

</style>
