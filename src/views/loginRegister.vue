<template>
  <div class="container" :class="{ 'sign-up-mode': signUpMode }">
    <!-- form表单容器 -->
    <div class="forms-container">
      <div class="signin-signup">
        <LoginForm/>
         <RegisterForm
        />
      </div>
    </div>
    <!-- 左右切换动画 -->
    <div class="panels-container">
      <div class="panel left-panel">
        <div class="content">
          <h3>学习是为了有更多的选择,让生活变的更美好!</h3>
          <p>何以解忧,唯有米修</p>
          <button round @click="signUpMode = !signUpMode" class="btn transparent">注册</button>
        </div>
        <img src="@/assets/img/log.svg" class="image" alt="" />
      </div>
      <div class="panel right-panel">
        <div class="content">
          <h3>以人为镜,可明得失, 以代码为镜,可通逻辑!</h3>
          <p>学习编程,让你的生活更有趣</p>
          <button @click="signUpMode = !signUpMode" class="btn transparent">
            登录
          </button>
        </div>
        <img src="@/assets/img/register.svg" class="image" alt="" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, getCurrentInstance } from "vue";
// import { loginUser, rules } from "@/utils/loginValidators";
// import { registerUser, registerRules } from "@/utils/registerValidators";
import LoginForm from "@/components/LoginForm.vue";
// import RegisterForm from "@/components/RegisterForm.vue";
export default {
  name: "LoginRegister",
  components: { LoginForm },
  setup() {
    // @ts-ignore
    const { ctx } = getCurrentInstance();
    const signUpMode = ref<boolean>(false);

    return {
      signUpMode,
    //   loginUser,
    //   rules,
    //   registerUser,
    //   registerRules,
    };
  },
};
</script>
<!--<style lang='scss' scoped>
    @import '@/common/loginRegister.scss';
</style>-->
<style lang='scss'>
    @import '@/common/loginRegister.scss';
</style>