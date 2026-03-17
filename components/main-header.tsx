import { getNewsData, RouteItem } from "@/app/api/requests";
import { Suspense } from "react";
import NavLink from "./nav-link";
import Image from "next/image";
import { PUBLIC_IMAGE_PATH } from "@/app/api/dummy-news";

export async function MainHeader({
    newsData,
    classApplied = "",
    isActiveDisplayed = false,
}: {
    newsData: RouteItem[];
    classApplied?: string;
    isActiveDisplayed?: boolean;
}) {
    const newsDataFromApi = await getNewsData(newsData);

    return (
        <header className={isActiveDisplayed ? "main-header" : ""}>
            <ul className={classApplied}>
                {newsDataFromApi.map((item, index) => {
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

export function MainHeaderSuspensed({
    data,
    classApplied = "",
    fallBack,
    isActiveDisplayed,
}: {
    data: RouteItem[];
    classApplied?: string;
    fallBack?: React.ReactNode;
    isActiveDisplayed?: boolean;
}) {
    const fallBackInit = <div>Loading...</div>;

    return (
        <Suspense fallback={fallBackInit ?? fallBack}>
            <MainHeader
                newsData={data}
                classApplied={classApplied}
                isActiveDisplayed={isActiveDisplayed}
            />
        </Suspense>
    );
}
