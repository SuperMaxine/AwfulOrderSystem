<template>
  <el-container>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <NavBar />
    </el-aside>

    <el-container>
      <el-header><SideBar /></el-header>
      <el-main><Center /></el-main>
    </el-container>
  </el-container>
</template>

<script>
import NavBar from "./components/NavBar";
// NavBar
import SideBar from "./components/SideBar.vue";
// SideBar
import Center from "./components/Center.vue";
// Center
export default {
  name: "App",
  components: {
    NavBar,
    SideBar,
    Center,
  },
};
</script>

