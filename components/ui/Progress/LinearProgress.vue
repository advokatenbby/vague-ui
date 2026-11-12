<script setup lang="ts">
import { colors } from '@/components/theme/colors.ts'
import type { LinearProgress } from './progress.types.ts'
import { computed } from 'vue'

const props = withDefaults(defineProps<LinearProgress>(), {
    modelValue: 0,
    height: 10,
    color: colors.progress.DEFAULT,
    trackColor: colors.background.elevated,
    showLabel: false,
    indeterminate: false,
    rounded: true
})

const progress = computed(() => {
    return Math.min(100, Math.max(0, props.modelValue))
})
</script>

<template>
    <div class="w-full">
        <span v-if="showLabel && !indeterminate" class="mb-2 block text-sm font-medium text-[#D5DBE4]">
            {{ progress }}%
        </span>

        <div role="progressbar" :aria-valuenow="indeterminate ? undefined : progress" aria-valuemin="0"
            aria-valuemax="100" :aria-busy="indeterminate" class="relative w-full overflow-hidden"
            :class="rounded ? 'rounded-sm' : 'rounded-none'" :style="{
                height: `${height}px`,
                backgroundColor: trackColor,
            }">
            <div class="h-full transition-all duration-300" :class="[
                rounded ? 'rounded-sm' : 'rounded-none',
                indeterminate ? 'animate-progress' : '',
            ]" :style="{
                    width: indeterminate ? '40%' : `${progress}%`,
                    backgroundColor: color,
                }" />
        </div>
    </div>
</template>
