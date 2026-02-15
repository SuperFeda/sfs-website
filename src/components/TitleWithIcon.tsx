import type {ReactNode} from "react";

interface TitleWithIconProps {
    className?: string
    icon: ReactNode
    titleText: string
    headerLevel?: number
}

export function TitleWithIcon({className, titleText, icon, headerLevel = 2}: TitleWithIconProps) {
    if (headerLevel === 1) {
        return (
            <h1 className={`title title--with-icon ${className??''}`}>
                {icon}
                <span>{titleText}</span>
            </h1>
        )
    } else if (headerLevel === 2) {
        return (
            <h2 className={`title title--with-icon ${className??''}`}>
                {icon}
                <span>{titleText}</span>
            </h2>
        )
    } else if (headerLevel === 3) {
        return (
            <h3 className={`title title--with-icon ${className??''}`}>
                {icon}
                <span>{titleText}</span>
            </h3>
        )
    } else if (headerLevel === 4) {
        return (
            <h4 className={`title title--with-icon ${className??''}`}>
                {icon}
                <span>{titleText}</span>
            </h4>
        )
    } else if (headerLevel === 5) {
        return (
            <h5 className={`title title--with-icon ${className??''}`}>
                {icon}
                <span>{titleText}</span>
            </h5>
        )
    } else if (headerLevel === 6) {
        return (
            <h6 className={`title title--with-icon ${className??''}`}>
                {icon}
                <span>{titleText}</span>
            </h6>
        )
    } else {
        return (
            <h2 className={`title title--with-icon ${className??''}`}>
                {icon}
                <span>{titleText}</span>
            </h2>
        )
    }
}