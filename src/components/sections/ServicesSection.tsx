import React from "react";

interface ServicesSectionProps extends React.PropsWithChildren {
    id?: string
}

export function ServicesSection({children, id = ""}: ServicesSectionProps) {
    return (
        <section className={"services-section"} id={id}>
            {children}
        </section>
    )
}
