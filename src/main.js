import { createApp } from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element'
import router from './router'
// import axios from 'axios';

const app = createApp(App).use(router)
installElementPlus(app)
app.mount('#app')

// app.config.globalProperties.$axios=axios;
// app.config.globalProperties.leaveConfirm = function(){
//     axios
//     .post('http://127.0.0.1:5000/exit')
//     .then(function (response) {
//         console.log(response);
//       })
//     .catch(function (error) { // 请求失败处理
//         console.log(error);
//     });
//   };

// app.config.globalProperties.globalClick = function (callback) {
//     document.getElementById('app').onclick = function (e) {
//         // var e = e ? e : window.event;
//         var tar = e.srcElement || e.target;
//         var tarClass = tar.className;
//         // var tarClass = $(tar).attr(‘class’);
//         var tarId = tar.id;
//         // var tarId = $(tar).attr(‘id’);
//         console.log(tarClass);
//         console.log(tarId);
//         console.log("cao");
//         this.$axios
//             .post('http://127.0.0.1:5000/click',{
//                 Class : tarClass,    
//                 Id : tarId
//             })
//             .then(function (response) {
//                 console.log(response);
//               })
//             .catch(function (error) { // 请求失败处理
//                 console.log(error);
//             });
//         callback();
//     };
// };