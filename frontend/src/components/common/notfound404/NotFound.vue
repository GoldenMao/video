<template>
  <div class="not-found">
    <h1>哦噢,您访问的页面不存在!</h1>
    <img src="~./error_404.png" alt="404"/>
  </div>
</template>

<script>
  export default {
    name: "NotFound"
  }
</script>

<style scoped>
  .not-found {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    margin-top: 100px;
  }


</style>
