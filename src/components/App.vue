<template>
  <div class="app">
    <div class="app__content">
      <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },

  data: () => ({
    shareDealroomVisible: false
  }),

  computed: {
  },

  methods: {
    handleToggleModal() {
    },
  },

  watch: {
  },

  async mounted() {
  }
}
</script>

<style lang="scss">
.app {
  width: 100vw;

  &__content {
    display: flex;
  }
}
</style>
