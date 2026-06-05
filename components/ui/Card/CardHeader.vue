<script setup lang="ts">

const props = defineProps<{ 
    title: string, 
    subtitle?: string
}>()
    
</script>

<template>
    <div class="px-4 pt-4 pb-3">
        <slot />
    </div>
</template>
