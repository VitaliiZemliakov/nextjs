"use client";

import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import NavLink from "./navLinks/nav-Link";

export default function MainHeader() {

    return (
        <header
            className={`${classes.header} absolute top-0 flex w-full justify-between`}
        >
            <Link className={classes.logo} href="/">
                <Image src={logoImg} alt="A plate with food on it" priority />
                NextLevel Food
            </Link>

            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink href="/meals">Browse Meals</NavLink>
                    </li>
                    <li>
                        <NavLink href="/community">Foodies Community</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
