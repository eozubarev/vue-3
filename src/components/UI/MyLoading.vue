<template>
  <div class="is-loading">
    <div class="lds-dual-ring"></div>
  </div>
</template>

<script>
export default {
  name: 'my-loading'
}
</script>

<style scoped>
.is-loading {
  text-align: center;
  font-size: 21px;
  font-family: Roboto;
  width: 100%;
}
.lds-dual-ring {
  margin-top: 10px;
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid teal;
  border-color: teal transparent teal transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>