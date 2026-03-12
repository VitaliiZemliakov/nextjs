import { DUMMY_NEWS } from "@/api/dummy-news";

// infer the news item type from your data
type NewsItem = (typeof DUMMY_NEWS)[number];

export function getAllNews() {
    return DUMMY_NEWS;
}

export function getLatestNews() {
    return DUMMY_NEWS.slice(0, 3);
}

export function getAvailableNewsYears(): number[] {
    // years - acc, news - current item
    return DUMMY_NEWS.reduce<number[]>((years, news) => {
        const year = new Date(news.date).getFullYear();
        if (!years.includes(year)) {
            years.push(year);
        }
        return years;
    }, []).sort((a, b) => b - a);
}

export function getAvailableNewsMonths(year: number | string): number[] {
    // years - acc, news - current item
    return DUMMY_NEWS.reduce<number[]>((months, news) => {
        const newsYear = new Date(news.date).getFullYear();
        if (newsYear === +year) {
            const month = new Date(news.date).getMonth();
            if (!months.includes(month)) {
                //we add +1 because getMonth returns 0-11 and we want 1-12
                months.push(month + 1);
            }
        }
        return months;
    }, []).sort((a, b) => b - a);
}

export function getNewsForYear(year: number | string): NewsItem[] {
    return DUMMY_NEWS.filter(
        (news) => new Date(news.date).getFullYear() === +year,
    );
}

export function getNewsForYearAndMonth(
    year: number | string,
    month: number | string,
): NewsItem[] {
    return DUMMY_NEWS.filter((news) => {
        const newsYear = new Date(news.date).getFullYear();
        const newsMonth = new Date(news.date).getMonth() + 1;
        return newsYear === +year && newsMonth === +month;
    });
}
