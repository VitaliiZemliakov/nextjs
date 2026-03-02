import Image from "next/image";
import classes from "./page.module.css";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";
// import { use } from "react";

export default async function MealDetailsPage({
    params,
}: {
    params: Promise<{ mealSlug: string }>;
}) {
    const mealSlug = (await params).mealSlug;
    const meal = getMeal(mealSlug);

    if (!meal) {
        notFound()
    }

    const { instructions, title, creator_email, summary, creator } = meal;

    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={meal?.image} alt={title} fill />
                </div>
                <div className={classes.headerText}>
                    <h1>{title}</h1>
                    <p className={classes.creator}>
                        by <a href={`mailto:${creator_email}`}>{creator}</a>
                    </p>
                    <p className={classes.summary}>{summary}</p>
                </div>
            </header>
            <main className={classes.main}>
                <p
                    className={classes.instructions}
                    dangerouslySetInnerHTML={{
                        __html: instructions.replace(/\n/g, "<br />"),
                    }}
                ></p>
            </main>
        </>
    );
}
