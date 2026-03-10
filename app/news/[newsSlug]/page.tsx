export async function generateMetadata({
    params,
}: {
    params: Promise<{ newSlug: string }>;
}) {
    const slug = await params;

    return {
        title: `Details - ${slug.newSlug}`,
        description: `This is the details page for ${slug.newSlug}`,
    };
}

export default async function NewsSlug({
    params,
}: {
    params: Promise<{ newsSlug: string }>;
}) {
    const { newsSlug } = await params;

    return (
        <div>
            <h1>News Detail: {newsSlug}</h1>
        </div>
    );
}
