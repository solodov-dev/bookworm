/* eslint no-param-reassign: ["error", { "props": false }] */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    booksList: [],
    database: {
      read: [],
      reading: [],
      toRead: [],
    },
    currentList: 'read',
    loading: false,
  },
  getters: {
    booksList(state) {
      return state.booksList;
    },
    loading(state) {
      return state.loading;
    },
    currentList(state) {
      return state.currentList;
    },
  },
  mutations: {
    setCurrentList(state, current) {
      state.currentList = current;
    },
    clearList(state) {
      state.booksList = [];
    },
    pushList(state, book) {
      state.booksList.push(book);
    },
    setList(state, listName) {
      state.booksList = state.database[listName];
    },
    loadDatabase(state) {
      if (localStorage.getItem('database')) {
        try {
          state.database = JSON.parse(localStorage.getItem('database'));
        } catch (e) {
          localStorage.removeItem('database');
        }
      }
    },
    saveDatabase(state) {
      localStorage.setItem('database', JSON.stringify(state.database));
    },
    pushDatabase(state, payload) {
      state.database[payload.status].push(payload.book);
    },
    deleteFromDatabase(state, book) {
      state.database[state.currentList].splice(
        state.database[state.currentList].findIndex(e => e.key === book.key), 1,
      );
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
      commit('setCurrentList', 'search');
    },
    setList({ commit, state }, listName) {
      commit('clearList');
      commit('setCurrentList', listName);
      if (state.database[listName].length > 0) {
        commit('setList', listName);
      }
    },
  },
});
