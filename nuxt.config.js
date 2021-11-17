export default {
    head: {
        title: 'Project',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    css: [],

    router: {
        middleware: ['auth'],
    },

    plugins: [{ src: '~/plugins/axios.js' }],

    components: true,

    buildModules: ['@nuxtjs/tailwindcss'],

    modules: ['@nuxtjs/axios', '@nuxtjs/auth-next', '@nuxtjs/toast'],

    axios: {
        baseURL: process.env.API_URL,
    },

    auth: {
        localStorage: false,

        cookie: {
            options: {
                maxAge: 31536000, // 1 year
                secure: process.env.COOKIE_SECURE,
            },
        },

        redirect: {
            login: '/login',
            logout: '/',
            home: '/',
        },

        strategies: {
            local: {
                token: {
                    property: 'token',
                    maxAge: 31536000, // 1 year
                },

                user: {
                    property: 'data',
                },

                endpoints: {
                    login: { url: '/auth/login', method: 'post' },
                    logout: { url: '/auth/logout', method: 'post' },
                    user: { url: '/auth/user', method: 'get' },
                },
            },
        },
    },

    toast: {
        position: 'top-center',
        duration: 5000,
        singleton: true,
    },

    build: { extractCSS: true },
};
