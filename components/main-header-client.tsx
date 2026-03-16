'use client';

import { PUBLIC_IMAGE_PATH } from "@/api/dummy-news";
import { RouteItem } from "@/api/requests";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainHeaderClient({
    newsData,
    classApplied = "",
    isActiveDisplayed = false,
}: {
    newsData: RouteItem[];
    classApplied?: string;
    isActiveDisplayed?: boolean;
}) {
    const pathname = usePathname();

    return (
        <header className={isActiveDisplayed ? 'main-header' : ''}>
            <ul className={classApplied}>
                {newsData.map((item, index) => {
                    const isActive = pathname === item.slug;
                    // here we check and decide smth
                    if (item.category === "news") {
                        const imagePath = `${PUBLIC_IMAGE_PATH}${item.category}/${item.image}`;
                        const href = `/${item.category}/${item.slug}`;

                        return (
                            <li key={item.id} >
                                <Link href={href} className={isActive ? "active" : ""}>
                                    <Image
                                        src={imagePath}
                                        alt={item.title}
                                        width={300}
                                        height={300}
                                    />
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    }

                    return (
                        <li key={index}>
                            <Link href={item.slug} className={isActive ? "active" : ""}>
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </header>
    );
}