import {StrictMode} from "react"
import {createRoot} from "react-dom/client"

import {MainPage} from "@/pages/MainPage.tsx"

import "@/css/style.css"
import "@/css/index.css"

createRoot(document.querySelector("body")!).render(
    <StrictMode>
        <MainPage />
    </StrictMode>,
)
