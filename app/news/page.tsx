import { dataHeaderNews } from "@/api/requests";
import { MainHeader } from "@/components/main-header";

export default function News() {

    return (
        <div>
            <MainHeader data={dataHeaderNews} />
            <h1>News Page</h1>
        </div>
    );
}
