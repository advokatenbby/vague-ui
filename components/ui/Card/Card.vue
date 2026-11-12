<script setup lang="ts">

import { colors } from '@/components/theme'

const props = defineProps<{
    width: string,
    height: string
}>()

</script>

<template>
    <div 
        class="[     
            rounded-sm
            border
        ]" 
          :style="{
                width: width + 'px',
                height: height + 'px',
                backgroundColor: colors.background.DEFAULT,
                border: '1px solid colors.border.DEFAULT'
            }"
            >
            <slot />
    </div>
</template>
