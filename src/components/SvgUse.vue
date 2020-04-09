<template>
  <svg role="presentation" aria-hidden="true" class="svguse" focusable="false" :name="name">
    <!-- In Safari 10 SVG breaks tab order unless comments around use tag present -->
    <use
      :class="`svg-${name}`"
      aria-hidden="true"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      :xlink:href="href"
    ></use>
    <!---->
  </svg>
</template>
<script>
export default {
  name: 'svg-use',
  props: {
    name: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
  },
  computed: {
    href() {
      return this.id ? `#${this.id}` : `#svg-${this.name}`;
    },
  },
  async resolveSvg() {
    await import(`@/images/${this.name}.svg`);
  },
};
</script>
<style lang="sass" scoped>
svg
  display: block
  pointer-events: none
  fill: inherit
  stroke: inherit
</style>
