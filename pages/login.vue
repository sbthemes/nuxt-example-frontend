<template>
    <div>
        <h1 class="text-5xl text-center">Login</h1>
        <form type="post" class="mt-10 max-w-xs mx-auto" @submit.prevent="login()">
            <div>
                <label>Email</label>
                <input v-model="loginParams.email" type="text" class="form-input" />
            </div>
            <div>
                <label>Password</label>
                <input v-model="loginParams.password" type="text" class="form-input" />
            </div>
            <div class="flex items-center justify-between">
                <nuxt-link to="/forgot-password">Forgot Password</nuxt-link>
                <button type="submit" class="btn">Login</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        auth: 'guest',

        data() {
            return {
                loginParams: {
                    email: 'test@example.com',
                    password: '11111111',
                },
            };
        },

        methods: {
            async login() {
                try {
                    await this.$auth.loginWith('local', { data: this.loginParams });
                } catch {}
            },
        },
    };
</script>
