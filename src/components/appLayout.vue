<template>
    <div>
        <header></header>
        <!-- <button>START</button> -->
        <main>
            <router-view />
        </main>
    </div>
</template>
<script>
import header from './header.vue'

export default {
    name: 'AppLayout',
    components: {
        header
    }
}
</script>
<style>
</style>