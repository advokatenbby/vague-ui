<script setup lang="ts">

import { colors } from '@/components/theme/colors.ts'

import { ref } from "vue"

defineProps<{
    label?: string
    error?: string
}>()

const focused = ref(false)
</script>

<template>
    <div
        @focusin="focused = true"
        @focusout="focused = false"
        class="flex flex-col gap-1.5"
    >
        <label
            v-if="label"
            class="
                text-sm
                font-medium
            "
            :style="{
                color: colors.text.foreground
            }"
        >
            {{ label }}
        </label>

        <slot />

        <Transition name="hint">
            <div
                v-if="focused && $slots.hint && !error"
                class="
                    text-xs
                "
                :style="{
                    color: colors.text.muted
                }"
            >
                <slot name="hint" />
            </div>
        </Transition>

        <Transition name="error">
            <div
                v-if="error"
                class="
                    text-xs
                "
                :style="{
                    color: colors.status.danger
                }"
            >
                {{ error }}
            </div>
        </Transition>
    </div>
</template>
