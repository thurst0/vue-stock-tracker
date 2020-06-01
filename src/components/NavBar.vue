<template>
  <div class="navbar">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    msg: String,
  },
  methods: {},
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
