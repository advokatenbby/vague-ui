<script setup lang="ts">

import type { TabsVariant } from './tabs.types'
import { provide, ref } from "vue"

const props = withDefaults( 
    defineProps<{ 
        defaultValue?: string 
        variant?: TabsVariant
    }>(),
    { 
        variant: "underline"
    }
)

const active = ref(props.defaultValue ?? "")

const setActive = (value: string) => {
    active.value = value
}

const tabsMap = new Map()

const registerTab = (value, el) => tabsMap.set(value, el)

const getTab = (value) => tabsMap.get(value)

provide("tabs", {
    active,
    setActive,
    registerTab,
    getTab,
    variant: props.variant,
})

provide("tabsMap", {
    getTab,
})
</script>

<template>
    <div class="w-full">
        <slot />
    </div>
</template>
