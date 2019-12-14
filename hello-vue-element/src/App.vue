<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted() {
    window.addEventListener('unload', this.saveState);
  },
  methods: {
    saveState() {
      // 模块化后，调用 state 的代码修改为 this.$store.state.User
      sessionStorage.setItem('userState', JSON.stringify(this.$store.state.User));
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
