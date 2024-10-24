import styles from '@/components/Home/Services/styles.module.scss'
import { HomeProps } from '@/utils/home.type'
import Image from 'next/image'

export function Services({ object }: HomeProps) {
    return (
        <>
            <h2 className={styles.servicesTitle} id='servicos'>Conheça nossos serviços</h2>
            <section className={styles.services}>
                {object.metadata.services.map(service => (
                    <article key={service.description} className={styles.service}>
                        <div className={styles.innerService}>
                            <Image
                                className={styles.imageService}
                                alt='Imagem do serviço'
                                quality={100}
                                fill={true}
                                src={service.image.url}
                                sizes='(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 60vw'
                            />
                        </div>
                        <p>{service.description}</p>
                    </article>
                ))}
            </section>
        </>
    )
}