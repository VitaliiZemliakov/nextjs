type ParamProps = {
    params: Promise<{ newsSlug: string }>;
};

export async function generateMetadata({ params }: ParamProps) {
    const slug = await params;

    return {
        title: `Details - ${slug.newsSlug}`,
        description: `This is the details page for ${slug.newsSlug}`,
    };
}

export default async function NewsSlug({ params }: ParamProps) {
    const { newsSlug } = await params;

    console.log("News Slug:", newsSlug);

    return (
        <div>
            <h1>News Detail: {newsSlug}</h1>
        </div>
    );
}
