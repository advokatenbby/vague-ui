<script setup lang="ts">

import { colors } from '@/components/theme/colors'
    
</script>

<template>
    <div>
        <p 
            :style="{
                color: colors.text.DEFAULT 
            }"
            class="
                text-white text-sm
            " 
        >
            <slot/>
        </p>
    </div>
</template>
