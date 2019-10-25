<template>
  <v-app>
    <app-header></app-header>
    <app-home></app-home>
  </v-app>
</template>

<script>
import Header from './components/Header.vue';
import Home from './components/Home.vue';

export default {
  name: 'App',
  components: {
    appHeader: Header,
    appHome: Home,
  },
  data: () => ({
    //
  }),
};
</script>
