import React, {type ReactNode} from "react";

import {TitleWithIcon} from "@/components/TitleWithIcon.tsx";

interface SkillCardProps extends React.PropsWithChildren {
    icon: ReactNode,
    titleText: string
    className?: string
    titleClassName?: string
}

export function SkillCard({children, className = "", titleClassName = "", titleText, icon}: SkillCardProps) {
    return (
        <li className={`skill-card ${className}`}>
            <div className={"skill-card__inner"}>
                <TitleWithIcon
                    icon={icon}
                    className={`skill-card__title ${titleClassName}`}
                    headerLevel={3}
                    titleText={titleText}
                />
                <ul className={"skill-card__technology-list"}>
                    {children}
                </ul>
            </div>
        </li>
    )
}