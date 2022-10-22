<template>
  <div class="container">
    <div>
      <post-form @create="createPost" />
    </div>
      <posts-list :posts="posts" />
  </div>
</template>

<script>
import PostsList from "../components/PostsList";
import PostForm from "../components/PostForm";

export default {
  components: {
    PostForm,
    PostsList
  },
    data() {
        return {
          posts: [
            {id: 1, title: 'пост о JavaScript', body: 'JavaScript универсальный язык программирования'},
            {id: 2, title: 'пост о Go', body: 'Go Быстрый язык программирования'},
            {id: 3, title: 'пост о Phyton', body: 'Phyton медленный язык программирования'},
          ]
        }
    },
   methods: {
      createPost(post) {
        this.posts.push(post)
      },
   }

}
</script>

<style>
.container {
  padding: 0 20px;
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}
</style>