<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    router
  >
    <el-menu-item index="1" route="/MyHome/News">News</el-menu-item>
    <el-menu-item index="2" route="/MyHome/Agenda">Agenda</el-menu-item>
    <el-menu-item index="3" route="/MyHome/More">More</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "MyHome-Nav",
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
