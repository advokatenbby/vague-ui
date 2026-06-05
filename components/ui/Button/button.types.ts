
export type ButtonVariant =
    | "default"
    | "ghost"
    | "outline"
    | "danger"

export type ButtonSize = 
    | "sm"
    | "md" 
    | "lg"

export interface ButtonProps {
    variant?: ButtonVariant,
    size?: ButtonSize
}
