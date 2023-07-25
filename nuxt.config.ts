// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'workGPT'
        }
    },
    vite: {
        css: {
            preprocessorOptions: {
                less: {
                    additionalData: '@import "~/assets/styles/var.less";'
                }
            }
        }
    },
    devtools: {
        enabled: true
    },
    css: ['normalize.css/normalize.css']
})
