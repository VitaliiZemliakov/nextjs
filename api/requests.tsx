export type RouteItem = {
    title: string;
    url: string;
};

export const dataHeaderNews: RouteItem[] = [
    { title: "News Title 1", url: "/news/news-title-1" },
    { title: "News Title 2", url: "/news/news-title-2" },
    { title: "News Title 3", url: "/news/news-title-3" },
];

export const dataRoutes: RouteItem[] = [
    { title: "Home", url: "/" },
    { title: "News", url: "/news" },
];

function delayDataHeader(data: RouteItem[], time = 1000): Promise<RouteItem[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve(data);
            } catch (error) {
                reject(error);
            }
        }, time);
    });
}

export async function getNewsData(data: RouteItem[]): Promise<RouteItem[]> {
    return await delayDataHeader(data);
}
