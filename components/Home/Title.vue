<template>
    <div class="title-container">
        <div class="title">{{ title }}</div>
        <div class="sub-title">{{ subTitle }}</div>
    </div>
</template>

<script setup lang="ts">
    defineProps<{
        title: string
        subTitle: string
    }>()
</script>

<style scoped lang="less">
    .title-container {
        padding: 24px 0;
        text-align: center;
        margin-bottom: 64px;
        margin-top: 80px;
        .title {
            color: @default-font-color;
            font-feature-settings: 'clig' off, 'liga' off;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            text-transform: capitalize;
            white-space: pre-wrap;
            @media screen and (max-width: @viewport-xl) {
                font-size: 32px;
            }
        }
        .sub-title {
            color: #8a898e;
            font-feature-settings: 'clig' off, 'liga' off;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 32px;
            text-transform: capitalize;
            @media screen and (max-width: @viewport-xl) {
                font-size: 13px;
            }
        }
    }
</style>
