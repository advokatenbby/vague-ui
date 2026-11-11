import type { Rule } from "./useForm"

export const required =
    (message = "This field is required") =>
        (value: string | undefined | null) => {
            if (!value)
                return message

            return value.trim()
                ? null
                : message
        }


export const minLength =
    (length: number, message?: string) =>
        (value: unknown) => {
            if (typeof value !== "string") {
                return message ?? `Minimum ${length} characters`
            }

            return value.length >= length
                ? null
                : message ?? `Minimum ${length} characters`
        }


export const maxLength =
    (length: number) =>
        (value: string) => {
            return value.length <= length
                ? null
                : `Maximum ${length} characters`
        }


