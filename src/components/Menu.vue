<template>
  <v-tabs class="menu" centered>
    <v-tab v-for="(tab, index) in tabs" :key="index" @click="setList(tab)">{{ tab }}</v-tab>
  </v-tabs>
</template>
<script>
export default {
  data() {
    return {
      tabs: ['read', 'to-read', 'reading'],
    };
  },
  methods: {
    setList(filter) {
      this.$store.dispatch('setList', filter);
    },
  },
};
</script>
<style scoped>
  .menu {
    margin-top: 70px;
  }
</style>
