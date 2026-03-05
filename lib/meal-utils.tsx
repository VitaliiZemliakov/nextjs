export type MealType = {
    title: string;
    summary: string;
    instructions: string;
    image: File;
    creator: string;
    creator_email: string;
};

export function getString(key: string, formdata: FormData): string {
    const value = formdata.get(key);
    if (typeof value !== "string") {
        throw new Error(`${key} is required`);
    }
    return value;
}

export function getFile(key: string, formdata: FormData): File {
    const value = formdata.get(key);
    if (!(value instanceof File) || value.size === 0) {
        throw new Error(`${key} is required`);
    }
    return value;
}

export function extractMeal(formdata: FormData): MealType {
    // const dataToValidate = [
    //     "title",
    //     "summary",
    //     "instructions",
    //     "creator",
    //     "creator_email",
    // ];

    // dataToValidate.every((key) => {
    //     if (isInvalidText(getString(key, formdata))) {
    //         throw new Error(`${key} is required`);
    //     }
    // });

    return {
        title: getString("title", formdata),
        summary: getString("summary", formdata),
        instructions: getString("instructions", formdata),
        image: getFile("image", formdata),
        creator: getString("name", formdata),
        creator_email: getString("email", formdata),
    };
}

export function isInvalidText(text: string): boolean {
    return !text || text.trim() === "";
}
