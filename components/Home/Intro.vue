<template>
    <div class="intro-container">
        <div>
            <div class="title"> {{ 'Customized \nChatGPT \nfor your work' }} </div>
            <div class="intro"> Chat with your private APl, tools, data. </div>
            <div class="operation">
                <div class="pc">
                    <NuxtLink to="/">Try it now - it’s free</NuxtLink>
                    <NuxtLink to="/">Schedule for demo</NuxtLink>
                </div>
                <div class="mobile">
                    <NuxtLink to="/">Try it now - it’s free</NuxtLink>
                </div>
            </div>
            <div class="tips"> {{ 'Get started for free, \nno credit card required.' }} </div>
        </div>
        <img src="~/assets/images/intro.png" />
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
    .intro-container {
        max-width: @page-content-max-width;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto 80px;
        padding-left: 40px;
        padding-right: 40px;

        @media screen and (max-width: @viewport-xl) {
            flex-direction: column;
            padding-top: 40px;
            padding-bottom: 70px;
            border-bottom: 1px solid #d8d8d8;
        }

        @media screen and (max-width: @viewport-md) {
            padding-left: 20px;
            padding-right: 20px;
        }

        > div {
            width: 516px;
            @media screen and (max-width: @viewport-xl) {
                width: auto;
                text-align: center;
            }
        }

        > img {
            width: 55%;
            margin-right: -40px;
            @media screen and (max-width: @viewport-xl) {
                width: 100%;
                max-width: @viewport-md;
            }
        }
    }

    .title {
        color: #101931;
        font-feature-settings: 'clig' off, 'liga' off;
        font-size: 52px;
        font-style: normal;
        font-weight: 600;
        line-height: 60px;
        letter-spacing: -2px;

        @media screen and (max-width: @viewport-lg) {
            font-size: 38px;
            font-weight: 700;
            line-height: 50px;
        }

        @media screen and (max-width: @viewport-sm) {
            white-space: pre-wrap;
        }
    }

    .intro {
        color: rgba(16, 25, 49, 0.8);
        font-feature-settings: 'clig' off, 'liga' off;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 32px;
        margin-top: 32px;

        @media screen and (max-width: @viewport-lg) {
            font-size: 15px;
            margin-top: 16px;
        }
    }

    .operation {
        margin-top: 48px;
        .pc {
            display: inline-block;
            border-radius: 12px;
            background: #a9b8d6;
            padding: 8px;
            position: relative;

            &::before {
                content: '';
                display: inline-block;
                width: 207px;
                height: 62px;
                background-color: @main-color;
                border-radius: 12px;
                box-shadow: 0px 10px 30px 0px rgba(0, 90, 255, 0.2);
                position: absolute;
                top: 8px;
                left: 8px;
                transition: left 0.2s;
            }

            &:has(a:nth-child(2):hover) {
                &::before {
                    left: 227px;
                }
            }

            a {
                height: 62px;
                width: 207px;
                text-align: center;
                line-height: 62px;
                color: @color-white;
                display: inline-block;
                position: relative;
                text-transform: capitalize;
                color: #fff;
                font-feature-settings: 'clig' off, 'liga' off;
                font-size: 16px;
                font-style: normal;
                font-weight: 600;

                + a {
                    margin-left: 12px;
                }
            }
        }
        .mobile {
            display: none;
            a {
                display: inline-block;
                padding: 20px 24px;
                background-color: @main-color;
                color: @color-white;
                border-radius: 12px;
                box-shadow: 0px 10px 30px 0px rgba(0, 90, 255, 0.2);
                text-transform: capitalize;
                font-feature-settings: 'clig' off, 'liga' off;
                font-size: 16px;
                font-style: normal;
                font-weight: 600;
                line-height: 20px;
            }
        }
        @media screen and (max-width: @viewport-lg) {
            margin-top: 40px;
            .pc {
                display: none;
            }
            .mobile {
                display: block;
            }
        }
    }

    .tips {
        color: rgba(16, 25, 49, 0.6);
        font-feature-settings: 'clig' off, 'liga' off;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 32px;
        text-transform: capitalize;
        margin-top: 24px;
        @media screen and (max-width: @viewport-lg) {
            line-height: 18px;
        }
        @media screen and (max-width: @viewport-sm) {
            white-space: pre-wrap;
        }
    }
</style>
