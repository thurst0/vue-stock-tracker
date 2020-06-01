<template>
  <div class="register">
    Register
    <input type="text" placeholder="User Name" v-model="userName" /> <br />
    <input type="text" placeholder="Password" v-model="pw" /> <br />
    <button v-on:click="register">Register</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { createSession, getSession } from '../services/session';

export default {
  name: 'Login',
  data() {
    return {
      userName: '',
      pw: '',
    };
  },
  methods: {
    register() {
      // TODO
    },
  },
  async beforeMount() {
    if (this.$route && this.$route.params.userName)
      this.userName = this.$route.params.userName;
  },
};
</script>

<!-- scoped to this component -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
