import React from "react";

export function AboutSection({children, id = "", ...props}: React.PropsWithChildren<React.HTMLAttributes<HTMLElement>>) {
    return (
        <section className={"about-section"} id={id} {...props}>
            {children}
        </section>
    )
}