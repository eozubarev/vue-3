<template>
    <div>
      <strong>Название:</strong> {{ post.title }} <br>
      <strong>Описание:</strong> {{ post.body }}
    </div>
    <div>
      <button class="btn">X</button>
    </div>
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
.btn {
  padding: 2px 6px 2px 6px;
  border: 1px solid teal;
  border-radius: 6px;
}
</style>