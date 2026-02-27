import {CHAPTERS, DEFAULT_ICON_COLOR, H3_ICON_SIZE, SKILL_ICON_SIZE} from "@/utils/const.ts";
import type {ServiceData, SkillData, ProjectData} from "@/utils/types.ts";
import {PythonIcon} from "@/components/icons/technology/PythonIcon.tsx";
import {CodeIcon} from "@/components/icons/CodeIcon.tsx";
import {PydanticIcon} from "@/components/icons/technology/PydanticIcon.tsx";
import {BashIcon} from "@/components/icons/technology/BashIcon.tsx";
import {HTMLIcon} from "@/components/icons/technology/HTMLIcon.tsx";
import {CSSIcon} from "@/components/icons/technology/CSSIcon.tsx";
import {SASSIcon} from "@/components/icons/technology/SASSIcon.tsx";
import {JavaScriptIcon} from "@/components/icons/technology/JavaScriptIcon.tsx";
import {TypeScriptIcon} from "@/components/icons/technology/TypeScriptIcon.tsx";
import {NextIcon} from "@/components/icons/technology/NextIcon.tsx";
import {ReactIcon} from "@/components/icons/technology/ReactIcon.tsx";
import {GitIcon} from "@/components/icons/technology/GitIcon.tsx";
import {GitHubIcon} from "@/components/icons/GitHubIcon.tsx";
import {DockerIcon} from "@/components/icons/technology/DockerIcon.tsx";
import {FolderIcon} from "@/components/icons/FolderIcon.tsx";
import {DrawingCompassIcon} from "@/components/icons/DrawingCompassIcon.tsx";
import {TelegramIcon} from "@/components/icons/TelegramIcon.tsx";
import {DiscordIcon} from "@/components/icons/DiscordIcon.tsx";
import {RulerIcon} from "@/components/icons/RulerIcon.tsx";
import {InternetIcon} from "@/components/icons/InternetIcon.tsx";

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
        icon: <HTMLIcon width={SKILL_ICON_SIZE} height={SKILL_ICON_SIZE} iconColor={DEFAULT_ICON_COLOR}/>
    },
    {
        name: "CSS",
        id: "css",
        useDefaultStyle: false,
        icon: <CSSIcon width={SKILL_ICON_SIZE} height={SKILL_ICON_SIZE} iconColor={DEFAULT_ICON_COLOR}/>
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
        name: "ReactJS",
        id: "reactjs",
        useDefaultStyle: false,
        icon: <ReactIcon width={SKILL_ICON_SIZE} height={SKILL_ICON_SIZE} iconColor={DEFAULT_ICON_COLOR}/>
    },
    {
        name: "NextJS",
        id: "nextjs",
        useDefaultStyle: true,
        icon: <NextIcon width={SKILL_ICON_SIZE} height={SKILL_ICON_SIZE} iconColor={DEFAULT_ICON_COLOR}/>
    },
    {
        name: "БЭМ методология",
        id: "bem-methodology",
        useDefaultStyle: false,
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
        icon: <DockerIcon width={SKILL_ICON_SIZE} height={SKILL_ICON_SIZE} iconColor={DEFAULT_ICON_COLOR}/>
    },
]

// export const DBSkills: SkillData[] = [
//     {
//         name: "PostgreSQL",
//         id: "postgresql",
//         useDefaultStyle: false,
//         icon: <CodeIcon width={SKILL_ICON_SIZE} height={SKILL_ICON_SIZE} iconColor={DEFAULT_ICON_COLOR}/>,
//     },
//     {
//         name: "SQLLite",
//         id: "sqllite",
//         useDefaultStyle: false,
//         icon: <CodeIcon width={SKILL_ICON_SIZE} height={SKILL_ICON_SIZE} iconColor={DEFAULT_ICON_COLOR}/>,
//     },
//     {
//         name: "Redis",
//         id: "redis",
//         useDefaultStyle: false,
//         icon: <CodeIcon width={SKILL_ICON_SIZE} height={SKILL_ICON_SIZE} iconColor={DEFAULT_ICON_COLOR}/>,
//     },
// ]

// export const AIMLSkills: SkillData[] = [
//
// ]

export const services: ServiceData[] = [
    {
        title: "service.telegram_bot.title.text",
        colorName: "telegram",
        price: 2500,
        icon: <TelegramIcon width={H3_ICON_SIZE} height={H3_ICON_SIZE} iconColor={DEFAULT_ICON_COLOR}/>,
        description: "service.telegram_bot.description.text",
    },
    {
        title: "service.site_design.title.text",
        colorName: "purple",
        price: 3000,
        icon: <RulerIcon width={H3_ICON_SIZE} height={H3_ICON_SIZE} iconColor={DEFAULT_ICON_COLOR}/>,
        description: "service.site_design.description.text",
    },
    {
        title: "service.site.title.text",
        colorName: "red",
        price: 3500,
        icon: <InternetIcon width={H3_ICON_SIZE} height={H3_ICON_SIZE} iconColor={DEFAULT_ICON_COLOR}/>,
        description: "service.site.description.text",
    },
    {
        title: "service.discord_bot.title.text",
        colorName: "discord",
        price: 2500,
        icon: <DiscordIcon width={H3_ICON_SIZE} height={H3_ICON_SIZE} iconColor={DEFAULT_ICON_COLOR}/>,
        description: "service.discord_bot.description.text",
    },
]

