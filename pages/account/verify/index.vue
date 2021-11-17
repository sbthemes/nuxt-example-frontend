<template>
    <div class="text-center">
        <h1 class="text-5xl">Verify your email</h1>
        <div class="mt-10">
            <button class="btn" @click="resend()">Resend</button>
        </div>
    </div>
</template>

<script>
    export default {
        auth: false,

        middleware({ $auth, redirect }) {
            if (!$auth.loggedIn) {
                return redirect('/login');
            }

            if ($auth.loggedIn && $auth.user.email_verified_at) {
                return redirect('/account/dashboard');
            }
        },

        methods: {
            async resend() {
                try {
                    await this.$axios.post('/email/verify/resend');
                } catch {}
            },
        },
    };
</script>
