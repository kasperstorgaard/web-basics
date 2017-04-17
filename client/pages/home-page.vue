<template>
    <div>
        <h1>Home</h1>
        <button v-on:click="auth()">auth</button>
    </div>
</template>

<script>
import wsm from '../web-socket.js';

export default {
    methods: {
        auth() {
            console.log('sending...');
            wsm.send('AUTH', {value: true});
        }
    }
};
</script>