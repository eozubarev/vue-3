<template>
  <ul class="posts">
    <li class="post" v-for="post in posts">
      <post-item :post="post" />
    </li>
  </ul>
</template>

<script>

import PostItem from "./PostItem";

export default {
  components: {
    PostItem
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.posts {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.post {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 650px;
  padding: 15px;
  border: 2px solid teal;
  border-radius: 6px;
  margin-top: 10px;
}
</style>