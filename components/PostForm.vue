<template>
  <form @submit.prevent class="post__add">
    <h1>Создать новый пост</h1>
    <input
        v-model="post.title"
        class="post__add-input"
        placeholder="Название"
    >
    <input
        v-model="post.body"
        class="post__add-input"
        placeholder="Описание"
    >
    <button
        class="post__add-btn"
        @click="createPost"
    >Создать</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost () {
      if (this.post.title === '') return
      this.post.id = Date.now()
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: ''
      }
    }
  }
}
</script>

<style scoped>
.post__add {
  max-width: 40%;
  padding: 25px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.post__add-input {
  padding: 5px;
  border: 2px solid teal;
  border-radius: 6px;
  margin: 5px 0px 5px 0px;
}
</style>

