<template>
  <el-container>
    <el-header><my-learning-nav/></el-header>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
import MyLearningNav from './MyLearning-Nav.vue';
export default {
  name: "MyLearning",
  components: {
    MyLearningNav,
    // Center,
  },
};
</script>
