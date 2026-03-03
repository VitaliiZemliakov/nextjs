"use client";

import { JSX, useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

interface ImagePickerProps {
    label?: string;
    name?: string;
}

export default function ImagePicker({
    label,
    name,
}: ImagePickerProps): JSX.Element {
    const [pickedImage, setPickedImage] = useState<string | null>(null);

    const imageInputRef = useRef<HTMLInputElement>(null);

    function handleImagePicked(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];

        if (!file) {
            setPickedImage(null);
            return;
        }

        const reader = new FileReader();

        reader.onload = () => {
            setPickedImage(reader.result as string);
        };

        reader.readAsDataURL(file);// after reading it load event is triggered and we set the picked image to the result of the reader which is a data URL representing the file's data. This allows us to display the picked image in the preview area.
    }

    function handlePickImage() {
        imageInputRef.current?.click();
    }

    function handleClearImage() {
        setPickedImage(null);
    }

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {pickedImage && (
                        <Image src={pickedImage} alt="Picked Image" fill />
                    )}

                    {!pickedImage && <p>No image picked yet.</p>}
                </div>
                <input
                    type="file"
                    id={name}
                    name={name}
                    accept="image/png, image/jpeg"
                    className={classes.input}
                    ref={imageInputRef}
                    onChange={handleImagePicked}
                    required
                />
                <button
                    type="button"
                    className={classes.button}
                    onClick={handlePickImage}
                >
                    Pick an Image
                </button>
                <button
                    type="button"
                    className={classes.button}
                    onClick={handleClearImage}
                >
                    Clear Image
                </button>
            </div>
        </div>
    );
}
