import {CHAPTERS, DEFAULT_ICON_COLOR, H3_ICON_SIZE, SUPPORTED_LANGUAGES} from "@/utils/const.ts";
import type {ServiceData, ProjectData, TechnologyVariant} from "@/utils/types.ts";
import {CodeIcon} from "@/components/icons/CodeIcon.tsx";
import {GitHubIcon} from "@/components/icons/GitHubIcon.tsx";
import {FolderIcon} from "@/components/icons/FolderIcon.tsx";
import {DrawingCompassIcon} from "@/components/icons/DrawingCompassIcon.tsx";
import {TelegramIcon} from "@/components/icons/TelegramIcon.tsx";
import {DiscordIcon} from "@/components/icons/DiscordIcon.tsx";
import {RulerIcon} from "@/components/icons/RulerIcon.tsx";
import {InternetIcon} from "@/components/icons/InternetIcon.tsx";
import {VKLogoIcon} from "@/components/icons/VKLogoIcon.tsx";

export const backendSkills: TechnologyVariant[] = [
    "python",
    "fastapi",
    "pydantic",
    "aiogram",
    "disnake",
    "sqlalchemy",
    "alembic",
    "bash",
]

export const frontendSkills: TechnologyVariant[] = [
    "html",
    "css",
    "scss",
    "javascript",
    "typescript",
    "reactjs",
    "nextjs",
    "i18next",
    "bem_methodology",
]

export const CICDSkills: TechnologyVariant[] = [
    "git",
    "github",
    "docker",
]

export const DBSkills: TechnologyVariant[] = [
    // "postgresql",
    // "sqlite",
    // "redis",
]

// export const AIMLSkills: SkillData[] = [
//
// ]

export const services: ServiceData[] = [
    {
        title: "service.telegram_bot.title.text",
        colorName: "telegram",
        price: {
            rub: {amount: 2500, type: "rub"},
            usd: {amount: 40, type: "usd"},
        },
        icon: <TelegramIcon width={H3_ICON_SIZE} height={H3_ICON_SIZE} iconColor={DEFAULT_ICON_COLOR}/>,
        description: "service.telegram_bot.description.text",
    },
    {
        title: "service.site_design.title.text",
        colorName: "purple",
        price: {
            rub: {amount: 2400, type: "rub"},
            usd: {amount: 39, type: "usd"},
        },
        icon: <RulerIcon width={H3_ICON_SIZE} height={H3_ICON_SIZE} iconColor={DEFAULT_ICON_COLOR}/>,
        description: "service.site_design.description.text",
    },
    {
        title: "service.site.title.text",
        colorName: "red",
        price: {
            rub: {amount: 3800, type: "rub"},
            usd: {amount: 56, type: "usd"},
        },
        icon: <InternetIcon width={H3_ICON_SIZE} height={H3_ICON_SIZE} iconColor={DEFAULT_ICON_COLOR}/>,
        description: "service.site.description.text",
    },
    {
        title: "service.discord_bot.title.text",
        colorName: "discord",
        price: {
            rub: {amount: 2500, type: "rub"},
            usd: {amount: 40, type: "usd"},
        },
        icon: <DiscordIcon width={H3_ICON_SIZE} height={H3_ICON_SIZE} iconColor={DEFAULT_ICON_COLOR}/>,
        description: "service.discord_bot.description.text",
    },
    {
        title: "service.vk_bot.title.text",
        colorName: "vk",
        price: {
            rub: {amount: 2500, type: "rub"},
            usd: {amount: 40, type: "usd"},
        },
        icon: <VKLogoIcon width={H3_ICON_SIZE} height={H3_ICON_SIZE} iconColor={DEFAULT_ICON_COLOR}/>,
        description: "service.vk_bot.description.text",
    },
]

export const projects: ProjectData[] = [
    {
        type: "other",
        title: "project_card.aioheleket.title.text",
        description: "project_card.aioheleket.description.text",
        badge: "library",
        bgImageURL: "https://heleket.com/_next/image?url=%2Fimg%2Fmain-page%2Ffirst-block%2Fmain-background.webp&w=1920&q=75",
        baseStack: [
            "python",
            "aiohttp",
            "pydantic",
        ],
        otherStack: [
            "setuptools",
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
        badge: "telegram_bot",
        baseStack: [
            "python",
            "aiogram",
            "sqlalchemy",
            "sqlite",
            "apscheduler",
        ],
        otherStack: [
            "aiogram_dialog",
        ],
    },
    {
        type: "bot",
        title: "project_card.skylightservices_bot.title.text",
        description: "project_card.skylightservices_bot.description.text",
        badge: "discord_bot",
        baseStack: [
            "python",
            "disnake",
            "sqlalchemy",
            "sqlite",
        ],
    },
    {
        type: "website",
        title: "project_card.sfs_site.title.text",
        description: "project_card.sfs_site.description.text",
        badge: "website",
        bgImageURL: "./img/sfs_site.png",
        baseStack: [
            "reactjs",
            "typescript",
            "scss",
            "bem_methodology",
            "zustand",
            "i18next",
        ],
        otherStack: [
            "shadcn-ui",
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

export const languages = [
    {name: "Русский", id: SUPPORTED_LANGUAGES.RU},
    {name: "English", id: SUPPORTED_LANGUAGES.EN},
    {name: "Монгол хэл", id: SUPPORTED_LANGUAGES.MN},
    {name: "Русскій (дореформенный)", id: SUPPORTED_LANGUAGES.RU1918}
]
