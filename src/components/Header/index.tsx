'use client'

import styles from "@/components/Header/styles.module.scss"
import Link from "next/link"
import { useEffect, useState } from "react"

export function Header() {
    const [top, setTop] = useState(true);

    const scrollHandler =() => {
        window.scrollY > 10 ? setTop(false) : setTop(true)
    }
    useEffect(()=> {
        window.addEventListener("scroll", scrollHandler)

        return () => window.removeEventListener("scroll", scrollHandler)
    }, [top])

    return (
        <div className={`${styles.header} ${!top ? styles.fixed : styles.background}`}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.contentLogo}>
                        <Link href="/">
                            DevMotors
                        </Link>
                    </div>
                    <nav className={styles.nav}>
                        <Link href="/">
                            HOME
                        </Link>
                        <Link href="/#sobre">
                            SOBRE
                        </Link>
                        <Link href="/#servicos">
                            SERVICOS
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    )
}