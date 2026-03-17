import {
    getAvailableNewsMonths,
    getAvailableNewsYears,
    getNewsForYear,
    getNewsForYearAndMonth,
} from "@/app/api/news";
import Link from "next/link";
import { MainHeaderSuspensed as NewsList } from "@/components/main-header";

type Params = Promise<{ filter: string[] }>;

const monthsMap: Record<number, string> = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
};

export const noContent = <p>Sorry, no content found</p>;

export default async function FilteredNewsPage({ params }: { params: Params }) {
    const { filter } = await params;
    const linksYears: number[] = getAvailableNewsYears();

    const [selectedYear, selectedMonth] = filter || [];

    let news: ReturnType<typeof getNewsForYearAndMonth> = [];
    let months: number[] = [];

    if (selectedYear && !selectedMonth) {
        news = getNewsForYear(parseInt(selectedYear));
        months = getAvailableNewsMonths(parseInt(selectedYear));
    }

    if (selectedYear && selectedMonth) {
        news = getNewsForYearAndMonth(
            parseInt(selectedYear),
            parseInt(selectedMonth),
        );
    }

    let newsContent;

    if (!selectedYear && !selectedMonth) {
        newsContent = <p>Select a year to see news.</p>;
    } else if (news && news.length > 0) {
        newsContent = <NewsList data={news} classApplied="flex gap-4" />;
    } else {
        newsContent = <p>Sorry, no content found for the selected filter.</p>;
    }

    const errorYear =
        selectedYear && !linksYears.includes(parseInt(selectedYear));
    const errorMonth =
        selectedYear &&
        selectedMonth &&
        !getAvailableNewsMonths(parseInt(selectedYear)).includes(
            parseInt(selectedMonth),
        );

    // Handling not valid urls like /archive/2020/13 or /archive/2020/abc
    if (errorYear || errorMonth) {
        throw new Error(
            "Invalid URL: Year or month not found in available news data.",
        );
    }

    return (
        <>
            <header id="archive-header">
                <nav>
                    <ul>
                        {linksYears.map((link) => {
                            const href = `/archive/${link}`;

                            return (
                                <li key={link}>
                                    <Link href={href}>{link}</Link>
                                </li>
                            );
                        })}
                    </ul>
                    {selectedYear && months.length > 0 && (
                        <ul>
                            {months?.map((month) => {
                                const href = `/archive/${selectedYear}/${month}`;
                                return (
                                    <li key={month}>
                                        <Link href={href}>
                                            {monthsMap[month]}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </nav>
            </header>
            {newsContent || noContent}
        </>
    );
}
