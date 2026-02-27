import React from "react";

export function ServicesSection({children, id = "", ...props}: React.PropsWithChildren<React.HTMLAttributes<HTMLElement>>) {
    return (
        <section className={"services-section"} id={id} {...props}>
            {children}
        </section>
    )
}
