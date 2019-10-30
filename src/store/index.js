/* eslint no-param-reassign: ["error", { "props": false }] */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    booksList: [],
    database: [],
    loading: false,
  },
  getters: {
    booksList(state) {
      return state.booksList;
    },
    loading(state) {
      return state.loading;
    },
  },
  mutations: {
    clearList(state) {
      state.booksList = [];
    },
    pushList(state, book) {
      state.booksList.push(book);
    },
    pushDatabase(state, book) {
      state.database.push(book);
    },
    setList(state, filter) {
      state.booksList = state.database.filter(el => el.status === filter);
    },
    toggleLoading(state) {
      state.loading = !state.loading;
    },
  },
  actions: {
    commitBookSearch({ commit }, books) {
      // Replase undefined author names
      books.forEach((el) => {
        if (!el.author_name) {
          el.author_name = 'Author unknown';
        } else {
          el.author_name = el.author_name.toString();
        }
      });
      // Filter out books with the same name & author
      const booksFiltered = books.filter((el, index) => books.findIndex(
        t => t.title.toLowerCase() === el.title.toLowerCase()
        && t.author_name.toLowerCase().replace(' ', '') === el.author_name.toLowerCase().replace(' ', ''),
      ) === index);
      // Commit books to the list
      booksFiltered.forEach((book) => {
        commit('pushList', {
          title: book.title,
          author: book.author_name,
          key: book.key,
        });
      });
    },
    setList({ commit, state }, filter) {
      if (state.database) {
        commit('clearList');
        commit('setList', filter);
      }
    },
  },
});
