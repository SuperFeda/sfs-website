import React from "react";

export function ProjectsSection({children, id = "", ...props}: React.PropsWithChildren<React.HTMLAttributes<HTMLElement>>) {
    return (
        <section className={"projects-section"} id={id} {...props}>
            {children}
        </section>
    )
}