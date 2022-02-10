<template>
  <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose"
  >
    <span>登录成功</span>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="handleClose">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>

export default {
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    handleClose() {
      this.dialogVisible = false;
      this.$router.push({ name: "user" });
    },
    openDialog() {
      this.dialogVisible = true;
    },
  },
};
</script>

<style>
</style>