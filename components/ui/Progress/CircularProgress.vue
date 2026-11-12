<script setup lang="ts">
import { colors } from '@/components/theme/colors.ts'
import type { CircularProgress } from './progress.types'
import { computed } from 'vue'

const props = withDefaults(defineProps<CircularProgress>(), {
    modelValue: 0,
    size: 100,
    strokeWidth: 6,
    color: colors.progress.DEFAULT,
    trackColor: colors.background.elevated,
    showLabel: true
})

const progress = computed(() => {
    return Math.min(100, Math.max(0, props.modelValue))
})

const radius = computed(() => {
    return (props.size - props.strokeWidth) / 2
})

const circumference = computed(() => {
    return 2 * Math.PI * radius.value
})

const offset = computed(() => {
    return circumference.value * (1 - progress.value / 100)
})
</script>

<template>
    <div class="relative inline-flex items-center justify-center" :style="{
        width: `${size}px`,
        height: `${size}px`,
    }" role="progressbar" :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100">
        <svg :width="size" :height="size" class="-rotate-90">
            <circle :cx="size / 2" :cy="size / 2" :r="radius" fill="none" :stroke="trackColor"
                :stroke-width="strokeWidth" />

            <circle :cx="size / 2" :cy="size / 2" :r="radius" fill="none" :stroke="color" :stroke-width="strokeWidth"
                stroke-linecap="round" :stroke-dasharray="circumference" :stroke-dashoffset="offset"
                class="transition-all duration-300" />
        </svg>

        <span v-if="showLabel" class="absolute text-sm font-semibold" :style="{ color: colors.text.foreground }">
            <slot></slot>
        </span>
    </div>
</template>
