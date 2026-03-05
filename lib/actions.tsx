"use server";

import { redirect } from "next/navigation";
import {
    extractMeal,
    isInvalidText
} from "./meal-utils";
import { saveMeal } from "./meals";
import { useActionState } from 'react'

export async function shareMeal(formdata: FormData): Promise<void> {
    const meal = extractMeal(formdata);
    useActionState()

    for (const item in meal) {
        if (item === "image") {
            if ((meal[item] as File).size === 0) {
                throw new Error(`${item} is required`);
            }
            continue;
        }
        if (isInvalidText(item)) {
            throw new Error(`${item} is required`);
        }
    }

    await saveMeal(meal);

    redirect("/meals");
}
