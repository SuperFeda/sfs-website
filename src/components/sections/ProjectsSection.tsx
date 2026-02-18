import React from "react";

interface ProjectsSectionProps extends React.PropsWithChildren {
    id?: string
}

export function ProjectsSection({children, id = ""}: ProjectsSectionProps) {
    return (
        <section className={"projects-section"} id={id}>
            {children}
        </section>
    )
}