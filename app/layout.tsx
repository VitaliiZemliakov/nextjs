import { MainHeader } from "@/components/main-header";
import "./globals.css";
import { dataRoutes } from "@/api/requests";

export const metadata = {
    title: "Next.js Page Routing & Rendering",
    description: "Learn how to route to different pages.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <div id="page">
                    <MainHeader data={dataRoutes} />
                    {children}
                </div>
            </body>
        </html>
    );
}
