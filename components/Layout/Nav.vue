<template>
    <div class="nav" :style="`color:${fontColor}`">
        <NuxtLink to="/">Product</NuxtLink>
        <NuxtLink to="/">Features</NuxtLink>
        <NuxtLink to="/">Use Cases</NuxtLink>
    </div>
</template>

<script setup lang="ts">
    defineProps<{
        fontColor?: string
    }>()
</script>

<style scoped lang="less">
    .nav {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-left: 88px;

        a {
            color: inherit;
            font-feature-settings: 'clig' off, 'liga' off;
            font-family: Poppins;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            text-transform: capitalize;
            & + a {
                margin-left: 40px;
            }
        }
    }
</style>
