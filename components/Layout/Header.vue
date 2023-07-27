<template>
    <div class="header-container">
        <SvgIcon name="logo" class="logo" />
        <Nav />
        <div class="operation">
            <NuxtLink class="login" to="/">Login</NuxtLink>
            <NuxtLink class="try" to="/">Try It Now</NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
    import Nav from './Nav.vue'
</script>

<style scoped lang="less">
    .header-container {
        height: 110px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        max-width: @page-content-max-width;
        margin: 0 auto;
        padding: 0 40px;

        @media screen and (max-width: @viewport-md) {
            padding: 0 20px;
            justify-content: center;
            height: 80px;
        }
    }

    .logo {
        height: 40px;
        width: 163px;
    }

    .nav {
        flex: 1;
        @media screen and (max-width: @viewport-lg) {
            display: none;
        }
    }

    .operation {
        display: flex;
        align-items: center;

        @media screen and (max-width: @viewport-md) {
            display: none;
        }
        .login {
            width: 75px;
            height: 36px;
            line-height: 36px;
            text-align: center;
            color: @main-color;
            font-family: Source Sans Pro;
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
        }
        .try {
            margin-left: 8px;
            padding: 16px 24px;
            background-color: @main-color;
            border-radius: 70px;
            color: @color-white;
        }
    }
</style>
