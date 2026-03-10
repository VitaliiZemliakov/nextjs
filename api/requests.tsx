type NewsItem = {
    title: string;
    url: string;
};

const dataHeader: NewsItem[] = [
    { title: "News Title 1", url: "/news/news-title-1" },
    { title: "News Title 2", url: "/news/news-title-2" },
    { title: "News Title 3", url: "/news/news-title-3" },
    { title: "Home", url: "/" },
];

function delayDataHeader(time = 2000): Promise<NewsItem[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve(dataHeader);
            } catch (error) {
                reject(error);
            }
        }, time);
    });
}

export async function getNewsData(): Promise<NewsItem[]> {
    return await delayDataHeader();
}
