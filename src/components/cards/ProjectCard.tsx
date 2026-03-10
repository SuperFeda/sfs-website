import React, {type AnchorHTMLAttributes, type ReactNode} from "react";

import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card.tsx";
import type {TechnologyVariant} from "@/utils/types.ts";
import {useTranslation} from "react-i18next";
import {TechnologyTemp} from "@/components/TechnologyTemp.tsx";
import {SKILL_ICON_SIZE} from "@/utils/const.ts";

interface ProjectCardProps {
    titleText: string
    description: string
    projectBadge: BadgeVariant
    className?: string | undefined
    bgImageURL?: string | undefined
}

export function ProjectCard({children, projectBadge, bgImageURL, className = "", titleText, description}: React.PropsWithChildren<ProjectCardProps>) {
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
                    <div className={"project-card__head"}>
                        <h3 className={"project-card__title title"}>{t(titleText)}</h3>
                        <ProjectBadge variant={projectBadge} />
                    </div>
                    <p className={"project-card__description"}>{t(description)}</p>
                </div>
                <div className={"project-card__bottom"}>
                    {children}
                </div>
            </div>
        </div>
    )
}

const badgesData = {
    library: { translateKey: "project_card.badge.library.text", style: "red-text" },
    telegram_bot: { translateKey: "project_card.badge.telegram_bot.text", style: "telegram-text" },
    discord_bot: { translateKey: "project_card.badge.discord_bot.text", style: "discord-text" },
    vk_bot: { translateKey: "project_card.badge.vk_bot.text", style: "vk-text" },
    site_design: { translateKey: "project_card.badge.site_design.text", style: "" },
    website: { translateKey: "project_card.badge.website.text", style: "pale-blue-text" },
}

export type BadgeVariant = keyof typeof badgesData

interface ProjectBadgeProps {
    variant: BadgeVariant
}
export function ProjectBadge({variant}: ProjectBadgeProps) {
    const badge = variant ? badgesData[variant] : null

    const {t} = useTranslation()

    if (badge) {
        return (
            <span className={`project-card__badge glass ${badge.style}`}>{t(badge.translateKey)}</span>
        )
    }
}

interface ProjectCardAnchorProps extends AnchorHTMLAttributes<never> {
    icon?: ReactNode | undefined
}
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

interface ProjectCardOtherStackProps {
    openDelay: number,
    closeDelay: number,
    technologyList: TechnologyVariant[]
}
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
