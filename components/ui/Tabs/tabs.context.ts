
import type { TabsVariant } from './tabs.types'
import type { Ref } from 'vue'

export interface TabsContext {
    active: Ref<string>
    setActive: (value: string) => void

    registerTab: (value: string, el: HTMLElement) => void
    getTab: (value: string) => void
    variant: TabsVariant
}
