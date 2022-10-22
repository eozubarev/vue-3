<template>
    <li class="post">
      <div>
        <strong>Название:</strong> {{ post.title }} <br>
        <strong>Описание:</strong> {{ post.body }}
      </div>
      <div>
        <!-- с помощью $emit генерируем события, которые передадим по цепочке вверх (родителю)-->
        <my-button @click="$emit('remove', post)">X</my-button>
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
</style>