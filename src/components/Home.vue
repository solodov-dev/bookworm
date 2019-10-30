<template>
  <div class="home">
    <img
      v-if="booksList.length <= 0"
      class="loader"
      alt="A worm eating books"
      src="@/assets/books.svg"
    />
    <v-progress-circular
      v-if="loading"
      class="loader"
      indeterminate
      color="primary"
    ></v-progress-circular>
    <app-book
      v-for="book in booksList"
      :key="book.key"
      :book-title="book.title"
      :book-author="book.author"
    ></app-book>
  </div>
</template>

<script>
import Book from './Book.vue';

export default {
  name: 'home',
  computed: {
    booksList() {
      return this.$store.getters.booksList;
    },
    loading() {
      return this.$store.getters.loading;
    },
  },
  components: {
    appBook: Book,
  },
};
</script>

<style scoped>
.home {
  margin-top: 80px;
  width: 100%;
}

.loader {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 50%;
}
</style>
