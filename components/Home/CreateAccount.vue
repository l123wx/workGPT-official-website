<template>
    <div class="create-account-container">
        <div class="title">{{ 'Ready to Create \nan AI Agent?' }}</div>
        <NuxtLink class="button">Create a Free Account</NuxtLink>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
    .create-account-container {
        background-color: #f8f8fa;
        padding: 144px 40px;
        margin: 0 auto;

        @media screen and (max-width: @viewport-xl) {
            padding-top: 80px;
            padding-bottom: 80px;
        }

        @media screen and (max-width: @viewport-md) {
            padding-left: 20px;
            padding-right: 20px;
        }
        .title {
            text-align: center;
            font-feature-settings: 'clig' off, 'liga' off;
            font-family: Poppins;
            font-size: 36px;
            font-style: normal;
            font-weight: 500;
            line-height: 56px;
            letter-spacing: -1px;
            @media screen and (max-width: @viewport-xl) {
                font-size: 32px;
                font-weight: 600;
                line-height: 38.4px;
                letter-spacing: -0.64px;
            }
            @media screen and (max-width: @viewport-sm) {
                white-space: pre-wrap;
            }
        }
        .button {
            display: block;
            width: fit-content;
            margin: 0 auto;
            padding: 16px 48px;
            color: @color-white;
            font-size: 22px;
            font-feature-settings: 'clig' off, 'liga' off;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            text-transform: capitalize;
            border-radius: 64px;
            background: #0056f5;
            box-shadow: 0px 10px 30px 0px rgba(0, 90, 255, 0.2);
            margin-top: 24px;
            @media screen and (max-width: @viewport-xl) {
                font-size: 16px;
                margin-top: 40px;
            }
        }
    }
</style>
