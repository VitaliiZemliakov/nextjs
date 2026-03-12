import { getAvailableNewsYears } from "@/api/news";
import Link from "next/link";

export default function Latest() {
    const links: number[] = getAvailableNewsYears();

    return (
        <header id="archive-header">
            <h1>Latest News</h1>
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
}
