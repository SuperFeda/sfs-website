import {Layout} from "@/components/Layout.tsx";
import {AboutSection} from "@/components/sections/AboutSection.tsx";
import {SkillsSection} from "@/components/sections/SkillsSection.tsx";
import {TitleWithIcon} from "@/components/TitleWithIcon.tsx";
import {Skill} from "@/components/Skill";
import {ServerIcon} from "@/components/icons/ServerIcon.tsx";
import {
    H2_ICON_SIZE,
    CHAPTERS,
    H3_ICON_SIZE, PROJECT_TABS,
} from "@/utils/const.ts";
import {
    services,
    backendSkills,
    frontendSkills,
    CICDSkills,
    projects
} from "@/utils/portfolioDataLists.tsx"
import type {ProjectData, ServiceData, SkillData} from "@/utils/types.ts"
import {MagicBallIcon} from "@/components/icons/MagicBallIcon.tsx";
import {type ReactNode} from "react";
import {CodeMergeIcon} from "@/components/icons/CodeMergeIcon.tsx";
import {DrawingCompassIcon} from "@/components/icons/DrawingCompassIcon.tsx";
import {GitHubIcon} from "@/components/icons/GitHubIcon.tsx";
import {TelegramIcon} from "@/components/icons/TelegramIcon.tsx";
import {ServicesSection} from "@/components/sections/ServicesSection.tsx";
import {CodeIcon} from "@/components/icons/CodeIcon.tsx";
import {SkillCard} from "@/components/cards/SkillCard.tsx";
import {ServiceCard} from "@/components/cards/ServiceCard.tsx";
import {ProjectsSection} from "@/components/sections/ProjectsSection.tsx";
import {FolderIcon} from "@/components/icons/FolderIcon.tsx";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import {
    ProjectCard,
    ProjectCardOtherStack,
    ProjectCardStack,
    ProjectCardAnchor,
    ProjectCardButtonList
} from "@/components/cards/ProjectCard.tsx";


const placeSkillElement = (skill: SkillData): ReactNode => (
    <Skill
        icon={skill.icon}
        key={`skill_${skill.id}`}
        name={skill.name}
        className={!skill.useDefaultStyle ? `skills-card__skill skill--${skill.id}` : `skills-card__skill`}
    />
)

const placeProjectCard = (project: ProjectData, i: number) => (
    <ProjectCard
        key={`project_card_${project.type}_${i}`}
        className={"projects-section__project-card"}
        titleText={project.title}
        description={project.description}
        bgImageURL={project.bgImageURL}
    >
        <ProjectCardStack technologyList={project.baseStack}>
            {
                project.otherStack &&
                <ProjectCardOtherStack
                    openDelay={25}
                    closeDelay={100}
                    technologyList={project.otherStack}
                />
            }
        </ProjectCardStack>
        {
            project.buttons &&
            <ProjectCardButtonList>
                {
                    project.buttons.map((btn, i: number) => (
                        <ProjectCardAnchor key={`project_card_btn_${i}`} href={btn.href} icon={btn.icon}>{btn.text}</ProjectCardAnchor>
                    ))
                }
            </ProjectCardButtonList>
        }
    </ProjectCard>
)

