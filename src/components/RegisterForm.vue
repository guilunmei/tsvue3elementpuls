<template>
  <div class="registerForm">
    <el-card shadow="always">
      <!-- 登录表单 -->
      <el-form
        :model="registerUser"
        ref="registerFormRef"
        :rules="registerRules"
        label-width="110px"
        class="registerElForm"
      >
        <el-form-item prop="name" label="用户名">
          <el-input
            v-model="registerUser.userName"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="email" label="邮箱">
          <el-input
            v-model="registerUser.email"
            placeholder="请输入邮箱地址"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <el-input
            type="password"
            v-model="registerUser.password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password2" label="确认密码">
          <el-input
            type="password"
            v-model="registerUser.password2"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="选择身份">
          <el-select v-model="registerUser.role" placeholder="请选择身份">
            <el-option label="管理员" value="admin"></el-option>
            <el-option label="用户" value="user"></el-option>
            <el-option label="游客" value="visitor"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button
            class="registerBtn"
            type="primary"
            @click="registerBtn('registerFormRef')"
            >注册</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script lang='ts'>
import { ref, getCurrentInstance } from 'vue'
import { registerUser, registerRules } from '@/utils/registerValidator'
export default {
  name: 'registerForm',
  setup() {
    // @ts-ignore
    const { ctx } = getCurrentInstance()    
    console.log(ctx)
    const registerBtn = ref((formName: String) => {
      ctx.$refs[formName].validate((valid: boolean) => {
        if (valid) {
          alert('submit')
        } else {
          alert('error')
          return false
        }
      })
    })
    
    return { registerUser, registerRules, registerBtn }
  }
}
</script>
<style lang="scss" scoped>
@import '@/common/register.scss';
</style>