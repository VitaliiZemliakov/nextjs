import { getAvailableNewsYears } from "@/api/news";
import Link from "next/link";

export default function ArchivePage() {
    const links: number[] = getAvailableNewsYears();

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
}
