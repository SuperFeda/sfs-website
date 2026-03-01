import {Skill} from "@/components/Skill.tsx";
import type {TechnologyVariant} from "@/utils/types.ts";
import {technologyConfig} from "@/utils/const.ts";

interface TechnologyTempProps {
    variant: TechnologyVariant
    name?: string
    className?: string
    iconColor?: string
    iconWidth: number
    iconHeight: number
}

function getTechnology<T extends keyof typeof technologyConfig>(variant: string) {
    if (variant in technologyConfig) {
        return technologyConfig[variant as T]
    }
    return null
}

export function TechnologyTemp({variant, name, iconWidth, iconHeight, iconColor="currentColor", className=""}: TechnologyTempProps) {
    const technology = variant ? getTechnology(variant) : null;

    if (technology) {
        return (
            <Skill
                name={technology.name}
                className={`${className} ${technology.style??''}`}
                icon={technology.icon&&<technology.icon width={iconWidth} height={iconHeight} iconColor={iconColor} />}
            />
        )
    }

    if (!name) {
        console.warn(`TechnologyTemp: неизвестный variation "${variant}" и не передан name`)
        return null
    }

    return <Skill name={name} className={className} />
}
