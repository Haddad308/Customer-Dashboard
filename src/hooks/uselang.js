import { useTranslation } from "react-i18next";

export function useLang() {
    const { i18n } = useTranslation();
    if (i18n.language === "sw") {
        return "sv_SE";
    } else {
        return "en_US";
    }
}