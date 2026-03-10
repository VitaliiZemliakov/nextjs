import { getNewsData, RouteItem } from "@/api/requests";
import Link from "next/link";

export async function MainHeader({ data }: { data: RouteItem[] }) {
    const newsData = await getNewsData(data);

    return (
        <header>
            <ul>
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
