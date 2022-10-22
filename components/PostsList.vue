<template>
    <ul v-if="posts.length > 0" class="posts" >
        <post-item
            v-for="post in posts"
            :key="post.id"
            :post="post"
            @remove="$emit('remove', post)"
        />
    </ul>
  <h2 class="title-empty" v-else>Список постов пуст</h2>
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
.title-empty {
  text-align: center;
}
.posts {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>