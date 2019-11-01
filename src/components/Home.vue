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
      @click.native="toggleMenu($event, book)"
    ></app-book>
    <v-menu
      v-model="showMenu"
      :position-x="x"
      :position-y="y"
      absolute
    >
      <v-list>
        <v-list-item
          v-for="(item, index) in menuItems"
          :key="index"
          @click="processBook(item.value)"
        >
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import Book from './Book.vue';

export default {
  name: 'home',
  data() {
    return {
      showMenu: false,
      x: 0,
      y: 0,
      selectedBook: {},
    };
  },
  computed: {
    booksList() {
      return this.$store.getters.booksList;
    },
    loading() {
      return this.$store.getters.loading;
    },
    menuItems() {
      // Full menu
      const menu = [
        { text: 'Read', value: 'read' },
        { text: 'Reading', value: 'reading' },
        { text: 'To Read', value: 'toRead' },
        { text: 'Delete', value: 'search' },
      ];
      // Return selected menu items for current shelf
      return menu.filter(e => e.value !== this.$store.getters.currentList);
    },
  },
  methods: {
    toggleMenu(e, book) { // Show menu on the selected book at mouse coordinates
      this.showMenu = !this.showMenu;
      this.x = e.clientX;
      this.y = e.clientY;
      this.selectedBook = book;
    },
    processBook(status) {
      // To add the book or to move it to another shelf
      // FIXME If status !== 'delete'.
      if (status !== 'search') {
        this.$store.dispatch({
          type: 'moveBook',
          book: this.selectedBook,
          status,
        });
      // To delete the book
      } else {
        this.$store.commit('deleteFromDatabase', this.selectedBook);
      }
      this.$store.commit('saveDatabase');
    },
  },
  components: {
    appBook: Book,
  },
};
</script>

<style scoped>
.home {
  margin: 80px auto 20px;
  width: 60%;
}

.loader {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 50%;
}

@media screen and (max-width: 600px){
  .home {
    width: 100%;
  }
}

@media screen and (max-width: 800px){
  .home {
    width: 80%;
  }
}
</style>
