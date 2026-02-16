import React from "react";

import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer.tsx";


export function Layout({children}: React.PropsWithChildren) {
    return (
        <div className={"container"}>
            <div id={"box"}>
                {/*<div style={{position:"sticky"}}>*/}
                    <div className="gridPattern"></div>
                    <div className="radialOverlay"></div>
                {/*</div>*/}
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    )
}