<template>
  <v-app>
    <app-header></app-header>
    <app-menu></app-menu>
    <app-home></app-home>
  </v-app>
</template>

<script>
import Header from './components/Header.vue';
import Home from './components/Home.vue';
import Menu from './components/Menu.vue';

export default {
  name: 'App',
  components: {
    appHeader: Header,
    appHome: Home,
    appMenu: Menu,
  },
  mounted() {
    if (localStorage.getItem('database')) {
      this.$store.commit('loadDatabase');
      this.$store.dispatch('setList', 'read');
    }
  },
};
</script>
