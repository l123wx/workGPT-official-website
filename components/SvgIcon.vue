<template>
    <svg :class="svgClass" v-bind="$attrs" :style="{ color: color }">
        <use :xlink:href="iconName" />
    </svg>
</template>

<script setup>
    import { computed } from 'vue'

    const props = defineProps({
        name: {
            type: String,
            required: true
        },
        color: {
            type: String,
            default: ''
        }
    })

    const iconName = computed(() => `#icon-${props.name}`)
    const svgClass = computed(() => {
        if (props.name) {
            return `svg-icon icon-${props.name}`
        }
        return 'svg-icon'
    })
</script>

<style scoped lang="less">
    .svg-icon {
        fill: currentColor;
        vertical-align: middle;
    }
</style>
