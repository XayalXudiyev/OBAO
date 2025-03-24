import { defineRouting } from "next-intl/routing"

export const routing = defineRouting({
    locales: ["en", "nl", "fr"],
    defaultLocale: "en",

    pathnames: {
        "/reservation": {
            en: "/reservation",
            nl: "/reservation",
            fr: "/reservation",
        },
        "about-us": {
            en: "/about-us",
            nl: "/over-ons",
            fr: "/a-propos-de-nous",
        },
        "our-menu": {
            en: "/our-menu",
            nl: "/onze-menu",
            fr: "/notre-menu",
        }
    }
})