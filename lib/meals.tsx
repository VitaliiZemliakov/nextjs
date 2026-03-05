import fs from "node:fs";

import { Meal } from "@/components/meals/meal-item";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import { MealType } from "./meal-utils";

const db = sql("meals.db");

export async function getMeals(): Promise<Meal[]> {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return db.prepare("SELECT * FROM meals").all() as Meal[];
}

export async function getMeal(slug: string) {
     await new Promise((resolve) => setTimeout(resolve, 2000));

    return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug) as Meal;
}

export async function saveMeal(meal: MealType) {
    const slug = slugify(meal.title, { lower: true });
    const instructions = xss(meal.instructions);

    const extension = meal.image.name.split(".").pop();
    const fileName = `${slug}.${extension}`;

    const stream = fs.createWriteStream(`public/images/${fileName}`);

    const bufferedImage = await meal.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (err) => {
        if (err) {
            throw new Error("Failed to save image");
        }
    });

    const image = `/images/${fileName}`;
    db.prepare(
        `INSERT INTO meals
        (title, summary, instructions, image, creator, creator_email, slug)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
    ).run(
        meal.title,
        meal.summary,
        instructions,
        image,
        meal.creator,
        meal.creator_email,
        slug,
    );
}
