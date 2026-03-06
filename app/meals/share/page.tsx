"use client";

import ImagePicker from "@/components/meals/image-picker";
import classes from "./page.module.css";
import { ActionState, shareMeal } from "@/lib/actions";
import MealsFormSubmit from "@/components/meals/meals-form-submit";
import { useActionState } from "react";

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

interface ActionSubmit {
    action: (formData: FormData) => void | Promise<void>;
    state: ActionState;
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

function ShareMealForm({ action, state }: ActionSubmit) {
    return (
        <form className={classes.form} action={action}>
            <InputField
                label="Your name"
                id="name"
                name="name"
                type="text"
                required={true}
            />
            <InputField
                label="Your email"
                id="email"
                name="email"
                type="email"
                required={true}
            />
            <InputField
                label="Meal Title"
                id="title"
                name="title"
                type="text"
                required={true}
            />
            <InputField
                label="Short Summary"
                id="summary"
                name="summary"
                type="text"
                required={true}
            />
            <TextArea
                label="Instructions"
                id="instructions"
                name="instructions"
                rows={10}
                required={true}
            />
            <ImagePicker name="image" label="Your Meal Image" />
            {state.message && <p className={classes.error}>{state.message}</p>}
            <p className={classes.actions}>
                <MealsFormSubmit />
            </p>
        </form>
    );
}

export default function ShareMealPage() {
    const [state, formAction] = useActionState(shareMeal, { message: null });
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
                <ShareMealForm action={formAction} state={state} />
            </main>
        </>
    );
}
