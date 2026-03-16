export type RouteItem = {
    title: string;
    slug: string;
    id?: string;
    image?: string;
    date?: string;
    content?: string;
    category?: string;
};

export const dataHeaderNews: RouteItem[] = [
    { title: "News Title 1", slug: "/news/news-title-1" },
    { title: "News Title 2", slug: "/news/news-title-2" },
    { title: "News Title 3", slug: "/news/news-title-3" },
];

export const dataRoutes: RouteItem[] = [
    { title: "Home", slug: "/" },
    { title: "News", slug: "/news" },
    { title: "Archive", slug: "/archive" },
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
