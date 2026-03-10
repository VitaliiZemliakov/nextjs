import { dataHeaderNews } from "@/api/requests";
import { MainHeader } from "@/components/main-header";

export default function News() {
    return (
        <div>
            <h1>News Page</h1>
            <MainHeader data={dataHeaderNews} classApplied="news-list" />
        </div>
    );
}
