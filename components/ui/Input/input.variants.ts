import type { InputVariant } from "./input.types";

export const inputVariants: Record<InputVariant, string> = {
    default: `
        bg-[#0b0b0d]
        border border-[#1f1f23]
        focus:border-[#35353b]
    `,

    ghost: `
        bg-transparent
        border border-transparent
        hover:bg-white/5
        focus:bg-white/5
    `,
}

export const inputSizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-2 text-sm",
    lg: "px-4 py-3 text-base",
}
