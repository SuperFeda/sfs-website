import {Layout} from "@/components/Layout.tsx";
import {AboutSection} from "@/components/sections/AboutSection.tsx";
import {SkillsSection} from "@/components/sections/SkillsSection.tsx";
import {TitleWithIcon} from "@/components/TitleWithIcon.tsx";
import {CodeIcon} from "@/components/icons/CodeIcon.tsx";
import {SkillCard} from "@/components/cards/SkillCard.tsx";
import {Skill} from "@/components/Skill";
import {ServerIcon} from "@/components/icons/ServerIcon.tsx";
import {
    backendSkills,
    H2_ICON_SIZE,
    CHAPTERS,
    CICDSkills,
    frontendSkills,
    type SkillData,
    H3_ICON_SIZE, services, type ServiceData, type ServiceFeatureData
} from "@/const.tsx";
import {MagicBallIcon} from "@/components/icons/MagicBallIcon.tsx";
import type {ReactNode} from "react";
import {CodeMergeIcon} from "@/components/icons/CodeMergeIcon.tsx";
import {DrawingCompassIcon} from "@/components/icons/DrawingCompassIcon.tsx";
import {GitHubIcon} from "@/components/icons/GitHubIcon.tsx";
import {TelegramIcon} from "@/components/icons/TelegramIcon.tsx";
import {ModrinthIcon} from "@/components/icons/ModrinthIcon.tsx";
import {ServicesSection} from "@/components/sections/ServicesSection.tsx";
import {ServiceCard} from "@/components/cards/ServiceCard.tsx";

const placeSkillElement = (skill: SkillData): ReactNode => (
    skill.useDefaultStyle
        ? <Skill icon={skill.icon} key={`skill_${skill.id}`} name={skill.name} className={`skills-card__skill`} />
        : <Skill icon={skill.icon} key={`skill_${skill.id}`} name={skill.name} className={`skills-card__skill skill--${skill.id}`} />
)

