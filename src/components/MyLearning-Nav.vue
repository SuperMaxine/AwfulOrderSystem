<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    router
  >
    <el-menu-item index="1" route="/2/library">Library</el-menu-item>
    <el-menu-item index="2" route="/2/booking">Booking</el-menu-item>
    <el-menu-item index="3" route="/2/more">More</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "MyLearning-Nav-Nav",
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
