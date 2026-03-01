import {BurgerMenuIcon} from "@/components/icons/BurgerMenuIcon.tsx";
import {LanguageIcon} from "@/components/icons/LanguageIcon.tsx";
import {useBurgerMenuStore} from "@/stores/useBurgerMenuStore.ts";
import {headerLinks, languages} from "@/utils/portfolioDataLists.tsx";
import {useTranslation} from "react-i18next";
import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuContent,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";

export function Header() {
    const toggleMenu = useBurgerMenuStore(state => state.toggleMenu);
    const { t, i18n } = useTranslation()

    return (
        <header className={"header"}>
            <div className={"header__inner"}>
                <h1
                    className={"header__title header__glass glass title"}
                    title={t("title.header.hover_text")}
                >
                    {t("title.header.text")}
                </h1>
                <div className={"header__right-panel header__glass glass"}>
                    <nav className={"header__navbar hidden-mobile"}>
                        <ul className={"header__link-list"}>
                            {
                                headerLinks.map((linkData, i: number) => (
                                    <li className={"header__list-point"} key={`header_link_${i}`}>
                                        <a className={"header__link-btn"} href={linkData.link} title={t(linkData.title)}>
                                            {linkData.icon}
                                            <span>{t(linkData.text)}</span>
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <ul className={"header__button-list"}>
                        <li className={""}>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <button
                                        className={"header__button button"}
                                        title={t("button.header.change_language.hover_text")}
                                    >
                                        <LanguageIcon height={18} width={18} iconColor={"currentColor"} />
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent side={"bottom"}>
                                    {
                                        languages.map((lang) => (
                                            <DropdownMenuItem
                                                onClick={() => i18n.changeLanguage(lang.id)}
                                            >
                                                {lang.name}
                                            </DropdownMenuItem>
                                        ))
                                    }
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                        <li className={"visible-mobile"}>
                            <button
                                className={"header__button button"}
                                title={t("button.header.burger_menu.hover_text")}
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
