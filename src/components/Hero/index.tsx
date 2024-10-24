import styles from "@/components/Hero/styles.module.scss"
import Image from "next/image";
import { ReactNode } from "react";

interface HeroProps {
    heading: string;
    buttonUrl: string;
    buttonTitle: string;
    bannerUrl: string;
    icon: ReactNode;
}

export function Hero({ heading, bannerUrl, buttonTitle, buttonUrl, icon }: HeroProps) {
    return (
        <main className={styles.main}>
            <div className={styles.containerHero}>
                <h1 className={styles.title}>{heading}</h1>
                <a
                    href={buttonUrl}
                    target="_blank"
                    className={styles.link}
                >
                    {icon}
                    {buttonTitle}
                </a>
            </div>
            <div className={styles.contentBanner}>
                <Image
                    className={styles.banner}
                    alt={heading}
                    src={bannerUrl}
                    priority={true}
                    quality={100}
                    fill={true}
                />
            </div>
        </main>
    )
}