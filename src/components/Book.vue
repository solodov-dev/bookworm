<template>
    <svg width="398" height="78" viewBox="0 0 398 78" fill="none" xmlns="http://www.w3.org/2000/svg">
      <title>A book</title>
      <g filter="url(#filter0_i)">
        <rect width="398" height="78" fill="#BFFF38" />
      </g>
      <rect x="318" width="8" height="78" fill="#8DBE26" fill-opacity="0.42" />
      <rect x="161" width="8" height="78" fill="#8DBE26" fill-opacity="0.42" />
      <rect x="21" width="8" height="78" fill="#8DBE26" fill-opacity="0.42" />
      <rect x="342" width="47" height="78" fill="#FFC5C5" fill-opacity="0.3" />
      <text x="10" y="40" class="book-title">{{bookTitle}}</text>
      <text x="10" y="70" class="book-author">{{bookAuthor}}</text>
      <defs>
        <filter
          id="filter0_i"
          x="0"
          y="-20"
          width="398"
          height="98"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-20" />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
      </defs>
    </svg>
</template>
<script>
export default {
  props: ['bookTitle', 'bookAuthor'],
};
</script>
<style scoped>
  .book-title {
    font-size: 40px;
    fill: #000000;
  }

  .book-author {
    font-size: 20px;
    fill: #000000;
  }
</style>
