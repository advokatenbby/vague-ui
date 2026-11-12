<script setup lang="ts">

import { colors } from '@/components/theme/colors.ts'
 
</script>

<template>
    <p
        class="
            text-xs
            mt-0.5
        "
        :style="{
            color: colors.text.muted
        }"
    >
        <slot />
    </p>
</template>
