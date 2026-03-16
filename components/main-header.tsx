import { getNewsData, RouteItem } from "@/api/requests";
import { Suspense } from "react";
import MainHeaderClient from "./main-header-client";

export async function MainHeader({
    newsData,
    classApplied = "",
    isActiveDisplayed,
}: {
    newsData: RouteItem[];
    classApplied?: string;
    isActiveDisplayed?: boolean;
}) {
    const newsDataFromApi = await getNewsData(newsData);

    return (
        <MainHeaderClient
            newsData={newsDataFromApi}
            classApplied={classApplied}
            isActiveDisplayed={isActiveDisplayed}
        />
    );
}

export function MainHeaderSuspensed({
    data,
    classApplied = "",
    fallBack,
    isActiveDisplayed,
}: {
    data: RouteItem[];
    classApplied?: string;
    fallBack?: React.ReactNode;
    isActiveDisplayed?: boolean;
}) {
    const fallBackInit = <div>Loading...</div>;

    return (
        <Suspense fallback={fallBackInit ?? fallBack}>
            <MainHeader
                newsData={data}
                classApplied={classApplied}
                isActiveDisplayed={isActiveDisplayed}
            />
        </Suspense>
    );
}
