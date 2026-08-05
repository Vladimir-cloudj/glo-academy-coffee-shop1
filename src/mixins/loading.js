export const loadingMixin = {
  computed: {
    isLoading() {
      return this.$store.getters.isLoading;
    },
  },
  methods: {
    startLoading() {
      this.$store.dispatch("startLoading");
    },
    endLoading() {
      this.$store.dispatch("endLoading");
    },
  },
};
