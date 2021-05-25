<template>
  <el-container>
    <el-aside width="200px">
      <SideBar />
    </el-aside>

    <router-view />
  </el-container>
</template>

<script>
import SideBar from "./components/SideBar.vue";
import axios from "axios";

// SideBar
export default {
  name: "App",
  components: {
    SideBar,
  },

  methods: {
    clearViews() {
      axios
        .post("http://127.0.0.1:5000/exit")
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          // 请求失败处理
          console.log(error);
        });
    },
  },

  mounted() {
    window.onbeforeunload = () => {
      this.clearViews();
      return "tips";
    };
    this.$nextTick(function () {
      // 仅在渲染整个视图之后运行的代码
      axios
        .post("http://127.0.0.1:5000/start")
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          // 请求失败处理
          console.log(error);
        });

      document.getElementById("app").onclick = function (e) {
        // var e = e ? e : window.event;
        var tar = e.srcElement || e.target;
        var tarClass = tar.className;
        // var tarClass = $(tar).attr(‘class’);
        var tarId = tar.id;
        console.log ( 'screen: ' + event.screenX + ',' + event.screenY );
        // var tarId = $(tar).attr(‘id’);
        if (tarClass == "el-radio__original") {
          // console.log("ffffffffffffffffffffffuck");
        } else {
          console.log("class:", tarClass);
          console.log("id:", tarId);
          console.log("cao");
          var timestamp1 = Date.parse(new Date());
          axios
            .post("http://127.0.0.1:5000/click", {
              Class: tarClass,
              Id: tarId,
              timestamp: timestamp1,
            })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              // 请求失败处理
              console.log(error);
            });
        }
      };
    });

    // window.addEventListener('beforeunload', this.leaveConfirm)
  },

  // beforeUnmount(){
  //   axios
  //   .post('http://127.0.0.1:5000/exit')
  //   .then(function (response) {
  //       console.log(response);
  //     })
  //   .catch(function (error) { // 请求失败处理
  //       console.log(error);
  //   });
  // },

  // unmounted() { /* 选项 API */

  // }
};
</script>

