<template>
  <div>
    <h2>首页</h2>
    <div>
      首页内容1:
      <div v-for="item in users" :key="item.id">
        <ul>
          <li v-for="dict in item" :key="dict.id">{{dict}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {getHomeMultidata} from "network/home/homeDatas";

  export default {
    name: "Home",
    data() {
      return {
        users: []
      }
    },
    created() {
      getHomeMultidata().then(
        res => {
          this.users = res
        }
      ).catch(
        err => {
          console.log(err)
        }
      );
    }
  }
</script>

<style scoped>

</style>
