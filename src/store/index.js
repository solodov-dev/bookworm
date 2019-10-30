/* eslint no-param-reassign: ["error", { "props": false }] */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    booksSearchList: [],
  },
  getters: {
    booksSearchList(state) {
      return state.booksSearchList;
    },
  },
  mutations: {
    clearSearchList(state) {
      state.booksSearchList = [];
    },
    pushSearchList(state, book) {
      state.booksSearchList.push(book);
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
      commit('clearSearchList');
      booksFiltered.forEach((book) => {
        commit('pushSearchList', {
          title: book.title,
          author: book.author_name,
          key: book.key,
        });
      });
    },
  },
  modules: {},
});
