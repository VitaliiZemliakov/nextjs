import { DUMMY_NEWS } from "@/app/api/dummy-news";
// import { dataHeaderNews } from "@/api/requests";
import { MainHeaderSuspensed } from "@/components/main-header";

export default function News() {
    return (
        <div>
            <h2 className="text-4xl">News Page</h2>
            <MainHeaderSuspensed
                data={DUMMY_NEWS}
                classApplied="news-list"
                fallBack={<div>Loading...</div>}
            />
        </div>
    );
}
