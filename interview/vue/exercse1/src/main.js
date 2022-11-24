import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
console.log("====App====");
console.log(App);
let app = createApp(App)
console.log("====vue实例====");
console.log(app);
app.mount('#app')
