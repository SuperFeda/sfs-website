import type {ReactNode} from "react";
import type {technologyConfig} from "@/utils/const.ts";

export type TechnologyVariant = keyof typeof technologyConfig | string;

export type ServiceData = {
    title: string
    icon: ReactNode
    price: {
        rub: Price,
        usd: Price
    }
    colorName: string
    description: string
}

export type Price = {
    amount: number,
    type: CurrencyType
}

export type CurrencyType = "usd" | "rub"
export type Currency = {
    symbol: string,
    currencyPos: "right" | "left"
}

export const CURRENCIES: Record<string, Currency> = {
    rub: {symbol: "₽", currencyPos: "right"},
    usd: {symbol: "$", currencyPos: "left"},
}

export type ProjectData = {
    type: "other" | "website" | "bot"
    title: string
    description: string
    baseStack: TechnologyVariant[]
    bgImageURL?: string
    otherStack?: TechnologyVariant[] | undefined,
    buttons?: {
        text: string
        href?: string
        icon?: ReactNode | undefined
    }[] | undefined
}