export function MainPage() {
    return (
        <Layout>
            <AboutSection id={CHAPTERS.WHO_I_AM}>
                <h1 className={"about-section__title title"}>Im SuperFeda<br/><span className={"skylight-blue-text italic-style"}>Full-stack</span> разработчик</h1>
                <p className={"about-section__description"}>
                    Я <span className={"skylight-blue-text"}>full-stack</span> разработчик, специализируюсь на создании надёжных веб-платформ и ботов. На бэкенде использую <span className={"python-text"}>Python</span>, <span className={"fastapi-text"}>FastAPI</span> и <span className={"pydantic-text"}>Pydantic</span> для построения эффективных API. Фронтенд разрабатываю на <span className={"typescript-text"}>TypeScript</span>, <span className={"react-text"}>React</span> и Next.js, верстаю с использованием <span className={"scss-text"}>SCSS</span> вместе с <span className={"bem-methodology-text"}>БЭМ методологией</span>. Также создаю ботов для <span className={"telegram-text"}>Telegram</span> и <span className={"discord-text"}>Discord</span>.
                </p>
                <ul className={"about-section__list"}>
                    <li className={"about-section__list-point"}>
                        <a
                            className={"about-section__button button button--with-svg"}
                            href={"https://t.me/fninf9"}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={"Ссылка на мой Telegram"}
                        >
                            <TelegramIcon width={18} height={18} iconColor={"currentColor"} />
                            <span>Мой Telegram</span>
                        </a>
                    </li>
                    <li className={"about-section__list-point"}>
                        <a
                            className={"about-section__button button button--with-svg"}
                            href={"https://github.com/SuperFeda"}
                            title={"Ссылка на мой GitHub"}
                        >
                            <GitHubIcon width={18} height={18} iconColor={"currentColor"} />
                            <span>GitHub</span>
                        </a>
                    </li>
                    <li className={"about-section__list-point"}>
                        <a
                            className={"about-section__button button button--with-svg"}
                            href={"https://modrinth.com/user/SuperFeda"}
                            title={"Ссылка на мой Modrinth"}
                        >
                            <ModrinthIcon width={18} height={18} iconColor={"currentColor"} />
                            <span>Modrinth</span>
                        </a>
                    </li>
                </ul>
            </AboutSection>

            <SkillsSection id={CHAPTERS.MY_SKILLS}>
                <TitleWithIcon
                    icon={<DrawingCompassIcon iconColor={"currentColor"} height={H2_ICON_SIZE} width={H2_ICON_SIZE} />}
                    titleText={"Мои навыки"}
                    className={"skills-section__title title--600 title--red-icon"}
                />
                <ul className={"skills-section__list"}>
                    <SkillCard
                        className={"skills-section__skill-card"}
                        titleClassName={"title--skylight-blue-icon"}
                        titleText={"Backend"}
                        icon={<ServerIcon height={H3_ICON_SIZE} width={H3_ICON_SIZE} iconColor={"currentColor"} />}
                    >
                        {backendSkills.map(placeSkillElement)}
                    </SkillCard>
                    <SkillCard
                        className={"skills-section__skill-card"}
                        titleClassName={"title--blue-icon"}
                        titleText={"Frontend"}
                        icon={<MagicBallIcon height={H3_ICON_SIZE} width={H3_ICON_SIZE} iconColor={"currentColor"} />}
                    >
                        {frontendSkills.map(placeSkillElement)}
                    </SkillCard>
                    <SkillCard
                        className={"skills-section__skill-card"}
                        titleClassName={"title--purple-icon"}
                        titleText={"CI/CD, окружение"}
                        icon={<CodeMergeIcon height={H3_ICON_SIZE} width={H3_ICON_SIZE} iconColor={"currentColor"} />}
                    >
                        {CICDSkills.map(placeSkillElement)}
                    </SkillCard>
                </ul>
            </SkillsSection>

            {/*<SkillsSection id={CHAPTERS.MY_SKILLS_ADDITION}>*/}
            {/*    <TitleWithIcon*/}
            {/*        icon={<CodeIcon iconColor={"currentColor"} height={H2_ICON_SIZE} width={H2_ICON_SIZE} />}*/}
            {/*        titleText={"Также имел опыт с ..."}*/}
            {/*        className={"skills-section__title title--red-icon"}*/}
            {/*    />*/}
            {/*    <ul className={"skills-section__list"}>*/}
            {/*        <SkillCard*/}
            {/*            className={"skills-section__skill-card"}*/}
            {/*            titleClassName={"title--blue-icon"}*/}
            {/*            titleText={"Frontend"}*/}
            {/*            icon={<MagicBallIcon height={H3_ICON_SIZE} width={H3_ICON_SIZE} iconColor={"currentColor"} />}*/}
            {/*        >*/}
            {/*            {frontendSkills.map(placeSkillElement)}*/}
            {/*        </SkillCard>*/}
            {/*    </ul>*/}
            {/*</SkillsSection>*/}

            {/*<ServicesSection id={CHAPTERS.SERVICES}>*/}
            {/*    <TitleWithIcon*/}
            {/*        icon={<CodeIcon iconColor={"currentColor"} height={H2_ICON_SIZE} width={H2_ICON_SIZE} />}*/}
            {/*        titleText={"Услуги"}*/}
            {/*        className={"services-section__title title--600 title--red-icon"}*/}
            {/*    />*/}
            {/*    <p className={"services-section__description"}>ANUS!</p>*/}
            {/*    <ul className={"services-section__list"}>*/}
            {/*        {*/}
            {/*            services.map((service: ServiceData, i: number): ReactNode => (*/}
            {/*                <li>*/}
            {/*                    <ServiceCard*/}
            {/*                        key={`service-card-${i}`}*/}
            {/*                        className={"services-section__service-card"}*/}
            {/*                        color={service.colorName}*/}
            {/*                        titleText={service.title}*/}
            {/*                        price={service.price}*/}
            {/*                        titleClassName={`title--${service.colorName}-icon`}*/}
            {/*                        icon={service.icon}*/}
            {/*                    >*/}
            {/*                        {*/}
            {/*                            service.features.map((feature: ServiceFeatureData): ReactNode => (*/}
            {/*                                <p>{feature.featureText}</p>*/}
            {/*                            ))*/}
            {/*                        }*/}
            {/*                    </ServiceCard>*/}
            {/*                </li>*/}
            {/*            ))*/}
            {/*        }*/}
            {/*    </ul>*/}
            {/*</ServicesSection>*/}
        </Layout>
    )
}
