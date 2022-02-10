<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
  cursor: pointer;
}

#app {
  height: 100vh;
  width: 100%;
  background-image: url(./assets/images/bg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
  box-sizing: border-box;
  padding-top: 10%;
  min-width: 800px;
  div {
    a {
      color: #fff;
      font-size: 20px;
    }
    .bgc {
      color: rgb(98, 167, 194);
      border-top: 3px solid skyblue;
    }
  }
}
</style>
