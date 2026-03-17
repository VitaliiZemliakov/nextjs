"use client";

import Image from "next/image";
import GoBackBtn from "./go-back-btn";
import { useRouter } from "next/navigation";

export default function ModalDrop({
    image,
}: {
    image: { src: string; alt: string };
}) {
    const router = useRouter();
    return (
        <div className="modal-backdrop" onClick={router.back}>
            <dialog className="modal static" open>
                <div className="fullscreen-image">
                    <h2>Intercepted</h2>
                    <Image
                        src={image.src}
                        alt={image.alt}
                        width={800}
                        height={600}
                    />
                    <GoBackBtn />
                </div>
            </dialog>
        </div>
    );
}
