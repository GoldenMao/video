<template>
  <div class="detial-box">
    <div><slot name="title"></slot></div>
    <div class="item_list">
      <slot name="item_list"></slot>
    </div>
  </div>
</template>

<script>

  export default {
    name: "DetailBox"
  }
</script>

<style scoped>
  .item_list {
    display: flex;
    flex-wrap: wrap;
  }
  h2 {margin-top: 15px;}
</style>
