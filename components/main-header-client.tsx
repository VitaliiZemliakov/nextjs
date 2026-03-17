import { PUBLIC_IMAGE_PATH } from "@/app/api/dummy-news";
import { RouteItem } from "@/app/api/requests";
import Image from "next/image";
import NavLink from "./nav-link";

export default function MainHeaderClient({
    newsData,
    classApplied = "",
    isActiveDisplayed = false,
}: {
    newsData: RouteItem[];
    classApplied?: string;
    isActiveDisplayed?: boolean;
}) {
    return (
        <header className={isActiveDisplayed ? "main-header" : ""}>
            <ul className={classApplied}>
                {newsData.map((item, index) => {
                    // here we check and decide smth
                    if (item.category === "news") {
                        const imagePath = `${PUBLIC_IMAGE_PATH}${item.category}/${item.image}`;
                        const href = `/${item.category}/${item.slug}`;

                        return (
                            <li key={item.id}>
                                <NavLink href={href}>
                                    <Image
                                        src={imagePath}
                                        alt={item.title}
                                        width={300}
                                        height={300}
                                    />
                                    <span>{item.title}</span>
                                </NavLink>
                            </li>
                        );
                    }

                    return (
                        <li key={index}>
                            <NavLink href={item.slug}>{item.title}</NavLink>
                        </li>
                    );
                })}
            </ul>
        </header>
    );
}
