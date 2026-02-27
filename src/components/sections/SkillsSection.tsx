import React from "react";

export function SkillsSection({children, id = "", ...props}: React.PropsWithChildren<React.HTMLAttributes<HTMLElement>>) {
    return (
        <section className={"skills-section"} id={id} {...props}>
            {children}
        </section>
    )
}
