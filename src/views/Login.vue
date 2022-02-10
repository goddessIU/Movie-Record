<template>
  <el-row>
    <el-col :push="8" :span="8" class="midHeight">
      <el-form
        :model="numberValidateForm"
        ref="numberValidateForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item
          label="账号"
          prop="account"
          :rules="[
            { required: true },
            { type: 'number', message: '账号必须为数字值' },
          ]"
        >
          <el-input
            type="account"
            v-model.number="numberValidateForm.account"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
          :rules="[{ required: true }]"
        >
          <el-input
            type="password"
            v-model.number="numberValidateForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('numberValidateForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('numberValidateForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <Dialog ref="dialog"/>
  </el-row>
</template>

<script>
import Dialog from '../components/Dialog.vue';
import storage from '../utils/storage';
export default {
  components: {
      Dialog
  },
  data() {
    return {
      numberValidateForm: {
        account: "",
        password: "",
      },
    };
  },
  mounted() {
    this.$emit('change-choose');
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        let res = storage.getItem(this.numberValidateForm.account);
        if (valid && res && res.password === JSON.stringify(this.numberValidateForm.password)) {
          this.$refs.dialog.openDialog();
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
};
</script>

<style>
input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
</style>