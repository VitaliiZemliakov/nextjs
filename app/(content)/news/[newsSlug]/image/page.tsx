import { DUMMY_NEWS } from "@/app/api/dummy-news";
import GoBackBtn from "@/components/go-back-btn";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ImageParams({
    params,
}: {
    params: Promise<{ newsSlug: string }>;
}) {
    const { newsSlug } = await params;

    const newItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);

    if (!newItem) {
        return notFound();
    }

    const imagePath = `/images/${newItem.category}/${newItem.image}`;
    const imageAlt = newItem ? newItem.title : "News Image";

    return (
        <div className="fullscreen-image">
            <Image src={imagePath} alt={imageAlt} width={800} height={600} />
            <GoBackBtn />
        </div>
    );
}
