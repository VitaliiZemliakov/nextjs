import Link from "next/link";

export default function News() {
    const data = [
        { title: "News Title 1", url: "/news/news-title-1" },
        { title: "News Title 2", url: "/news/news-title-2" },
        { title: "News Title 3", url: "/news/news-title-3" },
    ];

    return (
        <div>
            <ul>
                {data.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link href={item.url}>{item.title}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
