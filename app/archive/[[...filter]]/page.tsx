import { getAvailableNewsYears } from "@/api/news";
import Link from "next/link";

type Params = Promise<{ filter: [string] }>;

export default async function FilteredNewsPage(
    { params }: { params: Params }
) {
    const filter = await params;
    const links: number[] = getAvailableNewsYears();

    console.log(filter);

       return (
        <header id="archive-header">
            <nav>
                <ul>
                    {links.map((link) => (
                        <li key={link}>
                            <Link href={`/archive/${link}`}>{link}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );

    // const news: RouteItem[] = getNewsForYear(filter);

    // return <NewsList data={news} />;
}
