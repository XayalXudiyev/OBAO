"use client";

import { useRouter, usePathname } from "next/navigation";
import { useTransition, useEffect, useState } from "react";
import Cookies from "js-cookie";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function LocaleSwitcher() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const pathname = usePathname();

    // Default olaraq İngilis dili (en) seçilir
    const [localeActive, setLocaleActive] = useState(() => {
        return Cookies.get("obao-locale") || "en";
    });

    useEffect(() => {
        const storedLocale = Cookies.get("obao-locale");
        if (storedLocale) {
            setLocaleActive(storedLocale);
        }
    }, []);

    const onSelectChange = (nextLocale: string) => {
        Cookies.set("obao-locale", nextLocale);

        startTransition(() => {
            const newPathname = pathname.replace(`/${localeActive}`, `/${nextLocale}`);
            router.replace(newPathname);
            router.refresh();
        });

        setLocaleActive(nextLocale);
    };

    return (
        <Select
            onValueChange={onSelectChange}
            defaultValue={localeActive}
            disabled={isPending}
        >
            <SelectTrigger className="bg-transparent border-none outline-none ring-0 focus:ring-offset-0 focus:ring-0 focus:outline-none gap-x-1 md:text-base w-fit">
                <SelectValue placeholder="Dil seçin" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="en">
                        <div className="flex gap-x-1">
                            <img
                                src="/language-logos/englishFlag.png"
                                width={25}
                                height={15}
                                alt="English Flag"
                            />
                            <span>English</span>
                        </div>
                    </SelectItem>
                    <SelectItem value="fr">
                        <div className="flex gap-x-1">
                            <img
                                src="/language-logos/frenchFlag.png"
                                width={25}
                                height={15}
                                alt="French Flag"
                            />
                            <span>French</span>
                        </div>
                    </SelectItem>
                    <SelectItem value="nl">
                        <div className="flex gap-x-1">
                            <img
                                src="/language-logos/dutchFlag.png"
                                width={25}
                                height={15}
                                alt="Dutch Flag"
                            />
                            <span>Dutch</span>
                        </div>
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
