import {headerLinks} from "@/utils/portfolioDataLists.tsx";
import {Drawer, DrawerContent} from "@/components/ui/drawer.tsx";
import {useBurgerMenuStore} from "@/stores/useBurgerMenuStore.ts";

interface BurgerMenuModalProps {
    className?: string
}

export function BurgerMenuModal({className=""}: BurgerMenuModalProps) {
    const {setIsMenuOpen, isMenuOpen} = useBurgerMenuStore();

    return (
        <Drawer direction={"right"} onOpenChange={setIsMenuOpen} open={isMenuOpen}>
            <DrawerContent className={`burger-menu ${className}`}>
                <h2 className={"burger-menu__title title"}>SυρεrFeδα</h2>
                <ul className={"burger-menu__list"}>
                    {
                        headerLinks.map((linkData, i: number) => (
                            <li className={"burger-menu__list-point"} key={`burger_menu_${i}`}>
                                <a
                                    className={"burger-menu__button button button--no-border"}
                                    href={linkData.link}
                                    title={linkData.title}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {linkData.icon}
                                    <span>{linkData.text}</span>
                                </a>
                            </li>
                        ))
                    }
                </ul>
                <button
                    className={"button burger-menu__close-button"}
                    onClick={() => setIsMenuOpen(false)}
                >
                    Закрыть
                </button>
            </DrawerContent>
        </Drawer>
    )
}