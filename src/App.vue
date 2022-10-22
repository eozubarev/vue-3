<template>
  <div class="container">
    <div class="posts__header">
      <h2 class="posts__header-title">Страница с постами</h2>
      <my-button @click="showDialog">Создать пост</my-button>
    </div>
    <my-dialog v-model:show="dialogVisible">
      <div>
        <post-form @create="createPost" />
      </div>
    </my-dialog>
      <posts-list
          :posts="posts"
          @remove="removePost"
      />
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
          ],
          dialogVisible: false
        }
    },
   methods: {
      createPost(post) {
        this.posts.push(post)
        this.dialogVisible = false
      },
     removePost(post) {
        this.posts = this.posts.filter(p => p.id !== post.id)
     },
     showDialog() {
        this.dialogVisible = true;
     },
     async fetchUsers() {

     }
   }

}
</script>

<style>
.posts__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px 0 30px;
}
.posts__header-title {
  font-family: Roboto;
  font-size: 28px;
  margin-bottom: 15px;
}
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