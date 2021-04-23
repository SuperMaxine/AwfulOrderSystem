<template>
  <img src="../assets/北京工业大学logo字.png" class="initImg fillImg" />
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    router
  >
    <el-menu-item index="1" route="/1/news">
      <i class="el-icon-menu"></i>
      <template #title>My Home</template>
    </el-menu-item>
    <el-menu-item index="2" route="/2/library">
      <i class="el-icon-setting"></i>
      <template #title>My Learning</template>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "SideBar",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
.initImg {
  width: 100%;
}
.fillImg {
  object-fit: contain;
}
</style>