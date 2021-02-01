<template>
  <div class="loginForm">
    <el-card shadow="always">
      <!-- 登录表单 -->
      <el-form
        :model="loginFormData"
        ref="loginFormRef"
        :rules="loginFormRules"
        label-width="55px"
        class="loginElForm"
      >
        <el-form-item prop="email" label="邮箱">
          <el-input v-model="loginFormData.email"></el-input>
        </el-form-item>
        <el-form-item prop="passWord" label="密码">
          <el-input type="password" v-model="loginFormData.passWord"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="loginBtn" type="primary">登录</el-button>
        </el-form-item>
      </el-form>
      <!-- 右下角 连接 -->
      <div class="loginMoreLink">
        <el-button type="text" class="button">忘记密码？</el-button>
        <el-button type="text" class="button">立即找回</el-button>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'LoginForm',
  setup () {
    return {
      loginFormData: {
        email: '',
        passWord: ''
      },
      loginFormRules: {
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          {
            type: 'email',
            message: '请输入正确的邮箱地址',
            trigger: ['blur', 'change']
          }
        ],
        passWord: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.loginForm {
  position: absolute;
  right: 3%;
  top: 30%;
  z-index: 100;
  width: 700px;
  transition: all 1s ease-in-out;
  .loginElForm {
    .loginBtn {
      width: 100%;
    }
  }
  .loginMoreLink {
    text-align: right;
  }
  .el-card {
    padding-top: 3rem;
  }
}
// 表单过渡样式
.sign-up-mode .loginForm{
    transform: translateX(900px);
}
</style>