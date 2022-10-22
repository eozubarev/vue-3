import { createApp } from 'vue'
import components from '../components/UI/index'
import App from './App.vue'

const app = createApp(App)

// Регистрация всех UI компонентов
// чтобы не импортировать каждый раз их
components.forEach(component => {
    app.component(component.name, component)
})

app.mount('#app')
