<template>
  <div class="auth">
      <button @click="initoAuth">Auth</button>
  </div>
</template>

<script>

export default {
  name: 'Auth',

  components: {
  },

  data() {
    return {

    };
  },

  methods: {

      async initoAuth() {
        console.log('sdsd', this.$route.query.code);
        const response = await window.salesforceConnector.getAccessToken(this.$route.query.code);

        console.log(response);
      },

  },

}
</script>
