<script setup lang="ts">
import { ref, provide, computed } from 'vue'
import { colors } from '@/components/theme/colors.ts'

const model = defineModel<string>()

const props = defineProps<{
    placeholder?: string
}>()

const open = ref(false)

const selectedLabel = ref("")

const setLabel = (label: string) => {
    selectedLabel.value = label
}

const select = (value: string, label: string) => {
    model.value = value
    selectedLabel.value = label
    open.value = false
}

provide("select", {
    select,
    setLabel,
    model,
})

const display = computed(() => {
    return selectedLabel.value || props.placeholder
})

</script>

<template>
    <div class="relative w-full">
        <button type="button" @click="open = !open" class="
                w-full
                px-3 py-2
                bg-[#0b0b0d]
                rounded-sm
                text-left
                text-[#e4e4e6]
                text-sm
                flex justify-between
                items-center
            " 
             :style="{
                backgroundColor: colors.background.DEFAULT,
                border: `1px solid ${colors.border.DEFAULT}`,
            }">
            <span>{{ display }}</span>
            <span class="text-[#8a8a92]">▾</span>
        </button>

        <div v-if="open" class="
                absolute z-50 mt-1
                w-full
                rounded-sm
                overflow-hidden
            " 
             :style="{
                bacgroundColor: colors.background.DEFAULT,
                border: `1px solid ${colors.border.DEFAULT}`,
            }">
            <slot />
        </div>
    </div>
</template>
