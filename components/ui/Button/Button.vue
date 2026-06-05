<script setup lang="ts">

import { computed } from 'vue' 
import type { ButtonProps } from './button.types' 
import { buttonVariants, buttonSizes } from './button.variants'

const props = withDefaults(defineProps<ButtonProps>(), {
    variant: "default",
    size: "md"
})

const classes = computed(() => {
    return [
        "rounded-sm transition-colors duration-150",
        "inline-flex items-center justify-center cursor-pointer",

        buttonSizes[props.size ?? "md"],
        buttonVariants[props.variant ?? "default"],
    ].join(" ")
})
    
</script>

<template>
    <button :class="classes" >
        <slot />
    </button>
</template>
