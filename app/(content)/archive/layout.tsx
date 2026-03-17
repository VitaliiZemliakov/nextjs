export default function ArchiveLayout({
    children,
    latest,
}: {
    children: React.ReactNode;
    latest: React.ReactNode;
}) {
    return (
        <div>
            <h1>Archive News</h1>
            <section id="archive-filter">{children}</section>
            <section id="archive-latest">{latest}</section>
        </div>
    )
}
