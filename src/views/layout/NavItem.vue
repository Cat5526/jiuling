<!-- //单独导航组件 -->
<template>
    <div>
        <!-- 判断 没子级 显示 -->
        <el-menu-item :index="bashPath" v-if="!item.child" class="n">
            <i class="el-icon-menu"></i>
            <span slot="title">{{item.name}}</span>
        </el-menu-item>
        <!-- 有子级 判断 有子级 显示-->
        <el-submenu :index="bashPath" v-else="" class="n">
            <template slot="title" class="n">
            <i class="el-icon-location"></i>
            <span>{{item.name}}</span>
            </template>
            <!-- 自调 -->
            <NavItem v-for="child in item.child" :key="child.url" :item="child" :bashPath="child.url" />
        </el-submenu>
    </div>
</template>

<script>
export default{
    name:'NavItem',
  data(){
    return{
        
    }
  },
  props:['item','bashPath'],

  methods:{

  }

}
</script>

<style>

</style>