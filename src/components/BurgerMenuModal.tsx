import {Modal} from "@/components/Modal.tsx";
import {CHAPTERS} from "@/const.tsx";
import {GitHubIcon} from "@/components/icons/GitHubIcon.tsx";
import {DrawingCompassIcon} from "@/components/icons/DrawingCompassIcon.tsx";
import {CodeIcon} from "@/components/icons/CodeIcon.tsx";

interface BurgerMenuModalProps {
    className?: string
    open: boolean
    onClose: () => void
}

export function BurgerMenuModal({className="", open, onClose}: BurgerMenuModalProps) {
    return (
        <Modal className={`burger-menu ${className}`} onClose={onClose} open={open}>
            <ul className={"burger-menu__list"}>
                <li className={""}>
                    <a
                        className={"burger-menu__button button"}
                        href={`#${CHAPTERS.WHO_I_AM}`}
                        title={"Информация обо мне"}
                        onClick={onClose}
                    >
                        <GitHubIcon height={24} width={24} iconColor={"currentColor"} />
                        <span>Хто я</span>
                    </a>
                </li>
                <li className={""}>
                    <a
                        className={"burger-menu__button button"}
                        href={`#${CHAPTERS.MY_SKILLS}`}
                        title={"Мои навыки"}
                        onClick={onClose}
                    >
                        <DrawingCompassIcon height={24} width={24} iconColor={"currentColor"} />
                        <span>Мои навыки</span>
                    </a>
                </li>
                <li className={""}>
                    <a
                        className={"burger-menu__button button"}
                        href={`#${CHAPTERS.SERVICES}`}
                        title={"Услуги"}
                        onClick={onClose}
                    >
                        <CodeIcon height={24} width={24} iconColor={"currentColor"} />
                        <span>Услуги</span>
                    </a>
                </li>
            </ul>
        </Modal>
    )
}