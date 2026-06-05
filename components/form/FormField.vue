<script setup lang="ts">
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
                text-[#e4e4e6]
            "
        >
            {{ label }}
        </label>

        <slot />

        <Transition name="hint">
            <div
                v-if="focused && $slots.hint && !error"
                class="
                    text-xs
                    text-[#8a8a92]
                "
            >
                <slot name="hint" />
            </div>
        </Transition>

        <Transition name="error">
            <div
                v-if="error"
                class="
                    text-xs
                    text-[#ff5f5f]
                "
            >
                {{ error }}
            </div>
        </Transition>
    </div>
</template>
