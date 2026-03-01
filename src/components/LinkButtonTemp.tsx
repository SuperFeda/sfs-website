import {type AnchorHTMLAttributes} from "react";
import {TelegramIcon} from "@/components/icons/TelegramIcon.tsx";
import {useTranslation} from "react-i18next";
import {GitHubIcon} from "@/components/icons/GitHubIcon.tsx";
import {ModrinthIcon} from "@/components/icons/ModrinthIcon.tsx";

interface LinkButtonTempProps extends AnchorHTMLAttributes<never> {
    variant: "github" | "modrinth" | "telegram"
    iconWidth: number
    iconHeight: number
    iconColor?: string
    text?: string
}

export function LinkButtonTemp(
    {
        variant,
        iconHeight,
        iconWidth,
        iconColor="currentColor",
        text,
        className,
        ...props
    }: LinkButtonTempProps) {
    const {t} = useTranslation()

    switch (variant) {
        case "github":
            return (
                <a
                    className={`${className} button button--with-svg`}
                    {...props}
                >
                    <GitHubIcon width={iconWidth} height={iconHeight} iconColor={iconColor} />
                    <span>{text ? text : t("button.github.text")}</span>
                </a>
            )

        case "modrinth":
            return (
                <a
                    className={`${className} button button--with-svg`}
                    {...props}
                >
                    <ModrinthIcon width={iconWidth} height={iconHeight} iconColor={iconColor} />
                    <span>{text ? text : t("button.modrinth.text")}</span>
                </a>
            )

        case "telegram":
            return (
                <a
                    className={`${className} button button--with-svg`}
                    {...props}
                >
                    <TelegramIcon width={iconWidth} height={iconHeight} iconColor={iconColor} />
                    <span>{text ? text : t("button.telegram.text")}</span>
                </a>
            )

        default:
            return null
    }
}