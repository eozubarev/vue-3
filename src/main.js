import { createApp } from 'vue'
import components from './components/UI/index'
import App from './App.vue'
import router from "./router/router";
import directives from "@/directives"
import store from "@/store";

const app = createApp(App)

// Регистрация всех UI компонентов
// чтобы не импортировать каждый раз их
components.forEach(component => {
    app.component(component.name, component)
})

directives.forEach(directive => {
    app.directive(directive.name, directive)
})

app
    .use(store)
    .use(router)
    .mount('#app')
