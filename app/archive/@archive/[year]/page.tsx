import { getNewsForYear } from "@/api/news";
import { RouteItem } from "@/api/requests";
import { MainHeaderSuspensed as NewsList } from "@/components/main-header";

type Params = Promise<{ year: string }>;

export default async function FilteredNewsPage(
    { params }: { params: Params }
) {
    const { year } = await params;

    const news: RouteItem[] = getNewsForYear(year);

    return <NewsList data={news} />;
}
