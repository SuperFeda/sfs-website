import React from "react";

interface AboutSectionProps extends React.PropsWithChildren {
    id?: string
}

export function AboutSection({children, id = ""}: AboutSectionProps) {
    return (
        <section className={"about-section"} id={id}>
            {children}
        </section>
    )
}