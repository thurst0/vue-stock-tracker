<template>
  <div class="home">
    <NavBar msg="Welcome to Vue Stock Investor!" />
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'Home',
  components: {
    NavBar,
  },
};
</script>
