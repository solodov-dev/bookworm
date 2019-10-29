<template>
    <div class="book" :style="randomColor">
      <h1 class="book-title">{{ bookTitle }}</h1>
      <h2 class="book-author">{{ bookAuthor }}</h2>
    </div>
</template>
<script>
export default {
  data: () => ({
    colors: ['#EB683E', '#FFA338', '#AE46A4', '#90D400'],
  }),
  props: ['bookTitle', 'bookAuthor'],
  computed: {
    randomColor() {
      const color = this.colors[Math.floor(Math.random() * this.colors.length)];
      return {
        'background-color': color,
      };
    },
    randomWidth() {
      return { width: Math.floor(Math.random() * (100 - 40 + 1) + 40) };
    },
  },
};
</script>
<style scoped>
  .book {
    padding: .6em;
  }

  .book-title {
    font-size: 40px;
  }

  .book-author {
    font-size: 20px;
  }
</style>
