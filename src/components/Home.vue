<template>
  <div class="home">
    <img
      v-if="!booksSearchList"
      class="empty-element"
      alt="A worm eating books"
      src="@/assets/books.svg"
    />
    <app-book
      v-for="book in booksSearchList"
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
    booksSearchList() {
      return this.$store.getters.booksSearchList;
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
  display: flex;
  flex-direction: column;
  align-content: center;
}

.empty-element {
  display: block;
  width: 100px;
  height: 100px;
  margin: 250px auto;
}
</style>
