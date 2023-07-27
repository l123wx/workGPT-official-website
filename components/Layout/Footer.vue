<template>
    <div class="footer-container">
        <div class="box">
            <div>
                <SvgIcon name="logo-white" class="logo" />
                <Nav font-color="#fff" />
                <div class="contact-list">
                    <NuxtLink to="/">
                        <SvgIcon name="twitter" />
                    </NuxtLink>
                    <NuxtLink to="/">
                        <SvgIcon name="facebook" />
                    </NuxtLink>
                    <NuxtLink to="/">
                        <SvgIcon name="instagram" />
                    </NuxtLink>
                    <NuxtLink to="/">
                        <SvgIcon name="github" />
                    </NuxtLink>
                </div>
            </div>
            <div>
                <div class="title">Subscribe to get latest updates</div>
                <div class="input">
                    <input type="text" placeholder="Your Email address" />
                    <div class="submit-button">Subscribe</div>
                </div>
            </div>
            <div class="copyright">
                <div>© Copyright 2023, All Rights Reserved</div>
                <div>Privacy Policy</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import Nav from './Nav.vue'
</script>

<style scoped lang="less">
    .footer-container {
        background-color: @default-font-color;
        padding: 80px 40px;
        @media screen and (max-width: @viewport-md) {
            padding-left: 20px;
            padding-right: 20px;
        }
        > .box {
            max-width: @page-content-max-width;
            margin: 0 auto;
            > div:nth-child(1) {
                display: flex;

                @media screen and (max-width: @viewport-lg) {
                    flex-direction: column;
                    align-items: center;
                }

                .nav {
                    flex: 1;
                    @media screen and (max-width: @viewport-lg) {
                        flex: auto;
                        margin-left: 0;
                        padding: 24px 0;
                    }
                }
            }

            > div:nth-child(2) {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                padding: 64px 0;
                @media screen and (max-width: @viewport-lg) {
                    align-items: center;
                }
                .title {
                    color: @color-white;
                    font-size: 24px;
                    font-style: normal;
                    font-weight: 600;
                    line-height: normal;
                    @media screen and (max-width: @viewport-lg) {
                        font-size: 16px;
                    }
                }
                .input {
                    margin-top: 17px;
                    width: 545px;
                    height: 52px;
                    line-height: 52px;
                    border-radius: 12px;
                    background: #2c2f45;
                    display: flex;
                    align-items: center;
                    overflow: hidden;
                    @media screen and (max-width: @viewport-lg) {
                        max-width: 480px;
                        width: 100%;
                        height: 36px;
                        line-height: 36px;
                    }
                    input {
                        flex: 1;
                        height: 100%;
                        padding: 0 23.5px;
                        outline: none;
                        background-color: transparent;
                        box-shadow: none;
                        color: @color-white;
                        border: none;
                        min-width: 0;
                        @media screen and (max-width: @viewport-lg) {
                            font-size: 12px;
                            &::placeholder {
                                font-size: 12px;
                            }
                        }
                    }
                    .submit-button {
                        color: @color-white;
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 500;
                        height: 100%;
                        text-align: center;
                        background: @main-color;
                        padding: 0 28px;
                        cursor: pointer;
                        @media screen and (max-width: @viewport-lg) {
                            font-size: 12px;
                            padding: 0 20px;
                        }
                    }
                }
            }
        }
    }

    .logo {
        height: 40px;
        width: 163px;
    }

    .contact-list {
        display: flex;
        align-items: center;
        > a {
            width: 20px;
            height: 20px;
            > svg {
                width: 100%;
                height: 100%;
            }
            + a {
                margin-left: 34px;
            }
        }
    }

    .copyright {
        width: 100%;
        border-top: 1px solid rgba(212, 212, 216, 0.2);
        padding-top: 33px;

        display: flex;
        justify-content: space-between;

        color: @color-white;
        font-family: DM Sans;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 26px;

        @media screen and (max-width: @viewport-lg) {
            flex-direction: column;
            align-items: center;

            font-size: 14px;
        }

        @media screen and (max-width: @viewport-md) {
            margin: 0 -20px;
            width: calc(100% + 40px);
        }
    }
</style>
