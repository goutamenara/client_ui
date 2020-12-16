<template>
  <router-view></router-view>
</template>

<script>
import store from './store/index'
import router from './router/index'
export default {
  name: 'App',
  store,
  router
};
</script>
