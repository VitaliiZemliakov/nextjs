import { PUBLIC_IMAGE_PATH } from "@/api/dummy-news";
import { getNewsData, RouteItem } from "@/api/requests";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export async function MainHeader({
    data,
    classApplied = "",
}: {
    data: RouteItem[];
    classApplied?: string;
}) {
    const newsData = await getNewsData(data);

    return (
        <header>
            <ul className={classApplied}>
                {newsData.map((item, index) => {
                    // here we check and decide smth
                    if (item.category === "news") {
                        const imagePath = `${PUBLIC_IMAGE_PATH}${item.category}/${item.image}`;
                        const href = `/${item.category}/${item.slug}`;

                        return (
                            <li key={item.id}>
                                <Link href={href}>
                                    <Image
                                        src={imagePath}
                                        alt={item.title}
                                        width={100}
                                        height={100}
                                    />
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    }

                    return (
                        <li key={index}>
                            <Link href={item.slug}>{item.title}</Link>
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
}: {
    data: RouteItem[];
    classApplied?: string;
    fallBack?: React.ReactNode;
}) {
    const fallBackInit = <div>Loading...</div>;

    return (
        <Suspense fallback={fallBackInit || fallBack}>
            <MainHeader data={data} classApplied={classApplied} />
        </Suspense>
    );
}
