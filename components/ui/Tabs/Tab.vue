<script setup lang="ts">
import { inject, ref, onMounted, computed } from "vue"
import { triggerVariants } from './tabs.variants'

const props = defineProps<{ value: string }>()

const tabs = inject<any>("tabs")!

const el = ref<HTMLElement | null>(null)

const isActive = computed(() => tabs.active.value === props.value)

const styles = computed(() => { 
    const variant = triggerVariants[tabs.variant]

    return isActive.value 
        ? variant.active 
        : variant.inactive
})

const onClick = () => {
    tabs.setActive(props.value)
}

onMounted(() => {
    if (el.value) {
        tabs.registerTab(props.value, el.value)
    }
})
</script>

<template>
    <button
        ref="el"
        @click="onClick"
        class="
            px-3 py-1 text-sm
            transition-colors
            cursor-pointer
        "
        :class="styles"
    >
        <slot />
    </button>
</template>
