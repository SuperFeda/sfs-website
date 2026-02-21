import {Modal} from "@/components/Modal.tsx";
import {headerLinks} from "@/utils/portfolioDataLists.tsx";

interface BurgerMenuModalProps {
    className?: string
    open: boolean
    onClose: () => void
}

export function BurgerMenuModal({className="", open, onClose}: BurgerMenuModalProps) {
    return (
        <Modal className={`burger-menu ${className}`} onClose={onClose} open={open}>
            <h2 className={"burger-menu__title title"}>SυρεrFeδα</h2>
            <ul className={"burger-menu__list"}>
                {
                    headerLinks.map((linkData, i: number) => (
                        <li className={"burger-menu__list-point"} key={`burger_menu_${i}`}>
                            <a
                                className={"burger-menu__button button button--no-border"}
                                href={linkData.link}
                                title={linkData.title}
                                onClick={onClose}
                            >
                                {linkData.icon}
                                <span>{linkData.text}</span>
                            </a>
                        </li>
                    ))
                }
            </ul>
        </Modal>
    )
}