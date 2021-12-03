<template>
    <div>
        <h1 class="text-5xl text-center">Reset Password</h1>
        <form type="post" class="mt-10 max-w-xs mx-auto" @submit.prevent="resetPassword()">
            <div>
                <label>Password</label>
                <input v-model="params.password" type="text" class="form-input" />
            </div>
            <div>
                <label>Confirm Password</label>
                <input v-model="params.password_confirmation" type="text" class="form-input" />
            </div>
            <div class="text-right">
                <button type="submit" class="btn">Reset Password</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        validate({ params }) {
            return !!params.token;
        },

        auth: 'guest',

        data() {
            return {
                params: {
                    password: '11111111',
                    password_confirmation: '11111111',
                },
            };
        },

        methods: {
            async resetPassword() {
                try {
                    await this.$axios.post('/auth/password/reset', {
                        token: this.$route.params.token,
                        email: this.$route.query.email,
                        password: this.params.password,
                        password_confirmation: this.params.password_confirmation,
                    });

                    this.params.password = '';
                    this.params.password_confirmation = '';
                } catch {}
            },
        },
    };
</script>
