<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
import User from './components/User'

export default {
  name: 'App',
  components: {
    User
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
