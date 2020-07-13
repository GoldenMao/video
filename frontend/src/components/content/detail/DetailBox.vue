<template>
  <div class="detial-box">
    <h2><slot name="title"></slot></h2>
    <h1></h1>

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
</style>
