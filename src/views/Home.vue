<template>
  <el-row class="total">
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
</style>