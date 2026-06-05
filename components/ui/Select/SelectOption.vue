<script setup lang="ts">

import { inject, onMounted } from 'vue' 

const props = defineProps<{ 
    value: string
}>()

const select = inject<any>("select")! 

onMounted(() => {

})

const handleClick = (e: any) => { 
    select.select(props.value, e.target.innerText)
}
    
</script>

<template>
    <div 
        @click="handleClick"
        class="
            px-3 py-2 
            text-sm 
            text-[#e4e4e6]
            hover:bg-white/5
            cursor-pointer
        "
    >
        <slot />
    </div>
</template>
