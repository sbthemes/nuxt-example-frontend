<template>
    <div>
        <h1 class="text-5xl text-center">Login</h1>
        <form type="post" class="mt-10 max-w-xs mx-auto" @submit.prevent="login()">
            <div>
                <label>Name</label>
                <input v-model="registerParams.name" type="text" class="form-input" />
            </div>
            <div>
                <label>Email</label>
                <input v-model="registerParams.email" type="text" class="form-input" />
            </div>
            <div>
                <label>Password</label>
                <input v-model="registerParams.password" type="text" class="form-input" />
            </div>
            <div class="text-right">
                <button type="submit" class="btn">Register</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        auth: 'guest',

        data() {
            return {
                registerParams: {
                    name: 'John Doe',
                    email: 'test@example.com',
                    password: '11111111',
                },
            };
        },

        methods: {
            async login() {
                try {
                    await this.$axios.post('/users/create', this.registerParams);

                    await this.$auth.loginWith('local', {
                        data: {
                            email: this.registerParams.email,
                            password: this.registerParams.password,
                        },
                    });

                    this.$router.push('/account/verify');
                } catch {}
            },
        },
    };
</script>
