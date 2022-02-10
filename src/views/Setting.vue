<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="用户名">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="性别">
      <el-select v-model="form.sex" placeholder="请选择活动区域">
        <el-option selected="selected" label="男" value="male"></el-option>
        <el-option label="女" value="female"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">修改信息</el-button>
    </el-form-item>
  </el-form>
</template>


<script>
import storage from '../utils/localStorage';
import sessionStorage from '../utils/sessionStorage.js';
export default {
  data() {
    return {
      form: {
        name: "",
        sex: "male",
      },
    };
  },
  methods: {
    changeInformation({name, sex}) {
      storage.addItem(sessionStorage.getItem(), {name, sex})
    },
    onSubmit() {
      this.changeInformation(this.form);
      this.$router.push({name: 'total'})
    },
  },
};
</script>