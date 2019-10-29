<template>
    <div class="book-container" :style="randomMargin">
      <div class="book" :style="[randomColor, randomWidth]">
        <h1 class="book-title">{{ bookTitle }}</h1>
        <h2 class="book-author">{{ bookAuthor }}</h2>
      </div>
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
      const width = `${Math.floor(Math.random() * (80 - 50 + 1) + 40).toString()}%`;
      return { 'max-width': width };
    },
    randomMargin() {
      const marginLeft = `${Math.floor(Math.random() * (40 - 10 + 1) + 10).toString()}px`;
      const marginRight = `${Math.floor(Math.random() * (40 - 10 + 1) + 10).toString()}px`;
      return { 'margin-left': marginLeft, 'margin-right': marginRight };
    },
  },
};
</script>
<style scoped>
  .book {
    padding: .6em;
    margin: 0 auto;
  }

  .book-title {
    font-size: 40px;
  }

  .book-author {
    font-size: 20px;
  }
</style>
