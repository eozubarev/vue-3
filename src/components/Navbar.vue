<template>
  <div class="navbar">
    <div @click="$router.push('/')" class="navbar__title">Vue 3 Application</div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/about')" class="navbar__btn">О сайте</my-button>
      <my-button @click="$router.push('/posts')" class="navbar__btn">Список постов</my-button>
      <my-button @click="$router.push('/store')" class="navbar__btn">Store</my-button>
      <my-button @click="$router.push('/composition-api')" class="navbar__btn">Composition API</my-button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .navbar__btn {
    width: 135px;
    margin: 0px 5px 0px 5px;
  }
  .navbar__btn:hover {
    color: black;
    background-color: #d6e7e7;
  }
  .navbar {
    margin-bottom: 20px;
    padding: 10px;
    height: 50px;
    background-color: teal;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .navbar__title {
    color: white;
    font-family: Roboto;
    cursor: pointer;
  }
  .navbar__title:hover {
    text-decoration: underline;
  }
</style>