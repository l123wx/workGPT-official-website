import svgIcon from '~/components/SvgIcon.vue'
// eslint-disable-next-line import/no-unresolved
import 'virtual:svg-icons-register'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.component('svg-icon', svgIcon)
})
