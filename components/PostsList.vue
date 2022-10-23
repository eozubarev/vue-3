<template>
    <ul v-if="posts.length > 0" class="posts" >
      <transition-group name="list">
        <post-item
            v-for="post in posts"
            :key="post.id"
            :post="post"
            @remove="$emit('remove', post)"
        />
      </transition-group>
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
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(0px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>