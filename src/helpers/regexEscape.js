export default function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
