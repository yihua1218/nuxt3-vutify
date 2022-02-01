import { defineNuxtPlugin } from '#app'
import { createVuetify } from 'vuetify'
import {
    VApp,
    VNavigationDrawer,
    VAppBar,
    VMain,
    VContainer,
    VFooter,
    VCard,
    VBtn,
    VList,
} from 'vuetify/components'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
      components: {
        VApp,
        VNavigationDrawer,
        VAppBar,
        VMain,
        VContainer,
        VFooter,
        VCard,
        VBtn,
        VList,
      }
  })
  nuxtApp.vueApp.use(vuetify)
})