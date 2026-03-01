import {PythonIcon} from "@/components/icons/technology/PythonIcon.tsx";
import {TypeScriptIcon} from "@/components/icons/technology/TypeScriptIcon.tsx";
import {JavaScriptIcon} from "@/components/icons/technology/JavaScriptIcon.tsx";
import {CSSIcon} from "@/components/icons/technology/CSSIcon.tsx";
import {HTMLIcon} from "@/components/icons/technology/HTMLIcon.tsx";
import {SASSIcon} from "@/components/icons/technology/SASSIcon.tsx";
import {BashIcon} from "@/components/icons/technology/BashIcon.tsx";
import {GitIcon} from "@/components/icons/technology/GitIcon.tsx";
import {GitHubIcon} from "@/components/icons/GitHubIcon.tsx";
import {DockerIcon} from "@/components/icons/technology/DockerIcon.tsx";
import {SQLiteIcon} from "@/components/icons/technology/SQLiteIcon.tsx";
import {CodeIcon} from "@/components/icons/CodeIcon.tsx";
import {PydanticIcon} from "@/components/icons/technology/PydanticIcon.tsx";
import {ReactIcon} from "@/components/icons/technology/ReactIcon.tsx";
import {NextIcon} from "@/components/icons/technology/NextIcon.tsx";

export const CHAPTERS = {
    WHO_I_AM: "who-i-am",
    SKILLS: "my-skills",
    SKILLS_ADDITION: "my-skills-addition",
    SERVICES: "my-services",
    PROJECTS: "my-projects"
}

export const PROJECT_TABS = {
    ALL_PROJECTS: "all-projects",
    BOTS: "bot",
    WEBSITES: "website",
    OTHER: "other"
}

export const CURRENCY_TABS = {
    rub: "rub",
    usd: "usd",
}

export const SUPPORTED_LANGUAGES = {
    RU: "ru",
    EN: "en",
    RU1918: "ru1918"
}

export const technologyConfig = {
    python: {name: "Python", style: "skill--python", icon: PythonIcon},
    typescript: {name: "TypeScript", style: "skill--typescript", icon: TypeScriptIcon},
    javascript: {name: "JavaScript", style: "skill--javascript", icon: JavaScriptIcon},
    css: {name: "CSS", style: "skill--css", icon: CSSIcon},
    html: {name: "HTML", style: "skill--html", icon: HTMLIcon},
    scss: {name: "SCSS", style: "skill--scss", icon: SASSIcon},
    bash: {name: "Bash", style: "skill--bash", icon: BashIcon},
    git: {name: "Git", style: "skill--git", icon: GitIcon},
    github: {name: "GitHub", style: null, icon: GitHubIcon},
    docker: {name: "Docker", style: "skill--docker", icon: DockerIcon},
    sqlite: {name: "SQLite", style: "skill--sqlite", icon: SQLiteIcon},
    sqlalchemy: {name: "SQLAlchemy", style: "skill--sqlalchemy", icon: null},
    bem_methodology: {name: "BEM methodology", style: "skill--bem-methodology", icon: null},
    fastapi: {name: "FastAPI", style: "skill--fastapi", icon: CodeIcon},
    aiogram: {name: "aiogram", style: "skill--aiogram", icon: null},
    pydantic: {name: "Pydantic", style: "skill--pydantic", icon: PydanticIcon},
    reactjs: {name: "ReactJS", style: "skill--reactjs", icon: ReactIcon},
    nextjs: {name: "NextJS", style: null, icon: NextIcon},
    disnake: {name: "disnake", style: null, icon: null},
    i18next: {name: "i18next", style: null, icon: null},
}

export const H2_ICON_SIZE: number = 32
export const H3_ICON_SIZE: number = 24

export const SKILL_ICON_SIZE: number = 19
export const DEFAULT_ICON_COLOR: string = "currentColor"



