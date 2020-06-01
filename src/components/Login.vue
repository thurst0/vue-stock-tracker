<template>
  <div class="login">
    <input
      type="text"
      id="user-name"
      placeholder="User Name"
      v-model="userName"
    />
    <br />
    <input type="text" id="password" placeholder="Password" v-model="pw" />
    <br />
    <button id="btn-login" type="submit" v-on:click="login">Login</button>
    <br />
    <button v-on:click="register">Register</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import sessionService from '@/services/session';

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
      this.$router.push({
        name: 'Register',
        params: { userName: this.userName },
      });
    },
    async login() {
      await sessionService.createSession({
        userName: this.userName,
        pw: this.pw,
      });
      this.$router.push({ name: 'Home' });
    },
  },
  async beforeMount() {
    // check for route params with this.$route
    // check for component params with
    const session = await sessionService.getSession();
    if (session != null) {
      this.userName = session.userName;
    }
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
