<template>
  <div class="home">
    <img
      class="empty-element"
      alt="A worm eating books"
      src="@/assets/books.svg"
    />
  </div>
</template>

<script>

export default {
  name: 'home',
};
</script>

<style scoped>
  .empty-element {
    display: block;
    width: 100px;
    height: 100px;
    margin: 250px auto;
  }
</style>
