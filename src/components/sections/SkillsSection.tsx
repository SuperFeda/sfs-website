import React from "react";

interface SkillsSectionProps extends React.PropsWithChildren {
    id?: string
}

export function SkillsSection({children, id = ""}: SkillsSectionProps) {
    return (
        <section className={"skills-section"} id={id}>
            {children}
        </section>
    )
}
