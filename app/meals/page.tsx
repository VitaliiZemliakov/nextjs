import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { JSX, Suspense, use } from "react";
import MealsLoading from "./loading";
import { Meal } from "@/components/meals/meal-item";

function MealsComponent({ mealsPromise }: { mealsPromise: Promise<Meal[]> }) {
    const meals = use(mealsPromise);
    return <MealsGrid meals={meals} />;
}

export default function MealsPage(): JSX.Element {
    const mealsPromise = getMeals();
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals created{" "}
                    <span className={classes.highlight}>by you</span>
                </h1>
                <p>
                    Choose your favorite meals from our collection of delicious
                    recipes!
                </p>
                <p className={classes.cta}>
                    <Link href="/meals/share">Share Your Favorite Meal</Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<MealsLoading />}>
                    <MealsComponent mealsPromise={mealsPromise} />
                </Suspense>
            </main>
        </>
    );
}
