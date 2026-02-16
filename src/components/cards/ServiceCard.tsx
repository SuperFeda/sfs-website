import React, {type ReactNode} from "react";

import {TitleWithIcon} from "@/components/TitleWithIcon.tsx";
import {formatPrice} from "@/utils.ts";
import {SpotlightCard} from "@/components/SpotlightCard.tsx";


interface ServiceCardProps extends React.PropsWithChildren {
    icon: ReactNode,
    titleText: string
    price: number
    color: string
    className?: string
    titleClassName?: string
}

export function ServiceCard({className = "", price, icon, color, titleText, titleClassName}: ServiceCardProps) {

    return (
        <SpotlightCard className={`service-card ${className}`} spotlightColor={color}>
            <div className={"service-card__head"}>
                <TitleWithIcon
                    icon={icon}
                    className={`service-card__title ${titleClassName}`}
                    headerLevel={3}
                    titleText={titleText}
                />
                <span className={"service-card__price"}>{`от ${formatPrice(price)} ₽`}</span>
            </div>
        </SpotlightCard>
    )
}