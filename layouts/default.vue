<template>
    <div class="layout">
        <Header />
        <main>
            <slot />
        </main>
        <Footer />
    </div>
</template>

<script setup lang="ts">
    import Header from '~/components/Layout/Header.vue'
    import Footer from '~/components/Layout/Footer.vue'
</script>

<style lang="less">
    .layout {
        min-height: 100vh;
    }
</style>
