<template>
  <v-tabs class="menu" centered>
    <v-tab
      v-for="(tab, index) in tabs"
      :key="index"
      @click="setList(tab.value)"
      >{{ tab.name }}</v-tab>
  </v-tabs>
</template>
<script>
export default {
  data() {
    return {
      tabs: [
        { name: 'read', value: 'read' },
        { name: 'to read', value: 'toRead' },
        { name: 'reading', value: 'reading' },
      ],
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
