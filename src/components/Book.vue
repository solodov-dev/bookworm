<template>
  <div class='book-container' :style='randomMargin'>
    <div class='book' :style='randomColor'>
      <div class='book-label'></div>
      <h1 class='book-text book-title' :style='randomFont'>{{ bookTitle }}</h1>
      <h2 class='book-text book-author'>{{ bookAuthor }}</h2>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    colors: ['#A1CDD6', '#F6B768', '#F0650B', '#D9201E'],
    fonts: [
      { 'font-family': "'Jomolhari', serif" },
      { 'font-family': "'Big Shoulders Text', cursive" },
      { 'font-family': "'Merriweather', serif" },
      { 'font-family': "'Indie Flower', cursive" },
      { 'font-family': "'Lobster', cursive" },
      { 'font-family': "'Pacifico', cursive" },
      { 'font-family': "'Dancing Script', cursive" },
      { 'font-family': "'Abril Fatface', cursive" },
      { 'font-family': "'Amatic SC', cursive" },
      { 'font-family': "'Just Another Hand', cursive" },
    ],
    // colors: ['#00489D', '#008080', '#004040', '#800900', '#400200'],
  }),
  props: ['bookTitle', 'bookAuthor'],
  computed: {
    randomColor() {
      const color = this.colors[Math.floor(Math.random() * this.colors.length)];
      return {
        'background-color': color,
      };
    },
    randomMargin() {
      const marginLeft = `${Math.floor(
        Math.random() * (70 - 30 + 1) + 30,
      ).toString()}px`;
      const marginRight = `${Math.floor(
        Math.random() * (70 - 30 + 1) + 30,
      ).toString()}px`;
      return { 'margin-left': marginLeft, 'margin-right': marginRight };
    },
    randomFont() {
      return this.fonts[Math.floor(Math.random() * this.fonts.length)];
    },
  },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Abril+Fatface|Amatic+SC|Big+Shoulders+Text|Dancing+Script|Indie+Flower|Jomolhari|Just+Another+Hand|Lobster|Merriweather|Pacifico|Roboto+Mono&display=swap');
.book {
  position: relative;
  padding: 0.7em;
  margin: 0 auto;
  box-shadow: 0 15px 8px rgba(6, 0, 59, 0.404) inset,
    0 -15px 8px rgba(6, 0, 59, 0.404) inset;
  border-top: 1px solid rgba(0, 0, 0, 0.644);
  border-bottom: 1px solid rgba(0, 0, 0, 0.664);
}

.book-text {
  z-index: 4;
}

.book-label {
  position: absolute;
  top: 0;
  right: 1em;
  width: 2em;
  height: 100%;
  background-color: rgba(210, 252, 252, 0.562);
  z-index: 1;
}

.book:hover > .book-label{
  background-color: rgba(176, 252, 0, 0.322);
}

.book-title {
  font-size: 40px;
  color: #291101;
}

.book-author {
  font-size: 20px;
  font-family: 'Roboto Mono', monospace;
  font-weight: 100;
}

.book-container {
  cursor: pointer;
}

@media screen and (max-width: 800px) {
  .book-title {
    font-size: 20px;
  }

  .book-author {
    font-size: 10px;
  }
}
</style>
