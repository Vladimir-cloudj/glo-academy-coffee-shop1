export const navigate = {
  methods: {
    navigate(id) {
      console.log("navigate", id);
      this.$router.push({ name: this.name, params: { id: id } });
    },
  },
};