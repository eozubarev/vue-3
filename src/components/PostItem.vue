<template>
    <li class="post">
      <div>
        <p class="post__info"><strong>Название:</strong> {{ post.title }}</p>
        <p class="post__info"><strong>Описание:</strong> {{ post.body }}</p>
      </div>
      <div class="btns">
        <!-- с помощью $emit генерируем события, которые передадим по цепочке вверх (родителю)-->
        <my-button class="btn" @click="$router.push(`/posts/${post.id}`)">Открыть</my-button>
        <my-button class="btn" @click="$emit('remove', post)">X</my-button>
      </div>
    </li>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
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
  .post__info {
    margin-bottom: 5px;
  }
  .btns {
    display: flex;
  }
  .btn {
    margin: 0px 5px 0px 5px;
  }
</style>