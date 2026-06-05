<script setup lang="ts">

const props = defineProps<{ 
    width: string, 
    height: string
}>()
    
</script>

<template>
    <div
        class="[ 
            bg-[#0b0b0d]
            border-t border-t-[#2e2e35]
            border-x border-x-[#1c1c20]
            border-b border-b-[#141418]
            rounded-sm
        ]"
        :style="{
            width: width + 'px', 
            height: height + 'px'
        }"
    >
        <slot />
    </div>
</template>
