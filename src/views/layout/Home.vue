<template>
  <div class="home">
    <el-container class="head">

      <!-- 左侧导航 -->
      <!-- 导航踢出去到Nav.vue  减少代码 -->
        <Nav />

      <!-- 右侧内容 -->
      <el-container>
        <el-header>
          <!-- 退出按钮 -->
        <div class="btn">
           <el-button type="primary" @click="goback()">退出登录</el-button>
        </div>

        <!-- 面包屑 -->
          <breadcumb />
        </el-header>


        <!-- 下面主内容 -->
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
   </el-container>

  </div>
</template>

<script>

// 引入导航文件Nav.vue   还要再components中再次引入
import Nav from './Nav'
import breadcumb from './breadcumb.vue'

export default {
  name: 'Home',
  data(){
    return{

    }
  },
  components:{
    Nav,//再次引入
    breadcumb
  },
  methods:{
    goback(){
        this.$router.push('/login');
        sessionStorage.removeItem("username")
    }
  }
}
</script>

<style>
.home .head{
  background-color:#fff;
  width:100%;
  height:100%;
  position:fixed;
  background-size:100% 100%;
}
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .n{
       background-color: #D3DCE6;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .breadcumb{
    height: 60px;
    float: left;
  }
  .xx{
    line-height: 60px;
  }
  .btn{
    float: right;
    margin-right: 50px;
  }
 
</style>

