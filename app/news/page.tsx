import { DUMMY_NEWS } from "@/api/dummy-news";
// import { dataHeaderNews } from "@/api/requests";
import { MainHeaderSuspensed } from "@/components/main-header";

export default function News() {
    return (
        <div>
            <h1>News Page</h1>
            <MainHeaderSuspensed
                data={DUMMY_NEWS}
                classApplied="news-list"
                fallBack={<div>Loading...</div>}
            />
        </div>
    );
}
