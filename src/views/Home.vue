<template>
  <el-row class="total" id="total">
    <el-row>
      <el-col :span="4" :offset="10">
        <a @click="toLogin" :class="{ bgc: choose === 0 }" >登录</a>
      </el-col>
      <el-col :span="4">
        <a @click="toRegister" :class="{ bgc: choose === 1 }" >注册</a>
      </el-col>
    </el-row>
    <router-view @change-choose="changeChoose" @change-choose2="changeChoose2" ></router-view>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      choose: 0,
    };
  },
  methods: {
    toLogin() {
      this.choose = 0;
      this.$router.push({ name: "login" });
    },
    toRegister() {
      this.choose = 1;
      this.$router.push({ name: "register" });
    },
    changeChoose() {
      this.choose = 0;
    },
    changeChoose2() {
      this.choose = 1;
    }
  },
};
</script>

<style lang="less" scoped>
a {
  color: #fff;
  font-size: 20px;
  text-decoration: none;
  cursor: pointer;
}
.bgc {
  color: rgb(98, 167, 194);
  border-top: 3px solid skyblue;
}
#total {
  height: 100vh;
  width: 100%;
  background-image: url(../assets/images/bg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
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