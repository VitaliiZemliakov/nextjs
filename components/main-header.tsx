import { getNewsData } from "@/api/requests";
import Link from "next/link";

export async function MainHeader() {
    const newsData = await getNewsData();

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
