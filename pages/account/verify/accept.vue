<template>
    <div></div>
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

        async asyncData({ $axios, query, redirect, error }) {
            try {
                const { data } = await $axios.get(query.__token);
                redirect('/account/dashboard');
            } catch {
                error({statusCode: 404, message: 'Verification link is invalid or expired.'});
            }
        },
    };
</script>
