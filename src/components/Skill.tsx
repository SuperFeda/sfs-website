import type {ReactNode} from "react";

interface SkillProps {
    className?: string
    icon?: ReactNode
    name: string
}

export function Skill({className = "", name, icon}: SkillProps) {
    return (
        icon
            ? <span className={`skill skill--with-icon ${className}`} title={name}>{icon}<span>{name}</span></span>
            : <span className={`skill ${className}`} title={name}>{name}</span>
    )
}