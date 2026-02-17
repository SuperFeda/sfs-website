import {CHAPTERS} from "@/const.tsx";
import {DrawingCompassIcon} from "@/components/icons/DrawingCompassIcon.tsx";
import {CodeIcon} from "@/components/icons/CodeIcon.tsx";
import {GitHubIcon} from "@/components/icons/GitHubIcon.tsx";
import {BurgerMenuIcon} from "@/components/icons/BurgerMenuIcon.tsx";
import {LanguageIcon} from "@/components/LanguageIcon.tsx";
import {BurgerMenuModal} from "@/components/BurgerMenuModal.tsx";
import {useState} from "react";

export function Header() {
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false);

    return (
        <>
            <header className={"header"}>
                <div className={"header__inner"}>
                    <h1 className={"header__title header__object title"}>SυρεrFeδα</h1>
                    <div className={"header__right-panel header__object"}>
                        <nav className={"header__navbar hidden-mobile"}>
                            <ul className={"header__link-list"}>
                                <li className={"header__list-point"}>
                                    <a className={"header__link-btn"} href={`#${CHAPTERS.WHO_I_AM}`} title={"Информация обо мне"}>
                                        <GitHubIcon height={18} width={18} iconColor={"currentColor"} />
                                        <span>Хто я</span>
                                    </a>
                                </li>
                                <li className={"header__list-point"}>
                                    <a className={"header__link-btn"} href={`#${CHAPTERS.MY_SKILLS}`} title={"Мои навыки"}>
                                        <DrawingCompassIcon height={18} width={18} iconColor={"currentColor"} />
                                        <span>Мои навыки</span>
                                    </a>
                                </li>
                                <li className={"header__list-point"}>
                                    <a className={"header__link-btn"} href={`#${CHAPTERS.SERVICES}`} title={"Услуги"}>
                                        <CodeIcon height={18} width={18} iconColor={"currentColor"} />
                                        <span>Услуги</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <ul className={"header__button-list"}>
                            <li className={""}>
                                <button className={"header__button button"} title={"Переключить язык"}>
                                    <LanguageIcon height={18} width={18} iconColor={"currentColor"} />
                                </button>
                            </li>
                            <li className={"visible-mobile"}>
                                <button
                                    className={"header__button button"}
                                    title={"Вызвать меню для навигации по странице"}
                                    onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}
                                >
                                    <BurgerMenuIcon height={18} width={18} iconColor={"currentColor"} />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <BurgerMenuModal
                className={"header__burger-menu-modal visible-mobile"}
                onClose={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}
                open={isBurgerMenuOpen}
            />
        </>
    )
}