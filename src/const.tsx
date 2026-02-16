import type {ReactNode} from "react";

import {CodeIcon} from "@/components/icons/CodeIcon.tsx";
import {PydanticIcon} from "@/components/icons/technology/PydanticIcon.tsx";
import {BashIcon} from "@/components/icons/technology/BashIcon.tsx";
import {PythonIcon} from "@/components/icons/technology/PythonIcon.tsx";
import {ReactIcon} from "@/components/icons/technology/ReactIcon.tsx";
import {NextIcon} from "@/components/icons/technology/NextIcon.tsx";
import {TypeScriptIcon} from "@/components/icons/technology/TypeScriptIcon.tsx";
import {JavaScriptIcon} from "@/components/icons/technology/JavaScriptIcon.tsx";
import {SASSIcon} from "@/components/icons/technology/SASSIcon.tsx";
import {GitHubIcon} from "@/components/icons/GitHubIcon.tsx";
import {GitIcon} from "@/components/icons/GitIcon.tsx";

export const CHAPTERS = {
    WHO_I_AM: "who-i-am",
    MY_SKILLS: "my-skills",
    MY_SKILLS_ADDITION: "my-skills-addition",
    SERVICES: "my-services"
}

export type SkillData = {
    name: string
    icon?: ReactNode | null | undefined
    id: string
    useDefaultStyle: boolean
}

export type ServiceFeatureData = {
    featureText: string
}

export type ServiceData = {
    title: string
    icon: ReactNode
    price: number
    colorName: string
    features: ServiceFeatureData[]
}

export const H2_ICON_SIZE: number = 36
export const H3_ICON_SIZE: number = 28

const SKILL_ICON_SIZE: number = 20
const DEFAULT_ICON_COLOR: string = "currentColor"

export const backendSkills: SkillData[] = [
    {
        name: "Python",
        id: "python",
        useDefaultStyle: false,
        icon: <PythonIcon width={SKILL_ICON_SIZE} height={SKILL_ICON_SIZE} iconColor={DEFAULT_ICON_COLOR}/>
    },
    {
        name: "FastAPI",
        id: "fastapi",
        useDefaultStyle: false,
        icon: <CodeIcon width={SKILL_ICON_SIZE} height={SKILL_ICON_SIZE} iconColor={DEFAULT_ICON_COLOR}/>
    },
    {
        name: "Pydantic",
        id: "pydantic",
        useDefaultStyle: false,
        icon: <PydanticIcon width={SKILL_ICON_SIZE} height={SKILL_ICON_SIZE} iconColor={DEFAULT_ICON_COLOR}/>
    },
    {
        name: "Aiogram",
        id: "aigram",
        useDefaultStyle: true
    },
    {
        name: "Disnake",
        id: "disnake",
        useDefaultStyle: true
    },
    {
        name: "SQLAlchemy",
        id: "sqlaclhemy",
        useDefaultStyle: true
    },
    {
        name: "Bash",
        id: "bash",
        useDefaultStyle: false,
        icon: <BashIcon width={SKILL_ICON_SIZE} height={SKILL_ICON_SIZE} iconColor={DEFAULT_ICON_COLOR}/>
    },
]

export const frontendSkills: SkillData[] = [
    {
        name: "HTML",
        id: "html",
        useDefaultStyle: false,
        icon: <CodeIcon width={SKILL_ICON_SIZE} height={SKILL_ICON_SIZE} iconColor={DEFAULT_ICON_COLOR}/>
    },
    {
        name: "CSS",
        id: "css",
        useDefaultStyle: false,
        icon: <CodeIcon width={SKILL_ICON_SIZE} height={SKILL_ICON_SIZE} iconColor={DEFAULT_ICON_COLOR}/>
    },
    {
        name: "SCSS",
        id: "scss",
        useDefaultStyle: false,
        icon: <SASSIcon width={SKILL_ICON_SIZE} height={SKILL_ICON_SIZE} iconColor={DEFAULT_ICON_COLOR}/>
    },
    {
        name: "JavaScript",
        id: "javascript",
        useDefaultStyle: false,
        icon: <JavaScriptIcon width={SKILL_ICON_SIZE} height={SKILL_ICON_SIZE} iconColor={DEFAULT_ICON_COLOR}/>
    },
    {
        name: "TypeScript",
        id: "typescript",
        useDefaultStyle: false,
        icon: <TypeScriptIcon width={SKILL_ICON_SIZE} height={SKILL_ICON_SIZE} iconColor={DEFAULT_ICON_COLOR}/>
    },
    {
        name: "Next",
        id: "nextjs",
        useDefaultStyle: false,
        icon: <NextIcon width={SKILL_ICON_SIZE} height={SKILL_ICON_SIZE} iconColor={DEFAULT_ICON_COLOR}/>
    },
    {
        name: "React",
        id: "reactjs",
        useDefaultStyle: false,
        icon: <ReactIcon width={SKILL_ICON_SIZE} height={SKILL_ICON_SIZE} iconColor={DEFAULT_ICON_COLOR}/>
    },
]

export const CICDSkills: SkillData[] = [
    {
        name: "Git",
        id: "git",
        useDefaultStyle: false,
        icon: <GitIcon width={SKILL_ICON_SIZE} height={SKILL_ICON_SIZE} iconColor={DEFAULT_ICON_COLOR}/>
    },
    {
        name: "GitHub",
        id: "github",
        useDefaultStyle: true,
        icon: <GitHubIcon width={SKILL_ICON_SIZE} height={SKILL_ICON_SIZE} iconColor={DEFAULT_ICON_COLOR}/>
    },
    {
        name: "Docker",
        id: "docker",
        useDefaultStyle: false,
        icon: <CodeIcon width={SKILL_ICON_SIZE} height={SKILL_ICON_SIZE} iconColor={DEFAULT_ICON_COLOR}/>
    },
]

export const services: ServiceData[] = [
    {
        title: "Верстка",
        colorName: "purple",
        price: 3000,
        icon: <GitIcon width={H3_ICON_SIZE} height={H3_ICON_SIZE} iconColor={DEFAULT_ICON_COLOR}/>,
        features: [
            {featureText: ""}
        ]
    },
    {
        title: "Сайт",
        colorName: "red",
        price: 6000,
        icon: <GitIcon width={H3_ICON_SIZE} height={H3_ICON_SIZE} iconColor={DEFAULT_ICON_COLOR}/>,
        features: [
            {featureText: ""}
        ]
    },
    {
        title: "Telegram бот",
        colorName: "telegram",
        price: 4000,
        icon: <GitIcon width={H3_ICON_SIZE} height={H3_ICON_SIZE} iconColor={DEFAULT_ICON_COLOR}/>,
        features: [
            {featureText: ""}
        ]
    },
    {
        title: "Discord бот",
        colorName: "discord",
        price: 4000,
        icon: <GitIcon width={H3_ICON_SIZE} height={H3_ICON_SIZE} iconColor={DEFAULT_ICON_COLOR}/>,
        features: [
            {featureText: ""}
        ]
    },
]

// export const AIMLSkills: SkillData[] = {
//
// }
