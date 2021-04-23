<template>
  <el-container>
    <el-header><my-home-nav/></el-header>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
import MyHomeNav from './MyHome-Nav.vue';
export default {
  name: "MyHome",
  components: {
    MyHomeNav,
  },
};
</script>
