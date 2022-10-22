<template>
  <form @submit.prevent class="post__add">
    <h1 class="title">Создать новый пост</h1>
    <span v-show="emptyInput" class="error">Пост не может быть пустым</span>
    <my-input
        v-model="post.title"
        class="post__add-input"
        placeholder="Название"
    />
    <my-input
        v-model="post.body"
        class="post__add-input"
        placeholder="Описание"
    />
    <my-button class="btn" @click="createPost">Создать</my-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      emptyInput: false,
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost () {

      if (this.post.title === '') return this.emptyInput = true

        this.emptyInput = false;
        this.post.id = Date.now()
        this.$emit('create', this.post)
        this.post = {
          title: '',
          body: ''
        }
    },

  }
}
</script>

<style scoped>
.error {
  color: #c62424;
  font-size: 14px;
  font-family: roboto;
  margin-bottom: 10px;
  margin-top: -8px;
}
.title {
  font-family: roboto;
  font-size: 20px;
  margin-bottom: 15px;
}
.btn {
  margin-top: 15px;
}
.post__add {
  max-width: 100%;
  padding: 25px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.post__add-input {
  margin: 5px 0px 5px 0px;
}
</style>

