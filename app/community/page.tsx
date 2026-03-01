import Image from "next/image";

import mealIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";
import classes from "./page.module.css";

export default function CommunityPage() {
    const data = [
        {
            src: mealIcon,
            alt: "A delicious meal",
            text: "Share & discover recipes",
        },
        {
            src: communityIcon,
            alt: "A crowd of people, cooking",
            text: "Find new friends & like-minded people",
        },
        {
            src: eventsIcon,
            alt: "A crowd of people at a cooking event",
            text: "Participate in exclusive events",
        },
    ];
    return (
        <>
            <header className={classes.header}>
                <h1>
                    One shared passion:{" "}
                    <span className={classes.highlight}>Food</span>
                </h1>
                <p>Join our community and share your favorite recipes!</p>
            </header>
            <main className={classes.main}>
                <h2>Community Perks</h2>

                <ul className={classes.perks}>
                    {data.map((item, index) => (
                        <li key={index}>
                            <Image src={item.src} alt={item.alt} />
                            <p>{item.text}</p>
                        </li>
                    ))}
                </ul>
            </main>
        </>
    );
}
