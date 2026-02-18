import type {IconProps} from "@/utils/props.ts";

export function BurgerMenuIcon({iconColor, ...svgProps}: IconProps) {
    return (
        <svg {...svgProps} viewBox="0 0 24 24" fill="none">
            <path
                d="M21 5H3v1.5h18V5Zm0 6.25H3v1.5h18v-1.5ZM3 17.5h18V19H3v-1.5Z"
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill={iconColor}
            />
        </svg>
    )
}
