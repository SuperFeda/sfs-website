import React from "react";

import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer.tsx";
import {BurgerMenuModal} from "@/components/BurgerMenuModal.tsx";
import {useBurgerMenuStore} from "@/stores/useBurgerMenuStore.ts";


export function Layout({children}: React.PropsWithChildren) {
    const {isMenuOpen, toggleMenu} = useBurgerMenuStore();

    return (
        <div className={"container"}>
            <div id={"box"}>
                {/*<div style={{position:"sticky"}}>*/}
                {/*    <div className="gridPattern"></div>*/}
                {/*    <div className="radialOverlay"></div>*/}
                {/*</div>*/}
                <Header />
                <main>
                    {children}
                </main>
                <BurgerMenuModal
                    className={"header__burger-menu-modal visible-mobile"}
                    onClose={toggleMenu}
                    open={isMenuOpen}
                />
                <Footer />
            </div>
        </div>
    )
}