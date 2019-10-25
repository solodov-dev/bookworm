<template>
  <v-app-bar id="bar" absolute color="white">
    <v-img src="@/assets/logo.svg" max-width="180"></v-img>
    <v-spacer></v-spacer>
        <v-btn icon color="blue" @click="showSearch=!showSearch">
          <v-icon>mdi-search-web</v-icon>
        </v-btn>
    <v-text-field v-if="showSearch"
                  class="search-bar"
                  v-model="searchTerm"
                  label="Search"
                  solo
                  append-icon="mdi-book-search"
                  @keyup.enter="searchBooks"
                  @click:append="searchBooks"
    ></v-text-field>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      showSearch: false,
      searchTerm: '',
    };
  },
  methods: {
    searchBooks() {
      this.showSearch = false;
      console.log(this.searchTerm);
    },
  },
};
</script>

<style scoped>
  .search-bar {
    z-index: 3;
    position: absolute;
    top: 80px;
    right: 20%;
    left: 20%;
  }

  @media screen and (max-width: 500px) {
    .search-bar {
      right: 5%;
      left: 5%;
    }
  }
</style>
