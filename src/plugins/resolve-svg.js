export default {
  install(Vue, { resolveSvg = undefined }) {
    Vue.mixin({
      created() {
        const { resolveSvg: _resolveSvg } = this.$options;

        if (_resolveSvg) return resolveSvg ? resolveSvg.call(this) : _resolveSvg.call(this);

        return null;
      },
    });
  },
};
