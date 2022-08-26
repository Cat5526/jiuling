<template>
  <div class="login">
      <p class="login-title">中心物业后台管理系统</p>
        <div class="login-content">
          <div class="login-main">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="name">
                  <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                  <el-input type="password" v-model="ruleForm.password"></el-input>
                </el-form-item>

                <el-form-item class="dl">
                  <!-- @click点击完后触发submitForm方法登录 -->
                  <el-button type="primary" @click="submitForm()">登录</el-button>
                </el-form-item>
            </el-form>
          </div>
      </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        ruleForm:{
          name:'admin',
          password:'123456'
        },
        rules:{//校验
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
          ]
        }
      }
    },
    methods:{
      submitForm(){
        let {name,password} = this.ruleForm;//校验用户名和密码 前端写死的  后面靠后端灵活
        if(name == 'admin' && password == '123456'){
          //缓存 把输入的用户名存到username中  这样刷新页面的时候就能判断你是登陆进来的还是没登录进来的  
          sessionStorage.setItem('username',name);
          //跳转到首页home
          this.$router.push('./home');
        }else{
          alert('用户名或密码错误')
        }
      }
    }
  }
</script>

<style scoped>
  .login-title{
    font-size: 40px;
    text-align: left;
    margin-left: 10px;
    color: white;
  }
  .login-content{
    width: 100%;
    height: 250px;
    background-color: aliceblue;
    margin-top: 10px;
    position: relative;
  }
  .login{
    width: 100%;
    height: 300px;
    margin-top: 130px;
  }
  .login-main{
    width: 400px;
    height: 200px;
    position: absolute;
    top:50px;
    left:540px;
  }
  .dl{
    position: absolute;
    top:130px;
    left:100px;
  }
</style>
