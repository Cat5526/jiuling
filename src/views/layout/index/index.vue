<template>
<div>
    <el-carousel :interval="4000" type="card" height="150px">
    <el-carousel-item v-for="v in items" :key="v">
      <img :src="v" />
    </el-carousel-item>
  </el-carousel>
  <Chart :type="'bar'"/>
  <Chart :type="'line'"/>
  <Chart :type="'scatter'"/>

</div>
</template>
<script>
import Chart from './chart.vue'

export default{
    data(){
        return{
            items:[
                //引入图片  require
                require('@/assets/img/1.jpg'),
                require('@/assets/img/2.jpg'),
                require('@/assets/img/3.jpg'),
                require('@/assets/img/4.jpg'),
                require('@/assets/img/5.jpg'),
                require('@/assets/img/6.jpg')
            ]
        }
    },
    components:{
        Chart

    }
}
</script>
<style>

</style>