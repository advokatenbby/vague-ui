<script setup lang="ts">
    import { inject, ref, computed, watchEffect } from "vue"

const tabs = inject<any>("tabs")!

const indicator = ref({
    left: 0,
    width: 0,
})

const isUnderline = computed(
    () => tabs.variant === "underline"
)

const updateIndicator = () => {
    const el = tabs.getTab?.(tabs.active.value)
    if (!el) return

    const rect = el.getBoundingClientRect()

    indicator.value = {
        left: el.offsetLeft,
        width: rect.width,
    }
}

watchEffect(() => {
    if (isUnderline.value) {
        updateIndicator()
    }
})
</script>

<template>
    <div
    class="relative flex"
    :class="tabs.variant === 'underline'
        ? 'border-b border-[#1f1f23]'
        : ''
    "
>
    <slot />

    <div
        v-if="isUnderline"
        class="
            absolute bottom-0 h-[2px]
            bg-[#e4e4e6]
            transition-all duration-200 ease-out
        "
        :style="{
            transform: `translateX(${indicator.left}px)`,
            width: indicator.width + 'px'
        }"
    />
</div>
</template>
