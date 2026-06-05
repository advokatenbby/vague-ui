import type { ButtonVariant, ButtonSize } from "./button.types"

export const buttonVariants: Record<ButtonVariant, string> = {
    default: `
        bg-[#0b0b0d]
        border border-[#1f1f23]
        text-[#e4e4e6]
        hover:bg-white/5
    `,

    ghost: `
        bg-transparent
        text-[#e4e4e6]
        hover:bg-white/5
        border border-transparent
    `,

    outline: `
        bg-transparent
        border border-[#1f1f23]
        text-[#e4e4e6]
        hover:bg-[#0f0f11]
    `,

    danger: `
        bg-[#1a0f10]
        border border-[#3a1516]
        text-[#ff5f5f]
        hover:bg-[#2a1516]
    `,
}

export const buttonSizes: Record<ButtonSize, string> = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-2 text-base",
}
