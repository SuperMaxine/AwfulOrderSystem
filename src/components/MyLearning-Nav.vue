<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    router
  >
    <el-menu-item index="1" route="/MyLearning/Library" class="Library">Library</el-menu-item>
    <el-menu-item index="2" route="/MyLearning/Booking" class="Booking">Booking</el-menu-item>
    <el-menu-item index="3" route="/MyLearning/More" class="More">More</el-menu-item>
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
