<script setup lang="ts">

import { inject, computed } from 'vue'
import type { TabsContext } from './tabs.types'

const props = defineProps<{ 
    value: string
}>()

const tabs = inject<TabsContext>("tabs")!

const isActive = computed(() => tabs.active.value === props.value)

</script>

<template>
    <div v-if="isActive" class="pt-3"  > 
        <slot />
    </div>
</template>
