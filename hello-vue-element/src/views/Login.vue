<template>
    <div>

      <el-form ref="form" :model="form" :rules="rules" label-width="80px" class="login-box">
        <!--标题-->
        <h1 class="login-title">欢迎登录</h1>
        <el-form-item label="账号" prop="username">
          <el-input v-model="form.username"/>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('form')">登录</el-button>
        </el-form-item>
      </el-form>

    </div>
</template>

<script>
    export default {
        name: "Login.vue",
      data() {
        return {
          form: {
            username: '',
            password: ''
          },

          // 表单验证，需要在 el-form-item 元素中增加 prop 属性
          rules: {
            username: [
              { required: true, message: '请输入账号', trigger: 'blur' },
            ],
            password: [
              { required: true, message: '请输入密码', trigger: 'blur' },
            ]
          }

        }
      },
      methods: {
          login: function (formName) {
            // 为表单绑定验证功能
            this.$refs[formName].validate((valid) => {
              if (valid) {
                // 设置用户登录成功
                sessionStorage.setItem('isLogin', 'true');
                this.$store.dispatch("asyncUpdateUser",this.form)
                // 跳转
                // 使用 vue-router 路由到指定页面，该方式称之为编程式导航
                this.$router.push("/main");
              } else {
                this.$message({
                  showClose: true,
                  message: '请输入账号密码',
                  type: 'error',
                  offset: 150
                });
                return false;
              }})


          }
      }
    }
</script>

<style scoped>

  /*设置标题样式*/
  .login-title {
    text-align: center;
  }

  /*设置登录框样式*/
  .login-box {
    /*登录文本向右偏移*/
    text-align: right;
    width: 400px;
    /*边框*/
    border: 1px solid #DCDFE6;
    /*居中*/
    margin: 0 auto;
    /*内边距*/
    padding: 20px 70px 20px 20px;
    /*登录框整体下移*/
    margin-top: 150px;
    /*给边框设置圆角*/
    border-radius: 10px;
    /*阴影效果,有立体的效果*/
    box-shadow: 0 0 20px;
  }
</style>
