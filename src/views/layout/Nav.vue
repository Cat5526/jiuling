<!-- //单独导航组件 -->
<template>
    <el-aside width="200px">
        <!-- :default-active="$router.path" exact  页面刷新，依旧匹配到这个地址 -->
          <el-menu
            :default-active="$route.path" exact
            class="el-menu-vertical-demo" router><!-- 实现跳转，先引入路由 -->
  
            <NavItem v-for="v in items" :key="v.url" :item="v" :bashPath="v.url" />

          </el-menu>
    </el-aside>
</template>

<script>
import NavItem from "./NavItem.vue";
export default{
    data() {
        return {
            items: [
                {
                    name: "首页",
                    url: "/index"
                },
                {
                    name: "数据统计",
                    url: "/stats"
                },
                {
                    name: "信息管理",
                    url: "/message",
                    child: [
                        {
                            name: "列表展示",
                            url: "/message/list"
                        }
                    ]
                },
                {
                    name: "用户管理",
                    url: "/user",
                    child: [
                        {
                            name: "用户统计",
                            url: "/user/list"
                        }
                    ]
                }
            ]
        };
    },
    methods: {},
    components: { NavItem }
}
</script>

<style>

</style>