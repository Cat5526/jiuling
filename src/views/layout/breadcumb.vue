<!-- //单独面包屑组件    公用-->
<template>
         <div class="breadcumb">
            <el-breadcrumb separator="/" class="xx">
              <!-- 循环遍历 -->
              <el-breadcrumb-item v-for="(v,i) in list" :key="i">
                <router-link :to="v.path">{{v.meta.title}}</router-link>
              </el-breadcrumb-item>
            </el-breadcrumb>
          </div>
</template>

<script>
export default{
  data(){
    return{
      list:[]
    }
  },
  created(){//创建钩子函数
    console.log(this.$route.matched);//matched方法  获取各个路由下的属性值
    this.list = this.$route.matched;//拿到值
  },
  watch:{//路由监听
      $route(to,from){
        this.list = to.matched;
      }
  },
  methods:{

  }

}
</script>

<style>

</style>