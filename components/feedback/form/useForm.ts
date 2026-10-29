import { computed, reactive } from "vue"
import type { Ref } from "vue"

export type Rule<T> =
    (value: T) => string | null

interface Field {
    value: Ref<any>
    rules: Rule<any>[]
    errors: string[]
}

export function useForm() {
    const fields = reactive<
        Record<string, Field>
    >({})

    const field = (
        name: string,
        value: Ref<any>,
        rules: Rule<any>[] = []
    ) => {
        fields[name] = {
            value,
            rules,
            errors: [],
        }
    }

    const validateField = (
        name: string
    ) => {
        const field = fields[name]

        if (!field)
            return true

        field.errors = []

        for (const rule of field.rules) {
            const result = rule(
                field.value
            )

            if (result) {
                field.errors.push(result)
            }
        }

        return field.errors.length === 0
    }

    const validate = () => {
        let valid = true

        for (const name in fields) {
            if (!validateField(name)) {
                valid = false
            }
        }

        return valid
    }

    const isValid = computed(() =>
        Object.values(fields).every(
            field => field.errors.length === 0
        )
    )

    const error = (
        name: string
    ) => {
        return fields[name]?.errors[0]
    }

    const reset = () => {
        for (const field of Object.values(fields)) {
            field.errors = []
        }
    }

    return {
        fields,
        field,

        validate,
        validateField,
        isValid,

        error,
        reset
    }
}
