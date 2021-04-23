<template>
  <el-container>
    <el-aside width="200px">
      <SideBar />
    </el-aside>

      <router-view/>
  </el-container>
</template>

<script>
import SideBar from "./components/SideBar.vue";
// SideBar
export default {
  name: "App",
  components: {
    SideBar,
  },
};
</script>

