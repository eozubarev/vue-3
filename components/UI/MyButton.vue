<template>
  <button class="btn-teal">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>
  .btn-teal {
    padding: 7px 13px 7px 13px;
    border: 1px solid teal;
    border-radius: 6px;
    background-color: white;
    cursor: pointer;
    transition: all 0.1s linear;
  }
  .btn-teal:hover {
    background-color: teal;
    color: white;
  }
</style>