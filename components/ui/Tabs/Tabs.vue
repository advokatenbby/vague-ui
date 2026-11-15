<script setup lang="ts">

import { provide, ref, watch } from 'vue'
import type { TabsVariant } from './tabs.types' 

const props = withDefaults(
    defineProps<{
        defaultValue?: string, 
        value?: string, 
        variant?: TabsVariant
    }>(),
    {
        variant: 'underline'
    }
)

const emit = defineEmits<{
    "update:value": [value: string]
}>()

const active = ref(
    props.value ?? props.defaultValue ?? ""
)

watch( 
    () => props.value, 
    (value) => {
        if (value !== undefined) {
            active.value = value
        }
    }
)

const setActive = (value: string) => {
    if (props.value === undefined) {
        active.value = value 
    }

    emit("update:value", value)
}

const tabsMap = new Map<string, HTMLElement>()

const registerTab = (value: string, el: HTMLElement) => {
    tabsMap.set(value, el)
}

const getTab = (value: string) => {
    return tabsMap.get(value)
}

provide('tabs', {
    active, 
    setActive, 
    registerTab, 
    getTab, 
    variant: props.variant
})

</script>

<template>
    <div class="w-full">
        <slot />
    </div>
</template>
