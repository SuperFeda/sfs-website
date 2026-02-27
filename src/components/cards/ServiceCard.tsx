import React, {type ReactNode} from "react";

import {TitleWithIcon} from "@/components/TitleWithIcon.tsx";
import {formatPrice} from "@/utils/utils.ts";
import {SpotlightCard} from "@/components/cards/SpotlightCard.tsx";
import {useTranslation} from "react-i18next";


interface ServiceCardProps extends React.PropsWithChildren {
    icon: ReactNode,
    titleText: string
    price: number
    color: string
    description: string
    className?: string
    titleClassName?: string
}

export function ServiceCard({className = "", price, description, icon, color, titleText, titleClassName}: ServiceCardProps) {
    const {t} = useTranslation()

    return (
        <SpotlightCard className={`service-card ${className}`} spotlightColor={color}>
            <div className={"service-card__head"}>
                <TitleWithIcon
                    icon={icon}
                    className={`service-card__title ${titleClassName}`}
                    headerLevel={3}
                    titleText={titleText}
                />
                <span
                    className={"service-card__price"}
                    title={t("service.price.hover_text", {price: formatPrice(price), service_name: titleText})}
                >
                    {t("service.price.text", {price: formatPrice(price)})}
                </span>
            </div>
            <p className={"service-card__description"}>{description}</p>
        </SpotlightCard>
    )
}