export function formatPrice(value: number | string): string {
    const str = typeof value === "number" ? value.toString() : value

    const parts = str.split(".")
    let integerPart = parts[0]
    const hasFraction = parts.length > 1

    let sign = ""
    if (integerPart.startsWith("-")) {
        sign = "-"
        integerPart = integerPart.slice(1)
    }

    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    return sign + formattedInteger + (hasFraction ? "." + parts[1] : "")
}