import { DUMMY_NEWS } from "@/app/api/dummy-news";
import ModalDrop from "@/components/modal";
import { notFound } from "next/navigation";

export default async function InterceptedImagePage({
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

    return <ModalDrop image={{ src: imagePath, alt: imageAlt }} />;
}
