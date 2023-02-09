import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faSquarePlus, faCircleCheck, faTrashCan } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faSquarePlus)
library.add(faCircleCheck)
library.add(faTrashCan)

createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
