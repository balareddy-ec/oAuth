<template>
  <div class="auth">
      <br>
      <label>Client ID</label><br>
      <input type="text" v-model="client_id"/>
      <br>
      <br>
      <label>Client Secret</label><br>
      <input type="text" v-model="client_secret"/>
      <br>
      <br>
      <label>Code</label><br>
      <input type="text" v-model="code" />
      <br>
      <br>
      <label>Redirect URL</label><br>
      <input type="text" v-model="redirect_uri" />
      <br>
      <br>
      <label>Request URL</label><br>
      <input type="text" v-model="requrl" />
      <br>
      <br>
      <label>Data URL</label><br>
      <input type="text" v-model="dataurl" />
      <br>
      <br>
      <button @click="initoAuth">Auth</button>
      <p>Request JSON: {{ JSON.stringify(reqdata, null, 2) }}</p>
      <p>Response JSON: {{ JSON.stringify(resdata, null, 2) }}</p>
      <p>List JSON: {{ JSON.stringify(listdata, null, 2) }}</p>
  </div>
</template>

<script>

export default {
  name: 'Auth',

  components: {
  },

  data() {
    return {
      code: decodeURIComponent(this.$route.query.code),
      client_id: '3MVG9riCAn8HHkYWhCjpJsP6M7CogzJaVsFgPuLnx8ubjRUAWxfz2FwveQnigPmuOVM1p2khA_Mmqj03tqzjc',
      client_secret: '25D3EAE8C9C5DDE04365A4BF7087115DAA6E0597F79A617A1D5730D7542B7BAF',
      redirect_uri: 'https://sf-access-6d3e2d.netlify.app/',
      requrl: 'https://ec-expedite-dev-ed.my.salesforce.com/services/oauth2/token',
      reqdata: {},
      resdata: {},
      listdata: {},
      dataurl: '',
    };
  },

  methods: {

      async initoAuth() {
        console.log('sdsd', this.$route.query.code);
        const data = {
            grant_type: 'authorization_code',
            code: this.code,
            client_id: this.client_id,
            client_secret: this.client_secret,
            redirect_uri: this.redirect_uri,
        };
        this.reqdata = data;
        const response = await window.salesforceConnector.getAccessToken(
          `grant_type=${
            data.grant_type
          }&code=${
            data.code
          }&client_id=${
            data.client_id
          }&client_secret=${
            data.client_secret
          }&redirect_uri=${data.redirect_uri}`
        , this.requrl);

        this.resdata = response;

        const datalimits = await getResponseUsingAccessToken(this.dataurl, response.access_token);
        listdata = datalimits
        console.log('response', response), datalimits;
      },

  },

}
</script>

<style scoped>
input {
  width: 800px;
}
</style>
