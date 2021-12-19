import "element-plus/dist/index.css"
import "./assets/css/github-markdown.less"
import "./assets/css/style.less"
import { createApp } from "vue"
import ElementPlus from "element-plus"
import App from "./App.vue"
import router from "./route"


const app = createApp(App)
app.config.warnHandler = () => null

app.use(router)
app.use(ElementPlus)

app.mount("#app")
