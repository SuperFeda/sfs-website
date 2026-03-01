import React, {type AnchorHTMLAttributes, type ReactNode} from "react";

import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card.tsx";
import type {TechnologyVariant} from "@/utils/types.ts";
import {useTranslation} from "react-i18next";
import {TechnologyTemp} from "@/components/TechnologyTemp.tsx";
import {SKILL_ICON_SIZE} from "@/utils/const.ts";

interface ProjectCardProps {
    titleText: string
    description: string
    className?: string | undefined
    bgImageURL?: string | undefined
}

export function ProjectCard({children, bgImageURL, className = "", titleText, description}: React.PropsWithChildren<ProjectCardProps>) {
    const {t} = useTranslation()

    return (
        <div
            className={`project-card ${className}`}
            style={bgImageURL ? {
                background: `url('${bgImageURL}') center/cover no-repeat`,
                backgroundColor: "rgba(3,3,3,0.8)",
                backgroundBlendMode: "multiply",
            }: {}}
        >
            <div className={"project-card__content"}>
                <div className={"project-card__top"}>
                    <h3 className={"project-card__title title"}>{t(titleText)}</h3>
                    <p className={"project-card__description"}>{t(description)}</p>
                </div>
                <div className={"project-card__bottom"}>
                    {children}
                </div>
            </div>
        </div>
    )
}

interface ProjectCardAnchorProps extends AnchorHTMLAttributes<never> { icon?: ReactNode | undefined }
export function ProjectCardAnchor({children, icon, className = "", ...props}: React.PropsWithChildren<ProjectCardAnchorProps>) {
    return (
        <li className={"project-card__button-list-point"}>
            {icon
                ? <a className={`project-card__button button button--with-svg ${className}`} {...props}>{icon}<span>{children}</span></a>
                : <a className={`project-card__button button ${className}`} {...props}>{children}</a>
            }
        </li>
    )
}

export function ProjectCardButtonList({children}: React.PropsWithChildren) {
    return (
        <ul className={"project-card__button-list"}>
            {children}
        </ul>
    )
}

export function ProjectCardListItem({children}: React.PropsWithChildren) {
    return (
        <li className={"project-card__list-point"}>
            {children}
        </li>
    )
}

export function ProjectCardStack({children}: React.PropsWithChildren) {
    return (
        <ul className={"project-card__stack-list"}>
            {children}
        </ul>
    )
}

interface ProjectCardOtherStackProps { openDelay: number, closeDelay: number, technologyList: TechnologyVariant[] }
export function ProjectCardOtherStack({openDelay, closeDelay, technologyList}: ProjectCardOtherStackProps) {
    return (
        <HoverCard openDelay={openDelay} closeDelay={closeDelay}>
            <HoverCardTrigger asChild={true}>
                <button className={"project-card__button-hover-content button-hover-content"}>{`+${technologyList.length}`}</button>
            </HoverCardTrigger>
            <HoverCardContent side={"top"} className={"project-card__button-hover-content-popup"}>
                {technologyList.map((technology: string) => (
                    <TechnologyTemp
                        key={`project_other_technology_${technology}`}
                        variant={technology as TechnologyVariant}
                        name={technology}
                        className={"project-card__skill"}
                        iconHeight={SKILL_ICON_SIZE}
                        iconWidth={SKILL_ICON_SIZE}
                    />
                ))}
            </HoverCardContent>
        </HoverCard>
    )
}
