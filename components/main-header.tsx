import { getNewsData, RouteItem } from "@/api/requests";
import Link from "next/link";

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
                    return (
                        <li key={index}>
                            <Link href={item.url}>{item.title}</Link>
                        </li>
                    );
                })}
            </ul>
        </header>
    );
}
