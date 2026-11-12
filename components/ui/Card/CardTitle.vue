<script setup lang="ts">

import { colors } from '@/components/theme/colors.ts'

</script>

<template> 
    <p
        class="
            text-lg
            font-medium
            tracking-tight
        "
        :style="{
            color: colors.text.foreground
        }"
    >
        <slot />
    </p>
</template>
