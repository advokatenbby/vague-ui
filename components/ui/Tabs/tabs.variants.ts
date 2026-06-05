import type { TabsVariant } from "./tabs.types";

export const triggerVariants = {
    underline: {
        active: `
            text-[#e4e4e6]
        `,

        inactive: `
            text-[#8a8a92]
            hover:text-[#e4e4e6]
        `,
    },

    ghost: {
        active: `
            bg-white/5
            text-[#e4e4e6]
            rounded-sm
        `,

        inactive: `
            text-[#8a8a92]
            hover:bg-white/5
            rounded-sm
        `,
    },

    outline: {
        active: `
            bg-[#0b0b0d]
            border border-[#1f1f23]
            rounded-sm
            text-[#e4e4e6]
        `,

        inactive: `
            text-[#8a8a92]
        `,
    },
}

export const listVariants: Record<TabsVariant, string> = {
    underline: `
        border-b border-[#1f1f23]
    `,

    ghost: `
        gap-1
    `,

    outline: `
        p-1
        gap-1
        border border-[#1f1f23]
        rounded-sm
    `,
}
