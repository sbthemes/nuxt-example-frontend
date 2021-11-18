<template>
    <div>
        <h1 class="text-5xl text-center">Forgot Password</h1>
        <form type="post" class="mt-10 max-w-xs mx-auto" @submit.prevent="forgotPassword()">
            <div>
                <label>Email</label>
                <input v-model="params.email" type="text" class="form-input" />
            </div>
            <div class="text-right">
                <button type="submit" class="btn">Forgot Password</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        auth: 'guest',

        data() {
            return {
                params: {
                    email: 'test@example.com',
                },
            };
        },

        methods: {
            async forgotPassword() {
                try {
                    await this.$axios.post('/auth/password/forgot', this.params);
                } catch {}
            },
        },
    };
</script>
