"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

export default function NavLink({
    href,
    children,
    className = "",
}: NavLinkProps) {
    const pathname = usePathname();

    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={
                className
                    ? `${className} ${isActive ? "active" : ""}`.trim()
                    : isActive
                      ? "active"
                      : ""
            }
        >
            {children}
        </Link>
    );
}
