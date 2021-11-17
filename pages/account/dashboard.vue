<template>
    <div class="text-center">
        <h1 class="text-5xl">Dashboard</h1>
        <pre class="mt-10 text-left max-w-xs mx-auto">{{ $auth.user || 'User not logged in' }}</pre>
    </div>
</template>

<script>
    export default {
        middleware: 'email-verified',
    };
</script>