export function MainPage() {
    return (
        <Layout>
            <AboutSection id={CHAPTERS.WHO_I_AM}>
                <div className="gridPattern"></div>
                <div className="radialOverlay"></div>
                <h1 className={"about-section__title title"}>Im SuperFeda<br/><span className={"skylight-blue-text italic-style"}>Full-stack</span> разработчик</h1>
                <p className={"about-section__description"}>
                    Я <span className={"skylight-blue-text"}>full-stack</span> разработчик, специализируюсь на создании надёжных веб-платформ и ботов.
                    На бэкенде использую <span className={"python-text"}>Python</span>, <span className={"fastapi-text"}>FastAPI</span> и <span className={"pydantic-text"}>Pydantic</span> для построения эффективных API.
                    Фронтенд разрабатываю на <span className={"typescript-text"}>TypeScript</span>, <span className={"react-text"}>React</span> и Next.js,
                    верстаю с использованием <span className={"scss-text"}>SCSS</span> вместе с <span className={"bem-methodology-text"}>БЭМ методологией</span>.
                    Также создаю ботов для <span className={"telegram-text"}>Telegram</span> и <span className={"discord-text"}>Discord</span>.
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
                    {/*<li className={"about-section__list-point"}>*/}
                    {/*    <a*/}
                    {/*        className={"about-section__button button button--with-svg"}*/}
                    {/*        href={"https://modrinth.com/user/SuperFeda"}*/}
                    {/*        title={"Ссылка на мой Modrinth"}*/}
                    {/*    >*/}
                    {/*        <ModrinthIcon width={18} height={18} iconColor={"currentColor"} />*/}
                    {/*        <span>Modrinth</span>*/}
                    {/*    </a>*/}
                    {/*</li>*/}
                </ul>
            </AboutSection>

            <SkillsSection id={CHAPTERS.SKILLS}>
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

            <ProjectsSection id={CHAPTERS.PROJECTS}>
                <TitleWithIcon
                    icon={<FolderIcon iconColor={"currentColor"} height={H2_ICON_SIZE} width={H2_ICON_SIZE} />}
                    titleText={"Мои проекты"}
                    className={"projects-section__title title--600 title--red-icon"}
                />
                <Tabs defaultValue={PROJECT_TABS.ALL_PROJECTS} className={"projects-section__tabs tabs"}>
                    <TabsList className={"projects-section__tabs-list"}>
                        <TabsTrigger value={PROJECT_TABS.ALL_PROJECTS} className={"tabs__trigger--no-text-wrap"}>Все работы</TabsTrigger>
                        <TabsTrigger value={PROJECT_TABS.WEBSITES} className={"tabs__trigger--no-text-wrap"}>Сайты</TabsTrigger>
                        <TabsTrigger value={PROJECT_TABS.BOTS} className={"tabs__trigger--no-text-wrap"}>Боты</TabsTrigger>
                        <TabsTrigger value={PROJECT_TABS.OTHER} className={"tabs__trigger--no-text-wrap"}>Другие</TabsTrigger>
                    </TabsList>
                    <TabsContent value={PROJECT_TABS.ALL_PROJECTS} className={"projects-section__project-list"}>
                        {
                            projects.map((project: ProjectData, i: number) => (
                                placeProjectCard(project, i)
                            ))
                        }
                    </TabsContent>

                    <TabsContent value={PROJECT_TABS.WEBSITES} className={"projects-section__project-list"}>
                        {
                            projects.map((project: ProjectData, i: number) => (
                                project.type === "website" && placeProjectCard(project, i)
                            ))
                        }
                    </TabsContent>

                    <TabsContent value={PROJECT_TABS.BOTS} className={"projects-section__project-list"}>
                        {
                            projects.map((project: ProjectData, i: number) => (
                                project.type === "bot" && placeProjectCard(project, i)
                            ))
                        }
                    </TabsContent>

                    <TabsContent value={PROJECT_TABS.OTHER} className={"projects-section__project-list"}>
                        {
                            projects.map((project: ProjectData, i: number) => (
                                project.type === "other" && placeProjectCard(project, i)
                            ))
                        }
                    </TabsContent>
                </Tabs>
            </ProjectsSection>

            <ServicesSection id={CHAPTERS.SERVICES}>
                <TitleWithIcon
                    icon={<CodeIcon iconColor={"currentColor"} height={H2_ICON_SIZE} width={H2_ICON_SIZE} />}
                    titleText={"Услуги"}
                    className={"services-section__title title--600 title--red-icon"}
                />
                <p className={"services-section__description"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consectetur debitis delectus dolorem dolorum ea eum excepturi fuga, libero maxime porro quod, sit temporibus veniam voluptatibus. A doloremque earum neque!
                </p>
                <ul className={"services-section__list"}>
                    {
                        services.map((service: ServiceData, i: number): ReactNode => (
                            <li>
                                <ServiceCard
                                    key={`service_card_${i}`}
                                    className={"services-section__service-card"}
                                    color={service.colorName}
                                    titleText={service.title}
                                    price={service.price}
                                    description={service.description}
                                    titleClassName={`title--${service.colorName}-icon`}
                                    icon={service.icon}
                                />
                            </li>
                        ))
                    }
                </ul>
            </ServicesSection>
        </Layout>
    )
}
