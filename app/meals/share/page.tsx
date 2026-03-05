"use client";

import ImagePicker from "@/components/meals/image-picker";
import classes from "./page.module.css";
import { shareMeal } from "@/lib/actions";

interface InputFieldProps {
    label: string;
    id: string;
    name: string;
    type?: string;
    required?: boolean;
}

interface TextAreaProps {
    label: string;
    id: string;
    name: string;
    rows?: number;
    required?: boolean;
}

function InputField({
    label,
    id,
    name,
    type = "text",
    required = false,
}: InputFieldProps) {
    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} name={name} required={required} />
        </p>
    );
}

function TextArea({
    label,
    id,
    name,
    rows = 10,
    required = false,
}: TextAreaProps) {
    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <textarea
                id={id}
                name={name}
                rows={rows}
                required={required}
            ></textarea>
        </p>
    );
}

const shareMealData = [
    {
        label: "Your name",
        id: "name",
        name: "name",
        type: "text",
        required: true,
    },
    {
        label: "Your email",
        id: "email",
        name: "email",
        type: "email",
        required: true,
    },
    {
        label: "Meal Title",
        id: "title",
        name: "title",
        type: "text",
        required: true,
    },
    {
        label: "Short Summary",
        id: "summary",
        name: "summary",
        type: "text",
        required: true,
    },
    {
        label: "Instructions",
        id: "instructions",
        name: "instructions",
        rows: 10,
        required: true,
    },
];

function ShareMealForm() {
    return (
        <form className={classes.form} action={shareMeal}>
            {shareMealData.map((field) => {
                if (field.type === "text" || field.type === "email") {
                    return (
                        <InputField
                            key={field.id}
                            label={field.label}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            required={field.required}
                        />
                    );
                } else if (field.type === "textarea") {
                    return (
                        <TextArea
                            key={field.id}
                            label={field.label}
                            id={field.id}
                            name={field.name}
                            rows={field.rows}
                            required={field.required}
                        />
                    );
                }
                return null;
            })}
            <ImagePicker name="image" label="Your Meal Image" />
            <p className={classes.actions}>
                <button type="submit">Share Meal</button>
            </p>
        </form>
    );
}

export default function ShareMealPage() {
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
                <ShareMealForm />
            </main>
        </>
    );
}
