<template>
    <div class="header-container">
        <SvgIcon name="logo" class="logo" />
        <div class="nav">
            <NuxtLink to="/">Product</NuxtLink>
            <NuxtLink to="/">Features</NuxtLink>
            <NuxtLink to="/">Use Cases</NuxtLink>
        </div>
        <div class="operation">
            <NuxtLink class="login" to="/">Login</NuxtLink>
            <NuxtLink class="try" to="/">Try It Now</NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
    .header-container {
        height: 110px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media screen and (max-width: @viewport-md) {
            justify-content: center;
        }
    }

    .logo {
        height: 40px;
        width: 163px;
    }

    .nav {
        flex: 1;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-left: 88px;

        @media screen and (max-width: @viewport-lg) {
            display: none;
        }
        a {
            color: #101931;
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
