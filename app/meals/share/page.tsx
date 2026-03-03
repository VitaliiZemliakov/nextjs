import ImagePicker from "@/components/meals/image-picker";
import classes from "./page.module.css";

type Meal = {
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

export default function ShareMealPage() {
    async function shareMeal(formdata: FormData) {
        "use server";

        const meal: Meal = {
            title: getString("title", formdata),
            summary: getString("summary", formdata),
            instructions: getString("instructions", formdata),
            image: getFile("image", formdata),
            creator: getString("name", formdata),
            creator_email: getString("email", formdata),
        };

        return meal;
    }

    return (
        <>
            <header className={classes.header}>
                <h1>
                    Share your{" "}
                    <span className={classes.highlight}>favorite meal</span>
                </h1>
                <p>Or any other meal you feel needs sharing!</p>
            </header>
            <main className={classes.main}>
                <form className={classes.form} action={shareMeal}>
                    <div className={classes.row}>
                        <p>
                            <label htmlFor="name">Your name</label>
                            <input type="text" id="name" name="name" required />
                        </p>
                        <p>
                            <label htmlFor="email">Your email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                            />
                        </p>
                    </div>
                    <p>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" required />
                    </p>
                    <p>
                        <label htmlFor="summary">Short Summary</label>
                        <input
                            type="text"
                            id="summary"
                            name="summary"
                            required
                        />
                    </p>
                    <p>
                        <label htmlFor="instructions">Instructions</label>
                        <textarea
                            id="instructions"
                            name="instructions"
                            rows={10}
                            required
                        ></textarea>
                    </p>
                    <ImagePicker name="image" label="Your Meal Image" />
                    <p className={classes.actions}>
                        <button type="submit">Share Meal</button>
                    </p>
                </form>
            </main>
        </>
    );
}