export const headerLinks = [
    {
        text: "link.header.about.text",
        icon: <GitHubIcon height={"auto"} width={"1.5em"} iconColor={"currentColor"} />,
        link: `#${CHAPTERS.WHO_I_AM}`,
        title: "link.header.about.hover_text"
    },
    {
        text: "link.header.skills.text",
        icon: <DrawingCompassIcon height={"auto"} width={"1.5em"} iconColor={"currentColor"} />,
        link: `#${CHAPTERS.SKILLS}`,
        title: "link.header.skills.hover_text"
    },
    {
        text: "link.header.projects.text",
        icon: <FolderIcon height={"auto"} width={"1.5em"} iconColor={"currentColor"} />,
        link: `#${CHAPTERS.PROJECTS}`,
        title: "link.header.projects.hover_text"
    },
    {
        text: "link.header.services.text",
        icon: <CodeIcon height={"auto"} width={"1.5em"} iconColor={"currentColor"} />,
        link: `#${CHAPTERS.SERVICES}`,
        title: "link.header.services.hover_text"
    },
]

export const projects: ProjectData[] = [
    {
        type: "other",
        title: "project_card.aioheleket.title.text",
        description: "project_card.aioheleket.description.text",
        bgImageURL: "https://heleket.com/_next/image?url=%2Fimg%2Fmain-page%2Ffirst-block%2Fmain-background.webp&w=1920&q=75",
        baseStack: [
            {
                name: "aiohttp",
                id: "aiohttp",
                useDefaultStyle: true
            },
            {
                name: "Pydantic",
                id: "pydantic",
                useDefaultStyle: false,
                icon: <PydanticIcon width={18} height={18} iconColor={DEFAULT_ICON_COLOR} />
            },
        ],
        otherStack: [
            {
                name: "setuptools",
                id: "setuptools",
                useDefaultStyle: true
            },
        ],
        buttons: [
            {
                text: "GitHub",
                href: "https://github.com/SuperFeda/aioheleket",
                icon: <GitHubIcon width={16} height={16} iconColor={DEFAULT_ICON_COLOR}/>
            },
        ],
    },
    {
        type: "bot",
        title: "project_card.star_channel.title.text",
        description: "project_card.star_channel.description.text",
        baseStack: [
            {
                name: "Python",
                id: "python",
                useDefaultStyle: false,
                icon: <PythonIcon width={18} height={18} iconColor={DEFAULT_ICON_COLOR} />
            },
            {
                name: "aiogram",
                id: "aiogram",
                useDefaultStyle: true,
            },
            {
                name: "SQLAlchemy",
                id: "sqlalchemy",
                useDefaultStyle: true,
            },
            {
                name: "SQLite",
                id: "sqlite",
                useDefaultStyle: true,
            },
            {
                name: "apscheduler",
                id: "apscheduler",
                useDefaultStyle: true,
            },
        ],
        otherStack: [
            {
                name: "aiogram dialog",
                id: "aiogram_dialog",
                useDefaultStyle: true,
            },
        ],
    },
    {
        type: "bot",
        title: "project_card.skylightservices_bot.title.text",
        description: "project_card.skylightservices_bot.description.text",
        baseStack: [
            {
                name: "Python",
                id: "python",
                useDefaultStyle: false,
                icon: <PythonIcon width={18} height={18} iconColor={DEFAULT_ICON_COLOR} />
            },
            {
                name: "Disnake",
                id: "disnake",
                useDefaultStyle: true,
            },
            {
                name: "SQLAlchemy",
                id: "sqlalchemy",
                useDefaultStyle: true,
            },
            {
                name: "SQLite",
                id: "sqlite",
                useDefaultStyle: true,
            },
        ],
    },
    {
        type: "website",
        title: "project_card.sfs_site.title.text",
        description: "project_card.sfs_site.description.text",
        bgImageURL: "./img/sfs_site.png",
        baseStack: [
            {
                name: "React",
                id: "reactjs",
                useDefaultStyle: false,
                icon: <ReactIcon width={18} height={18} iconColor={DEFAULT_ICON_COLOR} />
            },
            {
                name: "TypeScript",
                id: "typescript",
                useDefaultStyle: false,
                icon: <TypeScriptIcon width={18} height={18} iconColor={DEFAULT_ICON_COLOR} />
            },
            {
                name: "SCSS",
                id: "scss",
                useDefaultStyle: false,
                icon: <SASSIcon width={18} height={18} iconColor={DEFAULT_ICON_COLOR} />
            },
            {
                name: "БЭМ",
                id: "bem-methodology",
                useDefaultStyle: false,
            },
            {
                name: "Zustand",
                id: "zustand",
                useDefaultStyle: true,
            },
            {
                name: "i18next",
                id: "i18next",
                useDefaultStyle: true,
            },
        ],
        otherStack: [
            {
                name: "shadcn ui",
                id: "shadcn-ui",
                useDefaultStyle: true,
            },
        ],
        buttons: [
            {
                text: "GitHub",
                href: "https://github.com/SuperFeda/aioheleket",
                icon: <GitHubIcon width={16} height={16} iconColor={DEFAULT_ICON_COLOR}/>
            },
        ],
    },
]
