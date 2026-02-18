import type {ReactNode} from "react";

export type SkillData = {
    name: string
    icon?: ReactNode | null | undefined
    id: string
    useDefaultStyle: boolean
}

export type ServiceData = {
    title: string
    icon: ReactNode
    price: number
    colorName: string
    description: string
}
