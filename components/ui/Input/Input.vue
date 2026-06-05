<script setup lang="ts">

import { computed } from 'vue'

import type { InputVariant } from '/input.types.ts'
import { inputVariants } from './input.variants.ts'

const model = defineModel<string>()

const props = withDefaults(defineProps<{
    placeholder?: string, 
    disabled?: boolean
    variant?: InputVariant
}>(), {
    placeholder: "", 
    disabled: false,
    variant: "default"
})

const classes = computed(() => [
    `
    w-full
    px-3 py-2
    rounded-sm
    text-[#e4e4e6]
    outline-none
    transition-colors
    `,
    inputVariants[props.variant],
].join(" "))
    
</script>

<template>
    <input
        v-model="model"
        :placeholder="placeholder"
        :disabled="disabled"
        :class="classes"
    />
</template>
