import { DUMMY_NEWS } from "@/app/api/dummy-news";
import GoBackBtn from "@/components/go-back-btn";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

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

    const slugDetails = DUMMY_NEWS.find((news) => news.slug === newsSlug);

    if (!slugDetails) {
        return notFound();
    }

    const imagePath = `/images/${slugDetails?.category}/${slugDetails?.image}`;
    const imageAlt = slugDetails ? slugDetails.title : "News Image";

    return (
        <div className="flex flex-col">
            <h1>News Detail: {newsSlug}</h1>
            <Link href={`/news/${slugDetails.slug}/image`}>
                <Image
                    src={imagePath}
                    alt={imageAlt}
                    width={600}
                    height={400}
                />
            </Link>
            <data>{slugDetails?.date}</data>
            <p>{slugDetails?.content}</p>
            <GoBackBtn />
        </div>
    );
}
