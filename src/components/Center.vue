<template>
  <img src="../assets/logo.png" />
  <div>
    <p>
      If Element Plus is successfully added to this project, you'll see an
      <code v-text="'<el-button>'"></code>
      below
    </p>
    <el-button type="primary">el-button</el-button>
  </div>
  <hello-world msg="hello Vue" />
</template>

<script>
import HelloWorld from "./HelloWorld.vue";

export default {
  name: "Center",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#center {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
