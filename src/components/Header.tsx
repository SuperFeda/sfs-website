import {BurgerMenuIcon} from "@/components/icons/BurgerMenuIcon.tsx";
import {LanguageIcon} from "@/components/icons/LanguageIcon.tsx";
import {useBurgerMenuStore} from "@/stores/useBurgerMenuStore.ts";
import {headerLinks} from "@/utils/portfolioDataLists.tsx";

export function Header() {
    const toggleMenu = useBurgerMenuStore(state => state.toggleMenu);

    return (
        <header className={"header"}>
            <div className={"header__inner"}>
                <h1 className={"header__title header__glass glass title"}>SυρεrFeδα</h1>
                <div className={"header__right-panel header__glass glass"}>
                    <nav className={"header__navbar hidden-mobile"}>
                        <ul className={"header__link-list"}>
                            {
                                headerLinks.map((linkData) => (
                                    <li className={"header__list-point"}>
                                        <a className={"header__link-btn"} href={linkData.link} title={linkData.title}>
                                            {linkData.icon}
                                            <span>{linkData.text}</span>
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <ul className={"header__button-list"}>
                        <li className={""}>
                            <button
                                className={"header__button button"}
                                title={"Переключить язык"}
                            >
                                <LanguageIcon height={18} width={18} iconColor={"currentColor"} />
                            </button>
                        </li>
                        <li className={"visible-mobile"}>
                            <button
                                className={"header__button button"}
                                title={"Вызвать меню для навигации по странице"}
                                onClick={toggleMenu}
                            >
                                <BurgerMenuIcon height={18} width={18} iconColor={"currentColor"} />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}