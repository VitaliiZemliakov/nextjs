import { getLatestNews, NewsItem } from "@/api/news";
import { MainHeaderSuspensed as LatestNews } from "@/components/main-header";

export default function LatestDefault() {
    const latestNews: NewsItem[] = getLatestNews();

    return (
        <header id="archive-header">
            <h1>Latest News</h1>
            <LatestNews data={latestNews} />
        </header>
    );
}