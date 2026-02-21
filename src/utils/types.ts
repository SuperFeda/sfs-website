import type {ReactNode} from "react";

export type SkillData = {
    name: string
    icon?: ReactNode | undefined
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

export type ProjectData = {
    type: "other" | "website" | "bot"
    title: string
    description: string
    baseStack: SkillData[]
    bgImageURL?: string
    otherStack?: SkillData[] | undefined,
    buttons?: {
        text: string
        href?: string
        icon?: ReactNode | undefined
    }[] | undefined
}
