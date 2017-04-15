<template>
    <div class="layout">
        <div class="top">
            <app-menu></app-menu>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import AppMenu from './components/app-menu.vue';

export default {
  components: {AppMenu}
};
</script>