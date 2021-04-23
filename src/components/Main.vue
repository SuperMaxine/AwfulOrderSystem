<template>
  <el-container>
    <el-header><NavBar /></el-header>
    <el-main>
      <slot></slot>
    </el-main>
  </el-container>
</template>

<script>
import NavBar from "./NavBar";
// SideBar
// import Center from "./components/Center.vue";
// Center
export default {
  name: "App",
  components: {
    NavBar,
    // Center,
  },
};
</script>
