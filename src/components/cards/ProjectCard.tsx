import React, {type AnchorHTMLAttributes, type ReactNode} from "react";

import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card.tsx";
import type {SkillData} from "@/utils/types.ts";
import {Skill} from "@/components/Skill.tsx";

interface ProjectCardProps {
    titleText: string
    description: string
    className?: string | undefined
    bgImageURL?: string | undefined
}

export function ProjectCard({children, bgImageURL, className = "", titleText, description}: React.PropsWithChildren<ProjectCardProps>) {
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
                <h3 className={"project-card__title title"}>{titleText}</h3>
                <p className={"project-card__description"}>{description}</p>
                {children}
            </div>
        </div>
    )
}

interface ProjectCardAnchorProps extends AnchorHTMLAttributes<never> { icon?: ReactNode | undefined }
export function ProjectCardAnchor({children, icon, className = "", ...props}: React.PropsWithChildren<ProjectCardAnchorProps>) {
    return (
        <li className={"project-card__button-list-point"}>
            {
                icon
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

interface ProjectCardStackProps { technologyList: SkillData[] }
export function ProjectCardStack({children, technologyList}: React.PropsWithChildren<ProjectCardStackProps>) {
    return (
        <ul className={"project-card__stack-list"}>
            {
                technologyList.map((technology: SkillData): ReactNode => (
                    <li className={"project-card__list-point"}>
                        <Skill
                            key={`project_card_technology_${technology.id}`}
                            name={technology.name}
                            icon={technology.icon}
                            className={!technology.useDefaultStyle ? `project-card__skill skill--${technology.id}` : `project-card__skill`}
                        />
                    </li>
                ))
            }
            {
                children &&
                <li className={"project-card__list-point"}>
                    {children}
                </li>
            }
        </ul>
    )
}

interface ProjectCardOtherStackProps { openDelay: number, closeDelay: number, technologyList: SkillData[] }
export function ProjectCardOtherStack({openDelay, closeDelay, technologyList}: ProjectCardOtherStackProps) {
    return (
        <HoverCard openDelay={openDelay} closeDelay={closeDelay}>
            <HoverCardTrigger asChild={true}>
                <button className={"button-hover-content project-card__button-hover-content"}>{`+${technologyList.length}`}</button>
            </HoverCardTrigger>
            <HoverCardContent side={"top"} className={"project-card__button-hover-content-popup"}>
                {
                    technologyList.map((technology: SkillData): ReactNode => (
                        <Skill
                            icon={technology.icon}
                            key={`project_card_technology_${technology.id}`}
                            name={technology.name}
                            className={!technology.useDefaultStyle ? `project-card__skill skill--${technology.id}` : `project-card__skill`}
                        />
                    ))
                }
            </HoverCardContent>
        </HoverCard>
    )
}
