import {useTranslation} from "react-i18next";

export function Footer() {
    const { t } = useTranslation()

    return (
        <footer className={"footer"}>
            <div className={"footer__inner"}>
                <h4 className={"footer__title title"}>{t("title.footer.text")}</h4>
                <p className={"footer__copyright"}>{t("p.footer.text")}</p>
            </div>
        </footer>
    )
}
