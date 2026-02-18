import {create} from "zustand"


type BurgerMenuStoreType = {
    isMenuOpen: boolean
    toggleMenu: () => void
}

export const useBurgerMenuStore = create<BurgerMenuStoreType>((setState) => ({
    isMenuOpen: false,
    toggleMenu: () => {
        setState(state => ({isMenuOpen: !state.isMenuOpen}))
    }
}))
