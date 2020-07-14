<template>
  <div class="header">
    <div class="top-bar">
      <logo/>
      <right-navbar></right-navbar>
    </div>
    <div>
      <search/>
    </div>


  </div>
</template>

<script>
  import Logo from "./headerItem/Logo";
  import RightNavbar from "./headerItem/RightNavbar";
  import Search from "./headerItem/Search";

  export default {
    name: "Header",
    components: {Logo, RightNavbar, Search}
  }
</script>

<style scoped>
  .header{
    font-size: 16px;
  }
  .top-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
  }
</style>
