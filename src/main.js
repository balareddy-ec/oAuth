// Below prevents 'regeneratorRuntime is not defined' issue in LWC; Supports e.g. async functions
import 'core-js/stable'
import 'regenerator-runtime/runtime'

//
import {createApp} from 'vue'
import App from './components/App.vue'
import router from './router'
import '@/assets/scss/main.scss'

let salesforceConnector = require("@/connectors/salesforce/salesforceConnectorREST")

const app = createApp(App)

app.use(router)

app.mount('#app')
window.salesforceConnector = new salesforceConnector.default(process.env.VUE_APP_SALESFORCE_API);
