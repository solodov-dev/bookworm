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
      commit('clearSearchList');
      books.forEach((book) => {
        if (book.author_name) {
          commit('pushSearchList', {
            title: book.title,
            author: book.author_name.toString(),
            key: book.key,
          });
        }
      });
    },
  },
  modules: {},
});
