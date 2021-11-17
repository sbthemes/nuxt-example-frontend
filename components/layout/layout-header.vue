<template>
    <div class="mb-10 flex items-center py-2 px-10 bg-gray-200">
        <div>
            <nuxt-link to="/" class="text-3xl">Logo</nuxt-link>
        </div>
        <div class="ml-auto flex space-x-4">
            <template v-if="$auth.loggedIn">
                <nuxt-link to="/account/dashboard">Dashboard</nuxt-link>
                <button type="button" @click="$auth.logout()">Logout</button>
            </template>
            <template v-else>
                <nuxt-link to="/login">Login</nuxt-link>
                <nuxt-link to="/register">Register</nuxt-link>
            </template>
        </div>
    </div>
</template>
