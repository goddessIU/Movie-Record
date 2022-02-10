<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu>
        <div @click="toTotal">
          <el-submenu index="1" :class="{ chooseBgc: isChoosed === 1 }">
            <template slot="title">全部记录</template>
          </el-submenu>
        </div>
        <div @click="toSetting">
          <el-submenu index="2" :class="{ chooseBgc: isChoosed === 2 }">
            <template slot="title"> 个人信息 </template>
          </el-submenu>
        </div>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <span>{{name}}您好，欢迎使用</span>
        <el-button>退出登录</el-button>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import storage from "../utils/localStorage.js";
import sessionStorage from '../utils/sessionStorage.js';
export default {
  data() {
    let user = storage.getItem(sessionStorage.getItem());
    return {
      user,
      isChoosed: 1,
    };
  },
  computed: {
    name() {
      let id = sessionStorage.getItem();
      let name = storage.getItem(id).name;
      return name || id;
    }
  },
  watch: {
    $route() {
      if (this.$route.path.includes("total")) {
        this.isChoosed = 1;
      } else if (this.$route.path.includes("setting")) {
        this.isChoosed = 2;
      }
    },
  },
  methods: {
    toTotal() {
      this.$router.push({ name: "total" });
    },
    toSetting() {
      this.$router.push({ name: "setting" });
    },
  },
};
</script>

<style lang="less">
.chooseBgc {
  background-color: skyblue;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
.el-submenu.is-opened > .el-submenu__title .el-submenu__icon-arrow {
  display: none;
}

.el-submenu > .el-submenu__title .el-submenu__icon-arrow {
  display: none;
}
</style>