import styles from '@/components/Home/About/styles.module.scss'
import { HomeProps } from '@/utils/home.type'
import Image from 'next/image'

export function About({ object }: HomeProps) {
    return (
        <section className={styles.containerAbout} id='sobre'>
            <article className={styles.innerAbout}>
                <h1 className={styles.title}>Sobre</h1>
                <p>{object.metadata.about.description}</p>
            </article>
            <div className={styles.bannerAbout}>
                <Image
                    className={styles.imageAbout}
                    alt="Imagem ilustrativa sobre a empresa"
                    quality={100}
                    fill={true}
                    src={object.metadata.about.banner.url}
                    sizes='(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 60vw'
                />
            </div>
        </section>
    )
}