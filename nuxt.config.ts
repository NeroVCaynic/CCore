// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-headlessui',
        '@hypernym/nuxt-anime',
    ],
    anime: {
        provide: true
    },
    headlessui: {
        prefix: 'Headless'
    },
    app: {
        head: {
            title: 'Calisthenics-Core',
            meta: [
                {name: "description", content: "Unlock your true potential with calisthenics. Build strength, flexibility, and endurance through bodyweight movements for a transformative fitness journey."}
            ],
            link: [
                {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
            ]
        }
    }
})
