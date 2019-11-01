<template>
  <v-app-bar id="bar" absolute color="white">
    <v-img src="@/assets/logo.svg" max-width="180"></v-img>
    <v-spacer></v-spacer>
        <v-btn icon color="blue" @click="showSearch=!showSearch">
          <v-icon>mdi-search-web</v-icon>
        </v-btn>
    <v-scale-transition>
      <v-text-field v-if="showSearch"
                    class="search-bar"
                    v-model="searchTerm"
                    label="Search"
                    solo
                    append-icon="mdi-book-search"
                    @keyup.enter="searchBooks"
                    @click:append="searchBooks"
      ></v-text-field>
    </v-scale-transition>
  </v-app-bar>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      showSearch: false,
      searchTerm: '',
    };
  },
  methods: {
    searchBooks() {
      this.$store.commit('toggleLoading');
      this.showSearch = false;
      this.$store.commit('clearList');
      this.$store.commit('currentList', 'searching');
      axios.get(`http://openlibrary.org/search.json?q=${this.searchTerm.replace(' ', '+').toLowerCase()}`)
        .then((res) => {
          this.$store.dispatch('commitBookSearch', res.data.docs);
          this.$store.commit('toggleLoading');
        }).catch(error => console.log(error));
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
