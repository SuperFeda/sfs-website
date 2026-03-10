import React, {type ReactNode} from "react";
import {Trans, useTranslation} from "react-i18next";

import {TitleWithIcon} from "@/components/TitleWithIcon.tsx";
import {formatPrice} from "@/utils/utils.ts";
import {SpotlightCard} from "@/components/cards/SpotlightCard.tsx";
import {CURRENCIES, type Currency, type Price} from "@/utils/types.ts";


interface ServiceCardProps extends React.PropsWithChildren {
    icon: ReactNode,
    titleText: string
    price: Price
    color: string
    description: string
    className?: string
    titleClassName?: string
}

export function ServiceCard({className = "", price, description, icon, color, titleText, titleClassName}: ServiceCardProps) {
    const {t} = useTranslation()

    const formattedPriceAmount: string = formatPrice(price.amount)
    const currency: Currency = CURRENCIES[price.type]

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
                    className={"service-card__price glass"}
                    title={t("service.price.hover_text", {
                            price: formattedPriceAmount,
                            symbol: currency.symbol,
                            service_name: titleText
                        })
                    }
                >
                    <Trans
                        i18nKey={`service.price.text.${currency.currencyPos}_symbol`}
                        values={{
                            price: formattedPriceAmount,
                            symbol: currency.symbol
                        }}
                        components={[
                            <span className={"pale-blue-text"} />
                        ]}
                    />
                    {/*{t(`service.price.text.${currency.currencyPos}_symbol`,*/}
                    {/*    {*/}
                    {/*        price: formattedPriceAmount,*/}
                    {/*        symbol: currency.symbol*/}
                    {/*    })*/}
                    {/*}*/}
                </span>
            </div>
            <p className={"service-card__description"}>{description}</p>
        </SpotlightCard>
    )
}